const url = 'https://dog.ceo/api/breeds/image/random'

const dogImg = document.querySelector('[data-js="dog-img"]')

let validateOfDog = dogData => {
        if(!dogData.ok) {
        throw new Error(`sucess require, status HTTP ${dogData.status}`)
    }
    console.log(dogData)
    return dogData.json()
};
let message = ({message: url}) => {
  dogImg.setAttribute('src', url)
}; 
let testOfError = (error) => {
console.log(error.message)};

fetch(url)
    .then(validateOfDog)
    .then(message)
    .catch(testOfError)