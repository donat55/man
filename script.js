const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const bodyTypeSelect = document.getElementById('bodyType');
const outfitSelect = document.getElementById('outfit');
const petSelect = document.getElementById('pet');

const saveButton = document.getElementById('saveButton');

// Function to draw character based on selected options
function drawCharacter() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    drawBody();
    drawOutfit();
    drawPet();
    addHeadAnimation();
}

// Drawing different body types
function drawBody() {
    const bodyType = bodyTypeSelect.value;
    ctx.fillStyle = '#FFCBA4'; // Skin color

    switch (bodyType) {
        case 'slim':
            ctx.fillRect(130, 70, 40, 90);
            break;
        case 'average':
            ctx.fillRect(120, 70, 60, 100);
            break;
        case 'muscular':
            ctx.fillRect(110, 70, 80, 110);
            break;
    }
}

// Drawing different outfits
function drawOutfit() {
    const outfit = outfitSelect.value;
    ctx.fillStyle = '#4a90e2'; // Default color

    switch (outfit) {
        case 'casual':
            ctx.fillRect(120, 100, 60, 50);
            break;
        case 'sport':
            ctx.fillStyle = '#e94e77';
            ctx.fillRect(120, 100, 60, 50);
            break;
        case 'formal':
            ctx.fillStyle = '#333333';
            ctx.fillRect(120, 100, 60, 50);
            break;
        case 'fantasy':
            ctx.fillStyle = '#a47eb1';
            ctx.fillRect(120, 100, 60, 50);
            break;
        case 'cyberpunk':
            ctx.fillStyle = '#0f0f0f';
            ctx.fillRect(120, 100, 60, 50);
            break;
    }
}

// Drawing a pet if selected
function drawPet() {
    const pet = petSelect.value;

    if (pet === 'cat') {
        ctx.fillStyle = '#FF6347'; // Pet color
        ctx.fillRect(170, 150, 30, 30);
    } else if (pet === 'dog') {
        ctx.fillStyle = '#D2691E';
        ctx.fillRect(170, 150, 30, 30);
    } else if (pet === 'bird') {
        ctx.fillStyle = '#87CEFA';
        ctx.fillRect(170, 150, 30, 30);
    }
}

// Adding head animation
function addHeadAnimation() {
    const bodyType = bodyTypeSelect.value;
    ctx.fillStyle = '#FFCBA4'; // Skin color

    ctx.save();
    ctx.translate(150, 50);

    const angle = Math.sin(Date.now() / 500) * 0.1; // Head wobbling effect
    ctx.rotate(angle);
    ctx.fillRect(-15, -30, 30, 30); // Head
    ctx.restore();
}

// Saving the image
saveButton.addEventListener('click', () => {
    const link = document.createElement('a');
    link.download = 'character.png';
    link.href = canvas.toDataURL();
    link.click();
});

bodyTypeSelect.addEventListener('change', drawCharacter);
outfitSelect.addEventListener('change', drawCharacter);
petSelect.addEventListener('change', drawCharacter);

drawCharacter(); // Initial draw
