const form = document.querySelector("form");
form.addEventListener('submit', function (e) {
    e.preventDefault();
    const height = parseInt(document.querySelector("#height").value)
    const weight = parseInt(document.querySelector("#weight").value)
    const results = document.querySelector("#results")
const cetagories  = document.querySelector("#cetagories")



    if (height === '' || height < 0 || isNaN(height)) {
        results.innerHTML = `Please input a valid value ${height}`;
    } else if (weight === "" || weight < 0 || isNaN(weight)) {
        results.innerHTML = `Please input a valid value ${weight}`;
    }
    else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2)
        results.innerHTML = `<span>${bmi}</span>`
    } 
    if (results>0) {
      cetagories.innerHTML = "over weight"
    } else {
      
    }{

    }


});
// if (results>0) {
//   cetagories.innerHTML = `${results} over weight`
  
// }





