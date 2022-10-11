# Kirito and Monsters
*Author: Kenneth*

<img src="https://s3.amazonaws.com/hr-assets/0/1664392434-4b86d9a229-image.JPG" width="500">

Kirito is a master swordsman and has decided to enter a dungeon full of monsters. In one slash, Kirito can deal $d$ points of damage. If a monster has $h$ points of health, one slash from Kirito will deal $d$ points of damage to the monster, reducing the monster's health down to $h - d$. A monster is killed when their health points is $\leq 0$.

You are given the health points of all the monsters in the dungeon. Kirito needs your help to find out how many slashes it will take to kill all monsters. 


<br />

### Input Format
The first line consists of an integer, $d$, the damage points Kirito can deal in one slash.
<br />
The second line is an integer $n$, the number of monsters in the dungeon.
<br />
The third line consists of $n$ integers separated by spaces, where each integer $health[i]$ represents the health points of the $i^{th}$ monster.
<br />

### Constraints
$1 \leq d \leq 50$<br />
$1 \leq n \leq 10,000$<br />
$1 \leq health[i] \leq 1,000$
<br />

### Output Format
Print one number: the number of slashes Kirito needs to kill all monsters.
<br />
<hr />

#### Sample Input
```
5
5
1 5 7 4 3
```
<br />

#### Sample Output
```
6
```
<br />

#### Sample Output Explanations
To kill the first monster, Kirito needs $1$ slash as $1 - 5 = -4$.<br />
To kill the second monster, Kirito needs $1$ slash as $5 - 5 = 0$.<br />
To kill the third monster, Kirito needs $2$ slashes as $7 - 5 = 2 - 5 = -3$.<br />
To kill the fourth monster, Kirito only needs $1$ slash as $4 - 5 = -1$.<br />
To kill the fifth monster, Kirito only needs $1$ slash as $3 - 5 = -2$.<br />

In total, to kill all monsters, Kirito will need to perform $1 + 1 + 2 + 1 + 1 = 6$ slashes.