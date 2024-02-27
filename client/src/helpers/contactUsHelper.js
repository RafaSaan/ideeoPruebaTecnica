const api = 'http://127.0.0.1:8000/api'

export const sendContactUsHelper = async (contactData) => {
  let success = false
  try {
    const url = `${api}/contact-us`
    await fetch(url, {
      method: "POST",
      body: JSON.stringify(contactData),
      headers: {"Content-type": "application/json; charset=UTF-8"}
      })
      .then(response => response.json()) 
      .then(json => console.log(json));
    success = true
  } catch {
    success = false
  }
  return success
}