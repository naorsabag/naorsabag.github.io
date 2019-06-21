
var elemCollection = document.getElementsByClassName("title-brackets"); 
var currSeconde = 0.0;
var duration = 50.0;
var delayInterval = setInterval(delay, 200);
function delay() {
    clearInterval(delayInterval);
    var frameInterval = setInterval(frame, 10);
    function frame() {
        if (currSeconde == duration) {
            clearInterval(frameInterval);
        } else {
            currSeconde++; 
            
            for (let element of elemCollection) {
                var currentFarme = currSeconde/duration;
                element.style.opacity = currentFarme; 
                element.style.marginLeft = currentFarme + 'vw';
                element.style.marginRight = currentFarme + 'vw';
            }
        }
    }
}