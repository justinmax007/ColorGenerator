var hexaBtn = document.querySelector('.hexaBtn');

var backGround = document.querySelector('body');


var hexaValue = document.querySelector('.hexaValue');



var hexaColors = [1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];



hexaBtn.addEventListener('click', hexGen);


function hexGen(){
	let hexColorValue = '#';

	for( let i = 0; i < 6 ; i++)
	{
		let random = Math.floor(Math.random() * hexaColors.length);
		hexColorValue += hexaColors[random];
		//console.log(hexColorValue);
	}

	backGround.style.backgroundColor = hexColorValue;


	hexaValue.innerHTML = hexColorValue;

}

