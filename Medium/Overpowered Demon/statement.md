### Overpowered Demon

*Author: Aloysius*

<img src="https://s3.amazonaws.com/hr-assets/0/1664631117-271183c524-image.jpg" width="500" />

In the world of Demon Slayer, Demon King Muzan created a demon that has the ability to duplicate. The demon only has enough energy to either duplicate, or eat a human in a day. <strong>They cannot do both in one day.</strong> The duplicated demons can also duplicate and also eat humans. What is the minimum number of days Muzan will need for at least $n$ humans to be eaten in total?

<strong>Note: Muzan starts with 1 demon</strong>

### Input Format
The first line is $n$, the minimum number of humans that need to be eaten in total.

### Constraints
$1 \leq n \leq 1000$

### Output Format
Your output is the minimum number of days for at least $n$ number of humans to be eaten in total.

#### Sample Input
```
5
```

#### Sample Output
```
4
```

#### Sample Output Explanation
It takes a minimum of <strong>4 days</strong> to have 5 humans eaten. Below is one possible way:  

Muzan starts out with 1 demon.  
```
Total Demon Count - 1  
Total Humans Eaten - 0  
```
On Day <strong>1</strong>, Muzan will duplicate the demon.  
```
Total Demon Count - 2  
Total Humans Eaten - 0  
```
On Day <strong>2</strong>, Muzan will have the 2 demons eat humans.  
```
Total Demon Count - 2  
Total Humans Eaten - 2  
```
On Day <strong>3</strong>, Muzan will duplicate all the demons.  
```
Total Demon Count - 4  
Total Humans Eaten - 2  
```  
On Day <strong>4</strong>, Muzan will have 4 demons eat humans.  
```  
Total Demon Count - 4  
Total Humans Eaten - 6  
```  
  
We see it takes 4 days to eat at least 5 humans. As it is not possible to do it in a smaller number of days, we output <code>4</code>  