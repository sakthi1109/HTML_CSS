// Why we need to go Promises ???
// In call back we are not so sure that the code  will get excecuted in the mentioned or seted time
// Due to this User or developers or customer does not know what is happening

function authenticated(){

    return Math.random()>1;

}

function Login(){
    return new Promise(function(response,Noresponse))}