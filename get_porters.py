import json

f = open('ports.json')

data = json.load(f)

porters = {}

for port in data["ports"]:
    porter = port["attr"]["porter"]
    if porter not in porters:
        obj = {}
        obj["name"] = porter
        obj["social"] = ""
        obj["support"] = ""
        obj["webpage"] = ""
        obj["image"] = ""
        porters[porter] = obj

print(json.dumps(porters))
    