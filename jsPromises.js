// Reference - https://scotch.io/tutorials/javascript-promises-for-dummies
// Promises have 3 states. 
// Pending - 
// Resloves -
// Rejected -

// create a promise
var isRaining = false;

var willIRun = new Promise(
    function (resolve, reject){
        if(!isRaining){
            var run = {
                time: "1 hr",
                place: "Boulder"
            };

            resolve(run); // fulfilled
        }else{
            var reason = new Error('raining outside!');

            reject(reason);
        }
    }
);

// Second Promise 
var runWithFriend = function(run){
    return new Promise(
        function(resolve, reject){
            var runInvite = `Hey friend, let's for for a ${run.time} run in ${run.place}`;

            resolve(runInvite);
        }
    );
}

// call the promise
var amIRunning = function(){
    // this is the promise that we defined above
    willIRun
        .then(runWithFriend) // chain second promise
        .then(function(fulfilled){
            //console.log(`I will run for ${fulfilled.time}, in ${fulfilled.place}`);
            console.log(fulfilled); // a message comes from the second promise
        })
        .catch(function(error){
            console.log(error.message);
        });
};

amIRunning();