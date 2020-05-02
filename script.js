const bmiForm = document.querySelector('.bmiForm');

bmiForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const footMeters = feetToMeters(parseFloat(e.target.height.value));
    const inchesMeters = inchesToMeters(parseFloat(e.target.inches.value));
    const weight = lbsToKilos(parseInt(e.target.weight.value));

    const height = footMeters + inchesMeters;

    const BMI = calculateBMI(weight, height);
    renderBMI(BMI);
    e.target.reset();
})

const renderBMI = (data) => {
    document.querySelector('.results').textContent = '';

    const dataPara = document.createElement('p');
    dataPara.textContent = `Your BMI is : ${data.toFixed(2)}`;
    document.querySelector('.results').appendChild(dataPara)

}

const lbsToKilos = (weight) => {
    return weight / 2.205;
};

const feetToMeters = (foot) => {
    return foot / 3.281;
};

const inchesToMeters = (inches) => {
    return inches / 39.37;
};

const calculateBMI = (weight, height) => {
    return weight / (height * height);
};