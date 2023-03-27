// Check if player has saved progress in local storage
if (localStorage.getItem('gameProgress') !== null) {
  // Load player's progress data from local storage
  var progressData = JSON.parse(localStorage.getItem('gameProgress'));
  var achievements = progressData.achievements; // achievements = []
  var currentLevel = progressData.currentLevel; // currentLevel = 1
  var currentStage = progressData.currentStage; // currentStage = 1

} else {


  var gameProgress = {
      achievements: [],
      currentLevel: 1,
      currentStage: 1,
      currentScore: 0
    };

  gameProgress.score = 100;
  gameProgress.level = 2;
}   
   
   //make a toggle menu when clicking on a button
    const menuButton = document.querySelector('.menuButton');
    menuButton.addEventListener('click', () => {

    var menu = document.createElement("div");
    menu.classList.add("main");
    document.body.appendChild(menu);
    var blur = document.querySelector('.container');
    blur.classList.toggle("active");

    var menuContainer = document.createElement("div");
    menuContainer.classList.add("container2");

    // set the win/loss screen background image and styling
    menu.appendChild(menuContainer);

    // add the win/loss screen message
    var insideContainer = document.createElement("p");
    insideContainer.id = "mainMenuTitle"
    insideContainer.innerHTML = 'Main Menu';
    menuContainer.appendChild(insideContainer);

    // add the back, volume, main menu buttons
    var mainMenuButton = document.createElement("button");
    mainMenuButton.id = "mainMenuButton";
    mainMenuButton.innerHTML = "Main Menu";
    menuContainer.appendChild(mainMenuButton);

    var volumeButton = document.createElement("button");
    volumeButton.id = "volumeButton";
    volumeButton.innerHTML = "Volume";
    menuContainer.appendChild(volumeButton);

    var backButton = document.createElement("button");
    backButton.id = "backButton";
    backButton.innerHTML = "Back";
    menuContainer.appendChild(backButton);

// add the back button functionality
    backButton.addEventListener("click", function() {
        blur.classList.toggle("normal");
        document.querySelector(".main").remove();
    });

    volumeButton.addEventListener("click", function() {
        document.querySelector("#mainMenuButton").remove();
        document.querySelector("#volumeButton").remove();
        
    });

    mainMenuButton.addEventListener("click", function() {
        document.querySelector("#mainMenuButton").remove();
        document.querySelector("#volumeButton").remove();
        document.querySelector("#backButton").remove();
        blur.classList.toggle("normal");
        document.querySelector(".main").remove();

        // Save player's progress data in local storage
        localStorage.setItem('gameProgress', JSON.stringify(progressData));
        });
    });


    const shopButton = document.querySelector("#shopButton");
    shopButton.addEventListener("click", function() {
      var menu = document.createElement("div");
        menu.classList.add("main");
        document.body.appendChild(menu);
        var blur = document.querySelector('.container');
        blur.classList.toggle("active");

        var menuContainer = document.createElement("div");
        menuContainer.classList.add("container2");

      menu.appendChild(menuContainer);

      // add the win/loss screen message
      var insideContainer = document.createElement("p");
      insideContainer.id = "shopTitle"
      insideContainer.innerHTML = 'Shop';
      menuContainer.appendChild(insideContainer);

      var backButton = document.createElement("button");
      backButton.id = "backButton";
      backButton.innerHTML = "Back";
      menuContainer.appendChild(backButton);

    // add the back button functionality
    backButton.addEventListener("click", function() {
      blur.classList.toggle("normal");
      document.querySelector(".main").remove();
  });

    });

    var currentFloorDiv = document.querySelector("#floor");
    var currentFloor = document.createElement("span");
    currentFloor.innerHTML = `<br>${gameProgress.currentLevel} - ${gameProgress.currentStage}`;
    currentFloorDiv.appendChild(currentFloor);



    function preventZoom() {
        document.addEventListener('wheel', function(event) {
          if (event.ctrlKey === true) {
            event.preventDefault();
          }
        }, { passive: false });
        // for touchpad
        document.addEventListener('gesturestart', function(event) {
          event.preventDefault();
        });
      }

      preventZoom();