import sys

input =  sys.stdin.readline

students = []

for _ in range(28):
        students.append(int(input()))

result = []


for n in range(1, 31):
        if n not in students:
                result.append(n)

print(" ".join(map(str, result)))