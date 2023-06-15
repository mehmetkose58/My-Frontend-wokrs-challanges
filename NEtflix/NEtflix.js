window.addEventListener("DOMContentLoaded", () => {
    var liItem = document.querySelectorAll("main .sss .container ul li");
    var liKapat = document.querySelectorAll("body > main > div.sss > div > ul > li > h3 > i");
    for (var i = 0; i < liItem.length; i++) {
        liItem[i].addEventListener("click", function() {
            this.classList.toggle("active");
            if (this.classList[0] == "active") {
                gsap.to(this, { height: "auto", duration: .5 });
                gsap.to(liKapat[i], { rotate: 45 + "deg", duration: .5 });

            } else {
                gsap.to(this, { height: 100 + "px", duration: .5 });
                gsap.to(liKapat[i], { rotate: 0 + "deg", duration: .5 });

            }
        });
    }
});