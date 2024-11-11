import sys

input = sys.stdin.readline

unique_number = list(map(int, input().split(" ")))


def verification(num):
    result = 0
    for n in num:
        result += (n ** 2)
    print(result % 10)

verification(unique_number)