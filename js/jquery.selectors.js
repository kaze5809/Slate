/* Author:

*/

/* Table of Content, accessing elements in the DOM
==================================================
	#1  	COMMON SELECTORS
	#2  	TOGGLE SHOW/HIDE
	#3  	SLIDE IN/OUT
	#4  	ANIMATE
	#5  	ADD/REMOVE CLASS
	#6  	GET/SET TEXTBOX VALUE
	#7  	GET/SET HTML
	#8  	GET/SET TEXT
	#9  	GET/SET WIDTH/HEIGHT
	#10 	CHANGE CSS
	*/


/* FURTHER READING
================================================== 
http://www.tipsfromsiliconvalley.com/2013/06/17/jquery-guide-10-best-practices-with-jquery-1-7-for-front-end-developers/
http://viralpatel.net/blogs/20-top-jquery-tips-tricks-for-jquery-programmers/
http://coding.smashingmagazine.com/2012/05/31/50-jquery-function-demos-for-aspiring-web-developers/
http://www.catswhocode.com/blog/useful-jquery-code-snippets
*/



/* 1. COMMON JQUERY SELECTORS
================================================== */
 
	// get element by id
	$("#ElementIDn").whatever();

	// get element by css class
	$(".ClassName").whatever();

	// get elements where id contains a string
	$("[id*='value']").whatever();

	// get elements where id starts with a string
	$("[id^='value']").whatever();

	// get elements where id ends with a string
	$("[id$='value']").whatever();

	// get all elements of certain type (can use "p", "a", "div" - any html tag)
	$("div").whatever();
	
	
	
/* 2. JQUERY TOGGLE/SHOW/HIDE
================================================== */
 
	// toggle hide/show of an element
	$("#DivID").toggle(1000);

	// do something when animation is complete
	$("#DivID").toggle(1000, function () {
		alert("Toggle Complete");
	});


	// hide an element
	$("#DivID").hide(1000);

	// do something when animation is complete
	$("#DivID").hide(1000, function () {
		alert("Hide Complete");
	});


	// show an element
	$("#DivID").show(1000);

	// do something when animation is complete
	$("#DivID").show(1000, function () {
		alert("Show Complete");
	});
		
	
	
/* 3. JQUERY SLIDE - SLIDE AN ELEMENT IN AND OUT
================================================== */
 
	// toggle slide up and down
	$("#DivID").slideToggle(1000);

	// do something when animation complete
	$("#DivID").slideToggle(1000, function () {
		alert("Slide Toggle Complete");
	});

	// slide up
	$("#DivID").slideUp(1000);

	// do something when animation is complete
	$("#DivID").slideUp(1000, function () {
		alert("Slide Up Complete");
	});

	// slide down
	$("#DivID").slideDown(1000);

	// do something when animation is complete
	$("#DivID").slideDown(1000, function () {
		alert("Slide Down Complete");
	});
	
		
	
	
/* 4. ANIMATE (EXAMPLE USES OPACITY,
   BUT CAN USE ANY CSS PROPERTY. 
   NOTE SOME MY REQUIRE THE USE 
   OF A PLUGIN SUCH AS JQUERY COLOR 
================================================== */
 
	("#DivID").animate({ opacity: 0.25 }, 1000);

	// do something when animation complete
	$("#DivID").animate({ opacity: 0.25 }, 1000, function () {
		alert("Opacity Animation Complete");
	});

    // Edit height width
    $("#DivID").animate({
        width: 600,
        height: 160
    }, 2500);
    
    // Make it mover to the right
    $('#car1').animate({
        marginLeft: '+=550px'
    }, 2000);
		
	
	
/* 5. ADD & REMOVE CSS CLASSES
================================================== */
 
	// add css class
	$("#DivID").addClass("newclassname");

	// remove css class
	$("#DivID").removeClass("classname");

	// add & remove class together
	$("#DivID").removeClass("classname").addClass("newclassname");

	// add & remove multiple classes
	$("#DivID").removeClass("classname classname2").addClass("newclassname newclassname2");

    // toggle class
    $('#' + id).live('mouseenter', function (e) {
        $(this).toggleClass('classname');
    });
		
	
	
/* 6. GET & SET TEXTBOX VALUE
   CAN ALSO BE USED ON ANY OTHER ELEMENT THAT HAS 
   A VALUE PROPERTY
================================================== */
 
	// get the value of a textbox
	var TextboxValue = $("#TextboxID").val();

	// set the value of a textbox
	$("#TextboxID").val("New Textbox Value Here");
		
	
	
/* 7. GET & SET HTML OF ELEMENT
================================================== */
 
	// get element html
	var DivHTML = $("#DivID").html();

	// set element html
	$("#DivID").html("<p>This is the new html</p>");
		
	
	
/* 8. GET & SET TEXT OF ELEMENT
================================================== */
 
	// get text of element
	var DivText = $("#DivID").text();

	// set text of element
	$("#DivID").text("This is the new text.");
		
	
	
/* 9. GET & SET ELEMENT'S WIDTH & HEIGHT
================================================== */
 
	// get element height
	var ElementHeight = $("#DivID").height();

	// set element height
	$("#DivID").height(300);


	// get element width
	var ElementWidth = $("#DivID").width();

	// set element width
	$("#DivID").width(600);
	
	
/* 10. CHANGE AN ELEMENT'S CSS PROPERTY
================================================== */
	
	$("#DivID").css("background-color", "#000");
    $("#DivID").css("border", "solid 2px #ff0000");


/* 11. INTERVALS / TIMERS
================================================== */
	
	var elem = $('#jquery4ucounter');
    var count = 0;
    myCounter = setInterval(function () {
        count += 1;
        elem.html(count);
    }, 1000);


	