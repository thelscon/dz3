'use strict';

let fio = prompt ('Ф.И.О.: ');
let age = Number (prompt ('Ваш возраст (лет): '));
let workExp = Number (prompt ('Опыт работы (лет): '));
let relocation = confirm ('Согласны ли вы на переезд?');
let lang = confirm ('Владеете ли вы английским языком?');

let err = ''; //Причина отказа
let repeat = ''; //Не указанные данные


if (!fio) {
    repeat += `\n- Ф.И.О.`;
}
if (!age) {
    repeat += `\n- Возраст.`;
}
else {
    if (age < 30) {
        err += `\nВаш возраст ниже 30 лет!`;
    }
}
if (!workExp) {
    repeat += '\n- Опыт работы.';
}
else {
    if (workExp < 3) {
        err += `\nВаш опыт работы меньше 3-х лет!`;
    }
}
if (!relocation) {
    err += `\nСожалеем, что переезд невозможен!`;
}

if (!lang) {
    err += `\nКандидат должен владеть английским языком!`;
}   

if (repeat) {
    alert ('Введите. пожалуйста, все данные, а именно: ' + repeat);
}
else {
    if (err) {
        alert ('Вы не подходите по причине: ' + err);
    }  
    else {
        alert ('Вы нам подходите.');
    }
}
