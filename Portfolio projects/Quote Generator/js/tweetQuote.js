function tweetQuote() {
  let tweetIt = document.getElementById("twitter-button");
  let authorText = document.getElementById("author");
  let quoteText = document.getElementById("quote");

  function tweetQuote() {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
    window.open(twitterUrl, "_blank");
  }

  // Event listeners
  // On tweet quote
  tweetIt.addEventListener("click", tweetQuote);
}
tweetQuote();
