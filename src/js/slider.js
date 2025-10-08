fetch('../../data/slider-hero.js')
  .then(response => response.json())
  .then(slides => {
    const carouselContent = document.getElementById('carouselContent');
    let html = '';

    slides.forEach((slide, index) => {
      html += `
        <div class="carousel-item ${index === 0 ? 'active' : ''}">
          <img src="${slide.image}" class="d-block w-100" alt="${slide.title}">
          <div class="carousel-caption  d-md-block ">
            <p class="fs-2 text-warning">${slide.title}</p>
            <p class="text-secondary mb-2">${slide.text}</p>
          </div>
        </div>
      `;
    });

    carouselContent.innerHTML = html;
  })
  .catch(error => console.error('Error loading slider data:', error));