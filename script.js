document.addEventListener('DOMContentLoaded', function() {
    const burger = document.getElementById('burger-menu');
    const menuUl = document.getElementById('menu-ul');
    const line = document.getElementById('line');

    menuUl.classList.remove("menu-burg");
    line.classList.remove("line");
    burger.classList.remove("lin");

    burger.addEventListener("click", function() {
        menuUl.classList.toggle("menu-burg");
        line.classList.toggle("line");
        burger.classList.toggle("lin"); 
    }); 
       
        document.addEventListener("click", function(event) {
            if (!burger.contains(event.target)) {
                menuUl.classList.remove("menu-burg");
                line.classList.remove("line");
                burger.classList.remove("lin");
            }
    });
});
