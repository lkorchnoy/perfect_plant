class PickThePerfectPlant{
    constructor(question_number, question) {
        this.question_number = question_number;
        this.question = question;
    }

    renderPickThePerfectPlant() {
        let plantsDiv = document.getElementById("plants-container")

        plantsDiv.innerHTML +=
        `
        <ul>
        <li>${this.question_number} - Question: ${this.question} </li>
        </ul>
        
        `
    }

    

    getImage() {

const options = document.getElementsByName("question");

for (const i = 0; i < options.length; i++) {
    if (options[i].checked) {
        //return img 
        // do whatever you want with the checked radio
        var q = options[i].value;
        }
    }
    if(q === "1"){
        document.getElementById("question1").innerHTML = "img";
        //document.getElementsByTagName('value="1"').innerHTML = <button onclick="show_image url('images/air_plant.jpg')"> Display Image</button>
    if(q === "2"){
        document.getElementById("question2").innerHTML = "img";
    if(q === "3"){
        document.getElementById("question3").innerHTML = "img";
    if(q === "4"){
        document.getElementById("question4").innerHTML = "img";
    if(q === "5"){
        document.getElementById("question5").innerHTML = "img";
    }
}
    }
}
} else {
    alert('Please select one answer');
}
    }
}
 //if(typeof q == "undefined"){
        //document.getElementsByTagName("value1").innerHTML = " select the operation you want to perform";
        //return false;
//}

    
function show_image(images, width, height, alt) {
    var img = document.createElement("img");
    img.src = images;
    img.width = width;
    img.height = height;
    img.alt = alt;
    document.body.appendChild(img);
}