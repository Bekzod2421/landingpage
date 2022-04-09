window.log = function(param){
    console.log(param);
};

$(function(){

	var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
		isApple = /iPod|iPad|iPhone/i.test(navigator.userAgent),
		$doc = $(document),
		$win = $(window),
		$html = $(document.documentElement);

	$('table').wrap('<div class="table-wrapper"></div>');

	resizeController(1260, function() {
		log("Функция будет вызвана меньше чем 1260");
	}, function() {
		log("Функция будет вызвана больше чем 1260");
	});

	/*alignElements*/
	function blocksMatchHeight(arr) {
		for (var i = 0; i< arr.length; i++) {
			$(arr[i]).matchHeight();
		}
	}
	var alignElemets = function(){
		blocksMatchHeight([
			'.test'
		]);	
	}
	alignElemets();
	/*alignElements*/

	/*orientationChange*/
	window.addEventListener("orientationchange", function() {
		setTimeout(alignElemets, 500);
		log("orientationChange");
	}, false);
	/*orientationChange*/


	// Esc button
    $doc.on('keyup', function(keyUp){
	    if (keyUp.keyCode 
	    	== 27) {

	    	$('.block').removeClass('active');
	      	$html.removeClass('overflowHidden');
	    	
	        return false;
	    };
	});
	// Esc button

	// Document click begin
	$doc.on('click', function(event){
        if ( $(event.target).closest('.wrapper, .ui-datepicker, .ui-datepicker a, .ui-corner-all').length ){}else {
        	$('.block').removeClass('active');
	      	$html.removeClass('overflowHidden');
        };
    });
    // Document click end
	$html = $(document.documentElement),
	
    $('.top-menu-button').on("click", function(event) {
        $('.top-menu-wrapper').toggleClass("opened");
        $('.top-menu-button').toggleClass("opened");
        $('.site-black-background').fadeIn();
        $html.toggleClass('oveflowHidden');
    });
    $('.menuClose').on("click", function(event) {
        $('.top-menu-wrapper').removeClass("opened");
        $('.top-menu-button').removeClass("opened");
        $('.site-black-background').fadeOut();
        $html.removeClass('oveflowHidden');
    });
    $('.site-black-background').on('click', function(){
    	$('.top-menu-wrapper').removeClass("opened");
        $('.top-menu-button').removeClass("opened");
        $('.site-black-background').fadeOut();
        $html.removeClass('oveflowHidden');
    })
});


