import base64
import json
import time
import pretty_errors
import requests


def get_client_information():
    # client_info = {
    #     # "hostname": socket.gethostname(),
    #     # "platform": platform.platform(),
    #     "app": "Math",
    #     "platform": "web",
    #     "version": "1.8.0",
    #     # "user_agent": user_agent.generate_user_agent()
    # }
    client_info = {
        "app": "Math",
        "platform": "web",
        "configuration": "UnKnown",
        "version": "1.8.0",
        "mkt": "zh-cn"
    },
    return json.dumps(client_info)


def get_timestamp():
    return int(time.time() * 1000)


def generate_data_uri(image_path):
    try:
        with open(image_path, 'rb') as file:
            image_data = file.read()
            base64_data = base64.b64encode(image_data).decode('utf-8')
            return f"data:image/png;base64,{base64_data}"
    except FileNotFoundError:
        print("Image file not found.")
    except Exception as e:
        print(f"An error occurred: {e}")


def bing(img_base64):
    url = "https://mathsolver.microsoft.com/cameraexp/api/v1/getlatex"
    headers = {
        "Host": "www.bing.com",
        "Accept": "application/json",
        "Accept-Encoding": "gzip",
        "Connection": "Keep-Alive",
        "Content-Type": "application/json",
        "host": "mathsolver.microsoft.com",
        "User-Agent": "okhttp/4.9.2"
    }
    data = {
        "data": img_base64.split(",")[-1],
        # "data": src,
        "inputForm": "Image",
        "clientInfo": {"app": "Math",
                       "platform": "android",
                       "configuration": "Dev",
                       "version": "1.0.268",
                       "mkt": "en-us"},
        "timestamp": get_timestamp()
    }

    response = requests.post(url, headers=headers, data=json.dumps(data))

    if response.status_code == 200 and not response.json().get('isError'):
        return {
            "success": True,
            "result": response.json().get('latex') or response.json().get('ocrText')
        }
    else:
        return {
            "result": response.json().get(
                'errorMessage') if response.status_code == 200 else f"{response.status_code} Error",
            "success": False
        }


if __name__ == '__main__':
    src = generate_data_uri("i2.png")
    result = bing(src)
    print(result)
