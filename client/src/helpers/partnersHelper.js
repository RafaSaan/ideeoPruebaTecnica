const api = import.meta.env.VITE_API_ENDPOINT
const prefix = `grp_token_${import.meta.env.VITE_FOLDER_PATH}`.replace('/', '_')
const token = sessionStorage[prefix]

export const getPartnersHelper = async () => {
const token = sessionStorage[prefix]
  let data = []
  try {
    const url = `${api}/getPartners`
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
        data = json.partners.data
      });
  } catch {
    data = []
  }
  return data
}

export const validatePartner = (partner, isUpdate) => {
  const errorsList = Array()
  let hasErrors = false
  if(partner.name === '') errorsList['name'] = 'El nombre es requerido'
  if(partner.email === '') errorsList['email'] = 'El email es requerido'
  if(partner.password === '' && !isUpdate) errorsList['password'] = 'La contraseña es requerida'
  for (const property in errorsList) { hasErrors = true }
  return { errorsList, hasErrors }
}

export const createPartnerHelper = async (partner) => {
  let success = false
  let error = ''
  try {
    const url = `${api}/createPartner`
    await fetch(url, {
      method: "POST",
      body: JSON.stringify(partner),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        Authorization:`Bearer ${token}`,
        Accept: 'application/json'
      }
      })
      .then(response => response.json()) 
      .then(json => {
        success = json.success
        if (!success) error = json.message
      })
  } catch(error) {
    success = false
  }
  return {success, error}
}

export const updatePartnerHelper = async (partner) => {
  let success = false
  let error = ''
  try {
    const url = `${api}/updatePartner`
    await fetch(url, {
      method: "POST",
      body: JSON.stringify(partner),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        Authorization:`Bearer ${token}`,
        Accept: 'application/json'
      }
      })
      .then(response => response.json()) 
      .then(json => {
        success = json.success
        if (!success) error = json.message
      })
  } catch {
    success = false
  }
  return {success, error}
}
export const deletePartnerHelper = async (id) => {
  let success = false
  try {
    const url = `${api}/deletePartner/${id}`
    await fetch(url, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        Authorization:`Bearer ${token}`,
        Accept: 'application/json'
      }
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