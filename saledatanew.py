import csv
import json
import datetime


def getSalePercent(percent):
    return int(percent.replace('%', ''))


def getEventDuration(sale_month, sale_day):
    out = []
    year = datetime.datetime.today().year
    duration = str(sale_day).split('-')

    if int(duration[0]) < 10:
        duration[0] = '0' + duration[0]

    if len(duration) == 1:
        duration.append(duration[0])

    if int(sale_month) < 10:
        sale_month = '0' + sale_month

    if int(sale_month) < datetime.datetime.today().month:
        year += 1

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