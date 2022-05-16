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
