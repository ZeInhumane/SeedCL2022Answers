# Problem 7

*Author: Renne* 



Hikigaya is fond of his high school memories. He wants to keep and encode all of his precious pictures, so he devised a primitive way to encode the data. 

Given to you is a string $s$, representing the data he needs to encode. His method of encoding is to convert each character into an integer; this integer is the order of that character's appearance. For example, if the string is `cbaac`, the character `c` appears first, so we will assign `0` to `c`. Next, `b` appears second, and so we assign `1` to `b`, and lastly `2` to `a`.

```
cbaac
```

becomes

```
0 1 2 2 0
```
He also to splits the integers by spaces so it's more readable.

Unfortunately, he doesn't have a computer and is too lazy to do it by hand. Can you help him encode the data?

### Input
The first line contains a string $s$, consisting only of <strong>English alphabets and numbers.</strong>

Note: you should treat upper case and lower case alphabets <strong>differently</strong>.

### Constraints
$1 \leq s.length \leq 100,000$

### Output
Print the final encoded string.
<hr />

#### Sample Input
```
acbacb
```

#### Sample Output
```
0 1 2 0 1 2
```

#### Sample Output Explanation
	As `a` appears first, we will convert `a` to `0`.<br />Next, `c` is second, so `c` to `1`<br /> Lastly, `b` is third, so `b` to `2`.

We also need to separate the numbers by spaces, thus we get the output


```
0 1 2 0 1 2
```