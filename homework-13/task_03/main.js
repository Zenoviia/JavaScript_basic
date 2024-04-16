'use strict';


const actor = {
    name: "Tom Hardy",
    age: 44,
    gender: "Male",
    nationality: "British",
    lastFilm: "Venom: Let There Be Carnage"
};

let cloneObject = (obj, ...keysToDelete) => {

    let cloneObject = {...obj}

    keysToDelete.forEach(key => {
        delete cloneObject[key];
    })

    return cloneObject;

}

const clonedActor = cloneObject(actor, "nationality", "age");
console.log(clonedActor);