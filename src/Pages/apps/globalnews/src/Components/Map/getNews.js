
export default async function getNews (localityName, country, topic, localityFeatureStatus) {


let response = fetch(`https://api.bing.microsoft.com/v7.0/news/search?q=${localityName} ${country} ${topic}`, {
  
headers: {
    "Ocp-Apim-Subscription-Key": `${process.env.REACT_APP_AZURE_KEY} `,
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
