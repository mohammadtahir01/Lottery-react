
let generat=(n)=>{
    let arr = new Array(n); 

    for(let i=0; i<n; ++i){
        arr[i] = Math.floor(Math.random()*10); 
    }
    return arr;
}
let sum1=(arr3)=>{
   return arr3.reduce((sum1,currnt1)=> sum1+currnt1,0);
}
export {generat, sum1};