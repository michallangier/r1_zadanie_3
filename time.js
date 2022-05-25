let czas = new Date();

let miesiac = czas.getMonth() + 1;

if (miesiac < 10) miesiac = '0' + miesiac;

let data = czas.getDate() + '-' + (czas.getMonth() + 1) + '-' + czas.getFullYear();

let minutki = czas.getMinutes();
if (minutki < 10) minutki += '0';

let sekundy = czas.getSeconds();
if (sekundy < 10) sekundy = '0' + sekundy;

let godzina = czas.getHours() + ":" + minutki + ":" + sekundy;

let data_i_godzina = data + ' ' + godzina;

console.log(data_i_godzina);