// function that reads the data on whatever product card was clicked,
// then passes that data to the cart model.
const updateCart = async function (event) {
  let selectedBtn = event.target;
  if (selectedBtn.matches('.btn') || selectedBtn.matches('i')) {
    let product_id = selectedBtn.dataset.index;
    const response = await fetch('/api/users/cart', {
      method: 'POST',
      body: JSON.stringify({ product_id }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      console.log('Response is OK');
    } else {
      console.log('Failed to add to cart. Please try again');
    }
  }
};

// eventHandler added to each product card that triggers when user clicks the cart button.
const cartButton = document.querySelector('#product-container');
console.log(cartButton);
cartButton.addEventListener('click', updateCart);
