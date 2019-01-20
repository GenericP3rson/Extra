"""
ID: your_id_here
LANG: PYTHON2
TASK: test
"""
fin = open('blist.in', 'r')
fout = open('blist.out', 'w')
fi = (int(fin.readline()))
q = []
ra = []
for i in range(fi):
    q.append(fin.readline().split())
    q[i].append([])
# print(q)
for i in range(len(q)):
    for j in range(len(q)):
        tr = False
        # if (i != j):
        # print(q[j][0], q[j][1])
        # print((int(q[i][0]) >= int(q[j][0]) and int(q[i][0]) <= int(q[j][1])), q[i][0])
        # print((int(q[i][1]) >= int(q[j][0]) and int(q[i][1]) <= int(q[j][1])), q[i][1])
        if ((int(q[i][0]) >= int(q[j][0]) and int(q[i][0]) <= int(q[j][1])) or (int(q[i][1]) >= int(q[j][0]) and int(q[i][1]) <= int(q[j][1]))):
            tr = True
        q[i][3].append(tr)
        # print(tr)
    # print(i)
    # print(q)
print(q)

def all_true(arr):
    for i in range(len(arr)):
        if not arr[i]:
            return i
    return True

def saw(arr1, val):
    for i in arr1:
        if (i == val):
            return True
    return False




tot = 0
seen = []
for i in range(len(q)):
    x = all_true(q[i][3])
    if not (type(x) is int):
        tot = tot + int(q[i][2])
    else: 
        for j in range(len(q[i][3])):
            if q[i][3][j]:
                if not saw(seen, j):
                    if q[j][2] > q[i][3][i]:
                        ...
print(tot)

# tot = 0
# for i in q:
#     n1 = i[0]
#     n2 = i[1]
#     tr = True
#     for j in ra:
#         print(n1, j[0], n2, j[1])
#         if (n1 >= j[0] and n1 <= j[1]) or (n2 >= j[0] and n2 <= j[1]):
#             tr = False
#             if (i[2] > j[2]):
#                 tot = tot + i[2] - j[2]
#     if tr:
#         ra.append(i)
#         tot = tot + int(i[2])
# print(ra)
# print(tot)