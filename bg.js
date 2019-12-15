const body = document.querySelector("body");

const IMAGE_NUM = 5;

function paintImage(imgNum)
{
    const image = new Image;
    image.src = `images\\${imgNum + 1}.jpg`;
    image.classList.add("bgImage");

    body.appendChild(image);
}

function genRandom()
{
    return parseInt(Math.random() * IMAGE_NUM);
}

function init()
{
    const randomNumber = genRandom();
    paintImage(randomNumber);
}

init();