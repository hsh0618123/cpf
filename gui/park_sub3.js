$(".section .center .right .c_box .tab_cont:not(:first)").hide();

	$(".section .center .right .c_box .tab_tit li").click(function(){
		$(".tri").remove();//화살표 지우는 것
		cc=$(this).css("border-bottom-color");
			//console.log(cc);
		$(this).prepend("<div class='tri'></div>")
		
		nn = $(this).attr("data-li");
		//console.log(nn);
		$(".section .center .right .tab_cont").hide();
		$("#cont"+nn).show();
		$(".section .center .right .c_box .tab_tit li").removeClass("active").css({"background":"","color":""});
		$(this).addClass("active").css({"background":"#007042","color":"#fff"});
		

	});//click

		$(".section .center .right .c_box .tab_tit .tab li").mouseenter(function(){
			
		});
		$(".section .center .right .c_box .tab_tit .tab li").mouseleave(function(){
			
		});

