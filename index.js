document.querySelectorAll(".course").forEach(function (course) {
    const moduleDetailsBtn = course.querySelector(".moduleDetailsBtn");
    const instructorDetailsBtn = course.querySelector(".instructorDetailsBtn");
    const moduleDetails = course.querySelector(".module-detail");
    const instructorCard = course.querySelector(".instructor-card");

    moduleDetailsBtn.addEventListener("click", function () {
        toggleDisplay(moduleDetails);
    });

    instructorDetailsBtn.addEventListener("click", function () {
        toggleDisplay(instructorCard);
    });
});

function toggleDisplay(element) {
    if (element.style.display === "none" || element.style.display === "") {
        element.style.display = "block";
    } else {
        element.style.display = "none";
    }
}

const contactinfo = document.querySelector(".container");
const contactbtn = document.querySelector(".contactbtn");

contactbtn.addEventListener("click", function () {
    if (contactinfo.style.display === "none" || contactinfo.style.display === "") {
        contactinfo.style.display = "flex";
    } else {
        contactinfo.style.display = "none";
    }
});

const header=document.querySelector("header")

window.addEventListener("scroll",function(){
    header.classList.toggle("sticky",windwo.scrollY >120);
})

let menu=document.querySelector('#menu-icon');
let navList=document.querySelector('.navList');

menu.onclick=()=>{
    menu.classList.toggle('bx-x');
    navList.classList.toggle('active');
}

window.onscroll=()=>{
    menu.classList.remove('bx-x');
    navList.classList.remove('active');
}




