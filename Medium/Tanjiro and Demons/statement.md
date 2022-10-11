# Tanjiro the Swordsman

*Author: Matthew*

<img src="https://s3.amazonaws.com/hr-assets/0/1664704528-4110a72833-image.jpg" width="500" />

As a new swordsman, Tanjiro has not mastered sunbreathing to the point where he can slash his demons. His total concentration breathing is limited to where he is positioned. This means that he can only jump the number of spaces he is currently at. <br />

You are given an array $num$ where each element $num[i]$ contains the maximum number of spaces he can jump from index $i$.<br />
To elaborate, if he is on index $i$, then he can jump to any index between $i$ and ($i + num[i]$), inclusive of both ends. To help Tanjiro, you are to write a program to determine if he can start at index $0$ and reach the demon which is at the last index.

### Input
The first line consists of an integer $n$, the size of the array.<br />
The second line consists of $n$ integers separated by spaces, each integer $num[i]$ represents the maximum number of spaces he can jump from index $i$. These integers represent the array $num$.

### Constraints
$1 \leq num.length \leq 1000$<br />
$0 \leq num[i] \leq 1000$

### Output
Print `true` if he can reach the last index, `false` if he can't.
<hr />

#### Sample Input 0
```
5
1 1 0 1 4
```


#### Sample Output 0
```
false
```

#### Sample Output 0 Explanation

`v _ _ _ _`<br />
`1 1 0 1 4`

Tanjiro starts at index 0, which has a value of `1`. This means he can jump up to `1` spaces to the right. As he wants to reach the last index, there is no point jumping 0 spaces. So, he'll jump `1` space, landing him on index `1`.

`_ v _ _ _`<br />
`1 1 0 1 4`

At index `1`, he can still only jump at most `1` space, so he jumps to index `2`.

`_ _ v _ _`<br />
`1 1 0 1 4`

There is no way to progress further from index `2`, thus we print `false`


#### Sample Input 1
```
5
1 1 3 1 4
```

#### Sample Output 1
```
true
```

#### Sample Output 1 Explanation
`_ _ v _ _`<br />
`1 1 3 1 4`<br />
Tanjiro will be able to reach index 2, similar to the previous sample. However, now at index 2, he can jump up to `3` spaces. To reach the last index, he'll jump 2 spaces, reaching the last index (the demon). 

`_ _ _ _ v`<br />
`1 1 3 1 4`<br />
Therefore the output is `true`