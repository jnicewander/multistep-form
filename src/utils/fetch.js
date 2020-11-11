const AWS_ENDPOINT = 'https://hl21ta8q51.execute-api.us-east-1.amazonaws.com/Prod/submitForm' 

export const submitForm = (form) => {
  fetch(AWS_ENDPOINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(form)
  })
  .then(response => console.log('Response: ', response))
  .catch(error => alert('Error: ', error))
}