fetch('../../data/products.js')
  .then(response => response.json())
  .then(products => {
    const flash_card_container = document.getElementById('flash_card_container');
    let html = '';

    // Filter only flash_deal items
    const flashProducts = products.filter(product => product.flash_deal === true);

    flashProducts.forEach((product, index) => {
      html += `
                         <div class="col-6 col-md-3 mt-4  ${index === 0 ? 'active' : ''}">
                    <div class="card shadow-sm border-0 flash_deal_card h-100">
                        <!-- Product Image -->
                            <div class="p-3 text-center bg-white">
                                <img src="${product.image}" 
                                    class="img-fluid" 
                                    alt="Omega Watch" 
                                    style="width: 150px; height: 150px; object-fit: contain;">
                            </div>

                        <!-- Card Body -->
                        <div class="card-body bg-light">
                            <h6 class="text-dark fw-bold text-center mb-2" style="font-size:12px">${product.brand} ${product.name}</h6>
                            <div class="d-flex justify-content-between small">
                                <span class="fw-semibold text-secondary">Brand:</span>
                                <span class="fw-semibold text-dark">${product.brand}</span>
                            </div>
                            <div class="d-flex justify-content-between small">
                                <span class="fw-semibold text-secondary">Price:</span>
                                <span class="fw-bold text-danger">Rs. ${product.price}</span>
                            </div>
                            <div class="d-flex justify-content-between small mb-3">
                                <span class="fw-semibold text-secondary ">Model:</span>
                                <span class="fw-semibold text-dark">${product.name}</span>
                            </div>
                            <div class="text-center">
                                <button class="btn btn-warning btn-sm fw-semibold px-3">
                                <i class="bi bi-cart-plus"></i> Add to Cart
                                </button>
                            </div>
                        </div>

                        <!-- Sale Badge -->
                        <span class="position-absolute top-0 start-0 m-2 badge bg-danger">
                        Flash Deal
                        </span>
                    </div>
                </div>
      `;
    });

    flash_card_container.innerHTML = html;
  })
  .catch(error => console.error('Error loading slider data:', error));
