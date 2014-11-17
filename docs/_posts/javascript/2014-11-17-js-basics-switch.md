---
layout: blog
title: Javascript - Basics - Switch Statement
image: 
category: javascript
---


<!--!!!!!!!!!!!!!!!!! PRISMjs need class language-css-->


## Javascript Switch Statements

> Pracicle examples of basic switch statements
>   
> - [Example 1](#example-1)
>   
> - [Example 2](#example-2)

 
<!--
	*
	*
	*	Example 1
	*
	*
-->

## Example 1

* Switch statement to show day of the week

<!-- Code Snippet -->
~~~~~~~~~~~~~~~~~~~~

 switch (new.Date().getDay()){
 	case: 0:
 		day = "Sunday";
 		break;
 	case: 1:
 		day = "Monday";
 		break;
 	case: 2:
 		day = "Tuesday";
 		break;
 	case: 3:
 		day = "Wednesday";
 		break;
 	case: 4:
 		day = "Thursday";
 		break;
 	case: 5:
 		day = "Friday";
 		break;
 	case: 6:
 		day = "Saturday";
 		break;
}

~~~~~~~~~~~~~~~~~~~~ 

<!--
	*
	*
	*	Example 2
	*
	*
-->

## Example 2

* Switch statement to show day of the week

<!-- Code Snippet -->
~~~~~~~~~~~~~~~~~~~~

switch (new Date().getDay()) {
	case 1:
	case 2:
	case 3:
	default:
		text ="Boring days of the week";
		break;
	case 4:
	case 5:
		text = "Getting better";
		break;
	case 6:
		text = "Goooo weekend!"
}

~~~~~~~~~~~~~~~~~~~~

 




