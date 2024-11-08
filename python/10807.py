import sys

input = sys.stdin.readline

## 정수의 갯수
N = int(input())

## 정수 배열
A = list(map(int, input().split(" ")))

## 찾으려하는 정수
V = int(input())

## 찾으려하는 정수 카운트
count = 0

for a in A:
    if a == V:
        count += 1


print(count)