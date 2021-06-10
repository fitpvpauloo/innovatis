
import pymysql.cursors
import json
import pprint
import requests


def connectMy():
    return pymysql.connect(host='54.90.39.27',
                           user='innovatis',
                           password='1n9V@ti$2021',
                           db='db_innovatis',
                           charset='utf8mb4',
                           cursorclass=pymysql.cursors.DictCursor)


def logsplunk(myjson):
        # ENDPOINT DA CHAMADA
        # url = 'http://localhost:8088/services/collector/event/1.0'
        url = 'http://spaceps.ddns.net:8222/services/collector/event/1.0'
        headers = {'Content-Type': 'application/json', 'Authorization': 'Splunk 6a83d080-f7f0-4a7e-bf44-4189fc34a9a4'}
        # BODY DO POSTMAN PASSADO PARA EFETUAR O METODO POST
        payload = [{"event": f"{json.dumps(myjson)}","sourcetype": "json_no_timestamp", "source":"BancoDeDadosMySql"}]
        r = requests.post(url, json=payload, headers=headers)
        # print('Log Splunk: ', r.text)


connection = connectMy()

with connection.cursor() as cursor:
    # Read a single record
    sql = "SELECT * FROM PRODUTO"
    
    cursor.execute(sql)
    result = cursor.fetchall()
    for i in result:
        r = logsplunk(i)
        # print(r)

# print(connection)