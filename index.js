const tabs = document.querySelector(".tabs");
const btns = document.querySelectorAll(".button");
const articles = document.querySelectorAll(".content");


tabs.addEventListener("click", function(event){
    console.log()
    const id = event.target.dataset.id;

    if(id){
        btns.forEach(function(btn){
            btn.classList.remove("live");
         });
         event.target.classList.add("live");
         articles.forEach(function(article){
            article.classList.remove("live");  
         });
         const element = document.getElementById(id);
         element.classList.add("live");
    }
})