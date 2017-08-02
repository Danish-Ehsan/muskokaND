$(function () {

	var $navList = $('#mobNav ul');
	var $navButton = $("#navButton");


	$navButton.on('click', function() {
		$navList.slideToggle();
	});

	$navList.on('click', function() {
		$navList.slideToggle();
	});


});