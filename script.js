function startGame(game) {
    alert('Starting ' + game + '...');
    // Implement game loading logic
    switch (game) {
        case 'snake':
            window.location.href = "snake.html";
            break;
        case 'lava_water':
            window.location.href = "lava_water.html";
            break;
        case 'dino_run':
            window.location.href = "dino_run.html";
            break;
        default:
            alert("Game not found!");
    }
}

function openTutorial() {
    alert('Opening tutorial for game creation...');
    window.location.href = "tutorial.html"; // Implement tutorial page
}
