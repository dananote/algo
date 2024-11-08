import sys

N = int(sys.stdin.readline().rstrip())

for n in range(N):
    try:
        a, b  = map(int,sys.stdin.readline().split(' '))
    except:
        break
    print(a + b)