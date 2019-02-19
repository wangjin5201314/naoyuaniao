var mySwiper = new Swiper('.swiper-container', {
direction: 'vertical', // 垂直切换选项
loop: false, // 循环模式选项

//设置自动轮播
autoplay: false,
//取消触摸
touchRatio: 1,
// 如果需要分页器
pagination: {
	el: '.swiper-pagination',
},
on:{
	slideChangeTransitionEnd:function(){
		if(this.activeIndex === 0){
			slide1Ain();
		}else{
			slide1init();
		}
		if(this.activeIndex === 1){
			slide2Ain();
		}else{
			slide2init();
		}
		if(this.activeIndex === 2){
			slide3Ain();
		}else{
			slide3init();
		}
		if(this.activeIndex === 3){
			slide4Ain();
		}else{
			slide4init();
		}
		if(this.activeIndex === 4){
			slide5Ain();
		}else{
			slide5init();
		}
		if(this.activeIndex === 5){
			slide6Ain();
		}else{
			slide6init();
		}
		if(this.activeIndex === 6){
			slide7Ain();
		}else{
			slide7init();
		}
		if(this.activeIndex === 7){
			slide8Ain();
		}else{
			slide8init();
		}
	}
}

});
$(".tu15").click(function(){
	if($(this).toggleClass("active")){
		$(".tu15").removeClass("active");
	}else{
		$(".tu15").addClass("active");
	}
})
	
	

function slide1Ain(){
	$(".one .onetu2").addClass("active").siblings(".one .onetu3").addClass("active").siblings(".one .tu4").addClass("active").siblings(".one .tu5").addClass("active").siblings(".one .tu6").addClass("active").siblings(".one .text3").addClass("active").siblings(".one .text1").addClass("active").siblings(".one .tu7").addClass("active").siblings(".one .text2").addClass("active").siblings(".one .tu11").addClass("active").siblings(".one .tu16").addClass("active").siblings(".one .tu17").addClass("active").siblings(".one .tu18").addClass("active").siblings(".one .tu8").addClass("active").siblings(".one .tu9").addClass("active").siblings(".one .tu10").addClass("active");
}
function slide1init(){
	$(".one .onetu2").removeClass("active").siblings(".one .onetu3").removeClass("active").siblings(".one .tu4").removeClass("active").siblings(".one .tu5").removeClass("active").siblings(".one .tu6").removeClass("active").siblings(".one .text3").removeClass("active").siblings(".one .text1").removeClass("active").siblings(".one .tu7").removeClass("active").siblings(".one .text2").removeClass("active").siblings(".one .tu11").removeClass("active").siblings(".one .tu16").removeClass("active").siblings(".one .tu17").removeClass("active").siblings(".one .tu18").removeClass("active").siblings(".one .tu8").removeClass("active").siblings(".one .tu9").removeClass("active").siblings(".one .tu10").removeClass("active");
}

function slide2Ain(){
	$(".two .tu2").addClass("active").siblings(".two .tu3").addClass("active").siblings(".two .tu4").addClass("active").siblings(".two .tu10").addClass("active").siblings(".two .tu11").addClass("active").siblings(".two .tu12").addClass("active").siblings(".two .tu5").addClass("active").siblings(".two .tu6").addClass("active").siblings(".two .tu7").addClass("active").siblings(".two .tu8").addClass("active").siblings(".two .text").addClass("active").siblings(".two .wenzi").addClass("active");
}
function slide2init(){
	$(".two .tu2").removeClass("active").siblings(".two .tu3").removeClass("active").siblings(".two .tu4").removeClass("active").siblings(".two .tu10").removeClass("active").siblings(".two .tu11").removeClass("active").siblings(".two .tu12").removeClass("active").siblings(".two .tu5").removeClass("active").siblings(".two .tu6").removeClass("active").siblings(".two .tu7").removeClass("active").siblings(".two .tu8").removeClass("active").siblings(".two .text").removeClass("active").siblings(".two .wenzi").removeClass("active");
}

function slide3Ain(){
	$(".three .tu2").addClass("active").siblings(".three .tu3").addClass("active");
}
function slide3init(){
	$(".three .tu2").removeClass("active").siblings(".three .tu3").removeClass("active");
}

function slide4Ain(){
	$(".four .tu2").addClass("active").siblings(".four .tu3").addClass("active");
}
function slide4init(){
	$(".four .tu2").removeClass("active").siblings(".four .tu3").removeClass("active");
}

function slide5Ain(){
	$(".five .tu2").addClass("active").siblings(".five .tu3").addClass("active");
}
function slide5init(){
	$(".five .tu2").removeClass("active").siblings(".five .tu3").removeClass("active");
}

function slide6Ain(){
	$(".six .tu2").addClass("active").siblings(".six .tu3").addClass("active");
}
function slide6init(){
	$(".six .tu2").removeClass("active").siblings(".six .tu3").removeClass("active");
}

function slide7Ain(){
	$(".seven .tu2").addClass("active").siblings(".seven .tu3").addClass("active");
}
function slide7init(){
	$(".seven .tu2").removeClass("active").siblings(".seven .tu3").removeClass("active");
}

function slide8Ain(){
	$(".eight .tu2").addClass("active").siblings(".eight .tu3").addClass("active");
}
function slide8init(){
	$(".eight .tu2").removeClass("active").siblings(".eight .tu3").removeClass("active");
}
