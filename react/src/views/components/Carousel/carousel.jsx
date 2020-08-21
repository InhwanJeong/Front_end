import React, { Component } from "react";

import StyledCarousel from "../../styled/carousel";

class Carousel extends Component{
    render(){
        return (
            <StyledCarousel>
                <div className="slider">
                    <div className="slider__item"><img src={process.env.PUBLIC_URL + '/images/dogs.jpg'} alt="img"></img></div>
                    <div className="slider__item"><img src={process.env.PUBLIC_URL + "/images/guitar.jpg"}alt="img"></img></div>
                    <div className="slider__item"><img src={process.env.PUBLIC_URL + "/images/pair.jpg"}alt="img"></img></div>
                    <div className="slider__item"><img src={process.env.PUBLIC_URL + "/images/architect.jpg"}alt="img"></img></div>
                    <div className="slider__item"><img src={process.env.PUBLIC_URL + "/images/landscape.jpg"}alt="img"></img></div>
                </div>
    
                <div className="circle_slider">
                    <div className="circle_slider_item"><img src={process.env.PUBLIC_URL + "images/architect.jpg"}alt="img"></img></div>
                    <div className="circle_slider_item"><img src={process.env.PUBLIC_URL + "images/pair.jpg"}alt="img"></img></div>
                    <div className="circle_slider_item"><img src={process.env.PUBLIC_URL + "images/guitar.jpg"}alt="img"></img></div>
                    <div className="circle_slider_item"><img src={process.env.PUBLIC_URL + "images/dogs.jpg"}alt="img"></img></div>
                    <div className="circle_slider_item"><img src={process.env.PUBLIC_URL + "images/landscape.jpg"}alt="img"></img></div>
                    <div className="circle_slider_item"><img src={process.env.PUBLIC_URL + "images/architect.jpg"}alt="img"></img></div>
                    <div className="circle_slider_item"><img src={process.env.PUBLIC_URL + "images/architect.jpg"}alt="img"></img></div>
                </div>    
            </StyledCarousel>
        );
    }   
    componentDidMount(){
        const SHOWING_CLASS = "showing";
        const firstSlide = document.querySelector(".slider__item:first-child");    
        const circleSlider = document.querySelector(".circle_slider");
        const CIRCLE_ITEM_POS_TOP = ["0", "50", "90", "120", "90", "50", "0"];
        const CIRCLE_ITEM_POS_LEFT = ["0", "50", "120", "200", "310", "400", "450"];
        const CIRCLE_ITEM_SIZE = ["50", "50", "70", "100", "70", "50", "50"];    
    
        let backNum = 0;
        let backNum2 = 6;
        let backNum3 = 5;
        let count = 0;    
    
        const circleSlideImg = [
            document.querySelector(".circle_slider_item:nth-child(1)>img"),
            document.querySelector(".circle_slider_item:nth-child(2)>img"),
            document.querySelector(".circle_slider_item:nth-child(3)>img"),
            document.querySelector(".circle_slider_item:nth-child(4)>img"),
            document.querySelector(".circle_slider_item:nth-child(5)>img"),
            document.querySelector(".circle_slider_item:nth-child(6)>img"),
            document.querySelector(".circle_slider_item:nth-child(7)>img")
        ];
        const circleSlideList = [
            document.querySelector(".circle_slider_item:nth-child(1)"),
            document.querySelector(".circle_slider_item:nth-child(2)"),
            document.querySelector(".circle_slider_item:nth-child(3)"),
            document.querySelector(".circle_slider_item:nth-child(4)"),
            document.querySelector(".circle_slider_item:nth-child(5)"),
            document.querySelector(".circle_slider_item:nth-child(6)"),
            document.querySelector(".circle_slider_item:nth-child(7)")
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
        
        function circleSlide(){        
            // 캐러셀 원 크기 변경 소스        
            for(let i = 0; i<circleSlideImg.length; i++){
                circleSlideImg[i].style.width = CIRCLE_ITEM_SIZE[(i+count+1)%7] + "px";
                circleSlideImg[i].style.height = CIRCLE_ITEM_SIZE[(i+count+1)%7] + "px";                                    
            }
    
            // 캐러셀 투명도 조절
            if(backNum === -1) backNum = 6;        
            if(backNum2 === -1) backNum2 = 6;
            if(backNum3 === -1) backNum3 = 6;
    
            circleSlideImg[backNum].style.opacity = "1.0";
            circleSlideImg[backNum2].style.opacity = "0";
            circleSlideImg[backNum3].style.opacity = "0";        
    
            // 마지막 슬라이드 사진 바꾸기
            const circleSlide = document.querySelector(".circle_slider");                
            const imgs = circleSlide.querySelectorAll("img");
            
            imgs[backNum].src = imgs[backNum3].src;
            imgs[backNum2].src = imgs[backNum3].src;
            
    
            // 캐러셀 원 이동 소스
            for(let i = 0; i<circleSlideList.length; i++){
                circleSlideList[i].style.top = CIRCLE_ITEM_POS_TOP[(i+count+1)%7] + "px";
                circleSlideList[i].style.left = CIRCLE_ITEM_POS_LEFT[(i+count+1)%7] + "px";            
            }        
            
            count += 1;
            backNum -= 1;
            backNum2 -= 1;
            backNum3 -= 1;        
        }        
        
        // 창을 켰을 때 circleSlider 표시 및 숨김    
        if(window.innerWidth < 700){
            circleSlider.style.opacity = "0";
        }
        else{
            circleSlider.style.opacity = "1";
        }
    
        // 창 사이즈 조절시 circleSlider 표시 및 숨김
        function circleSliderResize(){
            if(window.innerWidth < 700){
                circleSlider.style.opacity = "0";
            }
            else{
                circleSlider.style.opacity = "1";
            }
        }
    
        window.addEventListener('resize', circleSliderResize);        
    
        slide();
        setInterval(slide, 2000);
        setInterval(circleSlide, 2000);
    };
    
}

export default Carousel;