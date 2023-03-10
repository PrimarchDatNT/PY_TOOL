import csv
import datetime
import json
import pytz
from pytz import country_timezones as ct
import pycountry


def getSalePercent(percent):
    return int(percent.replace('%', ''))


def getConutryCode(country_name):
    countries = {}
    for country in pycountry.countries:
        countries[country.name] = country.alpha_2
    return countries.get(country_name)


def getEventDuration(sale_month, sale_day, time_zone):
    out = []
    year = datetime.datetime.today().year
    duration = str(sale_day).split('-')

    is_same_day = False

    if int(duration[0]) < 10:
        duration[0] = '0' + duration[0]

    if len(duration) == 1:
        is_same_day = True
        duration.append(duration[0])

    if int(sale_month) < 10:
        sale_month = '0' + sale_month

    if int(sale_month) < datetime.datetime.today().month:
        year += 1

    tz = pytz.timezone(time_zone)

    if is_same_day:
        st = tz.localize(datetime.datetime(year, int(sale_month), int(duration[0]), 1, 0, 0, 0, ))
        et = tz.localize(datetime.datetime(year, int(sale_month), int(duration[0]), 23, 0, 0, 0, ))
        out.append(int(round(st.timestamp() * 1000)))
        out.append(int(round(et.timestamp() * 1000)))
    else:
        st = tz.localize(datetime.datetime(year, int(sale_month), int(duration[0]), 1, 0, 0, 0, ))
        et = tz.localize(datetime.datetime(year, int(sale_month), int(duration[1]), 23, 0, 0, 0, ))
        out.append(int(round(st.timestamp() * 1000)))
        out.append(int(round(et.timestamp() * 1000)))

    out.append(duration[0] + '-' + sale_month + '-' + str(year))

    if int(duration[1]) < 10 and not duration[1].startswith('0'):
        duration[1] = '0' + duration[1]
    out.append(duration[1] + '-' + sale_month + '-' + str(year))
    return out


class Sale:
    def __init__(self, sale_percent, start_date, end_date, banner_sale, banner_home, start_date_string, end_date_string,
                 title):
        self.salePercent = sale_percent
        self.startDate = start_date
        self.endDate = end_date
        self.bannerSale = banner_sale
        self.bannerHome = banner_home
        self.start_date_string = start_date_string
        self.end_date_string = end_date_string
        self.title = title


data = {}

with open('data.csv', encoding="utf8", mode='r') as file:
    reader = csv.reader(file, delimiter=',')

    zoneinfo = {}
    count = 0
    keys = []

    for row in reader:
        if count == 0:
            title = row
            titleIndex = 0
            for col in row:
                if titleIndex == 2:
                    data['Global'] = []
                    keys.append('Global')

                if titleIndex > 3:
                    zoneinfo[col] = ct[getConutryCode(col)][0]
                    data[col] = []
                    keys.append(col)
                titleIndex += 1
        else:
            for i in range(len(row)):

                if i == 2:
                    if row[3] != '':
                        d = getEventDuration(row[0], row[1], ct['US'][0])
                        salePercent = getSalePercent(row[2])
                        data['Global'].append(
                            Sale(salePercent, d[0], d[1], '', '', d[2], d[3], str(row[3]).replace("\t", '')))

                if i > 3:
                    if row[i] != '':
                        d = getEventDuration(row[0], row[1], zoneinfo[keys[i - 3]])
                        salePercent = getSalePercent(row[2])
                        data[keys[i - 3]].append(
                            Sale(salePercent, d[0], d[1], '', '', d[2], d[3], str(row[i]).replace("\t", '')))
        count += 1

out = {}

for key in data:
    out[key] = []
    for sale in data[key]:
        json_string = json.dumps(sale.__dict__, ensure_ascii=False)
        out[key].append(json_string)

final_data = {}

for key in out:
    s = '['
    for c in out[key]:
        for value in c:
            s += value
        s += ','
    s += ']'
    final_data[key] = '"' + key + '":' + s

json_data = '{'
for key in final_data:
    json_data += final_data[key]
    json_data += ','

json_data += '}'
fout = open('data.json', 'w', encoding="utf-8")
fout.writelines(json_data)
fout.close()
