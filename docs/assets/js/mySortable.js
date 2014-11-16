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
	$('#doClearAll').on('click','#clearAll', function(e){
		e.preventDefault();
		// remove all childen of the list
		$('#theList').childen().remove();

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





