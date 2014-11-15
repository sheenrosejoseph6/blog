---
layout: blog
title: Local Storage Tutorial 2
image: /assets/img/localstorage-feature.png
---

 # Local Storage Tutorial

> HTML 5 technologies used:
>   
> - [Contenteditable](#contenteditable-overview)
> - [Drag and Drop](#drag-and-drop-overview)
> - [Local Storage](#local-storage-overview) 



 

## Contenteditable Overview
* makes any page area editable in the browser
* single attribute: contenteditable
	* "true"
	* "false"
	* "inherit"
* Browser support
	* [Current support - Caniuse.com ](http://caniuse.com/#search=contenteditable)
* Making content editable
	* To make content editable to any element in an HTML document you simply need to add the contentediable attribute:

<!-- Code Snippet -->
~~~~~~~~~~~~~~~~~~~~
<div id="container">
	<ul id="list" contenteditable>
		<li>Item 1</li>
		<li>Item 2</li>
	</ul>
</div>
~~~~~~~~~~~~~~~~~~~~

<!-- CodePen -->
<p data-height="204" data-theme-id="10000" data-slug-hash="RNwMeJ" data-default-tab="result" data-user="5daily" class='codepen'>See the Pen <a href='http://codepen.io/5daily/pen/RNwMeJ/'>HTML5 - contenteditable example</a> by 5daily (<a href='http://codepen.io/5daily'>@5daily</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

## Drag and Drop Overview
* HTML5 Attribute
	* One attribute called draggable.

~~~~~~~~~~~~~~~~~~~~
<div id="" class="" draggable="true"></div>
~~~~~~~~~~~~~~~~~~~~
* Javascript API
	* Seven JS Events
		* dragstart();
		* drag();
		* dragover();
		* dragenter();
		* dragleave();
		* dragenter();
		* drop();
	* Data Transfer (key related object)
		* dataTransfer
				* used to drag the data from a dragged object
			* Set: in the dragstart() event
			* Put: in the drop() event
		* [Current support - Caniuse.com ](http://caniuse.com/#search=drag%20and%20drop)

## Local Storage Overview
* Simple and brings the concept of "state" to websites without server-side coding.
	* Local Storage vs. Cookies
		* Unlike cookie, it is stored in the browser
		* 5 MB limit vs. 4kb for cookie
	* Uses simple name/value pair structure (string only)
		* Two simple commands:
			* Set Item
				* localStorage.setItem("ItemName", "ItemValue");
			* Get Item
				* localStorage.getItem("ItemName");
	* [Current support - Caniuse.com ](http://caniuse.com/#search=web%20storage)	

<!-- Code Snippet -->
HTML code:

~~~~~~~~~~~~~~~~~~~~
<div id="container">
	<ul id="list2" contenteditable>
		<li>Item 1</li>
		<li>Item 2</li>
	</ul>
	<p><a href=javascript.void(); id="saveAll"> Save All </a></p>
	<p><a href=javascript.void(); id="clearAll"> Clear All </a></p>
</div>
~~~~~~~~~~~~~~~~~~~~

<!-- Code Snippet -->
Javascript code:

~~~~~~~~~~~~~~~~~~~~
<script>
	$(document).ready(function(){
		var theList = document.getElementById('list2');
		$('#saveAll').click(function(e){
			e.preventDefault();
			// set item (todoList) and put in theList
			localStorage.setItem('todoList', theList.innerHTML);
		});
		$('#clearAll').click(function(e){
			e.preventDefault();
			// clear all the items
			localStorage.clear();
			// reload the page
			location.reload();
		});

		// Bring in local storage items when page loads
		loadToDo();

		function loadToDo(){
			// only load in entries if they exist
			if(localStorage.getItem('todoList')) {

				theList.innerHTML = localStorage.getItem('todoList');
			}
		}
	});
</script>
~~~~~~~~~~~~~~~~~~~~

 

<!-- 
	Above code in practice
	script lives in default.html
 -->
 
<div id="container">
    <ul id="list2" contenteditable >
      <li>Enjoy life :)</li>
    </ul>
  <p>
  	<a href="#" id="saveAll">Save All</a>
  	<a href="#" id="clearAll">Clear All</a></p>
</div>
    














