window.onload = function () {
    const carouselItem = document.querySelectorAll(".circle_slider_item");
    const INITIAL_POS = [0, 70, 120, 220, 330, 420];

    function circleSlideOne(){
        carouselItem[0].style.opacity = 1;
        carouselItem[0].style.left = INITIAL_POS[1] + "px";
    }

    function circleSlideTwo(){
        carouselItem[1].style.opacity = 1;
        carouselItem[1].style.left = INITIAL_POS[2] + "px";
    }

    function circleSlideThree(){
        carouselItem[3].style.left = INITIAL_POS[3] + "px";
    }
    
    function circleSlideFour(){
        carouselItem[4].style.left = INITIAL_POS[4] + "px";
    }

    function circleSlideFive(){
        carouselItem[5].style.left = INITIAL_POS[5] + "px";
    }
    
    function circleSlideSix(){
        carouselItem[5].style.opacity = 0;
        carouselItem[1].style.left = INITIAL_POS[0] + "px";
    }

    function circleSlide(){        
        const carouselSlider = document.querySelector(".circle_slider");
        carouselSlider.style.z-index()
    }

    function circleSlideInitial(){        
        for(let i = 0; i < carouselItem.length; i++){
            carouselItem[i].style.left = INITIAL_POS[i] + "px";
        }        
    }

    function slide() {
        const SHOWING_CLASS = "showing";
        const firstSlide = document.querySelector(".slider__item:first-child");        
        const currentSlide = document.querySelector(`.${SHOWING_CLASS}`);

        if (currentSlide) { // 만약 현재 슬라이드라면
            currentSlide.classList.remove(SHOWING_CLASS); // 현재 슬라이드에서 SHOWING_CLASS를 제거한다
            const nextSlide = currentSlide.nextElementSibling; // 다음 슬라이드를 정의한다.

            if (nextSlide) { //만약 다음 슬라이드가 있다면
                nextSlide.classList.add(SHOWING_CLASS); //다음 슬라이드에 SHOWING_CLASS를 붙인다.
            } else { // 다음 슬라이드가 없다면 =>  5번째 슬라이드라면(마지막 슬라이드라면)
                firstSlide.classList.add(SHOWING_CLASS); // 첫번째 슬라이드에 SHOWING_CLASS를 붙인다.
            }

        } else {
            firstSlide.classList.add(SHOWING_CLASS);
        }        
    }    
    
    slide();
    circleSlideInitial();
    setInterval(slide, 2000);
    setInterval(circleSlide, 2000);
};
