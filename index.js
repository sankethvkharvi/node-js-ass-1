function showMessage() {
    return new Promise((resolve, reject) => {
      const message = "Hello from the promise!";
      resolve(message);
    });
  }
  
  showMessage().then((msg) => {
    console.log(msg);
  });
  
  const fs = require('fs').promises;

async function createFile() {
  const content = 'This file was created using fs module and async/await!';
  try {
    await fs.writeFile('message.txt', content);
    console.log('✅ File created successfully!');
  } catch (err) {
    console.error('❌ Error creating file:', err);
  }
}

createFile();
