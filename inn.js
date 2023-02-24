//header,scrollsection start
let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');


menu.onclick = ()=>{
    menu.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
}
//header,scrollsection end




//search page start//
document.querySelector('#search-icon').onclick= function(){
    document.querySelector('#search_form').classList.toggle('active');
}

document.querySelector('#close').onclick= function(){
    document.querySelector('#search_form').classList.remove('active');
}
//search page end//





//home-swiper start
var swiper = new Swiper(".home-slider", {
    spaceBetween: 40,
    centeredSlides: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    loop:true,
  });
//home-swiper end


//房間頁面圖片檢視 stars//
let roomslide=document.querySelector('.room-slide');
let eye201 = document.querySelector('#eye201');
let room201 = document.querySelector('.room201-swiper');
let eye301 = document.querySelector('#eye301');
let room301 = document.querySelector('.room301-swiper');
let eye302 = document.querySelector('#eye302');
let room302 = document.querySelector('.room302-swiper');
let eye303 = document.querySelector('#eye303');
let room303 = document.querySelector('.room303-swiper');
let eye202 = document.querySelector('#eye202');
let room202 = document.querySelector('.room202-swiper');
let eyeall = document.querySelector('#eyeall');
let roomall = document.querySelector('.roomall-swiper');

eye201.onclick=()=>{
  roomslide.classList.toggle('active');
  room201.classList.add('active');
}
eye301.onclick=()=>{
  roomslide.classList.toggle('active');
  room301.classList.add('active');
  room201.classList.remove('active');
}
eye302.onclick=()=>{
  roomslide.classList.toggle('active');
  room302.classList.toggle('active');
  room201.classList.remove('active');
  room301.classList.remove('active');
}
eye303.onclick=()=>{
  roomslide.classList.toggle('active');
  room303.classList.toggle('active');
  room201.classList.remove('active');
  room301.classList.remove('active');
  room302.classList.remove('active');
}
eye202.onclick=()=>{
  roomslide.classList.toggle('active');
  room202.classList.toggle('active');
  room201.classList.remove('active');
  room301.classList.remove('active');
  room302.classList.remove('active');
  room303.classList.remove('active');
}
eyeall.onclick=()=>{
  roomslide.classList.toggle('active');
  roomall.classList.add('active');
  room201.classList.remove('active');
  room301.classList.remove('active');
  room302.classList.remove('active');
  room303.classList.remove('active');
  room202.classList.remove('active');
}
document.querySelector('#close-pic').onclick= function(){
  roomslide.classList.remove('active');
}

var swiper = new Swiper(".room201-swiper", {
  grabCursor: true,
  effect: "creative",
  creativeEffect: {
    prev: {
      shadow: true,
      translate: [0, 0, -400],
    },
    next: {
      translate: ["100%", 0, 0],
    },
  },
});
var swiper = new Swiper(".room301-swiper", {
  grabCursor: true,
  effect: "creative",
  creativeEffect: {
    prev: {
      shadow: true,
      translate: [0, 0, -400],
    },
    next: {
      translate: ["100%", 0, 0],
    },
  },
});
var swiper = new Swiper(".room302-swiper", {
  grabCursor: true,
  effect: "creative",
  creativeEffect: {
    prev: {
      shadow: true,
      translate: [0, 0, -400],
    },
    next: {
      translate: ["100%", 0, 0],
    },
  },
});
var swiper = new Swiper(".room303-swiper", {
  grabCursor: true,
  effect: "creative",
  creativeEffect: {
    prev: {
      shadow: true,
      translate: [0, 0, -400],
    },
    next: {
      translate: ["100%", 0, 0],
    },
  },
});
var swiper = new Swiper(".room202-swiper", {
  grabCursor: true,
  effect: "creative",
  creativeEffect: {
    prev: {
      shadow: true,
      translate: [0, 0, -400],
    },
    next: {
      translate: ["100%", 0, 0],
    },
  },
});
var swiper = new Swiper(".roomall-swiper", {
  grabCursor: true,
  effect: "creative",
  creativeEffect: {
    prev: {
      shadow: true,
      translate: [0, 0, -400],
    },
    next: {
      translate: ["100%", 0, 0],
    },
  },
});
//房間頁面圖片檢視 end//

//房間資訊分享 stars//
let share = document.querySelector('.share');
let sharebtn = document.querySelectorAll('.room .box-container .box .fa-share');

sharebtn.forEach(btn=>{
  btn.onclick = () =>{
    share.classList.toggle('active');
  }
});

document.querySelector('#close-share').onclick = () =>{
  share.classList.remove('active');
}
// document.querySelector('#copy').onclick = () =>{
//   share.classList.remove('active');
// }

//房間資訊分享 end/

//diary-swiper start//
var swiper = new Swiper(".dairy-slider", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  pagination: {
    el: ".swiper-pagination",
  },
});

//diary-swiper end//



//scroll-up start//
window.onscroll = () =>{
  if(window.scrollY>60){
    document.querySelector('#scroll-up').classList.add('active');
  }else{
    document.querySelector('#scroll-up').classList.remove('active');
  }
}
//scroll-up end//


//頂部頁簽-section對應 start//
let section = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header .navbar a');

window.onscroll = () =>{
    menu.classList.remove('fa-xmark');
    navbar.classList.remove('active');
    share.classList.remove('active');
    roomslide.classList.remove('active');

    section.forEach(sec=>{

      let top = window.scrollY;
      let height = sec.offsetHeight;
      let offset = sec.offsetTop - 150;
      let id = sec.getAttribute('id');
  
      if(top >= offset && top < offset + height){

        navLinks.forEach(links=>{
          links.classList.remove('active');
          document.querySelector('header .navbar a[href*='+id+']').classList.add('active');
        });
      };
  
    });
}
//頂部頁簽-section對應 end//


