/*var play = document.getElementsByTagName('button')[0],
    svg = document.getElementsByTagName('svg')[0];

function drawItem() {
    svg.classList.add('animated');
}


play.addEventListener('click', drawItem, false);*/

const getRandomColor = () => {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
};

const setRandomColor = (elem) => {
    elem.css("background-color", getRandomColor());
};

let rotate = ['rotate3d(1, 1, 1, 45deg)'/*,
    'rotate3d(2, 1, 3, 33deg)',
    'rotate3d(1, 0, 0, 45deg)',
    'rotate3d(0, 1, 0, 45deg)',
    'rotate3d(0, 0, 1, 45deg)',
    'rotate3d(0, 0, 0, 50deg)'*/];

const getRandomRotate = () => {
    return Math.floor(Math.random() * 360) + 'deg';
};

setInterval(function () {
    console.log('abc');
    $('.root ul li').each(function () {
        let elem = $(this).find('a');
        setRandomColor(elem);
        elem.css({'transform': 'rotate3d(1, 1, 1, ' + getRandomRotate() + ')'});
    });
}, 1000);


