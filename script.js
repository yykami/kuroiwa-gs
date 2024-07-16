$(function(){
    //ヘッダーナビの下線//
    $('.main-nav a').each(function() {
        if(this.href == location.href) {
			$(this).parents("li").addClass("current");
		}
	});

});
