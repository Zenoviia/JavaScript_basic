'use strict';


let actor = {

    name: "Tom Hardy",
    age: 44,
    gender: "Male",
    nationality: "British",
    lastFilm: "Venom: Let There Be Carnage"

    };

let getEntries = (obj) => {

    let objKeys = Object.keys(obj);
    let objKeysLength = objKeys.length;
    let objValues = Object.values(obj);
    let entries = [];

    for (let i = 0; i < objKeysLength; i++) {
        entries.push([objKeys[i], objValues[i]]);
    }
    return entries;
}

console.log(getEntries(actor));