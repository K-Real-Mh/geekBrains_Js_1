'use strict'

/**
 * преобразует число от 0 до 999 в объект
 * @param {number} num число от 0 до 999
 * @returns {{}|{tens: number, units: number, hundreds: number}}
 */
function numberToObject(num) {
    if (!checkNumber(num)) {
        return {};
    }

    let units = num % 10;
    let tens = Math.floor(num / 10 % 10);
    let hundreds = Math.floor(num / 100);

    return {
        units: units,
        tens: tens,
        hundreds: hundreds,
    }
}

/**
 * проверяет на число, целое число и диапазон от 0 до 999
 * @param {number} num число
 * @returns {boolean}
 */
function checkNumber(num) {
    if (!Number.isInteger(num) || isNaN(num) || num < 0 || num > 999 ) {
        console.log('Число введено неверно');
        return false;
    } else {
        return true;
    }
}

