window.onload = function() {

	let imgArray = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg',
					'6.jpg', '7.jpg', '8.jpg', '9.jpg', '10.jpg'];
	
	let next = document.getElementById("next");
	let prev = document.getElementById("prev");
	
	let slide_wrap = document.querySelector(".slide-wrap");
	let miniatures = document.querySelector(".miniatures");
	
	function addImages(imgArray, wrap_elem) {
		for (var i = 0; i < imgArray.length; i++) {
			var img = new Image();
			img.src = imgArray[i];
			img.setAttribute('img-index', i);
			wrap_elem.appendChild(img);
		}
	}

	function createSlider() {
		addImages(imgArray, slide_wrap);
		let slide = document.querySelectorAll(".slide-wrap img");
		for (var i = 0; i < slide.length; i++) {
			slide[i].setAttribute("class", "slide");
		}
		slide[0].className = 'slide showing';
		addImages(imgArray, miniatures);	
	}
	
	createSlider();

	let mini_img = document.querySelectorAll(".miniatures img");
	mini_img[0].style.border = "3px solid #000";
	let slide = document.querySelectorAll(".slide-wrap img");

	var  getIndexImg = function(){
		var index = this.getAttribute('img-index');
		for (var i = 0; i < slide.length; i++) {
			slide[i].className = 'slide';
			mini_img[i].style.border = "none";
		}
		slide[index].className = 'slide showing';
		mini_img[index].style.border = "3px solid #000";
	}

	for (var i = 0; i < mini_img.length; i++) {
		mini_img[i].onclick = getIndexImg;
	}

	function btnClick(slide, index) {
		for (var i = 0; i < slide.length; i++) {
			slide[i].className = 'slide';
			mini_img[i].style.border = "none";
		}
		slide[index].className = 'slide showing';
		mini_img[index].style.border = "3px solid #000";
	}

	function getCurrentIndex() {
		var showing = document.querySelector(".showing");
		var index = showing.getAttribute('img-index');
		return index;
	}

	next.onclick = function() {
		var index = getCurrentIndex();
		index++;
		if (index > slide.length - 1) {
			index = 0;
		}
		btnClick(slide, index);
	}

	prev.onclick = function(){
		var index = getCurrentIndex();
		index--;
		if (index < 0){
			index = slide.length - 1;
		}
		btnClick(slide, index);
	}
	
}