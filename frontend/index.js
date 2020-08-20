document.addEventListener("DOMContentLoaded", () => {
  bestPlantForm();
  //fetchPlants();
  createForm();
});

const BASE_URL = "http://127.0.0.1:3000";
const images = [
  "aloe_vera.jpg",
  "bamboo_palm.jpg",
  "birds_nest_fern.jpg",
  "chinese_evergreen.jpg",
  "cover.jpg",
  "dracaena.jpg",
  "english_ivy.jpg",
  "golden_pothos.jpg",
  "jade_plant.jpg",
  "majesty_palm.jpg",
  "marble_queen.jpg",
  "peace_lily_plant.jpg",
  "philodendron.jpg",
  "rubber_tree_plant.jpg",
  "ruffle_fern1.jpg",
  "snake_plant.jpg",
  "spider_plant.jpg",
  "succulent.jpg",
  "zz_plant.jpg",
];

// function fetchPlants() {

//         fetch(`${BASE_URL}/pick_the_perfect_plants`)
        
//          .then((resp) => resp.json())
//          .then((pick_the_perfect_plants) => {
            
//          for(const pick_the_perfect_plant in pick_the_perfect_plants) {
             
//              let p = new PickThePerfectPlant(pick_the_perfect_plant.id, pick_the_perfect_plant.question_number, pick_the_perfect_plant.question);
//              p.renderPickThePerfectPlant();
//         }
//          });
         
//  }

function fetchUsers() {
  fetch(`${BASE_URL}/users`)
    .then((resp) => resp.json())
    .then((users) => {
      for (const user of users) {
        let u = new User(user.id, user.name, user.username, user.email);
        u.renderUser();
      }
    });
}


function bestPlantForm() {
  
  let plantsForm = document.getElementById("plants-form");

  plantsForm.innerHTML += `
        
        <form>
        
        <h1>The Perfect Plant</h1>
        <p>Select your favorite answer:</p>
        <div>
        <div class="form-check">
        <label class="form-check-label">
        <input type="radio" class="form-check-input" name="question1" id="1" onclick="myFunction(this.value)" value="1. I like to plan.">                         1. I like to plan.                          </br>
        <input type="radio" class="form-check-input" name="question1" id="2" onclick="myFunction(this.value)" value="2. I am a free spirit, no planning for me."> 2. I am a free spirit, no planning for me.  </br>
        <input type="radio" class="form-check-input" name="question1" id="3" onclick="myFunction(this.value)" value="3. I am a realist.">                         3. I am a realist.                          </br>
        <input type="radio" class="form-check-input" name="question1" id="4" onclick="myFunction(this.value)" value="4. I am a dreamer.">                         4. I am a dreamer.                          </br>
        <input type="radio" class="form-check-input" name="question1" id="5" onclick="myFunction(this.value)" value="5. I have furry friends.">                   5. I have furry friends.                    </br>
        </label>
        </div>
        </div>
        <br>
        <div>
        <div class="form-check">
        <label class="form-check-label">
        <input type="radio" class="form-check-input" name="question2" id="6" onclick="myFunction(this.value)" value="1. I set the trend.">                      1. I set the trend.                         </br>
        <input type="radio" class="form-check-input" name="question2" id="7" onclick="myFunction(this.value)" value="2. I follow the trend.">                   2. I follow the trend.                      </br>
        <input type="radio" class="form-check-input" name="question2" id="8" onclick="myFunction(this.value)" value="3. I enjoy the spotlight.">                3. I enjoy the spotlight.                   </br>
        <input type="radio" class="form-check-input" name="question2" id="9" onclick="myFunction(this.value)" value="4. I"ll peacefully hang back here.">       4. I"ll peacefully hang back here.          </br>
        <input type="radio" class="form-check-input" name="question2" id="10" onclick="myFunction(this.value)" value="5. I'm an early bird.">                    5. I'm an early bird.                       </br>
        </label>
        </div>
        </div>
           <br>
        <div>
        <div class="form-check">
        <label class="form-check-label">
        <input type="radio" class="form-check-input" name="question" id="11" onclick="myFunction(this.value)" value="1. Tropical getaway is my dream vacation.">    1. Tropical getaway is my dream vacation.     </br>
        <input type="radio" class="form-check-input" name="question" id="12" onclick="myFunction(this.value)" value="2. I like watering my plants.">                2. I like watering my plants.                 </br>
        <input type="radio" class="form-check-input" name="question" id="13" onclick="myFunction(this.value)" value="3. I will water my plants only if I remember.">3. I will water my plants only if I remember. </br>
        <input type="radio" class="form-check-input" name="question" id="14" onclick="myFunction(this.value)" value="4. I enjoy swimming.">                         4. I enjoy swimming.                          </br>
        <input type="radio" class="form-check-input" name="question" id="15" onclick="myFunction(this.value)" value="5. I enjoy sunbathing.">                       5. I enjoy sunbathing.                        </br>
        </label>
        </div>  
        </div>  
           <br>
        <div>
        <div class="form-check">
        <label class="form-check-label">
        <input type="radio" class="form-check-input" name="question" id="16" onclick="myFunction(this.value)" value="1. My grand entrance is gracefully walking down a spiral staircase.">1. My grand entrance is gracefully walking down a spiral staircase.  </br>
        <input type="radio" class="form-check-input" name="question" id="17" onclick="myFunction(this.value)" value="2. My grand entance is skydiving onto a stage.">                     2. My grand entance is skydiving onto a stage.                       </br>
        <input type="radio" class="form-check-input" name="question" id="18" onclick="myFunction(this.value)" value="3. My room is minimalistic.">                                        3. My room is minimalistic.                                          </br>
        <input type="radio" class="form-check-input" name="question" id="19" onclick="myFunction(this.value)" value="4. My room is bold.">                                                4. My room is bold.                                                  </br>
        <input type="radio" class="form-check-input" name="question" id="20" onclick="myFunction(this.value)" value="5. I would read to my plants.">                                      5. I would read to my plants.                                        </br>
        </label>
        </div>  
        </div>  
           <br>
        <div>
        <div class="form-check">
        <label class="form-check-label">
        <input type="radio" class="form-check-input" name="question" id="21" onclick="myFunction(this.value)" value="1. I enjoy a good movie.">                    1. I enjoy a good movie.                  </br>
        <input type="radio" class="form-check-input" name="question" id="22" onclick="myFunction(this.value)" value="2. I don't have furry friends.">              2. I don't have furry friends.            </br>
        <input type="radio" class="form-check-input" name="question" id="23" onclick="myFunction(this.value)" value="3. I prefer to read in the dark room.">       3. I prefer to read in the dark room.     </br>
        <input type="radio" class="form-check-input" name="question" id="24" onclick="myFunction(this.value)" value="4. I prefer to read in the bright room.">     4. I prefer to read in the bright room.   </br>
        <input type="radio" class="form-check-input" name="question" id="25" onclick="myFunction(this.value)" value="5. I am mostly out and about.">               5. I am mostly out and about.             </br>
        </label>
        </div> 
        </div>  
           <br>
        
        Your favorite answer: <span><input type="text" id="result" style='width:100%'></span>
        <button type="submit" id="submit">Submit</button>
        <button type="button" id="click" name="history">History Button</button>
        
        </form>
        
        `;
    let historyButton = document.getElementById("click");

    let submitButton = document.getElementById("submit");
    submitButton.addEventListener("click", plantFormSubmission);
    historyButton.addEventListener("click", historyFormSubmission);
    
}

