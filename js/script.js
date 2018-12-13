document.getElementById("rektangel").style.visibility = "hidden";
document.getElementById("video-overlay").style.visibility = "hidden";

var video = document.getElementById('video');
var tick = video.currentTime;

video.addEventListener('timeupdate', function (e) {
    tick++
    vidHandler(tick);
}, false);


function vidHandler(time) {
    switch (time) {
        case 1:
            document.getElementById("textArea").style.visibility = "hidden";
            document.getElementById("video-overlay").style.visibility = "visible";
            document.getElementById("concert").play();
            break;

        case 30:
            const ac = new AudioContext();
            const osc = ac.createOscillator();
            osc.connect(ac.destination);
            osc.frequency.value = 3100;
            osc.start(0);
            osc.stop(3.5);
            document.getElementById("concert").pause();
            break;

        case 35: 
        document.getElementById("rektangel").style.visibility = "visible";
        break;

        default:
            return false;
    }
}

function triggerVisibility() {
    console.log("button press");
    document.getElementById("before").style.display ="none";
    document.getElementById("after").style.display ="block";
}