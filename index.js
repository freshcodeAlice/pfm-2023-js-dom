const images = [
    'https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Shaqi_jrvej.jpg/800px-Shaqi_jrvej.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Altja_j%C3%B5gi_Lahemaal.jpg/1200px-Altja_j%C3%B5gi_Lahemaal.jpg',
    'https://natureconservancy-h.assetsadobe.com/is/image/content/dam/tnc/nature/en/photos/w/o/WOPA160517_D056-resized.jpg?crop=864%2C0%2C1728%2C2304&wid=600&hei=800&scl=2.88',
    'https://www.wbcsd.org/var/site/storage/images/overview/news-insights/wbcsd-insights/accelerating-business-along-the-road-to-a-nature-positive-future/225091-1-eng-GB/Accelerating-business-along-the-road-to-a-nature-positive-future_i1140.jpg',
    'https://www.uwa.edu.au/news/-/media/project/uwa/uwa/newsroom/card-image/2023/value-of-nature-card.jpg',
];

const img = document.querySelector('.image');
const [prevBtn, nextBtn] = document.querySelectorAll('.btn');

const attrSrc = document.createAttribute('src');
img.setAttributeNode(attrSrc);


const slider = new Slider(images);


function updateView() {
    attrSrc.value = slider.currentSlide;
}

function createBtnHandler(direction) {
    return function(){
        slider.currentIndex = slider[direction];
        updateView(); 
    }
}

prevBtn.addEventListener('click', createBtnHandler('prev'))

nextBtn.addEventListener('click', createBtnHandler('next'))

updateView();