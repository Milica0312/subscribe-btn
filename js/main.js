
/*subscribe*/
$(document).scroll(function () {
	var y = $(this).scrollTop();
	if (y > 200) {
		$('.bottomMenu').fadeIn();
	} else {
		$('.bottomMenu').fadeOut();
	}

});
/*subscribe2*/
$(document).scroll(function () {
	var y = $(this).scrollTop();
	if (y > 200) {
		$('.bottomMenu2').fadeIn();
	} else {
		$('.bottomMenu2').fadeOut();
	}

});
