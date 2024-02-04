//onsole.log('%c HI', 'color: firebrick')

document.addEventListener("DOMContentLoaded", () => {
    fetch('https://dog.ceo/api/breeds/image/random/4')
    .then(response => response.json())
    .then(images => createImages(images))
})

document.addEventListener("DOMContentLoaded", () => {
    fetch('https://dog.ceo/api/breeds/list/all')
    .then(response => response.json())
    .then(breeds => addBreeds(breeds))
})

function createImages(image) {
    let imageArray = [];
    imageArray = image.message;
    let dogImages = document.getElementById("dog-image-container");
    imageArray.forEach(image => {
        let imgs = document.createElement('img');
        imgs.src = image;
        dogImages.append(imgs)
    });
}

function addBreeds(breeds) {
    let breedArray = {};
    breedArray = breeds.message;
    let list = document.querySelector("ul");
    let newList = [];
    for (let breed in breedArray) {
        newList.push(breed)
    }
    newList.forEach(dog => {
        let dogBreeds = document.createElement("li");
        dogBreeds.innerText = dog;
        dogBreeds.addEventListener("click", () => {
            dogBreeds.style.color = 'red';
        })
        list.append(dogBreeds)
    })
    let choices = document.getElementById("breed-dropdown");
    let options = [];
    for (let i = 0; i < 4; i++) {
        options[i] = choices[i].innerText;
    }
    choices.addEventListener("change", () => {
        let selection = choices.value;
        list.innerText = "";
        for (let j = 0; j < newList.length; j++) {
            if (selection === newList[j][0]) {
                let li = document.createElement("li");
                li.innerText = newList[j]; 
                li.addEventListener("click", () => {
                    li.style.color = 'red';
                })
                list.append(li);
            }
        }
    })
}



