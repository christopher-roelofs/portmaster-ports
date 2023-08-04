import requests
import json
import re

def name_cleaner(text):
    temp = re.sub(r'[^a-zA-Z0-9 _\-\.]+', '', text.strip().casefold())
    return re.sub(r'[ \.]+', '.', temp)

assets = {}

resposne = requests.get("https://api.github.com/repos/PortsMaster/PortMaster-Releases/releases")
for item in json.loads(resposne.text):
    for asset in item["assets"]:
        if ".zip" in name_cleaner(asset["name"]) and ".md5" not in name_cleaner(asset["name"]) and "images.zip" not in name_cleaner(asset["name"]):
            if name_cleaner(asset["name"]) not in assets:
                assets[name_cleaner(asset["name"])] = int(asset["download_count"])
            else:
                assets[name_cleaner(asset["name"])] += int(asset["download_count"])

print(json.dumps(assets))