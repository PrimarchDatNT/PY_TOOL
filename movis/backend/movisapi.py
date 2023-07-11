import socket
import requests
from flask import request
from flask import Flask
from flask import jsonify
from flask import json

app = Flask(__name__)
app.config["DEBUG"] = False

CATE_URL = 'https://api2.videoshow.mobi/getCate?name=$'
DETAIL_URL = 'https://api2.videoshow.mobi/getDetail?group_code=$'


@app.route('/')
def home():
    return "datnt"


@app.route('/ar', methods=['GET'])
def arAPI():
    f = open('camera.json', encoding="utf8")
    return str(f.read())


@app.route('/getCate', methods=['GET'])
def getcate():
    args = request.args
    response = requests.get(CATE_URL.replace('$', args['name']))
    rs = app.response_class(
        response=response.text,
        status=200,
        mimetype='application/json'
    )
    return rs


@app.route('/getDetail', methods=['GET'])
def getdetail():
    args = request.args
    response = requests.get(DETAIL_URL.replace('$', args['group_code']))
    rs = app.response_class(
        response=response.text,
        status=200,
        mimetype='application/json'
    )
    return rs


if __name__ == '__main__':
    hostname = socket.gethostname()
    local_ip = socket.gethostbyname(hostname)
    print(local_ip)
    app.run(host=local_ip, port=5000, debug=True, threaded=False)
