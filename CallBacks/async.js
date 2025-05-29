const p = new Promise((resolve,reject)=>{
    resolve("DEEPAK");
})

async function getData() {
    const data = await p;
    console.log(data);
    
}

getData();