getImagesAsync = async function (count) {
  let apiKey = "_CapBBJskRuvZwWFIAoh82hUaDPRNhjaPrQr5g-CXaM";
  if (count == undefined) count = 10;
  let apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;
  try {
    let response = await fetch(apiUrl);
    if (response.ok) {
      console.log(`GET ${apiUrl}, response: ${response.status}`);
      buildImages(await response.json());
    }
  } catch (error) {
    console.log(`Error, ${response.status}, ${error}`);
  }
};

function buildImages(photoArray) {
  let imageContainer = document.getElementById("image-container");
  photoArray.forEach((photo) => {
    const item = document.createElement("a");
    item.setAttribute("href", photo.links.html);
    item.setAttribute("target", "_blank");

    const img = document.createElement("img");
    img.setAttribute("src", photo.urls.regular);
    img.setAttribute("alt", photo.alt_description);
    img.setAttribute("title", photo.alt_description);

    item.appendChild(img);
    imageContainer.appendChild(item);
  });
}

getImagesAsync();
