const scrollContainer = document.querySelector(".for_project");
const backBtn = document.getElementById("backBtn");
const nextBtn = document.getElementById("nextBtn");

scrollContainer.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    scrollContainer.scrollLeft += evt.deltaY;
});

nextBtn.addEventListener("click", ()=> {
    scrollContainer.style.scrollBehavior = "smooth";
    scrollContainer.scrollLeft += 1290;
});

backBtn.addEventListener("click", ()=> {
    scrollContainer.style.scrollBehavior = "smooth";
    scrollContainer.scrollLeft -= 1290;
});


const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if(entry.isIntersecting){
            entry.target.classList.add('active');
        }else{
            entry.target.classList.remove('active');
        }

    });


});

const section = document.querySelectorAll('.reveal');
section.forEach((show) => observer.observe(show));


$("#menulist").hide();
$("#menu-btn").click(function(){
    $("#menulist").toggle(100);
})


