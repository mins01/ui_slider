"use strict";

class Slider{
    slider=null;
    items=[];
    constructor(slider){
        if(slider){
            this.slider = slider;
        }
        this.init();
    }
    get direction(){
        return this.slider.dataset.sliderDirection?this.slider.dataset.sliderDirection:'left';
    }
    get items(){
        return this.slider.querySelectorAll('.slider-item-container > .slider-item:')
    }
    get firstItem(){
        return this.slider.querySelector('.slider-item-container > .slider-item:first-child')
    }
    get lastItem(){
        return this.slider.querySelector('.slider-item-container > .slider-item:last-child')
    }
    init(){
        this.slider.addEventListener('transitionstart',this.ontransitionstart);
        this.slider.addEventListener('transitionrun',this.ontransitionrun);
        this.slider.addEventListener('transitionend',this.ontransitionend);
        this.slider.addEventListener('transitioncancel',this.ontransitioncancel);
    }
    ontransitionstart(event){
        console.log(event);
    }
    ontransitionrun(event){
        console.log(event);
        
    }
    ontransitionend = (event)=>{
        console.log(event);
        this.nextEnd();
    }
    ontransitioncancel(event){
        console.log(event);
    }

    next(){
        this.moveOn(this.firstItem,this.direction);
    }
    nextEnd(){
        this.moveOff(this.firstItem,this.direction);
    }

    moveOn(el,direction){
        let rect = el.getBoundingClientRect();
        el.classList.add('slide-on');
        el.style.setProperty('margin-left',(rect.width*-1)+'px');
    }
    moveOff(el,direction){
        el.classList.remove('slide-on');
        el.style.setProperty('margin-left','0px');
        el.parentNode.appendChild(el);
    }

}