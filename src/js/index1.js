

$(function(){
	
	$(".area dd").on("mouseenter",function(){
		$(this).find(".area_c").css("display","block")
	})
	
	$(".area dd").on("mouseleave",function(){
		$(this).find(".area_c").css("display","none")
	})
	
	
	$(".lnav dd").on("mouseenter",function(){

		
		$(this).css("background-color","#FFFDEF")
		$(this).children(".snav_c").css("display","block")
		$(this).find("b").css("color","#dd0c1d")
		$(this).children("a").css("color","#dd0c1d")
		$(this).css("color","#dd0c1d")
		$(this).find(".icon_arrow").css("background-image","none")
		
	})
	
	$(".lnav dd").on("mouseleave",function(){
		$(".snav_c").css("display","none")
		$(".lnav dd").css("background-color","#dd0c1d")
		$(".class_t").css("color","#FFFFFF")
		$(".ico").children("b").css("color","#FFFFFF")
		
	})
	
	
	$(".mnav li").on("mouseenter",function(){
		$(this).find("a").addClass("active").parent().siblings().find("a").removeClass("active")
	})
	
	$(".mnav li").on("mouseleave",function(){
		$(this).find("a").removeClass("active")
	})
	
	
	
	var imgIndex = 0;
    var timer = setInterval(autoPlay, 4000);

    function autoPlay() {
        imgIndex++;
        if (imgIndex >=2) {
            imgIndex = 0
        }
        $(".bnr_s li").eq(imgIndex).animate({
        	"opacity":1
        },1000).siblings("li").animate({
        	"opacity":0
        })
        
        $(".ban_btns a").eq(imgIndex).addClass("cur").siblings().removeClass("cur")
	}
	
	$(".banner_c a").on("click",function(){
	
		autoPlay();
	})
		
	$(".ban_btns a").on("click",function(){
		var index =$(this).index();
			$(".bnr_s li").eq(index).animate({
        	"opacity":1
        },1000).siblings("li").animate({
        	"opacity":0
        })
        
        $(".ban_btns a").eq(index).addClass("cur").siblings().removeClass("cur")
	})
	
	$(".banner_c").on("mouseenter",function(){
		$(".lbtn").show()
		$(".rbtn").show()
		
		clearInterval(timer)
	})
	
	$(".banner_c").on("mouseleave",function(){
		$(".lbtn").hide()
		$(".rbtn").hide()
		
		timer=setInterval(autoPlay, 4000)
	})
	
	
	
})




$(function(){
	$(document).scrollTop(0)
	$(".a1").on("click",function(){
		$(document).scrollTop(0)
	})
	
	$(window).on("scroll",function(){
		if($(document).scrollTop()>300){
			$(".elevator").css("display","block")
			
		
		}
		
		if($(document).scrollTop()<300||$(document).scrollTop()>2000){
		$(".elevator").css("display","none")
		}
		
		$("#li1").on("click",function(){
			$(document).scrollTop(700)
		})
		
		$("#li3").on("click",function(){
			$(document).scrollTop(0)
		})
		
		$(".elevator ul li").on("mouseenter",function(){
			$(this).css("background-color","#c81623").siblings().css("background-color","#fff")
		})
		
		$(".elevator ul li").on("mouseleave",function(){
			$(".elevator ul li").css("background-color","#fff")
		})
	})
	
	
})





















