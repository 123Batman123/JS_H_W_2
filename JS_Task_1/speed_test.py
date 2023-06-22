import time

def f_num(n):
    for i in range(2, n):
        if n % i == 0:
            return False
    return True

def list_num(m):
    list_n = []
    i = 2
    while len(list_n) < m:
        if f_num(i):
            list_n.append(i)
        i += 1
    return list_n

start = time.time()
list_num(100)
end = time.time() - start

print(end)
