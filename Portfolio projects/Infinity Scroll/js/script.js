$(document).ready(function () {
  getImagesAsync(10);
});

var imageApiReady = false;
window.addEventListener("scroll", () => {
  if (
    window.innerHeight + window.scrollHeight >=
    document.body.offsetHeight - 1000
  ) {
    console.log("scroll");
  }

  if (
    window.innerHeight + window.scrollY >= document.body.offsetHeight - 1000 &&
    imageApiReady == true
  ) {
    getImagesAsync();
  }
});
