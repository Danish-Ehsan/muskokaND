$(function() {

	var userFeed = new Instafeed({
	        get: 'user',
	        userId: '329671234',
	        accessToken: '329671234.2a020ec.4ac8edd5990d482399ac63ab75f36210',
	        limit: 6,
	        resolution: 'standard_resolution',
	        template: '<a href="{{link}}"><img src="{{image}}"/></a>'
	    });
	    userFeed.run();

});