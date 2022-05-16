let videoElement = document.getElementById("video");
let button = document.getElementById("button");

export async function setPictureMode() {
  let media = await navigator.mediaDevices.getDisplayMedia();
  videoElement.srcObject = media;
  videoElement.onloadedmetadata = () => {
    videoElement.play();
  };

  button.addEventListener("click", async () => {
    await videoElement.requestPictureInPicture();
    button.disabled = false;
  });
}
