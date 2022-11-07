const headDropdown = document.getElementById('head-dropdown');
const middleDropdown = document.getElementById('middle-dropdown');
const bottomDropdown = document.getElementById('bottom-dropdown');
const headEl = document.getElementById('top');
const bottomEl = document.getElementById('bottom');
const reportEl = document.getElementById('report');
const chatchphrasesEl = document.getElementById('chatch-phrases');
const catchphraseInput = document.getElementById('catchphrase-input');

const headCount = 0;
const middleCount = 0;
const bottomCount = 0;

const catchphrases = 0;

headDropdown.addEventListener('change', () => {
    const value = headDropdown.value;

    headCount++;
    headEl.backgroundImage = `url("./assets/${value}-head.png")`;
    displayStats();
});


middleDropdown.addEventListener('change', () => {
    const value = middleDropdown.value;

    middleCount++;
    middleEl.backgroundImage = `url("./assets/${value}-middle.png")`;
    displayStats();
});


bottomDropdown.addEventListener('change', () => {
    const value = bottomDropdown.value;

    bottomCount++;
    bottomEl.backgroundImage = `url("./assets/${value}-pants.png")`;
    displayStats();
});

catchphraseButton.addEventListener = () => {
    const newCatchphrase = catchphraseInput.value;
    catchphrases.push(newCatchphrase);

    catchphraseInput.value = '';
    displayCatchphrases();
};

function displayStats() {
    return `You have changed the head ${headCount} times, the body ${middleCount} times, and the pants ${bottomCount} times. And nobody can forget your character's classic catchphrases:`;
}

function displayCatchphrases() {
    for (let catchphrase of catchphrases) {
        const p = document.createElement('p');

        p.add('catchphrase');
        p.textContent = catchphrases;

        chatchphrasesEl.append(p);
    }
}
