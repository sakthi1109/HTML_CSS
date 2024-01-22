// Callback

function Kitchen(WelcomeMessage,Sundaydish){

    setTimeout(function(){
        console.log(WelcomeMessage)
        Sundaydish()

    },2000000)


}

function potato(){

    console.log("Today na samaika porathu curd fried rice with fingerchips")
}

Kitchen("Vanakam !!!\nWelcome to Sunday Samayal",potato)