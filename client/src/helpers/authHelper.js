const api = 'http://127.0.0.1:8000/api'

export const loginHelper = async (credentials) => {
  let success = false
  try {
    const url = `${api}/login`
    await fetch(url, {
      method: "POST",
      body: JSON.stringify(credentials),
      headers: {"Content-type": "application/json; charset=UTF-8"}
      })
      .then(response => response.json()) 
      .then(json => {
        if (json.authenticated) {
          const prefix = `grp_token_${import.meta.env.VITE_FOLDER_PATH}`.replace('/', '_')
          window.sessionStorage.setItem(prefix, data.grp_token);
          window.sessionStorage.setItem(`/_expiration`, data.grp_token_expiration);
          router.push('/dashboard');
        }
        console.log(json)
      });
    success = true
  } catch {
    success = false
  }
  return success
}