function slideImages() {
    const images = document.querySelectorAll('.partnersLogo img');
    let index = 0;

    setInterval(() => {
      index = (index + 1) % images.length;
      const offset = -index * 100; // 100 is the width of each image, adjust as needed
      images.forEach(img => {
        img.style.transform = `translateX(${offset}%)`;
      });
    }, 2000); // Adjust the interval (in milliseconds) as needed
  }

  // Call the function to start the sliding effect
  slideImages();


  function slidePartnersImg() {
    const images = document.querySelectorAll('.membersContainer div');
    let index = 0;

    setInterval(() => {
      index = (index + 1) % images.length;
      const offset = -index * 100; // 100 is the width of each image, adjust as needed
      images.forEach(img => {
        img.style.transform = `translateX(${offset}%)`;
      });
    }, 2000); // Adjust the interval (in milliseconds) as needed
  }

  // Call the function to start the sliding effect
  slidePartnersImg();