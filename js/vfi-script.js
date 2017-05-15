// JavaScript Document
  var $active = $('#accordion .panel-collapse.in').prev().addClass('active');
	$active.find('a').append('<span class="glyphicon glyphicon-minus pull-left"></span> ');
	$('#accordion .panel-heading').not($active).find('a').prepend('<span class="glyphicon glyphicon-plus" style="margin-left:-5px"></span>');
	$('#accordion').on('show.bs.collapse', function (e)
	{
		$('#accordion .panel-heading.active').removeClass('active').find('.glyphicon').toggleClass('glyphicon-plus glyphicon-minus');
		$(e.target).prev().addClass('active').find('.glyphicon').toggleClass('glyphicon-plus glyphicon-minus');
	});
	$('#accordion').on('hide.bs.collapse', function (e)
	{
		$(e.target).prev().removeClass('active').find('.glyphicon').removeClass('glyphicon-minus').addClass('glyphicon-plus');
	});
	
	
//Expand Collapse	
	
	// JavaScript Document
  var $active = $('#accordionFAJF .panel-collapse.in').prev().addClass('active');
	$active.find('a').append('<span class="glyphicon glyphicon-minus pull-left"></span> ');
	$('#accordionFAJF .panel-heading').not($active).find('a').prepend('<span class="glyphicon glyphicon-plus" style="margin-left:-5px"></span>');
	$('#accordionFAJF').on('show.bs.collapse', function (e)
	{
		$('#accordionFAJF .panel-heading.active').removeClass('active').find('.glyphicon').toggleClass('glyphicon-plus glyphicon-minus');
		$(e.target).prev().addClass('active').find('.glyphicon').toggleClass('glyphicon-plus glyphicon-minus');
	});
	$('#accordionFAJF').on('hide.bs.collapse', function (e)
	{
		$(e.target).prev().removeClass('active').find('.glyphicon').removeClass('glyphicon-minus').addClass('glyphicon-plus');
	});
	
	
	
	
		// Order History - Search accordion
  var $active = $('#accordionSearch .panel-collapse.in').prev().addClass('active');
	$active.find('a').append('<span class="glyphicon glyphicon-minus pull-left"></span> ');
	$('#accordionSearch .panel-heading').not($active).find('a').prepend('<span class="glyphicon glyphicon-plus" style="margin-left:-5px"></span>');
	$('#accordionSearch').on('show.bs.collapse', function (e)
	{
		$('#accordionSearch .panel-heading.active').removeClass('active').find('.glyphicon').toggleClass('glyphicon-plus glyphicon-minus');
		$(e.target).prev().addClass('active').find('.glyphicon').toggleClass('glyphicon-plus glyphicon-minus');
	});
	$('#accordionSearch').on('hide.bs.collapse', function (e)
	{
		$(e.target).prev().removeClass('active').find('.glyphicon').removeClass('glyphicon-minus').addClass('glyphicon-plus');
	});
	
	
			// Order History - Order1 accordion
  var $active = $('#accordionOdr1 .panel-collapse.in').prev().addClass('active');
	$active.find('a').append('<span class="glyphicon glyphicon-minus pull-left"></span> ');
	$('#accordionOdr1 .panel-heading').not($active).find('a').prepend('<span class="glyphicon glyphicon-plus" style="margin-left:-5px"></span>');
	$('#accordionOdr1').on('show.bs.collapse', function (e)
	{
		$('#accordionOdr1 .panel-heading.active').removeClass('active').find('.glyphicon').toggleClass('glyphicon-plus glyphicon-minus');
		$(e.target).prev().addClass('active').find('.glyphicon').toggleClass('glyphicon-plus glyphicon-minus');
	});
	$('#accordionOdr1').on('hide.bs.collapse', function (e)
	{
		$(e.target).prev().removeClass('active').find('.glyphicon').removeClass('glyphicon-minus').addClass('glyphicon-plus');
	});
	
	
				// Order History - Order2 accordion
  var $active = $('#accordionOdr2 .panel-collapse.in').prev().addClass('active');
	$active.find('a').append('<span class="glyphicon glyphicon-minus pull-left"></span> ');
	$('#accordionOdr2 .panel-heading').not($active).find('a').prepend('<span class="glyphicon glyphicon-plus" style="margin-left:-5px"></span>');
	$('#accordionOdr2').on('show.bs.collapse', function (e)
	{
		$('#accordionOdr2 .panel-heading.active').removeClass('active').find('.glyphicon').toggleClass('glyphicon-plus glyphicon-minus');
		$(e.target).prev().addClass('active').find('.glyphicon').toggleClass('glyphicon-plus glyphicon-minus');
	});
	$('#accordionOdr2').on('hide.bs.collapse', function (e)
	{
		$(e.target).prev().removeClass('active').find('.glyphicon').removeClass('glyphicon-minus').addClass('glyphicon-plus');
	});
	
	
	
	// Order History - Order3 accordion
  var $active = $('#accordionOdr3 .panel-collapse.in').prev().addClass('active');
	$active.find('a').append('<span class="glyphicon glyphicon-minus pull-left"></span> ');
	$('#accordionOdr3 .panel-heading').not($active).find('a').prepend('<span class="glyphicon glyphicon-plus" style="margin-left:-5px"></span>');
	$('#accordionOdr3').on('show.bs.collapse', function (e)
	{
		$('#accordionOdr3 .panel-heading.active').removeClass('active').find('.glyphicon').toggleClass('glyphicon-plus glyphicon-minus');
		$(e.target).prev().addClass('active').find('.glyphicon').toggleClass('glyphicon-plus glyphicon-minus');
	});
	$('#accordionOdr3').on('hide.bs.collapse', function (e)
	{
		$(e.target).prev().removeClass('active').find('.glyphicon').removeClass('glyphicon-minus').addClass('glyphicon-plus');
	});
	
	
	// Order History - Order4 accordion
  var $active = $('#accordionOdr4 .panel-collapse.in').prev().addClass('active');
	$active.find('a').append('<span class="glyphicon glyphicon-minus pull-left"></span> ');
	$('#accordionOdr4 .panel-heading').not($active).find('a').prepend('<span class="glyphicon glyphicon-plus" style="margin-left:-5px"></span>');
	$('#accordionOdr4').on('show.bs.collapse', function (e)
	{
		$('#accordionOdr4 .panel-heading.active').removeClass('active').find('.glyphicon').toggleClass('glyphicon-plus glyphicon-minus');
		$(e.target).prev().addClass('active').find('.glyphicon').toggleClass('glyphicon-plus glyphicon-minus');
	});
	$('#accordionOdr4').on('hide.bs.collapse', function (e)
	{
		$(e.target).prev().removeClass('active').find('.glyphicon').removeClass('glyphicon-minus').addClass('glyphicon-plus');
	});
	
	
	
	// Order details- Item Details accordion
  var $active = $('#accordionIDetails .panel-collapse.in').prev().addClass('active');
	$active.find('a').append('<span class="glyphicon glyphicon-minus pull-left"></span> ');
	$('#accordionIDetails .panel-heading').not($active).find('a').prepend('<span class="glyphicon glyphicon-plus" style="margin-left:-5px"></span>');
	$('#accordionIDetails').on('show.bs.collapse', function (e)
	{
		$('#accordionIDetails .panel-heading.active').removeClass('active').find('.glyphicon').toggleClass('glyphicon-plus glyphicon-minus');
		$(e.target).prev().addClass('active').find('.glyphicon').toggleClass('glyphicon-plus glyphicon-minus');
	});
	$('#accordionIDetails').on('hide.bs.collapse', function (e)
	{
		$(e.target).prev().removeClass('active').find('.glyphicon').removeClass('glyphicon-minus').addClass('glyphicon-plus');
	});
	
	
	// Order details- Order Information accordion
  var $active = $('#accordionOI .panel-collapse.in').prev().addClass('active');
	$active.find('a').append('<span class="glyphicon glyphicon-minus pull-left"></span> ');
	$('#accordionOI .panel-heading').not($active).find('a').prepend('<span class="glyphicon glyphicon-plus" style="margin-left:-5px"></span>');
	$('#accordionOI').on('show.bs.collapse', function (e)
	{
		$('#accordionOI .panel-heading.active').removeClass('active').find('.glyphicon').toggleClass('glyphicon-plus glyphicon-minus');
		$(e.target).prev().addClass('active').find('.glyphicon').toggleClass('glyphicon-plus glyphicon-minus');
	});
	$('#accordionOI').on('hide.bs.collapse', function (e)
	{
		$(e.target).prev().removeClass('active').find('.glyphicon').removeClass('glyphicon-minus').addClass('glyphicon-plus');
	});
	
	
	// Order details- Tracking Information accordion
  var $active = $('#accordionTI .panel-collapse.in').prev().addClass('active');
	$active.find('a').append('<span class="glyphicon glyphicon-minus pull-left"></span> ');
	$('#accordionTI .panel-heading').not($active).find('a').prepend('<span class="glyphicon glyphicon-plus" style="margin-left:-5px"></span>');
	$('#accordionTI').on('show.bs.collapse', function (e)
	{
		$('#accordionTI .panel-heading.active').removeClass('active').find('.glyphicon').toggleClass('glyphicon-plus glyphicon-minus');
		$(e.target).prev().addClass('active').find('.glyphicon').toggleClass('glyphicon-plus glyphicon-minus');
	});
	$('#accordionTI').on('hide.bs.collapse', function (e)
	{
		$(e.target).prev().removeClass('active').find('.glyphicon').removeClass('glyphicon-minus').addClass('glyphicon-plus');
	});
	
	// Order details- Shipping Address accordion
  var $active = $('#accordionSA .panel-collapse.in').prev().addClass('active');
	$active.find('a').append('<span class="glyphicon glyphicon-minus pull-left"></span> ');
	$('#accordionSA .panel-heading').not($active).find('a').prepend('<span class="glyphicon glyphicon-plus" style="margin-left:-5px"></span>');
	$('#accordionSA').on('show.bs.collapse', function (e)
	{
		$('#accordionSA .panel-heading.active').removeClass('active').find('.glyphicon').toggleClass('glyphicon-plus glyphicon-minus');
		$(e.target).prev().addClass('active').find('.glyphicon').toggleClass('glyphicon-plus glyphicon-minus');
	});
	$('#accordionSA').on('hide.bs.collapse', function (e)
	{
		$(e.target).prev().removeClass('active').find('.glyphicon').removeClass('glyphicon-minus').addClass('glyphicon-plus');
	});
	
	
	
		
