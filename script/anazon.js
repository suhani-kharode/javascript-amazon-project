// First we save the data
// Generate the HTML
// Make it functional
// Make it interactive



  const products = [
  {
    name: "Black and Gray Athletic Cotton Socks",
    image: "images/products/athletic-cotton-socks-6-pairs.jpg",
    price: 10.90,
    rating: {
      stars: 4.5,
      count: 87
    }
  },

  {
    name: "Intermediate Size Basketball",
    image: "images/products/intermediate-composite-basketball.jpg",
    price: 20.95,
    rating: {
      stars: 4,
      count: 127
    }
  },

  {
    name: "Adults Plain Cotton T-Shirt - 2 Pack",
    image: "images/products/adults-plain-cotton-tshirt-2-pack-teal.jpg",
    price: 7.99,
    rating: {
      stars: 5,
      count: 56
    }
  }
];    

let html='';
products.forEach((product) =>{

   html += `<div class="product-container">
          <div class="product-image-container">
            <img class="product-image"
              src="${product.image}">
          </div>

          <div class="product-name limit-text-to-2-lines">
            ${product.name}
          </div>

          <div class="product-rating-container">
            <img class="product-rating-stars"
              src="images/ratings/rating-${product.rating.stars*10}.png">
            <div class="product-rating-count link-primary">
             ${product.rating.count}
            </div>
          </div>

          <div class="product-price">
            $${product.price}
          </div>

          <div class="product-quantity-container">
            <select>
              <option selected value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </div>

          <div class="product-spacer"></div>

          <div class="added-to-cart">
            <img src="images/icons/checkmark.png">
            Added
          </div>

          <button class="add-to-cart-button button-primary"
          data-product-name="${product.name}"
          >
            Add to Cart
          </button>
        </div>`;

});
     

let productHtml=document.querySelector(".js-products-grid").innerHTML = html;

let button = document.querySelectorAll(".add-to-cart-button");
button.forEach( (button)=>{
   button.addEventListener("click",()=>{
     const productName = button.dataset.productName;
     console.log(productName);
});
});

