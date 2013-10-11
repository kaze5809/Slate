/* Author:

*//* Table of Content
==================================================
	#12  Tabs
	#36  Back to Top
	*//* Tabs
================================================== 

$('body').on('click', 'ul.tabs > li > a', function(e) {

    //Get Location of tab's content
    var contentLocation = $(this).attr('href');

    //Let go if not a hashed one
    if(contentLocation.charAt(0)=="#") {

        e.preventDefault();

        //Make Tab Active
        $(this).parent().siblings().children('a').removeClass('active');
        $(this).addClass('active');

        //Show Tab Content & add active class
        $(contentLocation).show().addClass('active').siblings().hide().removeClass('active');

    }
});*//* Anchor animations
================================================== */// Scroll to top (works on and a tag with a class of 'back-to-top')
$("a.back-to-top").click(function(e){$("html, body").animate({scrollTop:"0px"},300,"easeInOutExpo");e.preventDefault()});$("a.straight-to-top").click(function(e){$("html, body").animate({scrollTop:"0px"},0);e.preventDefault()});$(document).ready(function(){$("a.anchorLink").anchorAnimate()});jQuery.fn.anchorAnimate=function(e){e=jQuery.extend({speed:700},e);return this.each(function(){var t=this;$(t).click(function(n){n.preventDefault();var r=window.location.href,i=$(t).attr("href"),s=$(i).offset().top;$("html:not(:animated),body:not(:animated)").animate({scrollTop:s-0},e.speed,"easeInOutExpo",function(){});return!1})})};$(function(){function e(e){var t,n,r=[],i=$(window).scrollTop(),s=$(".post");s.each(function(){r.push(parseInt($(this).offset().top,10))});for(n=0;n<r.length;n++){if(e==="next"&&r[n]>i){t=s.get(n);break}if(e==="prev"&&n>0&&r[n]>=i){t=s.get(n-1);break}}t&&$.scrollTo(t,{duration:700,easing:"easeInOutExpo"});return!1}$("#next,#prev").click(function(){return e($(this).attr("id"))});$(".scrolltoanchor").click(function(){$.scrollTo($($(this).attr("href")),{duration:700});return!1})});$(".capital").change(function(){var e=$(this).val().split(" "),t="";for(var n=0;n<e.length;n++){t+=e[n].substring(0,1).toUpperCase()+e[n].substring(1).toLowerCase();n<e.length-1&&(t+=" ")}$(this).val(t)});if(!Modernizr.input.placeholder){$("[placeholder]").focus(function(){var e=$(this);if(e.val()==e.attr("placeholder")){e.val("");e.removeClass("placeholder")}}).blur(function(){var e=$(this);if(e.val()==""||e.val()==e.attr("placeholder")){e.addClass("placeholder");e.val(e.attr("placeholder"))}}).blur();$("[placeholder]").parents("form").submit(function(){$(this).find("[placeholder]").each(function(){var e=$(this);e.val()==e.attr("placeholder")&&e.val("")})})};