// Toggle Change Email ID and Change Password and Manage addressbook
	$(".change-password").hide();
	$(".Address-book").hide();	
	$("#change-password").on('click', function(){
		$(".change-email-Id").hide().fadeOut("medium");
		$(".change-password").show();	
			$(".Address-book").hide().fadeOut("medium");
	});
	$("#change-email-Id").on('click', function(){
        $(".change-password").hide().fadeOut("medium");
		$(".change-email-Id").show();	
		$(".Address-book").hide().fadeOut("medium");		
	});
		$("#Address-book").on('click', function(){
        $(".change-password").hide().fadeOut("medium");
		  $(".change-email-Id").hide().fadeOut("medium");
		$(".Address-book").show();			
	});
	
	
	
	
	//Product Detail  Drop down switch
	
	$('#colors').bind('change',function(){
		var colorArray=['first','second','third'];
		var value=$('#colors option:selected').attr('value');
		$('.lg-image-holder').html($('<img>',{id:'theImg',src:'images/shirts/WorkShirts-lg-'+value+'.jpg',class:'img-responsive',alt:'Uniform Shirts',title:'Uniform Shirts-'+value}));
		 $('.thumbimage img').each(function(){
			$(this).parent().parent().css({"border-color": "#ccc", "border-width":"1px", "border-style":"solid"});
		 });
		 $('.'+colorArray[value-1]+"-thumb").parent().parent().css({"border-color": "#6d6b6b", "border-width":"1px", "border-style":"solid"});
	});
	
	
	
	
	// product Details image switch script 
	$('.lg-image-holder').html($('<img>',{id:'theImg',src:'images/shirts/WorkShirts-lg-3.jpg',class:'img-responsive',alt:'Uniform Shirts',title:'Uniform Shirts'}));
	$("img.third-thumb").parent().parent().css({"border-color": "#6d6b6b", "border-width":"1px", "border-style":"solid"});
     $(".first-thumb").click(function() {
			$('.lg-image-holder').html($('<img>',{id:'theImg',src:'images/shirts/WorkShirts-lg-1.jpg',class:'img-responsive',alt:'Uniform Shirts',title:'Uniform Shirts-1'}));
			//$("img.first-thumb").parent().parent().css({"border-color": "#ccc", "border-width":"4px", "border-style":"solid"});
			//console.log($(this));
			$(this).parent().parent().css({"border-color": "#6d6b6b", "border-width":"1px", "border-style":"solid"});
			$("img.second-thumb").parent().parent().css({"border-color": "#ccc", "border-width":"1px", "border-style":"solid"});
			$("img.third-thumb").parent().parent().css({"border-color": "#ccc", "border-width":"1px", "border-style":"solid"});
			$('#colors option').eq(2).prop('selected', true);
		});
		 $(".second-thumb").click(function() {
			$('.lg-image-holder').html($('<img>',{id:'theImg',src:'images/shirts/WorkShirts-lg-2.jpg',class:'img-responsive',alt:'Uniform Shirts-2',title:'Uniform Shirts-2'}));
			$(this).parent().parent().css({"border-color": "#6d6b6b", "border-width":"1px", "border-style":"solid"});
			$("img.first-thumb").parent().parent().css({"border-color": "#ccc", "border-width":"1px", "border-style":"solid"});
			$("img.third-thumb").parent().parent().css({"border-color": "#ccc", "border-width":"1px", "border-style":"solid"});
			$('#colors option').eq(1).prop('selected', true);
		});
		
		 $(".third-thumb").click(function() {
			$('.lg-image-holder').html($('<img>',{id:'theImg',src:'images/shirts/WorkShirts-lg-3.jpg',class:'img-responsive',alt:'Uniform Shirts-3',title:'Uniform Shirts-3'}));
			$(this).parent().parent().css({"border-color": "#6d6b6b", "border-width":"1px", "border-style":"solid"});
			$("img.first-thumb").parent().parent().css({"border-color": "#ccc", "border-width":"1px", "border-style":"solid"});
			$("img.second-thumb").parent().parent().css({"border-color": "#ccc", "border-width":"1px", "border-style":"solid"});
			$('#colors option').eq(0).prop('selected', true);
		});

	// button action 
	$("#login").on('click',function(){
		window.location="program.html";
	});
	
	// button action 
	$("#cancel").on('click',function(){
		window.location="login.html";
	});
	
	// button action 
	$("#continue").on('click',function(){
		window.location="welcome.html";
	});
	 // button action 
	$("#su").on('click',function(){
		window.location="shop-uniforms.html";
	});
	$("#sr").on('click',function(){
											
		window.location="search-results.html";
	});
	 
