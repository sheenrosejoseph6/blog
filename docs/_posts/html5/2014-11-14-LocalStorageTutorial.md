---
layout: default-style
title: Local Storage Tutorial 2
image: http://cssmatter.com/wp-content/uploads/2013/05/html-black-logo.jpg
category: html5
---

<!--!!!!!!!!!!!!!!!!! PRISMjs need class language-css-->


## Local Storage Tutorial

> HTML 5 technologies used:
>   
> - [Contenteditable](#contenteditable-overview)
> - [Local Storage](#local-storage-overview) 
> - [Drag and Drop](#drag-and-drop-overview)
> 	- <i style="font-size:10px;">based on Advanced To-Do List with Joseph Lowery</i>
 
<!--
	*
	*
	*	Contenteditable Overview
	*
	*
-->

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


<!--
	*
	*
	*	Local Storage Overview
	*
	*
-->

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
    
 
<!--
	*
	*
	*	Drag and Drop Overview
	*
	*
-->

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

<!-- Code Snippet -->
HTML code:

~~~~~~~~~~~~~~~~~~~~
 <div id="drag-container">
 	<form name="form1" method="post" action="">
	 	<input type="text" name="toDoItem" id="toDoItem" autofocus></input>
	 	<input type="button" name="addToDo" id="addToDo" value="Add List Item"></input>
 	</form>
 	<ul id="theList" class="sortable list">
 	</ul>
 	<p id="doClearAll"><a href="#"> Clear All </a></p>
 </div>

<!-- 
 !!! Need to also add html5 sortable plugin
	this is a lighter version of the jQueryUI sortable
	<script src="/assets/js/jquery.sortable.min.js"></script>
 !!! add mySortable.js
 	** detailed notes in file
	<script src="/assets/js/mySortable.js"></script>
-->
~~~~~~~~~~~~~~~~~~~~ 

<!-- Code Snippet -->
Javascript code: mySortable.js

~~~~~~~~~~~~~~~~~~~~
<script>
$(document).ready(function(){
	// holds the code for the new list item
	var newListItem; 
	// flag to determine if we've done a list or not
	var newList = true;
	var theList = document.getElementById('theList');

	$('#addToDo').on('click', function(e){
		e.preventDefault();
		// is this the first time a new list item has been added by checking the flag
		if (newList == true){
			// get the value from the input feild
			var theValue = $("#toDoItem").val();
			// build up list item code
			// !!! we're using the input tag instead of the contenteditable due to conflict
			// in the current webkit browsers
			newListItem = '<li><span class="handle"> :: </span> <input class="listItem" value="' + theValue + '"><a class="removeListItem" style="display:none;" href="#"> X </a> </li>';
			newList = false;
		} else {
			var theValue = $("#toDoItem").val();
			// clone the last item in the list 
			// substitute it's value with what the user input
			newListItem = $('#theList li:last').clone();
			newListItem.find('input').attr('value', theValue);
		}

		// determine if showing the clearall link
		// it's hidden when there is just one list item
		var theCount = $("#theList li").length + 1;
		if(theCount > 1) {
			$('#doClearAll').css('display','block');
		}

		// add new item
		$('#theList').append(newListItem);

		// house-keeping

		// clear the value the user put in to the newListItem
		$('#toDoItem').val('');
		// reset it's focus
		$('#toDoItem').focus();
		// bring sortable library in
		$('.sortable').sortable('destroy');
		// target span to act as our handle
		$('.sortable').sortable({
			handle: '.handle'
		});

		// LOCAL STORAGE (this step is repeated)
		localStorage.setItem('todoListPlus',theList.innerHTML);
	});

	// if user clicks return
	$('input[type="text"]').on('keydown', function(e){
		// charCode is Character Code
		// Ternary Operator
		var key = e.charCode ? e.charCode : e.keyCode ? e.keyCode : 0;

		if(key == 13) {
			// stop it from it's normal focusing
			e.preventDefault();
			// put the focus on the input feild
			var inputs = $(this).closest('form').find(':input:visible');
			// set the focus. + 1 moves it out one
			inputs.eq( inputs.index(this) + 1).focus();
		}
	});

	// handle and edits that are made to the list items
	// look for a change event on the .listitem which is inside the list

	// set up event handler -- #theList is our ul tag
	$('#theList').on('change', '.listItem', function(){
		// pick up the just entered current value
		currentValue = $(this).val();
		// doing it this way to ensure that the DOM is changed
		// instead of just using the jQuery val property
		// critical for saving our list later
		$(this).attr('value', currentValue);

		// LOCAL STORAGE (this step is repeated)
		localStorage.setItem('todoListPlus',theList.innerHTML);
	});

	// create an empty function that checks to see if the list has been resorted
	// need for automatically saving our list
	// HTML5 sortable plugin makes it easy
	$('.sortable').sortable().bind('sortupdate', function(){
		// LOCAL STORAGE (this step is repeated)
		localStorage.setItem('todoListPlus',theList.innerHTML)
	});

	// add the functionality to remove list items one at a time

	// 1) show the red x when a user hovers
	$('#theList').on('mouseover','li',function(){
		var $thisA = $(this).find('a');
		$thisA.css('display','block');

	});
	// 2) Hide hover out
	$('#theList').on('mouseout','li',function(){
		var $thisA = $(this).find('a');
		$thisA.css('display','none');
		
	});
	// 3) Delete the li when the x is clicked
	$('#theList').on('click','.removeListItem', function(e){
		e.preventDefault();
		$(this).parent().remove();

		// LOCAL STORAGE (this step is repeated)
		localStorage.setItem('todoListPlus',theList.innerHTML)
	});

	// clear all link
	// #doClearAll assigned to p tag that's holding link
	$('#doClearAll').on('click','#clearAll', function(){
		e.preventDefault();
		// remove all childen of the list
		$('#thisList').childen().remove();

		// House-keeping
		newList = true;
		// reset flag to true
		$('#toDoItem').val();
		$('#doClearAll').css('display','none');
		// reset the focus to input feild
		$('#toDoItem').focus();

		// LOCAL STORAGE (this step is repeated)
		localStorage.setItem('todoListPlus',theList.innerHTML)
	});

	// on page load retrive all of the list items
	loadToDo();

	function loadToDo() {
		// if our local storage exists: get it and set it to the innerHTML of the list
		if(localStorage.getItem('todoListPlus')) {
			theList.innerHTML = localStorage.getItem('todoListPlus');
		
			// house-keeping

			// bring sortable library in
			$('.sortable').sortable('destroy');
			// target span to act as our handle
			$('.sortable').sortable({
				handle: '.handle'
			});

			// determine if showing the clearall link
			// it's hidden when there is just one list item
			var theCount = $("#theList li").length + 1;
			if(theCount > 1) {
				$('#doClearAll').css('display','block');
			}

		}
	}

});

</script>
~~~~~~~~~~~~~~~~~~~~ 

<!-- 
	Above code in practice
	script lives in default.html
 -->
 <h2>DEMO </h2>
 <div id="drag-container">
 	<form name="form1" method="post" action="">
	 	<input type="text" name="toDoItem" id="toDoItem" autofocus></input>
	 	<input type="button" name="addToDo" id="addToDo" value="Add List Item"></input>
 	</form>
 	<ul id="theList" class="sortable list">
 	</ul>
 	<p id="doClearAll"><a href="#"> Clear All </a></p>
 </div>




<!-- Pagination links -->
<div class="pagination">
{% if page.previous %}
	<a rel="prev" href="{{ page.previous.url }}" Older</a>
	{% endif %}
	{% if page.next %}
	<a rel="next" href="{{ page.next.url }}" Newer</a>
	{% endif %}
</div>





