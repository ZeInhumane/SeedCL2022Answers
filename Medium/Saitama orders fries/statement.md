*Author: Kenneth*

<img src="https://s3.amazonaws.com/hr-assets/0/1664637541-1529f22110-image.jpg" width="500" />

Saitama is really picky about eating his fries. His general rule is that:
> The longer the french fry, the more he wants to save it for later.

However, he doesn't like fries that have an **odd number** as its length. As such, he will eat a fry with odd length earlier than a fry with even length, even if the odd fry is longer than the even. After ordering a plate of french fries, he decided to sort them left to right, the leftmost being the earliest fry he eats and the rightmost being the last fry he eats. He's not sure if he has sorted them correctly and so he needs your help to double check.

### Input
The first line contains an integer $n$, the total number of fries.<br />
The second line contains $n$ integers separated by spaces, each integer $fry[i]$ representing the length of the $i^{\text{th}}$ fry. 

### Constraints
$1 \leq fry.length \leq 100000$<br />
$1 \leq fry[i] \leq 1000$

### Output
Output `EAT` if he has sorted them correctly. Otherwise, print `NO EAT`
<hr />

#### Sample Input
```
6
1 3 2 2 4 6
```
<br />


#### Sample Output
```
EAT
```
<br>

#### Sample Output Explanation
The odd-length fries, `1 3`, are eaten before any even-length fry is eaten. The fries are also correctly sorted in increasing order, which means Saitama has sorted the fries correctly. We print `EAT`.
