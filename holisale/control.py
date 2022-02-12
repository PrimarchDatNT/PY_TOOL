import ast
import csv
import datetime

from flask import Flask


class Notify:
    def __init__(self, date_start, date_end, sale, banner, messages):
        self.date_start = date_start
        self.date_end = date_end
        self.sale = sale
        self.banner = banner
        self.messages = messages


class Message:
    def __init__(self, title, body, sale, time, banner, pin):
        self.title = title
        self.body = body
        self.sale = sale
        self.time = time
        self.banner = banner
        self.pin = pin


def formart_event_time(sale_month, sale_day):
    out = []
    currentyear = datetime.datetime.today().year

    if int(sale_month) < datetime.datetime.today().month:
        currentyear += 1

    if str(sale_day).__contains__('-'):
        duration = str(sale_day).split('-')
        date_start = duration[0] + '-' + str(sale_month) + '-' + str(currentyear)
        date_end = duration[len(duration) - 1] + '-' + str(sale_month) + '-' + str(currentyear)
        out.append({'date_start': date_start, 'date_end': date_end})
        return out

    if str(sale_day).__contains__('&'):
        duration = str(sale_day).split('&')
        for day in duration:
            event_time = day + '-' + str(sale_month) + '-' + str(currentyear)
            out.append({'date_start': event_time, 'date_end': event_time})
        return out

    if 0 < int(sale_day) < 32:
        event_time = str(sale_day) + '-' + str(sale_month) + '-' + str(currentyear)
        out.append({'date_start': event_time, 'date_end': event_time})

    return out


def process():
    location_map = {}
    data = {}

    with open('notify.csv', encoding="utf8", mode='r') as file:
        reader = csv.reader(file, delimiter=',')

        row_index = 0

        for row in reader:
            if row_index == 0:
                col_index = 0
                for col in row:
                    if str(col).__contains__('-'):
                        location = str(col).split('-')[1]
                        if location in location_map:
                            location_map[location].append(col_index)
                        else:
                            location_map[location] = []
                            location_map[location].append(col_index)
                    col_index += 1
            else:
                if row_index > 1:
                    for location in location_map.keys():
                        event_time = formart_event_time(row[0], row[1])
                        for timekey in event_time:
                            key = str(timekey)
                            if location not in data:
                                data[location] = {}

                            if key not in data[location]:
                                data[location][key] = []

                            # message = Message(row[location_map[location][0]], row[location_map[location][1]], row[2], row[4], '', False)
                            message = {'title': row[location_map[location][0]], 'body': row[location_map[location][1]],
                                       'sale': row[2], 'time': row[4], 'banner': '', 'pin': False}
                            data[location][key].append(message)
                        # print(str(message.__dict__))

            row_index += 1
        file.close()

    json_out = '{'
    for n in data.keys():

        json_out += '"' + n + '":['
        json_out += '{"notify": ['

        for k in data[n].keys():
            time = ast.literal_eval(k)
            json_out += '{'
            json_out += '"date_start":' + '"' + time['date_start'] + '",'
            json_out += '"date_end":' + '"' + time['date_end'] + '",'
            json_out += '"sale" : ' + str(data[n][k][0]['sale']).replace('%', '') + ','
            json_out += '"messages" : ['

            for message in data[n][k]:
                json_out += '{'
                json_out += '"title":' + '"' + message['title'] + '",'
                json_out += '"body":' + '"' + message['body'] + '",'
                json_out += '"time":' + str(message['time']).replace('h', '') + ','
                json_out += '"banner":' + '"' + message['banner'] + '",'
                json_out += '"pin":' + str(message['pin']).lower() + ','
                json_out += '},'
            json_out += ']},'

        json_out += '], "enable": true},'
        json_out += '],'
    json_out += "}"
    # print(json_out)
    return json_out


app = Flask(__name__)


@app.route('/')
def home():
    return 'datnt'


@app.route('/holisale_notify', methods=['GET'])
def stickersAPI():
    return str(process())


if __name__ == '__main__':
    process()
    # hostname = socket.gethostname()
    # local_ip = socket.gethostbyname(hostname)
    # app.run(host=local_ip, port=5001, debug=True, threaded=False)
