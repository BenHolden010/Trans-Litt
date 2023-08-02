

function fetchTranslation(words){
  // console.log(words)
 return fetch("https://libretranslate.com/translate",{
  method: "POST",
  body: JSON.stringify({
  q: words,
  source: "auto",
  target: "es",
  format: "text",
  api_key: "994ca9bd-51a9-4a76-a56b-0dfea4c66e62"
 }),
  headers: {"Content-Type": "application/json" }
  })
  .then(response => {
    if (!response.ok) {
      throw new Error('Phrase not found.')
    }
    return response.json()
  })
}

export default fetchTranslation