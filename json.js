// let fact='{"fact":"this is the fact written in json"}'
// let Object=JSON.parse( fact);
// console.log(Object.fact);

// let object={
//     "name":"kaleem",
//     "record":"24pwbcs1181",
//     "marks":100
// }
// let fact=JSON.stringify(object);
// console.log(fact);

// let url='https://catfact.ninja/fact';
// fetch(url)
// .then((response)=>{
//     console.log("respose is:",response);
//     return response.json();
// })
// .then((data)=>{
//         console.log("data1:",data.fact);
//         return fetch(url);
//     })
// .then((response)=>{
//     return response.json();
// })
// .then((data)=>{
//     console.log("data2:",data.fact);
// })
// .catch((error)=>{
//     console.log("Error ",error);
// })
let url='https://catfact.ninja/fact';
async function getFacts() {
    console.log("i am happy");
    try{
        let res=await fetch(url);
        let data=await res.json();
        console.log(data.fact);
    
        let res2=await fetch(url);
        let data2=await res2.json();
        console.log(data2.fact);
    }catch(e){
        console.log("error -",e);
    }
    console.log("bye");
}
getFacts();