// var VimeoEmbed = {};

// //Called on document ready
// VimeoEmbed.init = function(e) {
//     //Listen to the load event for all the iframes on the page
//     $('iframe').each(function(index, iframe) {
//         iframe.addEvent('onLoad', VimeoEmbed.vimeo_player_loaded);
//     });
// };

// //On document ready
// $(document).ready(VimeoEmbed.init);



jQuery(document).ready(function($){

	var w_height = $(window).height();
	var w_width  = $(window).width();



	$('#opening_video').css({height : w_height, width : (w_height * 16 / 9)});





	});

	console.log($('vimeo iframe').css('width'));



	// $('iframe').each(function(iframe, index){

	// 	if($(this).attr('src').match(/vimeo/)){

	// 	}

	// })

});