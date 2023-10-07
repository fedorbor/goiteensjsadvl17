const { resolve } = require("path");

function getFruit(name) {
    const fruits = {
      strawberry: '🍓',
      kiwi: '🥝 ',
      apple: '🍎',
    };
  
    return new Promise((resolve)=>{
        setTimeout(()=>{resolve(fruits[name])
        },500)
    });
  }
  async function aMakeSmoothie(){
    
    const kiwi =  getFruit('kiwi');
    console.log(kiwi);
  
    const apple =  getFruit('apple');
    console.log(apple); 

    const strawberry =  getFruit('strawberry');
    console.log(strawberry);

    const smoothie = await   Promise.all([kiwi,apple,strawberry]);
    console.log(smoothie);
  }

  aMakeSmoothie()



 async function  getMovies(){
    try {
    const fetch = await fetch(`${BASE_URL}/movies`) 
   const parcedData = await fetch.json()
   return parcedData;
 } catch (error) {
    console.log("error")
 }
}
async function getMoviesById(moveiId){
    try {
        const fetchById = await fetch(`${BASE_URL}/movies/${moveiId}`) 
       const parcedData = await fetchById.json()
       return parcedData;
     } catch (error) {
        console.log("error")
     }
 }
 const newMovie ={
    title: "CSS",
    director: "Me",
    genres: [
      "Drama"
    ],
    rating: 10,
}