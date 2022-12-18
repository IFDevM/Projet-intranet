const TOKEN_KEY = "userToken"

export const setLogUser = (data) => {
    if(typeof localStorage !== "undefined"){
        localStorage.setItem(TOKEN_KEY, JSON.stringify(data));
    }
}

export const getToken = () => {
    if(typeof localStorage !== "undefined"){
        const {token} = JSON.parse(localStorage.getItem(TOKEN_KEY))
        return token
    }
}


export const removeToken = () => {
  if(typeof localStorage !== "undefined"){
      localStorage.removeItem(TOKEN_KEY)
  }
}


