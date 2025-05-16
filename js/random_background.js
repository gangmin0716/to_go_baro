const image = ["elantra_N.png", "hina.png", "redbull.png"]
const choseImage = image[Math.floor(Math.random() * image.length)]
const bgImage = document.createElement("img");
// bgImage.src = `img/${choseImage}`
// console.log(bgImage);
document.body.style.backgroundImage = `url('../image/${choseImage}')`;


// 1920 * 1080

// const image = ["elantran.jpg", ]
// const choseImage = image[Math.floor(Math.random() * image.length)]
// const bgImage = document.createElement("img");
// // bgImage.src = `img/${choseImage}`
// // console.log(bgImage);
// document.body.style.backgroundImage = `url('../image/1920*1080/${choseImage}')`;