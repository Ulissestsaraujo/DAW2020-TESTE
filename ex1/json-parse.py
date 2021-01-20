import json

with open('batismos.json', 'r', encoding='utf-8') as file:
    data = json.load(file)

i = 0
for elem in data:
    i += 1
    elem['_id'] = elem['ref'].replace("/","_")
    txt = elem['title'].split(".")
    txt2 = txt[2].split(";")
    txtpai = txt2[0].split(":")
    txtmae = txt2[1].split(":")
    elem['pai'] = txtpai[1]
    elem['mae'] = txtmae[1]


with open('batismos-clean.json', 'w', encoding='utf-8') as file:
    dict = json.dump(data, file)