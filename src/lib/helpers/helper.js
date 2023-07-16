/*
For use
import { myFunction } from "$lib/helpers/helper.js"; */
export function myFunction() {
    return "siuuuuuuuuuu"
}

export function money(number = 0) {
    return `$${number.toLocaleString('es-ES')}`;
}
export function changePage(url = '') {
    let shopLink = document.querySelector(`a[href*="${url}"]`);
    if (!shopLink) {
        const link = document.createElement('a');
        link.href = `${url}`;
        link.style.width = '0.1px';
        link.style.height = '0.1px';
        const body = document.body;
        body.appendChild(link);
        shopLink = document.querySelector(`a[href*="${url}"]`);
    } 
    // @ts-ignore
    shopLink.click();
}