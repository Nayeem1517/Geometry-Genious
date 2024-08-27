function calculateTriangleArea(){
    //Getting The Base Value

    const baseFeild = document.getElementById('triangle-base');
    const baseValueText = baseFeild.value;
    const base = parseFloat(baseValueText);
    console.log(base)

    //Getting The Height Value
    const heightFeild = document.getElementById('triangle-height');
    const heightValueText = heightFeild.value;
    const height = parseFloat(heightValueText);
    console.log(height);

    //Finding The Area 

    const area = 0.5 * base * height;
    console.log(area)

    // Show Triangle Area 

    const areaspan = document.getElementById('triangle-area');
    areaspan.innerText = area;
}

function calculateRectangleArea(){
    //Getting the Rectangle Width
    const widthFeild = document.getElementById('rectangle-width');
    const widthFeildText = widthFeild.value;
    const width = parseFloat(widthFeildText);

    //Getting The Rectangle Height

    const heightFeild = document.getElementById('rectangle-length');
    const heightFeildText = heightFeild.value;
    const height = parseFloat(heightFeildText);

    //Finding the Area

    const rectangleArea = width * height;
    //Showing The rectangle Area
    const rectangleAreaSpan = document.getElementById('rectangle-area');
    rectangleAreaSpan.innerText = rectangleArea;
}

//Reuseable Function For Reducing The Code

function calculateParallelogramArea(){
const base = getInputValue('parallelogram-base');
const height = getInputValue('parallelogram-height')
//Finding the Parallelogram Area
const parallelogramArea = base * height ;
//Set the elements calutaed area 
setElementsInnerText('parallelogram-area',parallelogramArea)
}

// Finding The Rombhosh Area 
function calculateRombhoshArea(){
    const firstDiagonal = getInputValue('first-diagonal');
    const secondDiagonal = getInputValue('second-diagonal');
    // 
    const rombhoshArea = 0.5 * firstDiagonal * secondDiagonal ;
     
    //Set the elements Area text 
    setElementsInnerText('rhombosh-area' , rombhoshArea)
}


//Finding The Ellipse Area 
 function calculateEllipseArea(){
    // Getting The Major And Minor Radius

    const majorRadius = getInputValue('major-radius');
    const minorRadius = getInputValue('minor-radius');

    // Getting The Ellipse Area

    const ellipsArea = 3.141 * majorRadius * minorRadius ;

    //Set the Area inner Text 
    setElementsInnerText('ellipse-area', ellipsArea)
 }

//Getting the Reuseable input Feild via Function
function getInputValue(feildId){
    const inputFeild = document.getElementById(feildId);
    const inputFeildText = inputFeild.value;
    const value = parseFloat(inputFeildText);
    return value;
}

// reuseable set span,div,p,etc text 

function setElementsInnerText(elementId,khetrofol){
    const element  = document.getElementById(elementId);
   element.innerText = khetrofol;
}