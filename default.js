$(function(){
		$(".f1")
		.mouseover(function(){
			$(".six").css("display","none");
			$(".one").css("display","block");
		})
		.mouseout(function(){
			$(".one").css("display","none");
			$(".six").css("display","block");
		})
	});	

	$(function(){
		$(".f2")
		.mouseover(function(){
			$(".six").css("display","none");
			$(".two").css("display","block");
		})
		.mouseout(function(){
			$(".two").css("display","none");
			$(".six").css("display","block");
		})
	});

	$(function(){
		$(".f3")
		.mouseover(function(){
			$(".six").css("display","none");
			$(".three").css("display","block");
		})
		.mouseout(function(){
			$(".three").css("display","none");
			$(".six").css("display","block");
		})
	});

	$(function(){
		$(".f4")
		.mouseover(function(){
			$(".six").css("display","none");
			$(".four").css("display","block");
		})
		.mouseout(function(){
			$(".four").css("display","none");
			$(".six").css("display","block");
		})
	});

	$(function(){
		$(".f5")
		.mouseover(function(){
			$(".six").css("display","none");
			$(".five").css("display","block");
		})
		.mouseout(function(){
			$(".five").css("display","none");
			$(".six").css("display","block");
		})
	});

	$(document).ready(function(){
		$("#fullpage").fullpage(
			{
				/*sectionsColor:["green","orange","grey","red"],
				controlArrows:false,	左右滑动箭头显示
				verticalCentered:false, 竖向居中
				scrollingSpeed:2000, 
				lockAnchors:false*/ //隐藏anchor
				//支持css动画效果 默认为true
				//loopTop:true,   上部滚回下部
				//loopBottom:true, 下部滚回上部
				//loopHorizontal:true, 很想成循环滚动
				//autoScrolling:false, 默认为true 如果设置false 会带系统默认滚动条
				//scrollBar:true, 有滚动条 并且分块滚动
				//paddingTop:'200px',
				//paddingBottom:'200px',
				//keyboardScrolling: false, 能否用键盘滑动
				//touchSensitivity:10, default:5 移动端滑动系数 
				//continuousVertical:true, 垂直页面流畅滑动 
				animateAnchor:false, //载入页面如果按照anchor进入 不会出现滑动动画
				//menu:"#fullpageMenu",
				anchors:["page1","page2","page3","page4","page5","page6"],
				css:true, 
				//fixedElements:"#back", //控件固定显示
				
				recordHistory:true, //可以用前进后退来回到历史记录的anchor页面 如果autoScrolling 被设置了false 这个也会被设置成false
				navigation:true,
				navigationPosition:"right",
				navigationTooltips:["TIME TO KNOW ABOUT ME","PERSONAL INFOMATION","EDUCATION","TECHNIACAL SKILL","WORKING EXPERIENCE","PROJECT"],
				showActiveTooltip:true,
				slidesNavigation:true,
				slidesNavPosition:"bottom", 
				//scrollOverflow:true  需要jquery.slimscroll 从cdnjs引入  当某个页面内容很多 想在页面内滑动的时候
				//sectionSeletor: 默认为.section
				//slideSelector: 默认为.slide
				/*调用方法用$.fn.fullpage.xxx()
				moveSectionUp(),moveSectionDown(),moveTo(section1start,slide0start),
				silentMoveTo(section,slide)
				moveSlideLeft(),moveSlideRight(),setAutoScrolling,LockAnchors,RecordHistory(boolean)setScrollingSpeed(milliseconds),setAllowScrolling(boolean,[all,up,down,left,right]),
				destroy(all),reBuild(),
				lazy loading 延时加载 只要在图片或者视频标签中的src 换成data-src 就行
 				*/
 				/*回调函数
 				1.afterLoad(anchorlink,index) 滚到 某一section后的回调函数
 				afterLoad:function(anchorLink,index){
					console.log("afterLoad:anchoLink=" + anchorLink +";index=" +index);
				2.onLeave(index离开的页面,nextIndex滚到的目标页面,direction上滚up 还是 下滚down) 离开一个section是的回调函数
				用return false 可以取消滚动    可以用上面方法 把参数打印出来 onleave 总是出现在afterload之前
				3.afterRender() 页面结构生成后的回调函数
				4.afterResize() 浏览器窗口尺寸改变后回调函数
				5.afterSlideLoad(anchorLink,index,slideAnchor,slideIndex) 滚到一个slide时候的回调函数
				6.OnSlideLeave(anchorLink,index,slideIndex,direction,nextSlideIndex) 离开一个slide时候的回调函数*/
				/*afterLoad:function(link,index){
			if(index==1){
				move(".section1 img").set("padding-left","500px").end();
			}	
			}*/
			afterLoad:function(link,index){
		switch(index){
			case 1:
			break;
			case 2:
			move(".section2 .img1").set("display","inline").end();
			move(".section2 .img2").set("opacity","1").duration("3s").end();
			break;
			case 3:
			move(".section3 .img1").set("display","inline").end();
			move(".section3 .img1").set("width","48%").end();
			move(".section3 .img1").set("left","52%").end();
			move(".section3 .img1").set("top","51%").end();

			break;
			case 4:
			move(".section4 .img1").set("top","50%").duration("2s").end();
			move(".section4 .img1").set("left","25%").duration("2s").end();
			move(".section4 .img1").rotate(0).duration("2s").end();
			move(".section4 .img2").set("opacity","1").delay("0s").end();
			move(".section4 .img2").set("left","200%").delay("0s").duration("6s").end();
			move(".section4 .img3").set("opacity","1").delay("0.5s").end();
			move(".section4 .img3").set("left","200%").delay("0.5s").duration("5s").end();
			move(".section4 .img4").set("opacity","1").delay("0.8s").end();
			move(".section4 .img4").set("left","200%").delay("1.2s").duration("4s").end();
			break;
			case 5:
			move(".section5").set("background-image","url(image/5.3.jpg)").duration("1s").end();
			move(".section5 .img1")
				.set("left", "24.5%")
				.scale(1.2)
				.duration("3s")
				.then()
					.set("left","24%")
					.scale(0.833)
					.delay("0s")
					.duration("3s")
					.pop()
				.end();
			break;
			case 6:
			move(".section6 .img1").set("padding-left","2000px").end();
			break;
		}
	},
	
	onLeave:function(link,index){
		switch(index){
			case 1:

			break;
			case 2:
			move(".section2 .img1").set("display","none").end();
			move(".section2 .img2").set("opacity","0").end();
			break;
			case 3:
			move(".section3 .img1").set("display","none").end();
			move(".section3 .img1").set("width","20%").end();
			move(".section3 .img1").set("top","60%").end();
			move(".section3 .img1").set("left","38%").end();
			break;
			case 4:
			move(".section4 .img1").set("top","10%").end();
			move(".section4 .img1").set("left","10%").end();
			move(".section4 .img1").rotate(45).end();
			move(".section4 .img2").set("opacity","0").delay("0s").end();
			move(".section4 .img2").set("left","20%").end();
			move(".section4 .img3").set("opacity","0").delay("0s").end();
			move(".section4 .img3").set("left","30%").end();
			move(".section4 .img4").set("opacity","0").delay("0s").end();
			move(".section4 .img4").set("left","42%").end();
			break;
			case 5:
			move(".section5").set("background-image","url(image/5.jpg)").duration("1s").end();
			break;
			case 6:
			move(".section6 .img1").set("padding-left","200px").end();
			break;
		}
	},
	/*
	afterRender:function(link,index){
		switch(index){
			case 1:
			
			break;
			case 2:
			break;
			case 3:
			break;
			case 4:
			break;
		}
	}*/
			})			
	})