"use strict";

const obj = {
    name: 'Alex',
    age: 33,
    adress: {
        country: 'UA',
        city: 'Dnipro',
    }
}
// const a = copy(obj);

function copy(val) {
    if ( typeof val !== "function" || val === null) return val;

    if (Array.isArray(val)) return val.map((el) => cope(el));

    const objCopy = {};

    for ( key in val) {
        objCopy[key] = copy(val[key]) ;
    }

    return objCopy;
}