//Select the main tag from html
const main = document.querySelector("main")
console.log(main)
//Add images in an array in order to iterate over.
let imgArr =[
    {name:"Pikachu", URI:"https://plus.unsplash.com/premium_photo-1674815482505-c65d12b10883?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z2FsbGFyeSUyMHBhaW50aW5nfGVufDB8fDB8fHww"}
]
// the for each is used to iterate over each image
imgArr.forEach(element => {
    const el = document.createElement('img')
// grab the image.
    el.src = element.URI
    main.appendChild(el)
});