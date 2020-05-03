const bmiForm = document.querySelector('.bmiForm');
const resultsWrapper = document.querySelector('.results-wrapper')

bmiForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const footMeters = feetToMeters(parseFloat(e.target.height.value));
    const inchesMeters = inchesToMeters(parseFloat(e.target.inches.value));
    const weight = lbsToKilos(parseInt(e.target.weight.value));

    const height = footMeters + inchesMeters;

    const BMI = calculateBMI(weight, height);
    const classification = getClassification(BMI);
    renderBMI(BMI, classification);
    e.target.reset();
})

const renderBMI = (data, classification) => {
    document.querySelector('.results-wrapper').textContent = '';

    const div = createElement('div');
    const dataPara = createElement('p');
    
    addClass(div, 'results');
    addText(dataPara, `Your BMI is : ${data.toFixed(2)} ${classification}`);

    appendElement(div, dataPara);
    appendElement(resultsWrapper, div);

}
const getClassification = (value) => {
    let classification = '';
    if(value < 18.5){
        classification = 'Underweight';
    } else if( value > 18.5 && value < 24.9){
        classification = 'Normal Weight';
    } else if (value > 24.9 && value < 29.9) {
        classification = 'Overweight';
    } else if (value > 30) {
        classification = 'Obese';
    }
    return classification;
};

const appendElement = (parent, child) => {
    parent.appendChild(child);
};

const addText = (element, text) => {
    element.textContent = text;
};

const addClass = (element, name) => {
    element.className = name;
};

const createElement = (type) => {
    return document.createElement(type);
};

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

