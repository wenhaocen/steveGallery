$( document ).ready(function() {
  // Handler for .ready() called.
  addGalleryEvents();
});

//If animation is in progress, we set it to true, so that we dont't re-initialize the animation again.
galleryEventTracker = {};

function addGalleryEvents(){

	$(".img-container img").mouseover(function(event){
                                      
        var imageIdSrc = event.target.getAttribute("src");
        var imageElem = $("[src=\"" + imageIdSrc + "\"]");
        if (galleryEventTracker[imageIdSrc]){
            //if true, that means some animation of this image already in progress, we simply return.
            return;
        }
        //if we initialize the animation, then we set it to true
        galleryEventTracker[imageIdSrc] = true;
        
		imageElem.css( "zIndex", 1000 );
		imageElem.animate(
		{
			"width" : "260px",
			"height" : "260px",
			"top" : "-20px",
			"left" : "-20px"
		},
        {
            "duration" : "300",
            "always" : function(){
                //set it back to false once the animation is done
                galleryEventTracker[imageIdSrc] = false;
            }
        }
        
        );
	});

	$(".img-container img").mouseleave(function(event){
    
        var imageIdSrc = event.target.getAttribute("src");
        //if there is any animation triggered by the mouseover event(enlarging), stop it, then trigger the mouse leave animation(decreaseing the size).
        var imageElem = $("[src=\"" + imageIdSrc + "\"]");
        imageElem.stop();
		imageElem.css( "zIndex", 1);
		imageElem.animate(
		{
			"width" : "220px",
			"height" : "220px",
			"top" : "0px",
			"left" : "0px"
		}, 100, function(){}
		);
		
	})


}