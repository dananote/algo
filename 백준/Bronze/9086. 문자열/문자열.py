import sys

input = sys.stdin.readline

N = int(input())

for _ in range(N):
    case = list(input())
    case.pop(-1)
    print(f'{case[0]}{case[len(case) - 1]}')