// Print Script  
		
	 function printDiv(divID) {
            //Get the HTML of div
            var divElements = document.getElementById('modal-content').innerHTML;
            //Get the HTML of whole page/*/**/*/
            var oldPage = document.body.innerHTML;

            //Reset the page's HTML with div's HTML only
            document.body.innerHTML = 
              "<html><head><title></title></head><body>" + 
              divElements + "</body>";

            //Print Page
            window.print();

            //Restore orignal HTML
            document.body.innerHTML = oldPage;
			      
        }
		function cencelPrint(){	
		// Hide the model window		
			 $('#ConfirmationDetails').css('display','none');
			  $('body').css('padding-right','0px');
 
		// Remove the model window bootstrap class	 
			 $('.modal-open').removeClass();
		}
		

	$(".qty").keydown(function(event) {
		
		// Allow only backspace, tab, delete ,enter ,shift and arrow keys
		if ( event.keyCode == 46 || event.keyCode == 8||event.keyCode == 9||event.keyCode == 38||event.keyCode == 39||event.keyCode == 40||event.keyCode == 37|| event.keyCode == 16|| event.keyCode == 13) {
			// let it happen, don't do anything
		}
		else {
			// Ensure that it is a number and stop the keypress
			if (event.keyCode < 48 || event.keyCode > 57 ) {
				event.preventDefault();	
			}	
		}
	});
	


