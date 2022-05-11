window.addEventListener('load', start);

function start(){
    filterWrapper();
    darkMode();
}


function filterWrapper(){
    const filterBtn = document.getElementById('filter');
    const filterList = document.getElementById('filterList');
    const arrowIcon = document.querySelector('.bx-chevron-down');
    filterBtn.addEventListener('click', () =>{
        filterList.classList.toggle('active');
        arrowIcon.classList.toggle('active')
    })
    
}

function darkMode(){
    const modeToggle = document.querySelector('.navbar-toggle');
    const lighMode = document.querySelector('.light-mode');
    modeToggle.addEventListener('click', ()=> {
        lighMode.classList.toggle('dark-mode');
    })
}