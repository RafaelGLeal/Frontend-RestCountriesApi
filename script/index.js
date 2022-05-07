window.addEventListener('load', start);

function start(){
    filterWrapper();
    darkMode();
}

function filterWrapper(){
    const filterBtn = document.getElementById('filter');
    console.log(filterBtn);
    filterBtn.addEventListener('click', ()=>{
        filterBtn.classList.toggle('active');
    })
}

function darkMode(){
    const modeToggle = document.querySelector('.navbar-toggle');
    const lighMode = document.querySelector('.light-mode');
    modeToggle.addEventListener('click', ()=> {
        lighMode.classList.toggle('dark-mode')
    })
}