/* Function for Quantity Validation */
	
	  function maxLengthCheck(object) {
    if (object.value.length > object.maxLength)
      object.value = object.value.slice(0, object.maxLength)
  }
    
  function isNumeric (evt) {
    var theEvent = evt || window.event;
    var key = theEvent.keyCode || theEvent.which;
    key = String.fromCharCode (key);
    var regex = /[0-9]|\./;
    if ( !regex.test(key) ) {
      theEvent.returnValue = false;
      if(theEvent.preventDefault) theEvent.preventDefault();
    }
  }
  
  
/* Function for Quantity Validation */  


/*$(".ordernumber").keypress(function(e){
                  var key = e.keyCode ? e.keyCode : e.which;
    if ( isNaN( String.fromCharCode(key) ) ) return false;
                })*/
/* function for stoping click event on header info area in Allotment*/    
 $(".list-inline").click(function(e){
                  //alert("area clicked");
                   e.stopPropagation();
});

	$(".ordernumber,.zipcode").keydown(function(event) {
		
		// Allow only backspace, tab, delete ,enter ,shift and arrow keys
		if ( event.keyCode == 46 || event.keyCode == 8||event.keyCode == 9||event.keyCode == 38||event.keyCode == 39||event.keyCode == 40||event.keyCode == 37|| event.keyCode == 16|| event.keyCode == 13) {
			// let it happen, don't do anything
		}
		else {
			// Ensure that it is a number and stop the keypress
			if (event.keyCode < 48 || event.keyCode > 57 ) {
				event.preventDefault();	
			}	
		}
	});
	
	

