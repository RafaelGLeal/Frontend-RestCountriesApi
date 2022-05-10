'use strict'

window.addEventListener('load', start);

/*

const select = document.querySelectorAll('.regionSelect');
console.log(select)
const filterSelect = Array.from(select).forEach(function(item){
    item.addEventListener('onclick', console.log('oi'))
})

*/
function start(){
    filterWrapper();
    darkMode();
    handleData()
}


function filterWrapper(){
    const filterBtn = document.getElementById('filter');
    const filterList = document.getElementById('filterList')
    filterBtn.addEventListener('click', () =>{
        filterList.classList.toggle('active');
    })
    
}

function darkMode(){
    const modeToggle = document.querySelector('.navbar-toggle');
    const lighMode = document.querySelector('.light-mode');
    modeToggle.addEventListener('click', ()=> {
        lighMode.classList.toggle('dark-mode')
    })
}

function handleData(){
    const arrayData = fetchData();
    let newArray = []
    setTimeout(()=>{
        arrayData
        .then((res) => {
            let arr = []
            arr.push(res)
            newArray = arr[0]
            return newArray;
        })
        .catch((err) => {
            console.log('error')
        })
    },2000)
}

async function fetchData(){
    const resp = await fetch(`https://restcountries.com/v3.1/all`)
    const data = await resp.json()
    return data;
}

function renderCountries(country){
    
    return render(country)
}
newArray.map((country)=> render(country))

function render(country){

    const flagSection = document.querySelector('.flag-ul')
    const list = document.createElement('li')
    const btn = document.querySelectorAll('.btn')
    btn.forEach((button) =>{
        let countries = button.value
        button.addEventListener('click', renderCountries(countries))
    })
    flagSection.appendChild(list)

    renderCountries(country)
    function renderCountries(country){
        list.innerHTML = `
                <div class="image">
                    <img src="${country.flags.png}">
                </div>
                <div class="wrapper">
                    <div class="country">${country.name.common}</div>
                    <div class="population">
                        <h3>Population:</h3>
                        <h4>${country.population}</h4>
                    </div>
                    <div class="region">
                        <h3>Region:</h3>
                        <h4>${country.region}</h4>
                    </div>
                    <div class="capital">
                        <h3>Capital:</h3>
                        <h4>${country.capital}</h4>
                    </div>   
                </div>` 
    } 
}

//array[0].filter((region) =>{
//    if(region.region == africa){
//        handleObjectsApi(region)
//    }
//})