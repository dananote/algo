# A＠B = (A+B)×(A-B)
import sys

input = sys.stdin.readline

def calculate (a, b):
    result = (a + b) * (a - b)
    print(result)

[A, B] = map(int, input().split(' '))

calculate(A, B)