/*Date Picker*/

	$("#sandbox-container1, #sandbox-container2").click(function(event){                
                   $('#headingZero').find('.glyphicon').removeClass('glyphicon-plus').addClass('glyphicon-minus');
                
                });



	
	
/*Calendar status*/
	
	$(document).ready(function(){
    $('#date1').attr('readonly', true);
	$('#date2').attr('readonly', true);
	
	$('#date1').css("cursor", "default");
	$('#date2').css("cursor", "default");
   
});

/*script for header and footer*/
function header() {
    document.write("<header class=\"header\"><div class=\"container-fluid content\">  <div class=\"col-xs-12 clear-padd\"><a href=\"login.html\"><img src=\"images/VFIlogo.png\" alt=\"VF Imagewear, Inc.\" title=\"VF Imagewear, Inc.\"/></a></div></div></header>");
}

function footer() {
    document.write("<div class=\"content footer-first\"><div class=\"row\"><div class=\"col-xs-12 col-sm-12 col-md-12\"> <p><h4>Customer Care</h4>      <div class=\"footerTxtHeight nfvariant footerphno iphonePhno\"><a href=\"tel:+18005555555\"> 1-800-555-5555 </a><br/><a href=\"mailto:customercare@vfi.com\">customercare@vfi.com</a></div></p></div></div></div><div class=\"content footer-second\"><div class=\"row\"><div class=\"col-md-12 footerSetwidth\"><p> <span class=\"col-xs-12 col-sm-4 col-md-4 clear-padd copyrightTxt\">© Copyright 2016 - VF Imagewear</span> <span class=\"col-xs-12 col-sm-4 col-md-4 pull-right text-right footer-link\"><a href=\"#\">Contact Us </a>| <a href=\"#\">VF Corporation</a></span></p></div></div></div>");
	}
	function header_sec() {
    document.write("  <div class=\"container-fluid content\"><div class=\"col-xs-2 col-sm-4 col-md-4 clear-padd hidden-lg vfi-toggle\"><div class=\"tab-cart\"><i class=\"step fi-shopping-cart\"></i><a href=\"cart.html\"><span class=\"chart-count\">2</span></a></div><div class=\"navbar-header\"><button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#navbar\" aria-expanded=\"false\" aria-controls=\"navbar\"><span class=\"sr-only\">Toggle navigation</span><span class=\"icon-bar\"></span><span class=\"icon-bar\"></span><span class=\"icon-bar\"></span></button></div></div><div class=\"col-xs-12 col-sm-12 col-md-12 clear-padd pull-right vfi-top-nav\"><div id=\"navbar\" class=\"navbar-collapse collapse clear-padd pull-right col-xs-12\"><ul class=\"nav navbar-nav col-xs-12 fvariant\"><li><a href=\"login.html\">home</a></li><li><a href=\"#\">shop uniforms</a></li><li><a href=\"#\">orders</a></li><li><a href=\"#\">news</a></li><li><a href=\"#\">contact us</a></li><li><a href=\"#\">support</a></li><li><a href=\"myaccount.html\"><strong>account</strong></a></li><li><a href=\"login.html\">logout</a></li><li><a href=\"cart.html\" class=\"hidden-xs\"><i class=\"step fi-shopping-cart\"></i><span class=\"chart-count\">2</span></a></li></ul></div></div></div>");
	}
	function footer_sec() {
    document.write("<div class=\"container-fluid content footer-first\"><div class=\"row\"><div class=\"col-xs-12 col-sm-6 col-md-6\"><p><h4><span class=\"fvariant\">customer care</span></h4><div class=\"footerTxtHeight nfvariant footerphno iphonePhno\"><a href=\"tel:+18005555555\"> 1-800-555-5555 </a><br/><a href=\"mailto:customercare@vfi.com\">customercare@vfi.com</a></div></p></div><div class=\"col-xs-12 col-sm-4 col-md-3 pull-right ftext\"><p><h4><span class=\"fvariant\">support</span></h4><div class=\"footerTxtHeight nfvariant slink\"> <a href=\"#\">How to wear your uniform</a><br><a href=\"#\">About safety ratings</a><br><a href=\"#\">Uniform care instructions</a><br><a href=\"#\">Sizing guidance</a><br></div></p></div></div></div><div class=\"content footer-second\"><div class=\"row\"><div class=\"col-md-12 footerSetwidth\"><p> <span class=\"col-xs-12 col-sm-4 col-md-4 clear-padd copyrightTxt\">© Copyright 2016 - VF Imagewear</span> <span class=\"col-xs-12 col-sm-4 col-md-4 pull-right text-right footer-link\"><a href=\"#\">Contact Us </a>| <a href=\"#\">VF Corporation</a></span> </p></div></div></div>");
	}
/*end*/

	/*pagetop*/
	$(function(){
 
	$(document).on( 'scroll', function(){
 
		if ($(window).scrollTop() > 50) {
			$('.scroll-top-wrapper').addClass('show');
		} else {
			$('.scroll-top-wrapper').removeClass('show');
		}
	});
 
	$('.scroll-top-wrapper').on('click', scrollToTop);
});
 
function scrollToTop() {
	verticalOffset = typeof(verticalOffset) != 'undefined' ? verticalOffset : 0;
	element = $('body');
	offset = element.offset();
	offsetTop = offset.top;
	$('html, body').animate({scrollTop: offsetTop}, 500, 'linear');
}
	
	/*end*/
	  