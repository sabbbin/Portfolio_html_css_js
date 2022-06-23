
//project1
let project1 = document.querySelectorAll(".img_wrapper img");


let i = 0;
function addActiveClass1() {
  if (i < project1.length) {
    if (i == 0) {
      temp = project1.length - 1;
    } else {
      temp = i - 1;
    }

    project1[temp].classList.remove("active");
    project1[i].classList.add("active");
    i++;
  } else {
    i = 0;
  }

  setTimeout(() => {
    addActiveClass1();
  }, 2000);
}
addActiveClass1();
// project 2

let project2 = document.querySelectorAll(".img_wrapper1 img");


let i2 = 0;
function addActiveClass2() {
  if (i2 < project2.length) {
    if (i2 == 0) {
      temp = project2.length - 1;
    } else {
      temp = i2 - 1;
    }

    project2[temp].classList.remove("active");
    project2[i2].classList.add("active");
    i2++;
  } else {
    i2 = 0;
  }

  setTimeout(() => {
    addActiveClass2();
  }, 2000);
}
addActiveClass2();


// project 2

let project3 = document.querySelectorAll(".img_wrapper2 img");


let i3 = 0;
function addActiveClass3() {
  if (i3 < project3.length) {
    if (i3 == 0) {
      temp = project3.length - 1;
    } else {
      temp = i3 - 1;
    }

    project3[temp].classList.remove("active");
    project3[i3].classList.add("active");
    i3++;
  } else {
    i3 = 0;
  }

  setTimeout(() => {
    addActiveClass3();
  }, 2000);
}
addActiveClass3();

//project 3

let project4 = document.querySelectorAll(".img_wrapper3 img");


let i4 = 0;
function addActiveClass4() {
  if (i4 < project4.length) {
    if (i4 == 0) {
      temp = project4.length - 1;
    } else {
      temp = i4 - 1;
    }

    project4[temp].classList.remove("active");
    project4[i4].classList.add("active");
    i4++;
  } else {
    i4 = 0;
  }

  setTimeout(() => {
    addActiveClass4();
  }, 2000);
}
addActiveClass4();


//project 5

let project5 = document.querySelectorAll(".img_wrapper4 img");


let i5 = 0;
function addActiveClass5() {
  if (i5 < project5.length) {
    if (i5 == 0) {
      temp = project5.length - 1;
    } else {
      temp = i5 - 1;
    }

    project5[temp].classList.remove("active");
    project5[i5].classList.add("active");
    i5++;
  } else {
    i5 = 0;
  }

  setTimeout(() => {
    addActiveClass5();
  }, 2000);
}
addActiveClass5();

//project 6

let project6 = document.querySelectorAll(".img_wrapper5 img");


let i6 = 0;
function addActiveClass6() {
  if (i6 < project6.length) {
    if (i6 == 0) {
      temp = project6.length - 1;
    } else {
      temp = i6 - 1;
    }

    project6[temp].classList.remove("active");
    project6[i6].classList.add("active");
    i6++;
  } else {
    i6 = 0;
  }

  setTimeout(() => {
    addActiveClass6();
  }, 2000);
}
addActiveClass6();

//project 7
let project7 = document.querySelectorAll(".img_wrapper6 img");


let i7 = 0;
function addActiveClass7() {
  if (i7 < project7.length) {
    if (i7 == 0) {
      temp = project7.length - 1;
    } else {
      temp = i7 - 1;
    }

    project7[temp].classList.remove("active");
    project7[i7].classList.add("active");
    i7++;
  } else {
    i7 = 0;
  }

  setTimeout(() => {
    addActiveClass7();
  }, 2000);
}
addActiveClass7();




//scroll
//left

const sections= document.querySelectorAll('.slide_left')
window.addEventListener('scroll', checksection)


checksection()

function checksection(){
    const triggerbtn=window.innerHeight/5*4
    sections.forEach(section=>{
        const topsection=section.getBoundingClientRect().top
        if (topsection<triggerbtn){
           
        
            section.classList.add('show')
           
        }
        else{
            section.classList.remove('show')
        }
    })
}

const sections11= document.querySelectorAll('.slide_right')
window.addEventListener('scroll', checksection1)


checksection1()

function checksection1(){
   const triggerbtn=window.innerHeight/5*4
    sections11.forEach(section=>{
        const topsection=section.getBoundingClientRect().top
        if (topsection<triggerbtn){
            
            section.classList.add('show')
        
        }
        else{
            section.classList.remove('show')
        }
    })
}

let close_btn=document.querySelector('.close')
let open_btn=document.querySelector('.open')
let navbar= document.querySelector('.navbar')


close_btn.addEventListener('click',()=>{
   
    navbar.classList.remove('active')
    open_btn.classList.remove('active')
    close_btn.classList.remove('active')
})

open_btn.addEventListener('click',()=>{
  
    navbar.classList.add('active')
    close_btn.classList.add('active')
    open_btn.classList.add('active')
})