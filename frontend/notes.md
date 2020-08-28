 
function historyFormSubmission() {
  let qDiv = document.getElementById("history-container")
  
 
 fetch(`${BASE_URL}/users`) 
  .then(response => response.json())
  .then(response => {
    response.forEach(response => 
            qDiv.innerHTML += 
     `
     <li>Name: ${response.name} - Question: ${response.pick_the_perfect_plants[0].question}</li>
     `
    )
  })
 }