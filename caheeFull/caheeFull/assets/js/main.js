$(function(){
	$('#phone').mask("+38 (099) 999 99 99");
	$(window).scroll(function(){
		if($(window).scrollTop()>100){
			$("header").addClass("fixed");
		}else{
			$("header").removeClass("fixed");
		}
	});
})