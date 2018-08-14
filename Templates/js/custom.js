$('input').focus(function(){
  $(this).parents('.form-group').addClass('focused');
});

$('input').blur(function(){
  var inputValue = $(this).val();
  if ( inputValue == "" ) {
    $(this).removeClass('filled');
    $(this).parents('.form-group').removeClass('focused');  
  } else {
    $(this).addClass('filled');
  }
});

$(document).ready(function(){

	$('.more').click(function(){
		$('.colapsed').css('height','auto');
		$('.more').toggleClass('hide');
		$('.less').toggleClass('hide');
		$(this).attr('data-content','more');
		// $('.colapsed').toggleClass('height');
	});

	$('.less').click(function(){

		$('.colapsed').css('height',80+'px');
		$('.more').toggleClass('hide');
		$('.less').toggleClass('hide');
	});
    $("form").submit(function(e){
    	var mob= $(".number").val();
    	var fname = $('.fname').val();
    	var lname = $('.lname').val();
    	if ($.isNumeric(fname) == true)
        {
        	alert("First Name can't be number");
        	e.preventDefault();
        }
        else if (fname.length < 4)
        {
        	alert('First Name should be greater than 3 letters');
        	e.preventDefault();
        }
        else if (lname.length < 4)
        {
        	alert('Last Name should be greater than 3 letters');
        	e.preventDefault();
        }
        else if ($.isNumeric(lname) == true)
        {
        	alert("First Name can't be number");
        	e.preventDefault();
        }

        else if(mob.length <10){
        	 alert('Please enter 10 digit number!');
        	 e.preventDefault();
        }
       else{
       	alert('Submitted');
       }
    });
});

if ($(window).width() < 900 && $(window).width()>700) {
    $('span').removeClass('copy');
}


