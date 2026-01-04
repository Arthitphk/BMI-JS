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
    let bmi = w/((h/100)*(h/100));
    let bmi_result = bmi.toFixed(2);
    //  แสดงหน้าจอ
    resultBmi.innerText =`${bmi_result}`
    // แสดงสถานะ
    if (bmi_result < 18.5) {
        resultStatus.innerText = 'ผอมเกินไป'
    } else if (bmi_result <= 24.0) {
        resultStatus.innerText = 'น้ำหนักปกติ เหมาะสม' 
    } else if (bmi_result >= 29.9) {
        resultStatus.innerText = 'อ้วน' 
    } else if (bmi_result > 30.0) {
        resultStatus.innerText = 'อ้วนมาก' 
    }       
}






