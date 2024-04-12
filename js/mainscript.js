document.addEventListener("DOMContentLoaded", function() {
    let slider = document.querySelector('.slider .list');
    let items = document.querySelectorAll('.slider .list .item');
    let next = document.getElementById('next');
    let prev = document.getElementById('prev');
    let dots = document.querySelectorAll('.slider .dots li');

    let lengthItems = items.length - 1;
    let active = 0;

    next.onclick = function() {
        active = active + 1 <= lengthItems ? active + 1 : 0;
        reloadSlider();
    }

    prev.onclick = function() {
        active = active - 1 >= 0 ? active - 1 : lengthItems;
        reloadSlider();
    }

    let refreshInterval = setInterval(()=> {next.click()}, 3000);

    function reloadSlider() {
        slider.style.left = -active * items[0].offsetWidth + 'px';
        let last_active_dot = document.querySelector('.slider .dots li.active');
        last_active_dot.classList.remove('active');
        dots[active].classList.add('active');
        clearInterval(refreshInterval);
        refreshInterval = setInterval(()=> {next.click()}, 12000);
    }

    dots.forEach((li, key) => {
        li.addEventListener('click', () => {
            active = key;
            reloadSlider();
        });
    });
});



$('.testimonials-container').owlCarousel({
    loop:true,
    autoplay:true,
    autoplayTimeout:12000,
    margin:10,
    nav:true,
    navText:["<i class='fa-solid fa-arrow-left'></i>",
             "<i class='fa-solid fa-arrow-right'></i>"],
    responsive:{
        0:{
            items:1,
            nav:false
        },
        600:{
            items:1,
            nav:true
        },
        768:{
            items:2
        },
    }
})



const allStar = document.querySelectorAll('.rating .star')
const ratingValue = document.querySelector('.rating input')

allStar.forEach((item, idx)=> {
	item.addEventListener('click', function () {
		let click = 0
		ratingValue.value = idx + 1

		allStar.forEach(i=> {
			i.classList.replace('bxs-star', 'bx-star')
			i.classList.remove('active')
		})
		for(let i=0; i<allStar.length; i++) {
			if(i <= idx) {
				allStar[i].classList.replace('bx-star', 'bxs-star')
				allStar[i].classList.add('active')
			} else {
				allStar[i].style.setProperty('--i', click)
				click++
			}
		}
	})
})

document.addEventListener("DOMContentLoaded", function() {
    const leaveFeedbackButton = document.getElementById('leaveFeedbackBtn');
    const wrapper = document.querySelector('.wrapper');
    const overlay = document.querySelector('.overlay');
    const cancelButton = document.querySelector('.wrapper .cancel');

    leaveFeedbackButton.addEventListener('click', function() {
        wrapper.classList.add('show');
        overlay.classList.add('show');
    });

    cancelButton.addEventListener('click', function() {
        wrapper.classList.remove('show');
        overlay.classList.remove('show');
    });
});
