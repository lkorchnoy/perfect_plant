document.addEventListener("DOMContentLoaded", () => {
  bestPlantForm();
  fetchPlants();
  createForm();
});

const BASE_URL = "http://127.0.0.1:3000";
const images=["aloe_vera.jpg", "bamboo_palm.jpg", "birds_nest_fern.jpg", "chinese_evergreen.jpg", "cover.jpg", "dracaena.jpg", "english_ivy.jpg", "golden_pothos.jpg", "jade_plant.jpg", "majesty_palm.jpg", "marble_queen.jpg", "peace_lily_plant.jpg", "philodendron.jpg", "rubber_tree_plant.jpg", "ruffle_fern1.jpg", "snake_plant.jpg", "spider_plant.jpg", "succulent.jpg", "zz_plant.jpg"]

function fetchPlants() {
  fetch(`${BASE_URL}/pick_the_perfect_plants`)
    .then((resp) => resp.json())
    .then((plants) => {
      for (const plant of plants) {
        console.log(plant)
        let p = new PickThePerfectPlant(
          plant.question_number,
          plant.question
        );
        p.renderPickThePerfectPlant();
      }
    });
}

function fetchUsers() {
  fetch(`${BASE_URL}/users`)
    .then((resp) => resp.json())
    .then((users) => {
      for (const user of users) {
        //console.log("rails obj", user)
        let u = new User(user.id, user.name, user.username, user.email);
        u.renderUser();
      }
    });
}

function bestPlantForm() {
   //for (var i = 0; i <= 5; i++) 
  let plantsForm = document.getElementById("plants-form");

  plantsForm.innerHTML += `

        <form id="1">
        
        <h1>The Perfect Plant</h1>
        <div class="form-check">
        <label class="form-check-label">
        <input type="radio" class="form-check-input" name="question" id="question1" value="1" />  1. I like to plan.                         </br>
        <input type="radio" class="form-check-input" name="question" id="question2" value="2" />  2. I am a free spirit, no planning for me. </br>
        <input type="radio" class="form-check-input" name="question" id="question3" value="3" />  3. I am a realist.                         </br>
        <input type="radio" class="form-check-input" name="question" id="question4" value="4" />  4. I am a dreamer.                         </br>
        <input type="radio" class="form-check-input" name="question" id="question5" value="5" />  5. I have furry friends.                   </br>
        </label>
        </div>
        </form>
            <br>
        <form id="2">
        <div class="form-check">
        <label class="form-check-label">
        <input type="radio" class="form-check-input" name="question" id="question1" value="6" />  1. I set the trend.                        </br>
        <input type="radio" class="form-check-input" name="question" id="question2" value="7" />  2. I follow the trend.                    </br>
        <input type="radio" class="form-check-input" name="question" id="question3" value="8" />  3. I enjoy the spotlight.                  </br>
        <input type="radio" class="form-check-input" name="question" id="question4" value="9" />  4. I"ll peacefully hang back here.         </br>
        <input type="radio" class="form-check-input" name="question" id="question5" value="10" />  5. I'm an early bird.                      </br>
        </label>
        </div>
        </form>
           <br>
        <form id="3">
        <div class="form-check">
        <label class="form-check-label">
        <input type="radio" class="form-check-input" name="question" id="question1" value="11" />  1. Tropical getaway is my dream vacation.  </br>
        <input type="radio" class="form-check-input" name="question" id="question2" value="12" />  2. I like watering my plants.              </br>
        <input type="radio" class="form-check-input" name="question" id="question3" value="13" />  3. I will water my plants only if I remember. </br>
        <input type="radio" class="form-check-input" name="question" id="question4" value="14" />  4. I enjoy swimming.                        </br>
        <input type="radio" class="form-check-input" name="question" id="question5" value="15" />  5. I enjoy sunbathing.                      </br>
        </label>
        </div>  
        </form>  
           <br>
        <form id="4">
        <div class="form-check">
        <label class="form-check-label">
        <input type="radio" class="form-check-input" name="question" id="question1" value="16" />  1. My grand entrance is gracefully walking down a spiral staircase.  </br>
        <input type="radio" class="form-check-input" name="question" id="question2" value="17" />  2. My grand entance is skydiving onto a stage.                       </br>
        <input type="radio" class="form-check-input" name="question" id="question3" value="18" />  3. My room is minimalistic.                                          </br>
        <input type="radio" class="form-check-input" name="question" id="question4" value="19" />  4. My room is bold.                                                  </br>
        <input type="radio" class="form-check-input" name="question" id="question5" value="20" />  5. I would read to my plants.                                        </br>
        </label>
        </div>  
        </form>  
           <br>
        <form id="5">
        <div class="form-check">
        <label class="form-check-label">
        <input type="radio" class="form-check-input" name="question" id="question1" value="21" />  1. I enjoy a good movie.                    </br>
        <input type="radio" class="form-check-input" name="question" id="question2" value="22" />  2. I don't have furry friends.              </br>
        <input type="radio" class="form-check-input" name="question" id="question3" value="23" />  3. I prefer to read in the dark room.       </br>
        <input type="radio" class="form-check-input" name="question" id="question4" value="24" />  4. I prefer to read in the bright room.     </br>
        <input type="radio" class="form-check-input" name="question" id="question5" value="25" />  5. I am mostly out and about.               </br>
        </label>
        </div> 
        </form>  
           <br>

        <button type="submit" id="submit">Submit</button>


        </form>
        `;

  
  
  let buttons = document.querySelectorAll("[name=question]");
  let submitButton=document.getElementById("submit")
  submitButton.addEventListener("click", plantFormSubmission);
  //console.log(buttons.length);
  for (let button of Array.from(buttons)) {
    button.addEventListener("click", plantFormSubmission)
    }
}


function plantFormSubmission() {
    //console.log("Hello");
  if (event.target.matches("button[type=submit]")) {
     event.preventDefault();
      let imageDiv=document.getElementById("image") 
      imageDiv.innerHTML=`<img src="images/${images[Math.floor(Math.random() * images.length)]}"/>`
    
  }
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
  //let usersForm = document.getElementById("users-form")
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
