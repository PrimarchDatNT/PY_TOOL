import csv
import datetime
import pytz
from pytz import country_timezones as ct
import pycountry

client_id = '682866004480-0cu6njs5l0ft1o3qbahprf4jclvfveoa.apps.googleusercontent.com'
client_secret= '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'

with open('sale_data.csv', encoding="utf8", mode='r') as file:
    readdata = csv.reader(file, delimiter=',')

    count = 0

    for row in readdata:
        if count > 0:
            print(row)
        count += 1
