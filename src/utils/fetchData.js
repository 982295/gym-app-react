export const excersiseOptions = {
    method: 'GET',
    headers: {
      'x-rapidapi-key': '9db514b915msh9cf6551cce13706p1ccf50jsn9e2e433b52b0',
      'x-rapidapi-host': 'exercisedb.p.rapidapi.com'
    }
  };


export const fetchData = async(url,body) =>{
    const response = await fetch(url,body) 
    const data = await response.json()

    return data
}