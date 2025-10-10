fetch('../../data/brands.js')
  .then(response => response.json())
  .then(brands => {
    const brand_container = document.getElementById('brand_container');
    let html = '';

    brands.forEach((brand, index) => {
      html += `
        <div class="card col-md-1 col-4 my-2  ${index === 0 ? 'active' : ''} p-3 me-3 ">
          <img src="${brand.image}" class=" w-100 text-center my-auto" alt="${brand.brand}">
        </div>
      `;
    });

    brand_container.innerHTML = html;
  })
  .catch(error => console.error('Error loading slider data:', error));

  
//   all products

fetch('../../data/products.js')
  .then(response => response.json())
  .then(products => {
    const all_item_card_container = document.getElementById('all_item_card_container');
    let html = '';

    // Filter only flash_deal items
    const allProducts = products.filter(product => product.contity >= 1);

    allProducts.forEach((product, index) => {
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
                            <h6 class="text-dark fw-bold text-center mb-2">${product.brand} ${product.name}</h6>
                            <div class="d-flex justify-content-between small">
                                <span class="fw-semibold text-secondary">Brand:</span>
                                <span class="fw-semibold text-dark">${product.brand}</span>
                            </div>
                            <div class="d-flex justify-content-between small">
                                <span class="fw-semibold text-secondary">Price:</span>
                                <span class="fw-bold text-danger">Rs. ${product.price}</span>
                            </div>
                            <div class="d-flex justify-content-between small mb-3">
                                <span class="fw-semibold text-secondary">Model:</span>
                                <span class="fw-semibold text-dark">${product.name}</span>
                            </div>
                            <div class="text-center">
                                <a href="cart.html" class="btn btn-warning btn-sm fw-semibold px-3">
                                <i class="bi bi-cart-plus"></i> Add to Cart
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
      `;
    });

    all_item_card_container.innerHTML = html;
  })
  .catch(error => console.error('Error loading slider data:', error));