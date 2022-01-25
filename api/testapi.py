import socket
from flask import Flask

app = Flask(__name__)
app.config["DEBUG"] = False


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


if __name__ == '__main__':
    hostname = socket.gethostname()
    local_ip = socket.gethostbyname(hostname)
    print(local_ip)
    app.run(host=local_ip, port=5000, debug=True, threaded=False)
