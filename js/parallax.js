$(function() {

	$window = $(window);
	$imgCont = $('.imageContainer');
	$imgBkg = $imgCont.children();


	console.log($imgBkg.eq(3).css('background-position').split(' ')[0]);
	console.log($imgCont.eq(3).children().css('background-position').split(' ')[0]);
	console.log($imgCont.eq(3).height());


	function imgObjConst(image) {
		var $image = $(image);
		this.height = $image.height();
		console.log(this, 'Obj height: ', this.height);
		this.bkgPos = $image.children().css('background-position');
		console.log('Obj bkgPos: ', this.bkgPos);

		this.xbkg = function() {
						return this.bkgPos.split(' ')[0];
					};
		console.log('Obj xbkg: ', this.xbkg());

		this.top = $image.offset().top;

		console.log('Obj top: ', this.top);
	}



	var imgObj = [];

	function createImgObjs() {

		for (i = 0; i < $imgCont.length; i++) {
			imgObj[i] = new imgObjConst($imgCont.eq(i));
		}
	}

	createImgObjs();

	console.log('imgObj1 xbkg: ', imgObj[1].xbkg());


/*
	for (i = 0; i < imgObj.length; i++) {
		parallax[i] = (imgObj[i].height * (-1)) $window.height() $window.scrollTop() imgObj[i].top;
	}
*/


	$window.on('scroll', function() {
		var parallax = [];
		var $imgObj = [];

		for (i = 0; i < imgObj.length; i++) {
			//parallax[i] = Math.floor((($window.height() + $window.scrollTop()) - (imgObj[i].top + imgObj[i].height)) / (imgObj[i].top / $window.height()) * (-1));
			parallax[i] = Math.floor( (imgObj[i].top - ($window.scrollTop() + $window.height())) / 1.5 * (-1) - imgObj[i].height);
			console.log('imgObj parallax: ', parallax[i]);
			console.log('imgObj heigh + window height: ', $window.height() / imgObj[i].height);
			console.log('window scrollTop: ', $window.scrollTop());
			console.log( (imgObj[i].top - ($window.scrollTop() + $window.height())) );
			$imgObj[i] = $(imgObj[i]);
			//console.log(imgObj[i]);
			console.log('imgObj xbkg: ', imgObj[i].xbkg());
			$imgCont.eq(i).children().css('background-position', imgObj[i].xbkg() + parallax[i] + 'px');
			console.log($imgCont.eq(i).children().css('background-position'));
		}


		//console.log('parallax1:', parallax[1]);
		//console.log($imgCont.eq(0).children().css('background-position'));
		//console.log($imgObj[1]);
	});


});