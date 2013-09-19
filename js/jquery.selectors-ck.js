/* Author:

*//* Table of Content, accessing elements in the DOM
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
	*//* FURTHER READING
================================================== 
http://www.tipsfromsiliconvalley.com/2013/06/17/jquery-guide-10-best-practices-with-jquery-1-7-for-front-end-developers/
http://viralpatel.net/blogs/20-top-jquery-tips-tricks-for-jquery-programmers/
http://coding.smashingmagazine.com/2012/05/31/50-jquery-function-demos-for-aspiring-web-developers/
http://www.catswhocode.com/blog/useful-jquery-code-snippets
*//* 1. COMMON JQUERY SELECTORS
================================================== */// get element by id
$("#ElementIDn").whatever();$(".ClassName").whatever();$("[id*='value']").whatever();$("[id^='value']").whatever();$("[id$='value']").whatever();$("div").whatever();$("#DivID").toggle(1e3);$("#DivID").toggle(1e3,function(){alert("Toggle Complete")});$("#DivID").hide(1e3);$("#DivID").hide(1e3,function(){alert("Hide Complete")});$("#DivID").show(1e3);$("#DivID").show(1e3,function(){alert("Show Complete")});$("#DivID").slideToggle(1e3);$("#DivID").slideToggle(1e3,function(){alert("Slide Toggle Complete")});$("#DivID").slideUp(1e3);$("#DivID").slideUp(1e3,function(){alert("Slide Up Complete")});$("#DivID").slideDown(1e3);$("#DivID").slideDown(1e3,function(){alert("Slide Down Complete")});"#DivID".animate({opacity:.25},1e3);$("#DivID").animate({opacity:.25},1e3,function(){alert("Opacity Animation Complete")});$("#DivID").animate({width:600,height:160},2500);$("#car1").animate({marginLeft:"+=550px"},2e3);$("#DivID").addClass("newclassname");$("#DivID").removeClass("classname");$("#DivID").removeClass("classname").addClass("newclassname");$("#DivID").removeClass("classname classname2").addClass("newclassname newclassname2");$("#"+id).live("mouseenter",function(e){$(this).toggleClass("classname")});var TextboxValue=$("#TextboxID").val();$("#TextboxID").val("New Textbox Value Here");var DivHTML=$("#DivID").html();$("#DivID").html("<p>This is the new html</p>");var DivText=$("#DivID").text();$("#DivID").text("This is the new text.");var ElementHeight=$("#DivID").height();$("#DivID").height(300);var ElementWidth=$("#DivID").width();$("#DivID").width(600);$("#DivID").css("background-color","#000");$("#DivID").css("border","solid 2px #ff0000");var elem=$("#jquery4ucounter"),count=0;myCounter=setInterval(function(){count+=1;elem.html(count)},1e3);