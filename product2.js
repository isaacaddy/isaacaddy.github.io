// Add to Cart functionality
const buttons = document.querySelectorAll('button');
const cartItems = document.querySelector('.cart-items');

buttons.forEach(button => {
	button.addEventListener('click', addToCart);
});

function addToCart() {
	const product = this.parentNode;
	const productName = product.querySelector('h3').textContent;
	
	const cartItem = document.createElement('li');
	cartItem.textContent = productName;
	
	cartItems.appendChild(cartItem);}