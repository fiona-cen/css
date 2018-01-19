$(document).ready(function(){
	var itemLi=$(".sprite").find("li");
	$.each(itemLi,function(index,val){
		var posY=-40*index;
		console.log(posY);
		console.log($(this));
		var s=$(this).find("s").css("background-position","0 "+posY+"px")


		console.log(s)
	});
	console.log(itemLi.length);
	console.log("hi");
});