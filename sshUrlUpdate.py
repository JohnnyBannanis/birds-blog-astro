import json
import requests
file = open("src/assets/data/birds-full.json", encoding="utf-8")
oldData = json.load(file)
file.close()

for bird in oldData:
    uid = bird["data"]["uid"].replace(" ","-").replace("(","").replace(")","")
    print(uid)
    apiUrl = requests.get("https://aves.ninjas.cl/api/birds/"+uid)
    newData = apiUrl.json()

    mapSvg = newData["map"]["image"]
    birdImg = newData["images"]["main"]

    bird["data"]["image"]["url"] = birdImg
    bird["data"]["map"]["svg"] = mapSvg
    try:
        audioObject = newData["audio"]["file"]
        bird["data"]["audio"]["src"] = audioObject
    except:
        audioObject = newData["audio"]
        bird["data"]["audio"] = audioObject

out_file = open("src/assets/data/birds-full-ssh.json", "w", encoding="utf-8")

json.dump(oldData,out_file)
out_file.close()