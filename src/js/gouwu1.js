$(window).load(function() {

	let xqy = $(".zoomMask")
	let dqy = $(".zoomDiv")
	let xt = $(".jqzoom")
	let dt = $(".bigimg")

	xqy.css({
		height: (xt.height() / dt.height()) * dqy.height(),
		width: (xt.width() / dt.width()) * dqy.width()
	})

	$(".tb-booth").on("mouseenter", function() {
		xqy.show();
		dqy.show();

		$(document).on("mousemove", function(e) {
			
			let mX = e.pageX - xt.offset().left - xqy.width() / 2;
			let mY = e.pageY - xt.offset().top - xqy.height() / 2;
			if(mX <= 0) {
				mX = 0
			}
			if(mY <= 0) {
				mY = 0
			}
			if(mX >= xt.width() - xqy.width()) {
				mX = xt.width() - xqy.width();
			}
			if(mY >= xt.height() - xqy.height()) {
				mY = xt.height() - xqy.height();
			}
			console.log(mX)
			console.log(mY)
			let iScale = dqy.height() / xqy.height();
                    dt.css({
                        left: -mX * iScale,
                        top: -mY * iScale
                    })
                        
                    xqy.css({
                    	left:mX,
                    	top:mY
                    	}
                    )
			
		})

	}).on("mouseleave", function() {
		xqy.hide();
		dqy.hide();
		$(document).off("mousemove")
	})

})


$(function(){

	$("#tabGoodsIntro").on("click",function(){
	
		$(".default").show();
		$(".ncs-comment").show()
		$(".nc-goods-sort").show()
	})

	$("#tabGoodsRate").on("click",function(){
	
		$(".default").hide();
		$(".ncs-comment").show()
		$(".nc-goods-sort").hide()
	})

	$("#tabGuestbook").on("click",function(){
		$(".default").hide();
		$(".ncs-comment").hide()
		$(".nc-goods-sort").hide()
	})

	$("#categorymenu li").on("click",function(){
		$(this).addClass("current").siblings().removeClass("current")
	})











})






















