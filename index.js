function showMessage() {
    return new Promise((resolve, reject) => {
      const message = "Hello from the promise!";
      resolve(message);
    });
  }
  
  showMessage().then((msg) => {
    console.log(msg);
  });
  