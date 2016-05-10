var position = -50;//current position
	
app.directive('ngSideScroll', function() {
        return function(scope, element, attrs) {
            element.bind("DOMMouseScroll mousewheel onmousewheel", function(event) {

                        // cross-browser wheel delta
                        var event = window.event || event; // old IE support
                        var delta = Math.max(-1, Math.min(1, (event.wheelDelta || -event.detail)));
                        var base = -50; //base position
						var hiBound = base + (element[0].clientWidth/document.body.clientWidth-1)*50;
						var lowBound = base - (element[0].clientWidth/document.body.clientWidth-1)*50;

						//only works if element is wider than screen
						if(element[0].clientWidth > document.body.clientWidth){
							if(delta > 0) {
								//see more towards left (<____-3____-2____-1____0)
								//if new position would still be less than hibound
								if(position+delta*3 < hiBound){
									position+=delta*3;
								}
							}
							else if (delta < 0){
								//see more towards right (0____1____2____3____>)
								//if new position would still be more than lobound
								if(lowBound < position+delta*3){
									position+=delta*3;
								}
							}

							element[0].style.webkitTransform = 'translateX('+position+'%)';
							element[0].style.mozTransform = 'translateX('+position+'%)';
							element[0].style.transform = 'translateX('+position+'%)';
						}
						// for IE
						event.returnValue = false;
					 	// for Chrome and Firefox
					 	if(event.preventDefault) {
					  		event.preventDefault();
					 	}
            });
        };
});


angular.module('AlbumApp').directive('ngEnter', function () {
    return function (scope, element, attrs) {
        element.bind("keydown keypress", function (event) {
            if(event.which === 13) {
                event.preventDefault();
				scope.$apply(function (){
                    scope.$eval(attrs.ngEnter);
                });
            }
        });
    };
});//end of directive