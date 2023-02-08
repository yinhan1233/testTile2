function test(){
			var a=$('.visualSssf_left a')
			for(var i=0;i<a.length;i++){
				a[i].index=i;
				a[i].onclick=function(){
					for(var i=0;i<a.length;i++){
						a[i].className=''
						}
					this.className='active'
				}
			}
			var sfzcllH=$('.sfzcll_box').height()
			var sfzcllHtwo=sfzcllH-2
			$('.sfzcll_box').css('line-height',sfzcllH+'px')
			$('.sfzcll_smallBk>div').css('line-height',sfzcllHtwo+'px')
            console.log(sfzcllH)
			// //删除加载动画
			// $('#load').fadeOut(1000)
    		// setTimeout(function(){    
    		// 	$('#load').remove()
    		// }
    		// ,1100);
		// }

	//交通流量
	var myChart1 = echarts.init(document.getElementById('main1'));
    myChart1.setOption(option1);
	//交通工具流量
	var myChart2 = echarts.init(document.getElementById('main2'));
    myChart2.setOption(option2);
    //本月发生事件
	var myChart3 = echarts.init(document.getElementById('main3'));
    myChart3.setOption(option3);
    var myChart31 = echarts.init(document.getElementById('main31'));
    myChart31.setOption(option31);
    var mySwiper1 = new Swiper('.visual_swiper1', {
		autoplay: true,//可选选项，自动滑动
		speed:800,//可选选项，滑动速度
		autoplay: {
		    delay: 5000,//1秒切换一次
		  },
	})
    //收费站收费排行
	var myChart4 = echarts.init(document.getElementById('main4'));
    myChart4.setOption(option4);
    var myChart41 = echarts.init(document.getElementById('main41'));
    //收费站收费量
	var myChart9 = echarts.init(document.getElementById('main9'));
    myChart9.setOption(option9);
}