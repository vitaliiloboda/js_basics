
function chess() {
    function addSome(elements, elClass, position) {
        for (let t = 0; t < 8; t++) {
            const element = document.createElement('DIV');
            element.classList.add(elClass);
            element.textContent = elements[t];
            position.appendChild(element);
        }
    }

    function makeCell(row, color) {
        const cell = document.createElement('DIV');
        cell.classList.add(color);
        row.appendChild(cell);
    }

    function cells(row, color1, color2) {
        for (let i = 0; i < 4; i++) {
            makeCell(row, color1);
            makeCell(row, color2);
        }
    }

    function makeRow(colorOne, colorTwo) {
        const row = document.createElement('DIV');
        row.classList.add('row');
        container.appendChild(row);
        cells(row, colorOne, colorTwo);
    }


    const body = document.querySelector('body');

    const position = document.createElement('DIV');
    position.classList.add('position');
    body.appendChild(position);

    const numbers = document.createElement('DIV');
    numbers.classList.add('numbers');
    position.appendChild(numbers);

    const bigBlock = document.createElement('DIV');
    bigBlock.classList.add('bigBlock');
    position.appendChild(bigBlock);

    const numbers2 = document.createElement('DIV');
    numbers2.classList.add('numbers');
    position.appendChild(numbers2);

    const letters = document.createElement('DIV');
    letters.classList.add('letters');
    bigBlock.appendChild(letters);

    const container = document.createElement('DIV');
    container.classList.add('container');
    bigBlock.appendChild(container);

    for (let x = 0; x < 4; x++) {
        makeRow('white', 'black');
        makeRow('black', 'white');
    }

    const letters2 = document.createElement('DIV');
    letters2.classList.add('letters');
    bigBlock.appendChild(letters2);

    const lettersList = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
    const numbersList = ['8', '7', '6', '5', '4', '3', '2', '1'];

    addSome(lettersList, 'letter', letters);
    addSome(lettersList, 'letter', letters2);
    addSome(numbersList, 'number', numbers);
    addSome(numbersList, 'number', numbers2);
}

chess();
