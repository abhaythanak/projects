let audio = document.createElement('audio');
audio.setAttribute('src','sound.mp3');
audio.loop = true;

let turtle = document.querySelector('.turtle');
let turtle1 = document.querySelector('.turtle1');
let moveBy = 7;
let moveIn = Math.floor(Math.random() * 15) + 1;
const btn = document.getElementById('btn');
const reset = document.getElementById('reset');
console.log(moveIn);

let finish,finish1


//move

window.addEventListener('load', () =>{
	turtle.style.position = 'absolute';
	turtle.style.left = 0;
	turtle.style.top = 0;
	
	
	
});
window.addEventListener('load', () =>{	
	turtle1.style.position = 'absolute';
	turtle1.style.left = 0;
	turtle1.style.top = 0;
	
	
});
	
btn.addEventListener('click', () =>{
	//audio.play();
	window.addEventListener('keyup', (e) =>{
		switch (e.key){
			    
				case 'ArrowLeft':
				  turtle.style.left = parseInt(turtle.style.left) - moveBy + 'px';
				  break;
				case 'ArrowRight':
				  turtle.style.left = parseInt(turtle.style.left) + moveBy + 'px';
				  break;
				case 'ArrowUp':
				  turtle.style.top = parseInt(turtle.style.top) - moveBy + 'px';
				  break;
				case 'ArrowDown':
				  turtle.style.top = parseInt(turtle.style.top) + moveBy + 'px';
				  break;	  
	
		}
	 finish = window.scrollY + document.querySelector('.turtle').getBoundingClientRect().left;
	
	});
	window.addEventListener('keyup', (e) =>{
		switch (e.key){
		case 'ArrowRight':
		turtle1.style.left = parseInt(turtle1.style.left) + moveIn + 'px';
	     finish1 = window.scrollY + document.querySelector('.turtle1').getBoundingClientRect().left;
		 console.log(finish1);
		break;

	}
     if (finish1 == 1232){
		document.querySelector('.line').style.display ="flex";
		document.querySelector('.line').innerHTML='you loss';
		alert('you loss');
	 }else if  (finish == 1232) {
		document.querySelector('.line').style.display ="flex";
		alert('you won');
	 }
	
	});

});

reset.addEventListener('click', () =>{
	window.location.reload()
	console.log('clear')
});



