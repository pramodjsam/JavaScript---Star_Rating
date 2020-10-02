const ratings={
	sony:4.7,
	samsung:3.4,
	vizio:2.3,
	panasonic:3.6,
	phillips:4.1
}

const starsTotal=5;

document.addEventListener("DOMContentLoaded",function(){
	getRating()
})
let product;
const productSelect=document.getElementById("product-select");
const ratingControl=document.getElementById("rating-control");

productSelect.addEventListener("change",function(e){
	product=e.target.value;
	ratingControl.disabled=false;
	ratingControl.value=ratings[product]
})

ratingControl.addEventListener("blur",function(e){
	const rating= e.target.value;
	if(rating>5){
		alert("Please rate 1-5")
	}
	ratings[product]=rating;
	getRating();
})

function getRating(){
	for(let rating in ratings){
		const starPercentages = (ratings[rating]/starsTotal)*100;
		// console.log(starPercentages)
		const starPercentageRound = (Math.round(starPercentages/10) * 10) + "%";
		// console.log(starPercentageRound)
		// console.log(document.querySelector(`.${rating} .stars-inner`))
		document.querySelector(`.${rating} .stars-inner`).style.width=starPercentageRound;

		document.querySelector(`.${rating} .number-rating`).innerHTML=ratings[rating]
	}
}