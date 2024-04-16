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

    for (let i = 0; i < objKeysLength; i++) {
        console.log([objKeys[i], objValues[i]]);
    }
    
}

getEntries(actor);