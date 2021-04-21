
  axios.post('https:sample-endpoint.com/user', {
    IP: {data.ip},
    Country {data.country}
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(error => {
    console.error('There was an error!', error);
})