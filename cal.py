import dotstrings
import requests

entries = dotstrings.load('C:/Users/DatNt/Documents/Localizable.strings')

for entry in entries:
    print("Key: " + entry.key, "Value: " + entry.value)

urlapi = 'https://api.cognitive.microsofttranslator.com/translate'
api_path = '?api-version=3.0'
params = '&to='
endpoint = urlapi + api_path + params
constructed_url = endpoint + 'en'
api_key = '1d93741c8b164f8dae9409e82c90c1dc'
http_post = {'content-type': 'application/json; charset=utf-8', 'Ocp-Apim-Subscription-Key': api_key}
response = requests.post(constructed_url, headers=http_post, json=[{'text': 'Kể từ %@'}])
print(response.json())
