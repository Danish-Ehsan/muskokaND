$(function() {

	var $nav = $('#nav');
	var $window = $(window);


	var navTimer;

	function desktopNav() {
		navTimer = setInterval(function() {
						var scrollOrg = $window.scrollTop();
						//console.log('scrollOrg: ' + scrollOrg)

						setTimeout(function () {
							var scrollNew = $window.scrollTop();
							//console.log('scrollNew: ' + scrollNew)
							if ((scrollNew - scrollOrg) > 100) {
							$nav.slideUp();
						} else if ((scrollNew - scrollOrg) < -100 || (scrollNew < 50 && $window.width()) >= 1100) {
							$nav.slideDown();
						}
						}, 200);
				
					}, 250);
	}


	if ($window.width() >= 1100) {
		desktopNav();
	}


	$window.resize(function() {
		if ($window.width() >= 1100) {
			clearInterval(navTimer);
			desktopNav();
		} else {
			clearInterval(navTimer);
		}
	});

});