//
// This runs a simple simulation of a tortoise hare race.
// The user is prompted for the length of the race
//
  function toNumber(sbNumber) {
    return parseInt(sbNumber,10);
  }

  function getNumber(promptPhrase) {
      var isNumber = false;
      var userInput;

      while(! isNumber) {
        userInput = toNumber(prompt(promptPhrase));
        isNumber = ! isNaN(userInput);
      }

      return userInput;
  }

  function lineout(phrase) {
    document.write("<p>" + phrase + "</p>");
  }

  function Animal(name, speed, focus) {
    this.name = name;
    this.speed = speed;
    this.focus = focus;
    this.position = 0;

    this.move = function() {
      var sAction;
      var sAndIsNow = " and is now";

      if( Math.random() * 10 < this.focus) {
        this.position += this.speed;

        if( this.speed == 1) {
          sAction = "runs 1 yard" + sAndIsNow;
        } else {
          sAction = "runs " + this.speed + " yards" + sAndIsNow;
        }
      } else {
        sAction = "is distracted and remains";
      }
      lineout(this.name + " " + sAction + " at " + this.position + " yards.");
    }

  }

  // TODO: could ask user for these properties
  var rabbit = new Animal("Bugs",5, 2);
  var turtle = new Animal("Michaelangelo",1,10);

  var distance = getNumber("How many yards is the race?");

  do {
    rabbit.move();
    turtle.move();
  } while((rabbit.position < distance) && (turtle.position < distance));

  if(rabbit.position >= distance) {

    if(turtle.position >= distance) {
      lineout("It's too close to call!!");
    } else {
      lineout(rabbit.name + " wins!!!");
    }

  } else {
    lineout(turtle.name + " wins!!!");
  }


