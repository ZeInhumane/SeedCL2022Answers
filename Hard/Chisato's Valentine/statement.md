*Author: Kenneth*

<img src="https://s3.amazonaws.com/hr-assets/0/1664712729-66a5504d95-image.jpg" width="500" />

It's Valentine's Day! Chisato loves eating chocolates and wants to share it with other people. She buys a massive bag of mixed chocolates, which contains $a$ milk chocolates and $b$ dark chocolates. She decides to divide these chocolates into several packets. They are packed under the following rules:
<ul>
	<li>
		Each packet must have <strong>at least 1 milk chocolate and 1 dark chocolate</strong>
	</li>
	<li>
		The difference between the number of milk chocolates and the number of dark chocolates in a single packet must not be more than <i>d</i>
	</li>
	<li>
		There should be no remaining chocolates in the large bag after packing.
	</li>
</ul>

NOTE: The final number of packets does not matter. As long as the rules are not broken. <br />
Chisato wonders if it is possible to pack all the chocolates she bought. Can you help her?
<br />

### Input
The first line contains three integers $a$, $b$ and $d$, separated by spaces.<br />
$a$ represents the total number of milk chocolates<br />
$b$ represents the total number of dark chocolates<br />
$d$ represents the maximum difference between milk and dark chocolates that is allowed for any packet.

### Constraints
$1 \leq a, b, d \leq 1000$<br />

### Output
Print `YES` if it is possible to divide them according to the rules, otherwise print `NO`.
<hr />

#### Sample Input
```
5 8 2
```

#### Sample Output
```
YES
```

#### Sample Output Explanation
There are many ways to pack the chocolates, one possible way is to pack them like so:<br />
<ul>
	<li>1 milk + 1 dark</li>
	<li>1 milk + 1 dark</li>
	<li>1 milk + 2 dark</li>
	<li>1 milk + 2 dark</li>
	<li>1 milk + 2 dark</li>
</ul>

Here, we make a total of 5 packets. In all the packets, the difference between the milk and dark chocolates <strong>does not exceed 2</strong>, and all 5 milk and 8 dark chocolates are used. Thus we print `YES`.