function myFunction(question) {
    document.getElementById("result").value = question;
}

function plantFormSubmission() {
  if (event.target.matches("button[type=submit]")) {
      
    event.preventDefault();
    
    let imageDiv = document.getElementById("image");
    imageDiv.innerHTML = `<img src="images/${
      images[Math.floor(Math.random() * images.length)]
     }"/>`
    
    
    let question_number = document.getElementById("1");
    let question = document.getElementById("result").value = question;
    let currentUser = document.getElementById("delete-bttn");
    let currentUserId = currentUser.getAttribute("data-id");
    

    //let questionNumberTwo = document.querySelector('input[name="question2"]:checked').value;
    //let questionNumberThree = document.querySelector('input[name="question3"]:checked').value;
    //let questionNumberFour = document.querySelector('input[name="question4"]:checked').value;
    //let questionNumberFive = document.querySelector('input[name="question5"]:checked').value;
    //let question = document.querySelector('input[name="question1"]:checked').value;
    let pick_the_perfect_plant = { 
            question_number: question_number,
            question: question,
            user_id: currentUserId
          };
     

    fetch(`${BASE_URL}/pick_the_perfect_plants`, {
                    method: "POST",
                    headers: {
                      Accept: "application/json",
                      "Content-Type": "application/json",
                    },
                    body: JSON.stringify(pick_the_perfect_plant),
                  })
    
                  .then(response => response.json())
                  .then(pick_the_perfect_plant => {
                    let p = new PickThePerfectPlant(pick_the_perfect_plant.question_number, pick_the_perfect_plant.question, pick_the_perfect_plant.user_id);
                    p.renderPickThePerfectPlant();
                    
                    //   const inputValue = []
                    //   for(const element of elements) {
                    //      if (element.user_id == currentUserId) {
                    //          inputValue.push(element)
                     //    }
                     // }
                         
                      })
                    
                    
                      
                    
                }
}

function historyFormSubmission() {
    const myQuestions = []
    myQuestions.push(p)
    
    
}


function createForm() {
  let usersForm = document.getElementById("users-form");

  usersForm.innerHTML += `
            <form>
            Name: <input type="text" id="name"> <br>
            Username: <input type="text" id="username"> <br>
            Email: <input type="text" id="email"> <br>
            <input type="submit" value="Submit">
            </form>
            `;
  
  usersForm.addEventListener("submit", userFormSubmission);
}

function userFormSubmission() {
  event.preventDefault();
  let name = document.getElementById("name").value;
  let username = document.getElementById("username").value;
  let email = document.getElementById("email").value;

  let user = {
    name: name,
    username: username,
    email: email,
  };

  fetch(`${BASE_URL}/users`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  })
    .then((resp) => resp.json())
    .then((user) => {
      let u = new User(user.id, user.name, user.username, user.email);
      u.renderUser();
    });
}

function deleteUser() {
  let userId = parseInt(event.target.dataset.id);

  fetch(`${BASE_URL}/users/${userId}`, {
    method: "DELETE",
  });
  this.location.reload();
}
