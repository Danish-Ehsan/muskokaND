$(function() {

	var $nav = $('#nav');
	var $window = $(window);

	setInterval(function() {
		var scrollOrg = $window.scrollTop();
		console.log('scrollOrg: ' + scrollOrg)

		setTimeout(function () {
			var scrollNew = $window.scrollTop();
			console.log('scrollNew: ' + scrollNew)
			if ((scrollNew - scrollOrg) > 100) {
			$nav.slideUp();
		} else if ((scrollNew - scrollOrg) < -100) {
			$nav.slideDown();
		}
		}, 200);
		
	},250);

});