//to be called once form is validated
//we need the values of the fields
//then convert the fields and corresponding values to an obj that gets
// the stringify json treatment

export default function submitValidatedData(values){
  //const formData = JSON.stringify(values)

  const url = "https://98si29b3q9.execute-api.us-east-1.amazonaws.com/dev/static-site-mailer"

  const options = {
    method : "POST",
    headers : {
      "Accept" : "application/json",
      "Content-type" : "application/json;charset=UTF-8"
    },
    body: JSON.stringify(values)
  }

  fetch(url, options)
    .then(response => {
      console.log(response.status);
    })
    .catch(error => {
      console.error("error" + error);
    })
}
