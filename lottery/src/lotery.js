

let generate1=(n)=>{
    let arr = new Array(n);

    for(let i=0; i<n; ++i){ 

        arr[i]= Math.floor(Math.random()*10);
    }
    return arr;
}

function sum(arr1){
    return arr1.reduce((sum,current)=> sum+current,0);
}

export {generate1,sum}