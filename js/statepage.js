"use strict"
// STATE PATTERN DESIGN IS BEEN USED TO CHANGE THE STATE OF THE PAGE!
// State Pattern is another behaviour type pattern. It reminder as Redux works.
// We have a state that we can change trough our script. So we do not have to
// fill the page with a lot of html files or code. We do all using javaScript

// We will create 01 function called PageState to track the state of the Page.
// Then for each state as (Overview, BodyWeight, Blood Pressure, Blood Sugar, MyData)
// we create one state for it.
///////////////////////////////////////////////////////////////////////////////
// Main Function PageState: track the page state
///////////////////////////////////////////////////////////////////////////////
const PageState = function() {
  let currentState = new homeState();

  this.init = function() {
    this.change(new homeState);
  }

  this.change = function(state) {
    // get the current and the future id of the nav element
    const currentId = currentState.__proto__.constructor.name;
    const newId = state.__proto__.constructor.name;
    // Update the active state of the nav element
    document.getElementById(currentId).classList.remove("active");
    document.getElementById(newId).classList.add("active");
    // update state
    currentState = state;
  }
  // return current state to be called outside
  this.returnState = function() {
    return currentState.__proto__.constructor.name;
  }

}
///////////////////////////////////////////////////////////////////////////////
// Home State
///////////////////////////////////////////////////////////////////////////////
const homeState = function() {
  document.querySelector("body").classList.add("backgroundBodyWeight");
  document.querySelector("#container").innerHTML = `
    <!-- sectionA first section -->
    <section class="sectionA">
      <div class="container p-0 ">
        <div class="card bg-dark mt-2" id="cardBackground">
          <!-- <img src="imgs/background6.png" id="background" class="img-fluid" alt="Responsive image"> -->
          <img src="imgs/background.jpg" class="img-fluid" id="backgroundOverview" alt="Background image">
          <!-- <img src="imgs/background10.jpg" id="background" class="img-fluid" alt="Responsive image"> -->
          <div class="card-img-overlay">
            <div class="jumbotron mt-sm-5">
              <h2 class=" text-info">Welcome to Health Tracker!</h2 >
              <p class="lead">This app was done specially to help you to track and improve your health!</p>
              <hr class="my-4">
              <p>It is very important to check constantly our healthy. In this way, it is easier to detect any problem helping the doctors to make the correct diagnostic!  </p>
              <p class="text-success"> Please visit regularly your doctor! </p>
              <p class= "text-info text-center">&hearts; Thanks for using our app &hearts; </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}
///////////////////////////////////////////////////////////////////////////////
// myData
///////////////////////////////////////////////////////////////////////////////
const myData = function() {
  document.querySelector("#container").innerHTML = `
    <!-- sectionA: first section -->
    <section class="sectionA">
      <div class="container text-center mt-5">
        <h2 class="display-1">In development!</h2>
      </div>
    </section>
  `;
}
///////////////////////////////////////////////////////////////////////////////
// Body Weight
///////////////////////////////////////////////////////////////////////////////
const bodyWeight = function() {
  document.querySelector("#container").innerHTML = `
    <!-- SectionA: first display input data as start weight, actual weight... -->
    <section class="sectionA">
      <div class="container-fluid my-4">
        <form id="formInputs1">
          <div class="form-row justify-content-center" id="formInputs2">
            <!-- Start Weight -->
            <div class="col-md-3">
              <label for="startWeight" class="text-info">Start Weight (kg)</label>
              <input type="number" disabled value="90" class="form-control" id="startWeight" placeholder="Start (kg)">
            </div>
            <!-- Actual Weight -->
            <div class="col-md-3">
              <label for="actualweight" class="text-info">Actual Weight</label>
              <input type="number" disabled value="76" class="form-control" id="actualWeight" placeholder="Actual (kg)">
            </div>
            <!-- Diff Weight -->
            <div class="col-md-3">
              <label for="diffWeight" class="text-info">Diff. Weight</label>
              <input type="number" disabled class="form-control" id="diffWeight" placeholder="Diff (kg)">
            </div>
            <!-- Actual BMI -->
            <div class="col-md-3">
              <label for="actualBMI" class="text-primary">Actual BMI</label>
              <input type="number" disabled class="form-control" id="actualBMI" placeholder="Actual BMI">
            </div>
          </div>
        </form>
      </div>
    </section>

  <!-- Section B: Canvas buttons! -->
  <section class="sectionBCanvasButtons">
    <div class="container containerGroup mt-2 text-center">
      <div class="btn-group mb-1 buttonGroup" role="group" aria-label="Basic example">
        <button type="button" class="btn btn-info" id="oneWeekBtn">1 Week</button>
        <button type="button" class="btn btn-info d-none d-md-block" id="twoWeeksBtn">2 Weeks</button>
        <button type="button" class="btn btn-info d-none d-md-block" id="oneMonthBtn">1 Month</button>
        <button type="button" class="btn btn-info d-none d-md-block" id="twoMonthsBtn">2 Months</button>
        <button type="button" class="btn btn-info d-none d-md-block" id="threeMonthsBtn">3 Months</button>
        <button type="button" class="btn btn-info d-none d-lg-block" id="sixMonthsBtn">6 Months</button>
        <button type="button" class="btn btn-info d-none d-lg-block" id="oneYearBtn">1 Year</button>
        <button type="button" class="btn btn-info" id="AllMeasureBtn">All</button>
        <button type="button" class="btn btn-secondary p-0" id="btnFlagZoomIn">
          <img src="./icons/zoomIn.svg" class="img-fluid" id="zoomInBtn"  ></img>
        </button>
        <button type="button" class="btn btn-secondary p-0" id="btnFlagZoomOut" disabled>
          <img src="./icons/zoomOut.svg" class="img-fluid" id="zoomOutBtn" ></img>
        </button>
      </div>
    </div>
  </section>

  <section class="sectionCCanvas">
    <div class="d-flex justify-content-center">
    <!-- As soon as defined the height and width the image become sharp width="1880px"-->
      <canvas id="canvasWeight" height="400px" width="1880px"></canvas>
    </div>
    <span id="containerToAddAlertMsg"></span>
  </section>

<!-- SECTION D encloses the input and button forms -->
<section class="sectionDInputFormButtons">
  <div class="container-fluid p-0" >
    <form>
      <!-- first row -->
      <div class="form-row p-4 m-0 justify-content-center" id="containerInputToHighlight">
        <div class="col-sm-3">
          <label for="height">Height</label>
          <input id="height" type="number" value="178" class="form-control" placeholder="height (cm)">
        </div>
        <div class="col-sm-3">
          <label for="weight">Weight</label>
          <input id="weight" type="number" value="80" min="30" max="190" step="0.1" class="form-control" placeholder="Weight - kg">
        </div>
        <div class="col-sm-6">
          <label for="date">Date</label>
          <input id="date" type="date" class="form-control"  placeholder="data">
        </div>
      </div>
      <!-- second row -->
      <div class="form-row">
        <div class="col">
          <!-- <label for="submit">Submit</label> -->
          <button id="submit" class="btn btn-primary btn-lg btn-block">Submit</button>
        </div>
      </div>
      <!-- third row -->
        <!-- <div class="form-row">
          <div class="col">
            <btn type="button" id="editBtn" class="btn btn-outline-primary btn-lg col-sm">Edit</btn>
            <btn type="button" id="backBtn" class="btn btn-outline-info btn-lg col-sm">Back</btn>
            <btn type="button" id="deleteBtn" class="btn btn-outline-danger btn-lg col-sm">Delete
            </btn>
          </div> -->
        </div>
    </form>
  </div>
</section>

<!-- It encloses the drawer below submit and above the table -->
<section class="sectionEDrawer">
  <!-- CONTENT OF THE HAMBURGER: this content will be pop-up DOWN -->
  <!-- Delete All - Download/Save JSON -->
  <!-- UNCOLLAPSED STATE ENCLOSES BUTTONS AS DELETE ALL; ABOUT BMI; SAVE; LOAD -->
  <div class="collapse" id="navbarToggleExternalContent">
    <div class="bg-dark p-4">
      <h5 class="text-white h4">Extra functions</h5>
      <span class="text-light lead">You can delete all files or export the saved data (download) and also to inform more about BMI.</span>
        <!-- Button trigger modal: BMI -->
      <button type="button" id="bmiInfoBtn" class="btn btn-primary btn-block btn-lg my-2" data-toggle="modal" data-target="#locModal2">
      About BMI </button>
      <button type="button" id="deleteAllAskBtn" class="btn btn-danger btn-block my-2 btn-lg " data-toggle="modal" data-target="#locModal">
      Delete All Items
      </button>
      <button type="button" id="saveBtn" class="btn btn-info btn-block my-2 btn-lg">Save </btn>
      <button type="button" id="loadJSONBtn" class="btn btn-warning btn-block my-2 btn-lg">Load File </button>
    </div>
  </div>

  <!-- HAMBURGER TO OPEN THE NAVBAR DOWN (COLLAPSED STATE) -->
  <nav class="navbar navbar-dark bg-dark">
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
  </nav>
<!-- CLOSE THE DRAWER -->
</section>

<!-- Section F represents the table! -->
  <section class="sectionFTable">
    <!-- TABLE -->
    <!-- style="overflow-y: scroll; height: 200px" -->
    <div class="container-fluid p-0" id="tableContainer" style="overflow-y: scroll; height: 500px">
      <table class="table table-borderless  table-dark">
        <thead>
          <tr>
            <th scope="col" class="align-middle">#</th>
            <th scope="col" class="align-middle">
            <!-- DROPDOWN MENU  -->
              <div class="dropdown d-sm-none">
                <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Date
                </button>
                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <!-- <a id="dropDownTime" class="dropdown-item" href="#">Time</a> -->
                  <a id="dropDownDate" class="dropdown-item" href="#">Date</a>
                  <a id="dropDownBMI"class="dropdown-item d-sm-none " href="#">BMI</a>
                </div>
              </div>
            <!-- span -->
            <span class="d-none d-sm-block">Date</span>

            </th>
            <th scope="col" class="align-middle">Weight</th>
            <th scope="col" class="align-middle d-none d-sm-table-cell">BMI</th>
          </tr>
        </thead>
        <tbody>
          <!-- <tr>
            <th scope="row">1</th>
            <td>29.07.2019</td>
            <td>83 kg</td>
            <td>20</td>
          </tr> -->
        </tbody>
      </table>
    </div>
  </section>
  <br>

<!-- HERE ARE THE MODALS AND FUNCTIONS USED IN THIS PAGE: THEY ARE PLACED AT THE END BECAUSE THEY DO NOT BELONGS TO THE DOCUMENT FLOW READING! -->
<!-- Modal Dialog: TO CONFIRM DELETE -->
  <div class="modal fade" id="locModal" tabindex="-1" role="dialog" aria-labelledby="locModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Delete All Items</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <p>Are you sure that you want to delete all the items?</p>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary bt-lg" data-dismiss="modal">Back</button>
          <button type="button" id="deleteAllBtn" class="btn btn-danger bt-lg" data-dismiss="modal">Delete All Items</button>
        </div>
      </div>
    </div>
  </div>

  <!-- Modal 2: BMI INFO -->
  <div class="modal fade" id="locModal2" tabindex="-1" role="dialog" aria-labelledby="locModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-body text-center">
          <p class="display-5">Body mass index (BMI)</p>
        </div>
        <div class="text-center">
          <small class="text-muted">The BMI is defined as the body mass divided by the square of the body height, and is universally expressed in units of kg/m&sup2;.</small>
        </div>
        <figure class="figure">
          <img src="./imgs/bmi.png" class="figure-img img-fluid rounded" alt="BMI-Graph">
        </figure>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary bt-lg" data-dismiss="modal">Close</button>
          <btn onclick="window.open('https://en.wikipedia.org/wiki/Body_mass_index')" class="btn btn-secondary bt-lg" data-dismiss="modal">More Info</btn>
        </div>
      </div>
    </div>
  </div>

  <!-- Modal Dialog 3: TO EDIT, DELETE OR BACK -->
    <div class="modal fade" id="locModal3" tabindex="-1" role="dialog" aria-labelledby="locModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Edit Dialog</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <p class="lead">You can edit, delete or return!</p>
            <!-- first row -->
            <div class="form-row p-4 m-0 justify-content-center" id="containerInputToHighlight">
              <div class="col-sm-3">
                <label for="height">Height</label>
                <input id="heightEdit" type="number" value="178" min="30" max="250" class="form-control">
              </div>
              <div class="col-sm-3">
                <label for="weight">Weight</label>
                <input id="weightEdit" type="number" value="80" min="30" max="199" step="0.1" class="form-control" >
              </div>
              <div class="col-sm-6">
                <label for="date">Date</label>
                <input type="date" class="form-control" placeholder="data" id="dateEdit">
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <!-- third row -->
              <div class="form-row">
                <div class="col">
                  <button type="button" id="editBtn" class="btn btn-primary btn-lg" data-dismiss="modal">Edit</button>
                  <button type="button" id="backBtn" class="btn btn-info btn-lg mx-2" data-dismiss="modal">Back</btn>
                  <button type="button" id="deleteBtn" class="btn btn-danger btn-lg mx-1" data-dismiss="modal">Delete
                  </button>
                </div>
              </div>
          </div>
        </div>
      </div>
    </div>



  <!-- Add the js files -->
  <script src="./js/bodyweight.js"></script>
  `;
}
///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////
// Blood Pressure
///////////////////////////////////////////////////////////////////////////////
const bloodPressure = function() {
  document.querySelector("#container").innerHTML = `
  <div class="container text-center mt-5">
    <h2 class="display-1">In development!</h2>
  </div>
  `;
}
///////////////////////////////////////////////////////////////////////////////
// Blood Sugar
///////////////////////////////////////////////////////////////////////////////
const bloodSugar = function() {
  document.querySelector("#container").innerHTML = `
  <div class="container text-center mt-5">
    <h2 class="display-1">In development!</h2>
  </div>
  `;
}
// Instantiate PageState
const page = new PageState();

// UI vars
const overviewUI = document.getElementById("homeState"),
  myDataUI = document.getElementById("myData"),
  bodyWeightUI = document.getElementById("bodyWeight"),
  bloodPressureUI = document.getElementById("bloodPressure"),
  bloodSugarUI = document.getElementById("bloodSugar");

// EventListeners
overviewUI.addEventListener("click", (e) => {
  page.change(new homeState);
  e.preventDefault();
});
myDataUI.addEventListener("click", (e) => {
  page.change(new myData);
  e.preventDefault();
});
bodyWeightUI.addEventListener("click", (e) => {
  page.change(new bodyWeight);
  // load the bodyWeight.js! The file will be load dinamically!!!
  loadBodyWeight();
  e.preventDefault();
});
bloodPressureUI.addEventListener("click", (e) => {
  page.change(new bloodPressure);
  e.preventDefault();
});
bloodSugarUI.addEventListener("click", (e) => {
  page.change(new bloodSugar);
  e.preventDefault();
});
