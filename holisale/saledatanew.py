import csv
import datetime
import socket
from flask import Flask


def getsalepercent(percent):
    return int(percent.replace('%', ''))


def geteventduration(sale_month, sale_day):
    out = []
    currentyear = datetime.datetime.today().year

    if int(sale_month) < datetime.datetime.today().month:
        currentyear += 1

    if str(sale_day).__contains__('-'):
        duration = str(sale_day).split('-')
        start_date = duration[0] + '-' + str(sale_month) + '-' + str(currentyear)
        end_date = duration[len(duration) - 1] + '-' + str(sale_month) + '-' + str(currentyear)
        out.append({'start_date_string': start_date, 'end_date_string': end_date})
        return out

    if str(sale_day).__contains__('&'):
        duration = str(sale_day).split('&')
        for day in duration:
            event_time = day + '-' + str(sale_month) + '-' + str(currentyear)
            out.append({'start_date_string': event_time, 'end_date_string': event_time})
        return out

    if 0 < int(sale_day) < 32:
        event_time = str(sale_day) + '-' + str(sale_month) + '-' + str(currentyear)
        out.append({'start_date_string': event_time, 'end_date_string': event_time})

    return out


def initbanner(bannerdata):
    result = {}
    with open(bannerdata, encoding="utf8", mode='r') as file:
        reader = csv.reader(file, delimiter=',')
        row_index = 0
        for row in reader:
            if row_index > 0:
                time = geteventduration(row[0], row[1])
                for t in time:
                    timekey = str(t)
                    if timekey not in result:
                        result[timekey] = {}
                    result[timekey]['bannerSale'] = row[2]
                    result[timekey]['bannerHome'] = row[2]
                    result[timekey]['bannerPopup'] = row[3]
            row_index += 1
    file.close()
    return result


def initdata(bannerdata):
    location_map = {}
    data = {}
    bannerdata = initbanner(bannerdata)

    with open('sale_config.csv', encoding="utf8", mode='r') as file:
        reader = csv.reader(file, delimiter=',')
        row_index = 0

        for row in reader:
            if row_index == 0:
                col_index = 0
                for col in row:
                    location = str(col)
                    if col_index > 2:
                        location_map[location] = col_index
                    col_index += 1
            else:
                if row_index > 1:
                    for location in location_map.keys():
                        event_time = geteventduration(row[0], row[1])
                        for timekey in event_time:
                            key = str(timekey)
                            if location not in data:
                                data[location] = {}

                            if key not in data[location]:
                                data[location][key] = []

                            saleconfig = {'salePercent': getsalepercent(row[2]),
                                          'startDate': 0,
                                          'endDate': 0,
                                          'bannerSale': bannerdata[key]['bannerSale'],
                                          'bannerHome': bannerdata[key]['bannerHome'],
                                          'bannerPopup': bannerdata[key]['bannerPopup'],
                                          'title': row[location_map[location]],
                                          'start_date_string': timekey['start_date_string'],
                                          'end_date_string': timekey['end_date_string']}
                            data[location][key].append(saleconfig)
            row_index += 1

    return data


def proccess(bannerdata):
    data = initdata(bannerdata)
    json_out = '{'
    for k in data.keys():
        json_out += '"' + k + '":['
        configdata = data[k]
        for config in configdata.values():
            json_out += '{'
            json_out += '"salePercent" :' + str(config[0]['salePercent']) + ','
            json_out += '"startDate" :' + str(config[0]['startDate']) + ','
            json_out += '"endDate" :' + str(config[0]['endDate']) + ','
            json_out += '"bannerSale" :' + '"' + config[0]['bannerSale'] + '"' + ','
            json_out += '"bannerHome" :' + '"' + config[0]['bannerHome'] + '"' + ','
            json_out += '"bannerPopup" :' + '"' + config[0]['bannerPopup'] + '"' + ','
            json_out += '"title" :' + '"' + config[0]['title'] + '"' + ','
            json_out += '"start_date_string" :' + '"' + config[0]['start_date_string'] + '"' + ','
            json_out += '"end_date_string" :' + '"' + config[0]['end_date_string'] + '"'

            json_out += '},'
        json_out += '],'

    json_out += '}'
    return json_out


app = Flask(__name__)
app.config["DEBUG"] = False


@app.route('/')
def home():
    return 'datnt'


@app.route('/vmake', methods=['GET'])
def vmakeAPI():
    return str(proccess('vmake_banner.csv'))


@app.route('/snapic', methods=['GET'])
def snapicAPI():
    return str(proccess('snapic_banner.csv'))


@app.route('/yuface', methods=['GET'])
def yufaceAPI():
    return str(proccess('yuface_banner.csv'))


if __name__ == '__main__':
    # proccess('vmake_banner.csv')
    hostname = socket.gethostname()
    local_ip = socket.gethostbyname(hostname)
    app.run(host=local_ip, port=5002, debug=True, threaded=False)


class Sale:
    def __init__(self, salePercent, startDate, endDate, bannerSale, bannerHome, bannerPopup, title, start_date_string, end_date_string):
        self.salePercent = salePercent
        self.startDate = startDate
        self.endDate = endDate
        self.bannerSale = bannerSale
        self.bannerHome = bannerHome
        self.bannerPopup = bannerPopup
        self.title = title
        self.start_date_string = start_date_string
        self.end_date_string = end_date_string
