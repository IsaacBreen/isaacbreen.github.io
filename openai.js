console.log("new hello world")

fetch('https://9qrzvh.deta.dev/')
  .then((response) => {
    return response.json();
  })
  .then((myJson) => {
    console.log(myJson);
  });
