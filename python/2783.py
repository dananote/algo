
import sys

input = sys.stdin.readline

[N, M] = map(int, input().split(' '))


mateirx_set = [[], []]

# 2개의 행열을 받으니까 전체적으로 2번 도는데, 각 행렬의 행수 만큼
for i in range(2):
    for n in range(N):
        mateirx_set[i].append(list(map(int, input().split(" "))))

A, B = mateirx_set

result = [[] for _ in range(N)]

for n in range(N):
    for m in range(M):
        result[n].append(str(A[n][m] + B[n][m]))

    print(' '.join(result[n]))




























