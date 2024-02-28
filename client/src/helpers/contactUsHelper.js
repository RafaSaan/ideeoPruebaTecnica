const api = import.meta.env.VITE_API_ENDPOINT

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
      .then(json => {
        success = json.success
      });
  } catch {
    success = false
  }
  return success
}
export const getContactRequestsHelper = async () => {
  let success = false
  let data = []
  const prefix = `grp_token_${import.meta.env.VITE_FOLDER_PATH}`.replace('/', '_')
  const token = sessionStorage[prefix]
  try {
    const url = `${api}/contactsRequest`
    await fetch(url, {
      method: "GET",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        Authorization:`Bearer ${token}`,
        Accept: 'application/json'
      }
      })
      .then(response => response.json()) 
      .then(json => {
        data = json.contactRequests.data
      });
    success = true
  } catch {
    success = false
  }
  return {success, data}
}