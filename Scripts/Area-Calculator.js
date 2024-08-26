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