from datetime import datetime

now = datetime.today().strftime("%Y/%m/%d").split("/")
result = "-".join(now)

print(result)