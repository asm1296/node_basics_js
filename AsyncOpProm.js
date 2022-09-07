// let operation = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         console.log("Getting Details from Database");
//         resolve(result=2);
//     },2000)
// })

// operation
// .then((res)=>{
//     console.log(`We received result from Database - ${res}`);
// })
// .catch((errmsg)=>{
//     console.log(errmsg);
// })

function PluckTomatoes(location){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log(`Started plucking freshly harvested Tomatoes from ${location}`);
            resolve({location:location,produce:'32 tonnes'});    
        },2000);
    })
}

function TransferTomatoesToFactory(location,tomatoWeight){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log(`Transferring fresh tomoatoes of weight - ${tomatoWeight} from ${location} to Factory`);
            resolve({weight:tomatoWeight});
        },4000)
    })
}

function CleanTomatoes(tomatoWeight){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log(`Cleaning ${tomatoWeight} tomatoes for further processing`);
            resolve({weight : tomatoWeight});
        })
    })
}

function processTomato(tomatoWeight){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log(`Processing ${tomatoWeight} tomatoes to make Sauce`);
            resolve({produce:'Hot and Sour Souce',quantity:'42 tonnes'});
        },6000);
    })
}

PluckTomatoes('Ramgadh')
.then(fpResult=>TransferTomatoesToFactory(fpResult.location,fpResult.produce))
.then(spResult=>CleanTomatoes(spResult.weight))
.then(tpResult=>processTomato(tpResult.weight))
.then(fopResult=>console.log(`We have made ${fopResult.produce} of quantity - ${fopResult.quantity}`))
.catch(err=> {throw new Error(`Something went wrong in the process at ${err}`)});