import ssl

import websocket

if __name__ == '__main__':
    ws = websocket.WebSocket(sslopt={"cert_reqs": ssl.CERT_NONE, "check_hostname": False},
                             enable_multithread=True)
    wws_domain = 'wss://deriv-web-stream.crypto.com/v1/market'
    ws.connect(wws_domain)
    param = open('command_candle.json', 'r', encoding='utf-8').read()
    ws.send(param)

    while True:
        try:
            message = ws.recv()
            print("Received message: ", message)
        finally:
            pass
