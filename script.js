const bmiForm = document.querySelector('.bmiForm');
const resultsWrapper = document.querySelector('.results-wrapper')

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
    document.querySelector('.results-wrapper').textContent = '';

    const div = createElement('div');
    const dataPara = createElement('p');
    
    addClass(div, 'results');
    addText(dataPara, `Your BMI is : ${data.toFixed(2)}`) ;

    appendElement(div, dataPara);
    appendElement(resultsWrapper, div);

}

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

