import socket
import requests
from flask import Flask

app = Flask(__name__)
app.config["DEBUG"] = False

R_URL = 'https://muse.theartica.app/type/'


@app.route('/')
def home():
    return "datnt"


@app.route('/ar', methods=['GET'])
def arAPI():
    f = open('camera.json', encoding="utf8")
    return str(f.read())


@app.route('/home_content', methods=['GET'])
def homeAPI():
    f = open('home_content.json', encoding="utf8")
    return str(f.read())


@app.route('/doodle_pens', methods=['GET'])
def doodle_pensAPI():
    response = requests.get(R_URL + 'doodle_pens')
    return str(response.json())


@app.route('/filters', methods=['GET'])
def filtersAPI():
    response = requests.get(R_URL + 'filters')
    return str(response.json())


@app.route('/makeup_tools', methods=['GET'])
def makeup_toolsAPI():
    response = requests.get(R_URL + 'makeup_tools')
    return str(response.json())


@app.route('/model_styles', methods=['GET'])
def model_stylesAPI():
    response = requests.get(R_URL + 'model_styles')
    return str(response.json())


@app.route('/stickers', methods=['GET'])
def stickersAPI():
    response = requests.get(R_URL + 'stickers')
    return str(response.json())


if __name__ == '__main__':
    hostname = socket.gethostname()
    local_ip = socket.gethostbyname(hostname)
    print(local_ip)
    app.run(host=local_ip, port=5000, debug=True, threaded=False)
