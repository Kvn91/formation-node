let counter = 0;

process.on('message', (message) => {
  console.log('receiving message : ' + message);

  if (message === 'begin') {
    console.log('Begin counting');
    setInterval(() => {
      counter++;
    }, 1000);
  }

  if (message === 'compteur') {
    process.send(counter);
  }
});