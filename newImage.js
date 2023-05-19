function newImage(url) {
  return new Promise((resolve, reject) => {
    const image = new Image();
      image.src = url;
      image.addEventListener('load', () => {
        document.body.appendChild(image);
        resolve(image);
        });
      image.addEventListener('error', (error) => {
        reject(error);
      });
    });
  }