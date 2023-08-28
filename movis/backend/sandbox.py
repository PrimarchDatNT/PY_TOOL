import datamapper as mapper
import os.path
import json

groupcode_arg = ('202012031942596710,202101251535376626,202007101833288799,201911181234523245,201912171631384790,'
                 '201911181234523214')
result_dict = {'code': 200, 'count': 0, 'data': []}
count_result = 0
data_detail = []

for grc in groupcode_arg.split(','):
    if mapper.source_detail_dict.__contains__(grc):
        detail_file = 'resource/' + mapper.source_detail_dict[grc]
        if os.path.exists(detail_file):
            with open(detail_file, encoding="utf8", mode='r') as file:
                print('Getting detail resource')
                jsondata = json.load(file)
                count_result += jsondata['count']
                for d in jsondata['data']:
                    data_detail.append(d)
result_dict['count'] = count_result
result_dict['data'] = data_detail
json.dumps(result_dict)
print(json.dumps(result_dict))
