btn_list = document.querySelectorAll(".drum")

for(var i=0; i<btn_list.length; i++) {
	btn_list[i].addEventListener("click", handleClick);
}

function handleClick() {
	var btn = this.innerHTML;
	var s1 = '';
	if(btn == 'w') {
		s1 = "sounds/tom-1.mp3";
	}
	else if(btn == 'a') {
		s1 = "sounds/tom-2.mp3";
	}
	else if(btn == 's') {
		s1 = "sounds/tom-3.mp3";
	}
	else if(btn == 'd') {
		s1 = "sounds/tom-4.mp3";
	}
	else if(btn == 'j') {
		s1 = "sounds/crash.mp3";
	}
	else if(btn == 'k') {
		s1 = "sounds/kick-bass.mp3";
	}
	else if(btn == 'l') {
		s1 = "sounds/snare.mp3";
	}
	console.log(this);
	var audio = new Audio(s1);
	audio.play();
}