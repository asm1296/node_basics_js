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

async function getProcessDetails (){
    try{
        let freshTomatoDetails = await PluckTomatoes('Ramgadh');
        console.log(`We have plucked ${freshTomatoDetails.produce} tomatoes from ${freshTomatoDetails.location}`);

        let transferTomatoDetails = await TransferTomatoesToFactory(freshTomatoDetails.location,freshTomatoDetails.produce);
        console.log(`We transferred ${transferTomatoDetails.weight} of tomatoes`);

        let cleaningProcessDetails = await CleanTomatoes(transferTomatoDetails.weight);
        console.log(`Cleaning process done for ${cleaningProcessDetails.weight} of tomatoes`);

        let endProcessDetails = await processTomato(cleaningProcessDetails.weight);
        console.log(`Transfer ${endProcessDetails.quantity} of ${endProcessDetails.produce} to distributors`);

    }
    catch(errmsg){
        console.log(errmsg);
    }
}

getProcessDetails();