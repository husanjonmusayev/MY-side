let item = document.querySelectorAll('.slider .list .item');
let nex = document.getElementById('next');
let prev = document.getElementById('prev');
let thum = document.querySelectorAll('.thumbunali .item');
let countItem = item.length;
let itemActive = 0;

nex.onclick = function () {
    itemActive = itemActive + 1;
    if (itemActive >= countItem) {
        itemActive = 0;
    }
    showSlider()
};
prev.onclick = function () {
    itemActive = itemActive - 1;
    if (itemActive < 0) {
        itemActive = countItem - 1;
    };

    showSlider()

};

function showSlider() {
    let itemActiveOld = document.querySelector('.slider .list .item.active')
    let thumActivOld = document.querySelector('.thumbunali .item.active')
    itemActiveOld.classList.remove('active')
    thumActivOld.classList.remove('active')


    item[itemActive].classList.add('active')
    thum[itemActive].classList.add('active')

}

thum.forEach((thum, index) => {
    thum.addEventListener('click', () => {
        itemActive = index
        showSlider();
    })
});

let refreshInterval = setInterval(() => {
    nex.click();
}, 6000)