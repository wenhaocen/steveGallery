$( document ).ready(function() {
  // Handler for .ready() called.
  addGalleryEvents();
});


function addGalleryEvents(){

	$(".img-container img").mouseover(function(event){
		$("[src=\"" + event.target.getAttribute("src") + "\"]").css( "zIndex", 1000 );
		$("[src=\"" + event.target.getAttribute("src") + "\"]").animate(
		{
			"width" : "320px",
			"height" : "320px",
			"top" : "-50px",
			"left" : "-50px"
		}, 500, function(){}
		);
	});

	$(".img-container img").mouseleave(function(event){
		$("[src=\"" + event.target.getAttribute("src") + "\"]").css( "zIndex", 1);
		$("[src=\"" + event.target.getAttribute("src") + "\"]").animate(
		{
			"width" : "220px",
			"height" : "220px",
			"top" : "0px",
			"left" : "0px"
		}, 1, function(){}
		);
		
	})


}