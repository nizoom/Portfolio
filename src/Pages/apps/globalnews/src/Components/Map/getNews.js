
export default async function getNews (localityName, country, topic, localityFeatureStatus) {






//let response = fetch(`${process.env.REACT_APP_EP_STARTER}?q=${localityName} ${country} ${topic}`, {
  //${localityName} ${country} ${topic}
let response = fetch(`https://api.bing.microsoft.com/v7.0/news/search?q=${localityName} ${country} ${topic}`, {
  
headers: {
    "Ocp-Apim-Subscription-Key": "e812d12c761f48f9aa6c3973b63e9e6e",
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
}).then(async response => {
  try {
   const data = await response.json()

   return data.value
 } catch(error) { 
   console.log('Error happened here!')
   console.error(error)
 }
})



    return response;

 }
