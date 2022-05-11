import { resetUl, renderAll } from "./index.js";
export const renderCountries = function (country){
    const flagSection = document.querySelector('.flag-ul');
    const list = document.createElement('li');
    flagSection.appendChild(list);

    list.innerHTML = `
            <div class="image">
                <img src="${country.flags.png}" alt="country flag">
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
            </div>` ;
    list.addEventListener('click', function(){
        const flagDetail = document.querySelector('.flag-detail');
        const filterSection = document.querySelector('.filter-section');
        
        filterSection.classList.toggle('active');
        flagDetail.classList.toggle('active');
        
        resetUl();
        flagDetail.innerHTML = `
            <button class="btn-back"><i class='bx bx-left-arrow-alt'></i>Back</button>
            <div class="image">
                <img src="${country.flags.svg}" alt="country flag">
            </div>
            <div class="name">
                <h2>${country.name.common}</h2>
            </div>
            <div class="wrapper">
                <div class="population">
                    <h3>Population:</h3>
                    <h4>${country.population}</h4>
                </div>
                <div class="region">
                    <h3>Region:</h3>
                    <h4>${country.region}</h4>
                </div>
                <div class="subregion">
                    <h3>Sub region:</h3>
                    <h4>${country.subregion}</h4>
                </div>
                <div class="capital">
                    <h3>Capital:</h3>
                    <h4>${country.capital}</h4>
                </div>
                <div class="domain">
                    <h3>Top Level Domain:</h3>
                    <h4>${country.tld}</h4>
                </div>   
                <div class="currencies">
                    <h3>Currencies:</h3>
                    <h4>${Object.keys(country.currencies)}</h4>
                </div>  
                <div class="languages">
                    <h3>Languages:</h3>
                    <h4>${Object.values(country.languages)}</h4>
                </div> 
            </div>
        `
        const btnBack = document.querySelector('.btn-back').addEventListener('click', function(){
            filterSection.classList.remove('active');
            flagDetail.classList.remove('active');
            flagDetail.innerHTML = ''
            resetUl();
            renderAll()
        })
    })
} 
