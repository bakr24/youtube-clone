const menuBtn = document.getElementById("menuBtn");
const sidebar = document.getElementById("sidebar");
const content = document.querySelector(".content");
const searchBtn = document.getElementById("searchBtn");
const searchInput = document.getElementById("searchInput");
const categories = document.querySelectorAll(".categories button");
const cards = document.querySelectorAll(".video-card");

menuBtn.addEventListener("click", () => {
    if (window.innerWidth <= 768) {
        sidebar.classList.toggle("show");
    } else {
        sidebar.classList.toggle("close");
        content.classList.toggle("expand");
    }
});


function searchVideos() {
    const value = searchInput.value.toLowerCase().trim();
    cards.forEach(card => {
        const title = card.querySelector("h4").textContent.toLowerCase();
        if (title.includes(value)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
}

searchBtn.addEventListener("click", searchVideos);
searchInput.addEventListener("keyup", (event) => {
    if (event.key === "Enter") {
        searchVideos();
    }
});

categories.forEach(button => {
    button.addEventListener("click", () => {
        categories.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");
        const selected = button.dataset.category;
        cards.forEach(card => {
            const cardCategory = (card.dataset.category || "").toLowerCase();
            if (selected === "all") {
                card.style.display = "block";
            } else if (cardCategory === selected) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        });
    });
});

const darkBtn = document.createElement("i");
darkBtn.className = "fa-solid fa-moon";
darkBtn.style.cursor = "pointer";
darkBtn.style.fontSize = "20px";

document.querySelector(".nav-right").prepend(darkBtn);
darkBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    if(document.body.classList.contains("dark")){
        darkBtn.className = "fa-solid fa-sun";
    }else{
        darkBtn.className = "fa-solid fa-moon";
    }
});

window.addEventListener("click",(event)=>{
    if(window.innerWidth <= 768){
        if(!sidebar.contains(event.target) &&
        !menuBtn.contains(event.target)){
            sidebar.classList.remove("show");
        }
    }
});