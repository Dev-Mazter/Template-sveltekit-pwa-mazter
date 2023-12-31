// @ts-nocheck
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
    // Replace with
    // import { goto } from '$app/navigation';
    // goto('/redirectpage');
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

export function showPhone(phone) {
    const numbers = phone.split("");
    for (let i = 0; i < numbers.length; i++) {
        if (i % 3 === 2) {
            numbers.splice(i, 0, " ");
        }
    }
    return numbers.join("");
}

export function formatCurrency(numero) {
    let partes = numero.toString().split('.');
    partes[0] = partes[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    return '$ ' + (partes[1] ? partes.join('.') : partes[0]);
}