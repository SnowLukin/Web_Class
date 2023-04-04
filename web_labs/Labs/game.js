const canvas = document.getElementById('game-board');
const ctx = canvas.getContext('2d');

const gridSize = 20;
const tileSize = canvas.width / gridSize;

let snake = [{ x: 10, y: 10 }];
let direction = { x: 0, y: 0 };
let apple = { x: 15, y: 15 };

function update() {
    let head = { x: snake[0].x + direction.x, y: snake[0].y + direction.y };

    if (head.x === apple.x && head.y === apple.y) {
        apple = { x: Math.floor(Math.random() * gridSize), y: Math.floor(Math.random() * gridSize) };
    } else {
        snake.pop();
    }

    snake.unshift(head);

    if (snake[0].x < 0 || snake[0].x >= gridSize || snake[0].y < 0 || snake[0].y >= gridSize) {
        snake = [{ x: 10, y: 10 }];
        direction = { x: 0, y: 0 };
    }
}

function draw() {
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = 'lime';
    for (let part of snake) {
        ctx.fillRect(part.x * tileSize, part.y * tileSize, tileSize, tileSize);
    }

    ctx.fillStyle = 'red';
    ctx.fillRect(apple.x * tileSize, apple.y * tileSize, tileSize, tileSize);
}

function gameLoop() {
    update();
    draw();
    setTimeout(gameLoop, 100);
}

window.addEventListener('keydown', (e) => {
    if (e.key === 'w' && direction.y === 0) direction = { x: 0, y: -1 };
    if (e.key === 's' && direction.y === 0) direction = { x: 0, y: 1 };
    if (e.key === 'a' && direction.x === 0) direction = { x: -1, y: 0 };
    if (e.key === 'd' && direction.x === 0) direction = { x: 1, y: 0 };
});

gameLoop();
