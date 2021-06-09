class Security {

    constructor(){

        this.access4 = createInput("Answer")
        this.access4.position(450,620);
        this.access4.style('background', 'lightpink');  

        this.button4 = createButton('Check');
        this.button4.position(450,660);
        this.button4.style('background', 'lightgrey');  


        this.access3 = createInput("Answer")
        this.access3.position(450,620);
        this.access3.style('background', 'lightpink');  

        this.button3 = createButton('Check');
        this.button3.position(450,660);
        this.button3.style('background', 'lightgrey');  

        this.access5 = createInput("Answer")
        this.access5.position(450,620);
        this.access5.style('background', 'lightpink');  

        this.button5 = createButton('Check');
        this.button5.position(450,660);
        this.button5.style('background', 'lightgrey');  

        this.access2 = createInput("Answer")
        this.access2.position(450,620);
        this.access2.style('background', 'lightpink');  

        this.button2 = createButton('Check');
        this.button2.position(450,660);
        this.button2.style('background', 'lightgrey'); 
        
        this.access6 = createInput("Answer")
        this.access6.position(450,620);
        this.access6.style('background', 'lightpink');  

        this.button6 = createButton('Check');
        this.button6.position(450,660);
        this.button6.style('background', 'lightgrey');  

        this.access1 = createInput("Answer")
        this.access1.position(450,620);
        this.access1.style('background', 'lightpink');  

        this.button1 = createButton('Check');
        this.button1.position(450,660);
        this.button1.style('background', 'lightgrey');  

        this.reset = createButton('Reset');
        this.reset.position(1200,680);
        this.reset.style('background', 'lightpink');  
    }
    display(){
        

        this.button1.mousePressed(() => {
            if(system.authenticate(accessCode1,this.access1.value())){
                this.button1.hide();
                this.access1.hide();
                score++;
            }
        });

        this.button2.mousePressed(() => {
            if(system.authenticate(accessCode2,this.access2.value())){
                this.button2.hide();
                this.access2.hide();
                score++;
            }
        });

        this.button3.mousePressed(() => {
            if(system.authenticate(accessCode3,this.access3.value())){
                this.button3.hide();
                this.access3.hide();
                score++;
            }
        });

        this.button6.mousePressed(() => {
            if(system.authenticate(accessCode6,this.access6.value())){
                this.button6.hide();
                this.access6.hide();
                score++;
            }
        });

        this.button5.mousePressed(() => {
            if(system.authenticate(accessCode5,this.access5.value())){
                this.button5.hide();
                this.access5.hide();
                score++;
            }
        });

        this.button4.mousePressed(() => {
            if(system.authenticate(accessCode4,this.access4.value())){
                this.button4.hide();
                this.access4.hide();
                score++;
            }
        });

        this.reset.mousePressed(() => {
            gameState = play;
            score = 0;
            this.access4 = createInput("Answer")
            this.access4.position(450,620);
            this.access4.style('background', 'lightpink');  
    
            this.button4 = createButton('Check');
            this.button4.position(450,660);
            this.button4.style('background', 'lightgrey');  
    
    
            this.access3 = createInput("Answer")
            this.access3.position(450,620);
            this.access3.style('background', 'lightpink');  
    
            this.button3 = createButton('Check');
            this.button3.position(450,660);
            this.button3.style('background', 'lightgrey');  
    
            this.access5 = createInput("Answer")
            this.access5.position(450,620);
            this.access5.style('background', 'lightpink');  
    
            this.button5 = createButton('Check');
            this.button5.position(450,660);
            this.button5.style('background', 'lightgrey');  
    
            this.access2 = createInput("Answer")
            this.access2.position(450,620);
            this.access2.style('background', 'lightpink');  
    
            this.button2 = createButton('Check');
            this.button2.position(450,660);
            this.button2.style('background', 'lightgrey'); 
            
            this.access6 = createInput("Answer")
            this.access6.position(450,620);
            this.access6.style('background', 'lightpink');  
    
            this.button6 = createButton('Check');
            this.button6.position(450,660);
            this.button6.style('background', 'lightgrey');  
    
            this.access1 = createInput("Answer")
            this.access1.position(450,620);
            this.access1.style('background', 'lightpink');  
    
            this.button1 = createButton('Check');
            this.button1.position(450,660);
            this.button1.style('background', 'lightgrey'); 

        award.visible = false;
        missile.visible = false;
        ocean.visible = false;
        women.visible = false;
        microscpe.visible = false;
        boy.visible = true;
        boy2.visible = true;
        });

        if(gameState === end){
            this.button1.hide();
                this.access1.hide();
                this.button2.hide();
                this.access2.hide();
                this.button3.hide();
                this.access3.hide();
                this.button4.hide();
                this.access4.hide();
                this.button5.hide();
                this.access5.hide();
                this.button6.hide();
                this.access6.hide(); 
        }
        if(score === 6){
            clear();
            background("pink");
            award.visible = true;
            bullseye.visible = true;
            textSize(60);
            fill("black");
            text("BRAVO!!!", 150, 250);
            textSize(40);
            fill("darkblue");
            text("Congratulations, you are good at science!!", 150, 350);
            textSize(60);
            fill("red");
            text("score: " +score, 150, 150);
            microscpe.visible = false;
            women.visible = false;
            this.button1.hide();
                this.access1.hide();
                this.button2.hide();
                this.access2.hide();
                this.button3.hide();
                this.access3.hide();
                this.button4.hide();
                this.access4.hide();
                this.button6.hide();
                this.access6.hide(); 
                this.button5.hide();
                this.access5.hide();
          }     
    }
}

