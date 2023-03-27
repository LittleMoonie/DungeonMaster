// Check if player has saved progress in local storage
if (localStorage.getItem('gameProgress') !== null) {
  // Load player's progress data from local storage
  var progressData = JSON.parse(localStorage.getItem('gameProgress'));
  var score = progressData.score; // score = 100
  var level = progressData.level; // level = 2
  var achievements = progressData.achievements; // achievements = []

} else {


  var gameProgress = {
      score: 0,
      level: 1,
      achievements: [],
      currentLevel: 1,
      currentScore: 0
    };

  gameProgress.score = 100;
  gameProgress.level = 2;
}