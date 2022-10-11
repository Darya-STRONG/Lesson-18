
	let Kitchen = {
		category: 'kitchen'
	};
	let Devices = {
		category: 'devices'
	};
	let Cosmetics = {
		category: 'cosmetics'
	};


 let kitchenProducts = [
	{
		type: 'grater',
		price: 10,	
	},
	{
		type: 'pastry-bag',
		price: 25,

	},
	{
		type: 'scale',
		price: 5,

	},
	{
		type: 'whisk',
		price: 15,

	}
];

let devicesProducts = [
	{
		type: 'desktop',
		price: [100,1000]
	},
	{
		type: 'laptop',
		price: [50,1500]
	},
	{
		type: 'smartphone',
		price: [80,2000]
	},
	{
		type: 'tablet',
		price: [20,1300]
	}
];

let cosmeticsProducts = [
	{
		type: 'blush',
		price: 100
	},
	{
		type: 'eyeshadow',
		price: 50
	},
	{
		type: 'lipstick',
		price: 80
	},
	{
		type: 'nail-polish',
		price: 200
	},
	{
		type: 'perfume',
		price: 300,
	}
];

let newArray = [];

function Products(prod,category) {
	prod.forEach(item => {
		let createObject = Object.create(
			{category},
			{
				type: {
					value:item.type
				},
				price: {
					value:item.price
				}
			}
		);

		let card = document.createElement('div');

		card.classList.add('card');
	
		card.innerHTML = `
		
				<img src = "images/${createObject.category.category}/${createObject.type}.svg" alt="images">
				<p class = "type">Name: ${createObject.type[0].toUpperCase() + createObject.type.slice(1)}</p>
				<br>
				<p class = "price">Price: $${createObject.price}</p>
		`;


			document.querySelector(".conteiner").appendChild(card);


	}) 

}

Products(kitchenProducts, Kitchen);
Products(devicesProducts,Devices);
Products(cosmeticsProducts,Cosmetics);





