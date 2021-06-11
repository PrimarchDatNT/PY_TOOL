import csv
from datetime import datetime
import pytz


def getSalePercent(percent):
    return str(percent.replace('%', ''))


def getEventDuration(sale_month, sale_day):
    out = []
    year = datetime.today().year
    duration = str(sale_day).split('-')

    is_same_day = False

    if int(duration[0]) < 10:
        duration[0] = '0' + duration[0]

    if len(duration) == 1:
        is_same_day = True
        duration.append(duration[0])

    if int(sale_month) < 10:
        sale_month = '0' + sale_month

    if int(sale_month) < datetime.today().month:
        year += 1

    if is_same_day:
        st = datetime(year, int(sale_month), int(duration[0]), 1)
        et = datetime(year, int(sale_month), int(duration[0]), 23)
        out.append(int(round(st.timestamp() * 1000)))
        out.append(int(round(et.timestamp() * 1000)))
    else:
        st = datetime(year, int(sale_month), int(duration[0]))
        et = datetime(year, int(sale_month), int(duration[1]))
        out.append(int(round(st.timestamp() * 1000)))
        out.append(int(round(et.timestamp() * 1000)))

    out.append(duration[0] + '-' + sale_month + '-' + str(year))
    return out


timezonelist = ['Asia/Tashkent', 'Europe/London', 'America/Argentina/Salta', 'America/New_York', 'America/Mexico_City',
                'Europe/Kirov', 'Europe/Berlin', 'Asia/Vientiane', 'Europe/Madrid']

utcmoment_naive = datetime.utcnow()
utcmoment = utcmoment_naive.replace(tzinfo=pytz.utc)

a = getEventDuration('1', '6')
print(datetime.fromtimestamp(a[0] / 1000.0, pytz.timezone(timezonelist[1])))
print(datetime.fromtimestamp(a[1] / 1000.0))
print(a[2])


class Sale:
    def __init__(self, sale_percent, start_date, end_date, banner_sale, banner_home, date_str, title):
        self.sale_percent = sale_percent
        self.start_date = start_date
        self.end_date = end_date
        self.banner_sale = banner_sale
        self.banner_home = banner_home
        self.date_str = date_str
        self.title = title


data = []

with open('data.csv', encoding="utf8", mode='r') as file:
    reader = csv.reader(file, delimiter=',')

    for row in reader:
        salePercent = getSalePercent(row[2])
