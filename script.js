let weight = document.getElementById("weight");
let height = document.getElementById("height");
let calculateBtn = document.getElementById("calculate_btn");
let resultBmi = document.getElementById("result_bmi");
let resultStatus = document.getElementById("result_status");

calculateBtn.addEventListener("click", calculateBMI);

function calculateBMI() {
    let w = parseInt(weight.value);
    let h = parseInt(height.value);
    // คำนวณ BMI
    let bmi = w / ((h/100) * (h/100)).toFixed(2);

    resultBmi.innerText =`${bmi}`
    
}






