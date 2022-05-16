buildImages = function (photoArray) {
  let imageContainer = document.getElementById("image-container");
  let imageloaded = 0;
  photoArray.forEach((photo) => {
    const item = document.createElement("a");
    item.setAttribute("href", photo.links.html);
    item.setAttribute("target", "_blank");

    const img = document.createElement("img");
    img.setAttribute("src", photo.urls.regular);
    img.setAttribute("alt", photo.alt_description);
    img.setAttribute("title", photo.alt_description);
    img.addEventListener("load", () => {
      if (imageloaded++ >= photoArray.length - 1) {
        imageApiReady = true;
      }
    });

    item.appendChild(img);
    imageContainer.appendChild(item);
  });
};
