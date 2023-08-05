import json

f = open('ports.json')

data = json.load(f)

port_mapping = {
    "bamboozler": ["Bamboozler"],
    "brooksytech": ["brooksytech"],
    "cebion and romadu": ["Cebion", "romadu"],
    "cebion": ["Cebion"],
    "christian_haitian": ["Christian_Haitian"],
    "jetup and romadu": ["Jetup", "romadu"],
    "jetup": ["Jetup"],
    "johnny on flame": ["Johnny on Flame"],
    "johnny on flame, overflask, and nuxx": ["Johnny on Flame", "Overflask", "Nuxx"],
    "johnnyonflame": ["Johnny on Flame"],
    "jtothebell": ["jtothebell"],
    "kloptops and cebion": ["kloptops", "Cebion"],
    "kloptops and snoopy": ["kloptops", "Snoopy"],
    "kloptops": ["kloptops"],
    "krishenriksen (kreal)": ["krishenriksen"],
    "nl255": ["nl255"],
    "orson": ["Orson"],
    "romadu": ["romadu"],
    "slayer366": ["Slayer366"],
    "tekkenfede": ["Tekkenfede"],
    "thegammasqueeze": ["TheGammaSqueeze"],
}
porters = {}

for port in data["ports"]:
    porter = port["attr"]["porter"]
    if porter.lower() in port_mapping:
        for item in port_mapping[porter.lower()]:
            if item not in porters:
                obj = {}
                obj["name"] = item
                obj["social"] = ""
                obj["support"] = ""
                obj["webpage"] = ""
                obj["image"] = ""
                porters[item] = obj
    else:
        if porter not in porters:
            obj = {}
            obj["name"] = porter
            obj["social"] = ""
            obj["support"] = ""
            obj["webpage"] = ""
            obj["image"] = ""
            porters[porter] = obj
        

print(json.dumps(porters,indent = 4))
