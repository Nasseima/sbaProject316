//Select the main tag from html
const main = document.querySelector("main")
console.log(main)
const body = document.querySelector("body")
console.log(body)
// Create a heading
const heading = document.createElement('h1')
body.appendChild(heading);
const headingText = document.createTextNode('Top Three Favorite Songs')
//Add images in an array in order to iterate over.
let imgArr =[
    {name:"UncomfortToLies", URI:"Screenshot 2024-05-30 103725.png"}
]
// the for each is used to iterate over each image
imgArr.forEach(element => {
    const el = document.createElement('img')
// grab the image to show on the display
    el.src = element.URI
    main.appendChild(el)
});
main.appendChild(headingText);

let songinfo = document.querySelector('#songinfo');
let artistinfo = document.querySelector('#artistinfo');
let ranks = document.querySelector('#ranks')


console.log(main.children[0])
const card1 = main.children[0]

songinfo.addEventListener("click", ()=> {
   card1.style.transform = "scaleX(-1)";
})

artistinfo.addEventListener("click", ()=> {
   card1.style.transform = "scaleY(-1)";
})

ranks.addEventListener("click", ()=> {
   card1.style.transform = "scaleX(-1)";
})







