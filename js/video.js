var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video = document.querySelector("#player1")
	video.autoplay = false;
	console.log("Autoplay is set to "+video.autoplay);
	video.loop = false;
	console.log("Looping is set to "+ video.loop);
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	document.querySelector("#volume").innerHTML = video.volume*100 + '%';
});

document.querySelector("#pause").addEventListener("click", function(){
	console.log("Pause Video");
	video.pause();
});

document.querySelector("#slower").addEventListener("click", function() {
	console.log("Slow Down Video");
	video.playbackRate *= 0.95;
	console.log("Playback rate is "+video.playbackRate);

});

document.querySelector("#faster").addEventListener("click", function() {
	console.log("Speed up video");
	video.playbackRate /= 0.95;
	console.log("Playback rate is "+video.playbackRate);
});

document.querySelector("#skip").addEventListener("click", function() {
	console.log("Skip the video");
	if (video.currentTime+15 < video.duration) video.currentTime += 15;
	else video.currentTime = 0;
	console.log("Current time is "+video.currentTime)
});

// document.querySelector("#orig").addEventListener("click", function() {
// 	video.classList.removeClass(".oldSchool");
// })
