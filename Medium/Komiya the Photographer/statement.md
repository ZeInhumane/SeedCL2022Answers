# Komiya the Photographer!
*Author: Kenneth*

<img src="https://apprenticemages.files.wordpress.com/2017/10/screenshot-121.png?w=840" width="500" />

Komiya is a member of the photography club. Every year, she is tasked to take a group photo of the members in the club.

In the club, there are a total of $n$ students. When taking the photo, students are <strong>arranged into 2 rows</strong> like so:
- half of the students (that is $n / 2$ students), are to stand in the front row</li>
- the other half (that is the other $n / 2$ students), are to stand in the back row</li>
	
However, for the students in the back row to be seen in the photo, they <strong>must be taller</strong> than the student in front of them.

You are given the heights of all the students. Komiya wants to know if it is possible to arrange the students into the two rows such that everyone can be seen.

It is <strong>guaranteed</strong> that $n$ is an even integer.

<br />

### Input Format
The first line is $n$, the number of students in the club.  
The second line has $n$ space-separated integers, where each integer $height[i]$ represents the height of the $i'th$ student.

### Constraints
$1 \leq n \leq 50000$  
$1 \leq height[i] \leq 500$
<br />

### Output Format
Print <code>yes</code> if the students can be arranged such that everyone can be seen in the photo.   
Otherwise, print <code>no</code>
<br />
<hr />

#### Sample Input
```
4
6 4 5 1
```
<br />

#### Sample Output
```
yes
```
<br />

#### Sample Output Explanations
From our input, we see that we get a total of 4 students, with their heights being <code>6, 4, 5</code> and <code>1</code>.
One possible arrangement of the students is:
`4 6 <- back row`<br/>
`1 5 <- front row`<br />

We see that every student in the back row is taller than the student in front of them in the front row (because $4 > 1$ and $6 > 5$), and so everyone can be seen in the photo. Thus, because there is one arrangement that is possible, we output <code>yes</code>.