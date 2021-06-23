class Form {
    constructor() {
     this.input = createInput("Name");
     this.button = createButton('Play');
     this.greeting = createElement('h3');
    }
  
    hide(){
      this.input.hide();
      this.button.hide();
      this.greeting.hide();
    }

    display(){
      var title = createElement('h2')
      title.html("Car Racing Game");
      title.position(500, 0);
     
      this.input.position(500, 250);
      this.button.position(650, 300);
  
      this.button.mousePressed(()=>{
        this.input.hide();
        this.button.hide();
  
        var name = this.input.value();
        player.name=name;
        playerCount+=1;
        player.index =playerCount;

        player.update(name)
        player.updateCount(playerCount);
        this.greeting.html("Hello " + name )
        this.greeting.position(130, 160)
      });
  
    }
  }