function getQuotes() {
  let authorText = document.getElementById("author");
  let quoteText = document.getElementById("quote");
  let getNewQuote = document.getElementById("new-quote");

  async function getQuoutesAsync() {
    const apiUrl = "https://type.fit/api/quotes";
    let quotesArray = [];
    let randomIndex = 0;

    try {
      const response = await fetch(apiUrl);
      console.log(`GET: ${apiUrl}, status: ${response.status}`);

      if (response.ok) {
        quotesArray = await response.json();
        randomIndex = Math.floor(Math.random() * quotesArray.length);
      }
    } catch (error) {
      console.log(
        `error occoured on GET:${apiUrl}, status: ${response.status},
          Error: ${error}`
      );
    }
    return quotesArray[randomIndex];
  }

  async function getSingleQuote() {
    let quote = await getQuoutesAsync();

    if (quote.text.length > 100) {
      quoteText.classList.remove("quotes");
      quoteText.classList.add("long-quotes");
    } else {
      quoteText.classList.remove("long-quotes");
      quoteText.classList.add("quotes");
    }

    authorText.textContent = (await quote.author) ?? "Unknown";
    quoteText.textContent = await quote.text;
  }

  // On load
  getSingleQuote();

  // Event listeners
  // On Get New Quote
  getNewQuote.addEventListener("click", getSingleQuote);
}

getQuotes();
