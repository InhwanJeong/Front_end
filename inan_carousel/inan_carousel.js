window.onload = function () {
    const SHOWING_CLASS = "showing";
    const firstSlide = document.querySelector(".slider__item:first-child");

    function slide() {

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

    function circleSlide(){
        const circleSlide = document.querySelector(".circle_slider");        
        const imgs = circleSlide.querySelectorAll("img");
        let imgSrcs = [];
                
        for (let i = 0; i < imgs.length; i++) {
            imgSrcs.push(imgs[i].src);                 
        }
        
        for (let i = 1; i < imgs.length; i++) {                            
            imgs[i].src = imgSrcs[i-1]; 
        }
        imgs[0].src = imgSrcs[4];        
        setInterval(circleSlideLoop, 2000);
    }
    
    function circleSlideLoop(){
        const circleSlide = document.querySelector(".circle_slider");        
        const imgs = circleSlide.querySelectorAll("img");
        let imgSrcs = [];
                
        for (let i = 0; i < imgs.length; i++) {
            imgSrcs.push(imgs[i].src);                 
        }
        
        for (let i = 1; i < imgs.length; i++) {                            
            imgs[i].src = imgSrcs[i-1]; 
        }
        imgs[0].src = imgSrcs[4]; 
    }
    
    slide();
    setInterval(slide, 2000);
    setTimeout(circleSlide, 4000);
};
