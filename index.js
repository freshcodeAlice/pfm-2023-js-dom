const addressURIimage = 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Shaqi_jrvej.jpg/800px-Shaqi_jrvej.jpg';

const img = document.querySelector('.image');

const attrSrc = document.createAttribute('src');
img.setAttributeNode(attrSrc);

attrSrc.value = addressURIimage;


function changeURI(attrSrc) {
    const anotherURI = 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Altja_j%C3%B5gi_Lahemaal.jpg/1200px-Altja_j%C3%B5gi_Lahemaal.jpg';
    attrSrc.value = anotherURI
}



//img.setAttribute('src', addressURIimage);