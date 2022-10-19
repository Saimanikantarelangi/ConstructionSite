const loc = document.getElementById("locate");
const con = document.getElementById("contact");
const mealPopup = document.getElementById("meal-popup");
const mealInfoEl = document.getElementById("meal-info");
const popupCloseBtn = document.getElementById("close-popup");




function showLocInfo() {
    // clean it up
    mealInfoEl.innerHTML = "";

    // update the Meal info
    const mealEl = document.createElement("div");

    mealEl.innerHTML = `
    <h1>These are the Locations Available</h1> 
    
<iframe src="https://www.google.com/maps/d/u/0/embed?mid=1D0VijMI-Z3DJNhDYaQzf-fsjwFhAXN4&ehbc=2E312F" width="640" height="480"></iframe>
    
`;

    mealInfoEl.appendChild(mealEl);

    // show the popup
    mealPopup.classList.remove("hidden");
}

function showconInfo() {
    // clean it up
    mealInfoEl.innerHTML = "";

    // update the Meal info
    const mealEl = document.createElement("div");

    mealEl.innerHTML = `
    <div class="site-header__lines"></div>
<main class="site-main" id="main"><div class="hero hero--left"><div class="container container--medium trim">
        <h1 class="alfa mt-0">Contact Us</h1><p class="big">If you have any questions or queries a member of staff will always be happy to help. Feel free to contact us by telephone or email and we will be sure to get back to you as soon as possible.</p></div>
        <p class="big">Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi suscipit cupiditate quibusdam mollitia. Molestias, commodi numquam odio quae rerum cum voluptatem tempore necessitatibus eius placeat dolore quia enim provident excepturi.
        </p>
        <label>Call us:</label>
        <p class="big">+91 9876868...</p>
        <br>
        <p class="big"> Connect With Us </p>
        <ul>
        <li><a href="#"><i class="fab fa-facebook" aria-hidden="true"></i></a></li>
        <li><a href="#"><i class="fab fa-twitter" aria-hidden="true"></i></a></li>
        <li><a href="#"><i class="fab fa-google-plus-g" aria-hidden="true"></i></a></li>
        <li><a href="#"><i class="fab fa-linkedin" aria-hidden="true"></i></a></li>
        <li><a href="#"><i class="fab fa-instagram" aria-hidden="true"></i></a></li>
      </ul>   
                    </div>
        </div> `;

    mealInfoEl.appendChild(mealEl);

    // show the popup
    mealPopup.classList.remove("hidden");
}


loc.addEventListener("click", () => {
    showLocInfo();
});

popupCloseBtn.addEventListener("click", () => {
    mealPopup.classList.add("hidden");
});






con.addEventListener("click", () => {
    showconInfo();
});
