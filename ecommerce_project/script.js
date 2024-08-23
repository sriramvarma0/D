document.getElementById('category').addEventListener('change', function() {
    var category = this.value;
    var productContainer = document.getElementById('product-container');
    
    productContainer.innerHTML = ''; // Clear previous products

    if (category) {
        var xhr = new XMLHttpRequest();
        xhr.open('POST', 'Product_display.php', true);
        xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        xhr.onload = function() {
            if (this.status == 200) {
                var products = JSON.parse(this.responseText);
                
                products.forEach(function(product) {
                    var productItem = document.createElement('div');
                    productItem.classList.add('product-item');

                    var productImage = document.createElement('img');
                    productImage.src = product.product_picture;

                    var productName = document.createElement('h3');
                    productName.textContent = product.product_name;

                    var productSpecs = document.createElement('p');
                    productSpecs.textContent = product.product_specs;

                    productItem.appendChild(productImage);
                    productItem.appendChild(productName);
                    productItem.appendChild(productSpecs);

                    productContainer.appendChild(productItem);
                });
            }
        };
        xhr.send('category=' + category);
    }
});
