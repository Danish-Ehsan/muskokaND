$(function () {

	var $navList = $('#mobNav ul');
	var $navButton = $("#navButton");
	var $butLine = $('.navBtnLine');


	$navButton.on('click', function() {
		$navList.slideToggle();
		$butLine.toggleClass('open');
	});

});