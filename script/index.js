import { renderCountries } from "./render.js"

'use strict'
window.addEventListener('load', start);

function start(){
    const select = document.querySelectorAll('.regionSelect');
    const selectRegion = Array.from(select).forEach((region) => region.addEventListener('click', renderByRegion))
    const selectAll = document.querySelector('.selecAll').addEventListener('click',renderAll);
    const searchCountry = document.getElementById('search')
    .addEventListener('keyup', function(){
        const country = this.value;
        renderByCountry(country)
    })

    renderAll()
}
export const resetUl = function(){
    const flagSection = document.querySelector('.flag-ul');
    return flagSection.innerHTML = ''; 
}

export const renderAll = async function(){
    const resp = await fetch(`https://restcountries.com/v3.1/all`);
    const data = await resp.json();
    setTimeout(() => {
        const dataArray = []
        dataArray.push(data)
        dataArray[0].map((country)=>{
            renderCountries(country);
        })
    }, 1000);
    resetUl()
}

function renderByRegion(region){
    let filteredRegion = region.target.value;
    async function fetchRegion(region){
        const resp = await fetch(`https://restcountries.com/v3.1/region/${region}`);
        const data = await resp.json();
        setTimeout(() => {
            const dataArray = [];
            dataArray.push(data);
            dataArray[0].map((country)=>{
                renderCountries(country);
            
        })
        }, 1000);
    }
    resetUl()
    return fetchRegion(filteredRegion);
}

function renderByCountry(country){
    async function fetchRegion(country){
        
        const resp = await fetch(`https://restcountries.com/v3.1/name/${country}
        `);
        const data = await resp.json();
        setTimeout(() => {
            const dataArray = [];
            dataArray.push(data);
            if(country === ''){
                return renderAll()
            }
            dataArray[0].map((country)=>{
                return renderCountries(country);
            })
            
        }, 100);
    }
    resetUl()
    fetchRegion(country)
}