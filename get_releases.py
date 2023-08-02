import requests
import json

assets = {}

resposne = requests.get("https://api.github.com/repos/PortsMaster/PortMaster-Releases/releases")
for item in json.loads(resposne.text):
    for asset in item["assets"]:
        if ".zip" in asset["name"] and ".md5" not in asset["name"] and "images.zip" not in asset["name"] :
            if asset["name"] not in assets:
                assets[asset["name"]] = int(asset["download_count"])
            else:
                assets[asset["name"]] += int(asset["download_count"])

print(assets)