$(function () {

	$navList = $('#mobNav ul');
	var $navButton = $("#navButton");
	$butLine = $('.navBtnLine');


	$navButton.on('click', function() {
		$navList.slideToggle();
		$butLine.toggleClass('open');
	});

});