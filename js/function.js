const DELAY = 500;


		$(document).ready(function() {

			$(".top-menu").css("width", $(window).width() + "px");

			$(window).on("resize", function(){
				$(".top-menu").css("width", $(window).width() + "px");
			});
			$(".pro a").fancybox({
				minWidth: 900
			});

			var wow = new WOW();
			wow.init();

			$(window).on("scroll", function() {
				if ($(window).scrollTop() >= 50) {
					$(".toper").fadeIn(DELAY);
				}
				else {
					$(".toper").fadeOut(DELAY);

				}
			});
			$(".toper").on("click", function(){
				$("html, body").animate({scrollTop:0}, 900);
			});
			
	$(".top-menu a:not(a.order)").on("click", function() {
		$("html, body").stop().animate({
	scrollTop: $($(this).attr("href")).offset().top - $(".top-menu").innerHeight()
		} , DELAY );
			});

			$("#popup_close img").on("click", function() {
				var tel = $("input[type='text']").val();
				$("#parent_popup").hide(DELAY);
			});

			$(".top-menu ul li a.order").on("click", function() {
				$(document).ready(function(){
					$("#parent_popup").show(DELAY);
				return false;
			});
				
			});
			$(".btn-consult a").on("click", function() {
				$("#parent_popup").show(DELAY);
				return false;
			});
			$("input[type='text']").inputmask({"mask": "(99) 999-99-99"});

			$("form").on("submit", function() {
			var phone = $("input[type='text']").val();
				//alert("phone");
			var regex = /\(\d{2}\) \d{3}\-\d{2}\-\d{2}/;
			if (phone.search(regex) == -1) {
					alert("Укажите правильный номер телефона !");
					return false;
			}
				return true;
			});

		});
	