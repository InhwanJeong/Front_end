window.onload = function () {
    const SHOWING_CLASS = "showing";
    const firstSlide = document.querySelector(".slider__item:first-child");
    ANIMATION_NAME = ["first_ani", "second_ani", "third_ani", "fourth_ani", "fifth_ani", "sixth_ani"];  
    CIRCLE_ITEM_POS_TOP = ["0", "50", "90"];
    CIRCLE_ITEM_POS_LEFT = ["0"];
    
    let count = 0;    
    const circleSlides = [
        document.querySelector(".circle_slider_item:nth-child(1)>img"),
        document.querySelector(".circle_slider_item:nth-child(2)>img"),
        document.querySelector(".circle_slider_item:nth-child(3)>img"),
        document.querySelector(".circle_slider_item:nth-child(4)>img"),
        document.querySelector(".circle_slider_item:nth-child(5)>img"),
        document.querySelector(".circle_slider_item:nth-child(6)>img")
    ];

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

    //todo 마지막 슬라이드 사진 바꾸기
    //todo 좌표값 실제로 바꾸기
    
    function circleSlide(){        
        // for(let i = 0; i<circleSlides.length; i++){
        //     circleSlides[i].classList.remove("first_ani");
        //     circleSlides[i].classList.remove("second_ani");
        //     circleSlides[i].classList.remove("third_ani");
        //     circleSlides[i].classList.remove("fourth_ani");
        //     circleSlides[i].classList.remove("fifth_ani");
        //     circleSlides[i].classList.remove("sixth_ani");                        
        // }

        // for(let i = 0; i<circleSlides.length; i++){
        //     circleSlides[i].classList.add(ANIMATION_NAME[(i+count)%6]);
        // }
        const test = document.querySelector(".circle_slider_item:nth-child(3)");
        test.style.top = "90px";
        test.style.left = "120px";
        count += 1;        
    }

    // function circleSlide(){
    //     const circleSlide = document.querySelector(".circle_slider");                
    //     const imgs = circleSlide.querySelectorAll("img");
    //     let imgSrcs = [];
                
    //     for (let i = 0; i < imgs.length; i++) {
    //         imgSrcs.push(imgs[i].src);                 
    //     }
        
    //     for (let i = 1; i < imgs.length; i++) {                            
    //         imgs[i].src = imgSrcs[i-1]; 
    //     }
    //     imgs[0].src = imgSrcs[4];        
    //     setInterval(circleSlideLoop, 2000);
    // }
    
    // function circleSlideLoop(){
    //     const circleSlide = document.querySelector(".circle_slider");        
    //     const imgs = circleSlide.querySelectorAll("img");
    //     let imgSrcs = [];
                
    //     for (let i = 0; i < imgs.length; i++) {
    //         imgSrcs.push(imgs[i].src);                 
    //     }
        
    //     for (let i = 1; i < imgs.length; i++) {                            
    //         imgs[i].src = imgSrcs[i-1]; 
    //     }
    //     imgs[0].src = imgSrcs[4]; 
    // }
    
    slide();
    setInterval(slide, 2000);
    setInterval(circleSlide, 2000);
};
