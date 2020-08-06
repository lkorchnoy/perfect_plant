class PickThePerfectPlant{
    constructor(id, question_number, question) {
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

var options = document.getElementsByName("question");

for (var i = 0; i < options.length; i++) {
    if (options[i].checked) {
        //return img 
        // do whatever you want with the checked radio
        var q = options[i].value;
        }
    }
    if(q === "1"){
        document.getElementById("question1").innerHTML = "img";
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

 //if(typeof q == "undefined"){
        //document.getElementsByTagName("value1").innerHTML = " select the operation you want to perform";
        //return false;
//}

    function getImage() {
        var checked_question = document.querySelector('input[name = "question"]:checked');
    if(checked_question != null) {
        alert(checked_question.value);
    } else {
        alert('Nothing checked');
    }
    }

}