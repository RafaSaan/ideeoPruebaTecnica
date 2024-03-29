const api = import.meta.env.VITE_API_ENDPOINT

export const loginHelper = async (credentials) => {
  let success = false
  let authenticated = false
  try {
    const url = `${api}/login`
    await fetch(url, {
      method: "POST",
      body: JSON.stringify(credentials),
      headers: {"Content-type": "application/json; charset=UTF-8"}
      })
      .then(response => response.json()) 
      .then(data => {
        authenticated = data.authenticated
        if (data.authenticated) {
          const prefix = `grp_token_${import.meta.env.VITE_FOLDER_PATH}`.replace('/', '_')
          window.sessionStorage.setItem(prefix, data.grp_token);
          window.sessionStorage.setItem(`${prefix}_expiration`, data.grp_token_expiration);
        }
      });
    success = true
  } catch {
    success = false
  }
  return {success, authenticated}
}