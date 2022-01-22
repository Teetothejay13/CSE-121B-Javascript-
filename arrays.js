let myArray = [1, 2, 3];

myArray.push(4);

console.log(myArray)


function makeList(value){
    const htmlString = `<li>${value}</li>`;
    console.log(htmlString);
    document.querySelector("#listElement").innerHTML += htmlString;
}

myArray.forEach(makeList);
