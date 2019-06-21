
var elemCollection = document.getElementsByClassName("title-brackets"); 
var delayInterval = setInterval(delay, 200);
function delay() {
    clearInterval(delayInterval);
    var currFrame = 0.0;
    var duration = 50.0;
    var frameInterval = setInterval(frame, 10);
    function frame() {
        if (currFrame == duration) {
            clearInterval(frameInterval);
        } else {
            currFrame++; 
            var scalar = 1000/screen.width;
            scalar = scalar > 1 ? scalar : 1;
            for (let element of elemCollection) {
                var percent = currFrame/duration;
                element.style.opacity = percent; 
                element.style.marginLeft = percent*scalar + 'vw';
                element.style.marginRight = percent* scalar + 'vw';
            }
        }
    }
}