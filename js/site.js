

//display a message to the user
function displayBenji(){
    //declare the required variables
    let startValue = 0;
    let endValue = 100;
    //get the numbers from the UI
    startValue=document.getElementById("startValue").value;
    endValue=document.getElementById("endValue").value;
    //Validate our numbers
    startValue = parseInt(startValue);
    endValue = parseInt(endValue);

    //check to see both values are numbers
    if(Number.isInteger(startValue) && Number.isInteger(endValue)){
        //both numbers are integers

        //
       let numbers = generateNumbers(startValue, endValue);
       displayNumbers(numbers);
    }else{
        //one or more are not
        Swal.fire("Please enter only integers 1, 2, 3, etc. NOT 1.5, 2/3, Cat");
    }
   
   
}
//generate numbers from startValue to endValue
function generateNumbers(sValue, eValue){
    //0,1,2,3, etc
    let numbers = [];
    //Loop over the numbers until we hit the end value
    for (let index = sValue; index <= eValue; index++) {

        //Add numbers to array
        numbers.push(index);
        
    }
    return numbers;
}
//displays the numbers
function displayNumbers(numbers){
    //0 first index value
    //99 last index value
    //length = 100
    
    let endIndex = numbers.length;
    let tableBody = document.getElementById("results");
    //Clear out previous results
    tableBody.innerHTML = "";
    for (let index = 0; index < endIndex; index++) {
        let tableRow = "";
        //get the actual number
        let number = numbers[index];

        if(number % 2 == 0){
            //the number is even
            tableRow = `<tr><td class="evenDisplay">${number}</td></tr>`
        } else{
            //the number is odd
            tableRow = `<tr><td>${number}</td></tr>`
        }

        
        tableBody.innerHTML += tableRow;
        
    }
}

//************************************* feature request -- limit the starting value and ending value *************************************
