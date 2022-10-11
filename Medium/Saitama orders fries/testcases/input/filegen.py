import os
import random

os.chdir(
	(os.path.abspath(os.path.dirname(__file__)))
)

file = open('./input14.txt', 'w')

evenlist = []
oddlist = []
mylist = []

while (len(evenlist) + len(oddlist) < 100000):
	num = random.randint(1, 1000)
	if (num % 2 == 0):
		evenlist.append(num)
	else:
		oddlist.append(num)

evenlist = list(map(lambda x: str(x), evenlist))
oddlist = list(map(lambda x: str(x), oddlist))

temp = (" ".join(oddlist + evenlist))

mystr = f"{len(evenlist) + len(oddlist)}\n{temp}"

file.write(mystr)