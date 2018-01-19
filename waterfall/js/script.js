$(window).on('load',function(){
	waterfall();
	var dateInt={"data":[{"src":'0.jpg'},{"src":'1.jpg'},{"src":'2.jpg'},{"src":'3.jpg'}]};
	$(window).on('scroll',function(){
		if(checkScrollSlide()){
			console.log("we here");
			$.each(dateInt.data,function(index,value){
				var oBox=$('<div>').addClass('box').appendTo($('#main'));
				var oPic=$('<div>').addClass('pic').appendTo($(oBox));
				$('<img>').attr('src','images/'+$(value).attr('src')).appendTo($(oPic));
			
			});
			waterfall();
		}
		console.log("oh no");
	})
})
function waterfall(){
	var $boxs=$('#main>div');//只需要main下的一级子元素
	var w=$boxs.eq(0).outerWidth();//outerwidth包括内容+padding+border+margin的宽度;而width只包括内容的宽度
	var cols=Math.floor($(window).width()/w);

	$('#main').width(w*cols).css('margin','0 auto');
	var hArr=[];
	$boxs.each(function(index,value){
		var h=$boxs.eq(index).outerHeight();
		if(index<cols){
			hArr[index]=h;
		}
		else{
			var minH=Math.min.apply(null,hArr);
			var minHIndex=$.inArray(minH,hArr);
			$(value).css({
				'position':'absolute',
				'top':minH+'px',
				'left':minHIndex*w+'px'
			})
			hArr[minHIndex]+=$boxs.eq(index).outerHeight();
		}
	})
}
function checkScrollSlide(){
	var $lastBox=$('#main>div').last();
	var $lastBoxDis=$lastBox.offset().top+Math.floor($lastBox.outerHeight()/2);
	var scrollTop=$(window).scrollTop();
	var documentH=$(window).height();
	return ($lastBoxDis>(scrollTop+documentH))?false:true;
}