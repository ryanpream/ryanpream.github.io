
/*

	Plugin : qPreloadImages
	Description : Preload images with a callback "complete"

	Example

	var arrayImages = new Array(
    "http://images4.alphacoders.com/185/thumbbig-185018.jpg",
    "http://images2.alphacoders.com/680/thumbbig-68032.jpg",
    "http://images.alphacoders.com/223/thumbbig-223731.jpg"
	);

	$.qPreloadImages({
		images: arrayImages,
		complete: function() {

			$('.loading-images').fadeOut(2000).remove();

			$.each( arrayImages, function(index,value){

				var img = $('<img class="dynamic">');
				img.attr('src', value);

				img.prependTo('.thumbnail').hide().fadeIn(2000);

			}); // each END

    }

	});

*/

(function( $ ) {

	"use strict";

	var methods = {

		/* init
		*=================================================================*/
		init : function( options ) {

			$.each( options.images, function(index,value){

					var img = new Image();
					img.src = value;

					img.onload = function() {

						options.counter++;

						if( options.counter >= options.total ) { options.complete.call(); }

					} // onload END

			}); // each END

		} // init END

	}; // method END

	jQuery.qPreloadImages = function(options) {

		// Default options
		var settings = $.extend( {
			'minPreload'      : -1,
			 complete         : function() {}
		}, options );

		var options = settings;

		options.total       = options.images.length;
		options.counter     = 0;

		if( options.minPreload == -1 ) { options.minPreload = options.total;	}

		methods.init( options );

	}

})( jQuery );




