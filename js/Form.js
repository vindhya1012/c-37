class Form {
  constructor() {
    this.input=createInput("").attribute("placeholder","Enter Your Name")
    this.playButton=createButton("Play")
    this.titleImg=createImg("./assets/title.png","game title")
    this.greeting=createElement("h2")
  }

  hide(){
this.input.hide()
this.playButton.hide()
this.greeting.hide()

  }

  handleMousePressed(){
     this.playButton.mousePressed(()=>{
      this.input.hide()
      this.playButton.hide()
      var message = `
      Hello ${this.input.value()} 
      </br> wait for another player to join.....
      
      `
      this.greeting.html(message)


     })

  }

  setElementPosition(){
     this.titleImg.position(120,100)
    this.input.position(width/2-110,height/2)
    this.playButton.position(width/2-100,height/2+40)
    this.greeting.position(width/2-100,height/2)

  }

  display(){
    this.setElementPosition()
    this.handleMousePressed()

  }

}
