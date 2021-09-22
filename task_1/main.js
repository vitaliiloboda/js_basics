const container = document.querySelector('.container');
const small = document.createElement('DIV');
small.classList.add('small');
container.appendChild(small);

const smallPictures = ['small/1.jpeg', 'small/2.jpeg', 'small/3.jpeg'];
const bigPictures = ['big/1.jpeg', 'big/2.jpeg', 'big/3.jpeg'];

function f(e) {
  bigOne.src = 'big/' + e.target.id + '.jpeg'
}

for (let i = 0; i < smallPictures.length; i++) {
  const picture = document.createElement('IMG');
  picture.classList.add('smallOne');
  picture.src = smallPictures[i];
  picture.classList.add('small_one');
  small.appendChild(picture);
  picture.id = i + 1 + '';
  picture.onclick = f;
}

function next(e) {

  currentImg = 'big/' + bigOne.src.split('/')[bigOne.src.split('/').length - 1];


  if (e.target.value == '>') {
    nextImg = bigPictures[bigPictures.indexOf(currentImg) + 1];
  } else {
    nextImg = bigPictures[bigPictures.indexOf(currentImg) - 1];
  }

  if (nextImg === undefined) {
    if (e.target.value == '>') {
      nextImg = bigPictures[0];
    } else {
      nextImg = bigPictures[bigPictures.length - 1];
    }

  }

  bigOne.src = bigOne.src.replace(currentImg, nextImg);
  console.log(bigOne);
}

const big = document.createElement('DIV');
big.classList.add('big');
container.appendChild(big);

const bigOne = document.createElement('IMG');
bigOne.classList.add('big_one');

const button1 = document.createElement('BUTTON');
const button2 = document.createElement('BUTTON');
button1.classList.add('button');
button2.classList.add('button');
button2.value = '>';
button1.value = '<';
button1.textContent = '<';
button2.textContent = '>';
button1.onclick = next;
button2.onclick = next;


big.appendChild(button1);
big.appendChild(bigOne);
big.appendChild(button2);
