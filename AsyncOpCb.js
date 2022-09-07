/* // STEP -1 
console.log("Begin");
console.log('Getting result of mathematical operation');
console.log('End'); */

/* // STEP -2

    function getResults(a,b){
        console.log(`Getting result of mathematical operation - ${a+b}`);
    }
    console.log('Begin');
    getResults(2,2);
    console.log('end'); */

   /*  // STEP -3
    function getResults(a,b){
        setTimeout(()=>{
            console.log(`Getting result of mathematical operation`);
        },2000);
    }
    console.log('Begin');
    getResults(2,2);
    console.log('end'); */

    
    // STEP -4
    function getResults(a,b,getResultCallBack){
        setTimeout(()=>{
            console.log(`Getting result of mathematical operation`);
            getResultCallBack([a+b]);
        },2000);
    }

    function getMultiplication(numb,getMulResCallBack){
        setTimeout(()=>{
            console.log(`Getting result of multiplication operation`);
            let res = numb*4;
            getMulResCallBack(res);
        },2000)
    }

    function getDivision (numb,getDivResCallBack){
        setTimeout(()=>{
            console.log(`Getting result of Division operation`);
            let resu = numb/8;
            getDivResCallBack(resu);
        },2000)
    }

    console.log('Begin');
    getResults(2,2,function(result){
        console.log('Called CallBack function');
        console.log(`Result of Math Operation - ${JSON.stringify(result)}`);
        getMultiplication(result,function(mulResult){
            console.log(`Results of Multiplication Operation ${JSON.stringify(mulResult)}`);
            getDivision(mulResult,function(divResult){
                console.log(`Results of Division Operation ${JSON.stringify(divResult)}`);
            })
        })
    });
    console.log('end');

