const button = document.getElementById("button");
const videoElement = document.getElementById("video");

// prompt to select media stream, pass the stream to video element and then play it
async function selectMediaStream(){
    try{
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata = () => {
            videoElement.play();
        }
    }catch(error){
        console.log("Can't play video:" ,error);
    }
}

// adding event listener for button
button.addEventListener("click",async function(){
    // disable button to avoid multiple clicks
    button.disabled = true;
    // request picture in picture
    await videoElement.requestPictureInPicture();
    // reseting button
    button.disable = false;
});

// on load
selectMediaStream();