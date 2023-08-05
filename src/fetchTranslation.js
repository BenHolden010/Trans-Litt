

function fetchTranslation(text, targetLanguage){
 return fetch("https://libretranslate.com/translate",{
  method: "POST",
  body: JSON.stringify({
  q: text,
  source: "auto",
  target: targetLanguage,
  format: "text",
  api_key: "994ca9bd-51a9-4a76-a56b-0dfea4c66e62"
 }),
  headers: {"Content-Type": "application/json" }
  })
  .then(response => {
    if (!response.ok) {
      throw new Error('Server is down for repair, try again later.')
    }
    return response.json()
  })

}

export default fetchTranslation

