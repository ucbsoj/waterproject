var VimeoEmbed = {};

//Called on document ready
VimeoEmbed.init = function(e) {
    //Listen to the load event for all the iframes on the page
    $('iframe').each(function(index, iframe) {
        iframe.addEvent('onLoad', VimeoEmbed.vimeo_player_loaded);
    });
};

//On document ready
$(document).ready(VimeoEmbed.init);
