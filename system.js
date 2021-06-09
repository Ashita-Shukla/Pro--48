class System{

    constructor(){}

    authenticate(accessCode,enteredCode){
        textSize(50);
        fill("black");
        text(code,300,300)
        //add code to return true if correct answer entered.
        if(accessCode === enteredCode.toUpperCase()){
            return true
        }
        else{
            gameState = end; 
        }

        if(accessCode === enteredCode.toLowerCase()){
            return true
        }
        else{
            gameState = end;
            
        }
        
             
    
    }

}