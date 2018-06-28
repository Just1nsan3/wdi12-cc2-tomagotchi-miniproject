console.log('hello world');

// create a class for your tomagotchi
class Tomagotchi {
	constructor(name){
		this.name = name;
		this.age = 1;
		this.hunger = 1;
		this.sleepiness = 1;
		this.boredom = 1;
	}
	feed() {
		// this.hunger = pet.hunger <= 0
		  if(pet.hunger >= 1) {
			this.hunger--;
		  }
		

		// make it say Hunger (#) -- later replace with updateHtml()
		$('.hunger').text('Hunger(' + this.hunger + ')');
	}
	sleep() {
		if(pet.sleepiness >= 1) {
			this.sleepiness--;
		  }
		
		$('.sleepiness').text('Sleepiness(' + this.sleepiness + ')');
	}
	bored() {
		if(pet.boredom >= 1) {
			this.boredom--;
		  }

		$('.boredom').text('Boredom(' + this.boredom + ')');
	}

	// updateHtml() {

	// }
}

// pet is THE OBJECT
const pet = new Tomagotchi('squirtle');

// naming your pet
$('.name').on('click', () => {
	const $inputVal = $('input').val();
	$('h1').text($inputVal)
	timer();
});

// reduces hunger
$('.food').on('click', () => {

	pet.feed();
	
});

// reduce sleepiness
$('.lights').on('click', () => {
	pet.sleep();
});
	

// reduce boredom
$('.play').on('click', () => {

	
	pet.bored();
	
});

let counter = 0;

const timer = () => {
  const newCount = setInterval(function(){
    // pet.petDeath
    counter++;
    console.log(counter);

  // Increase hunger/boredom/sleepiness
    if(counter % 10 === 0) {
      pet.hunger = pet.hunger + 2;
      $('.hunger').text('Hunger(' + pet.hunger + ')');
      if(pet.hunger === 10) {
        alert("Your pet has died from hunger!!");
      }
    }
    if(counter % 10 === 0) {
      pet.sleepiness = pet.sleepiness + 1;
      $('.sleepiness').text('Sleepiness(' + pet.sleepiness + ')');
    } if(pet.sleepiness === 10) {
      alert("Your pet has died from no sleep!!");
    }
  
    if(counter % 10 === 0) {
      pet.boredom = pet.boredom + 3;
      $('.boredom').text('Boredom(' + pet.boredom + ')');
    } if(pet.boredom === 10) {
      alert("Your pet has ran away!!");
    }
    if(counter % 30 === 0) {
      pet.age = pet.age + 1;
      $('.age').text('Age(' + pet.age + ')');
    } if(pet.age === 2) {
      $("#pet-image").empty();
      $("#pet-image").append("<img src='http://rs425.pbsrc.com/albums/pp335/Grasaldrea/Wartortleanimated-1.gif~c200'>");
    }
      if(pet.age === 4) {
      $("#pet-image").empty();
      $("#pet-image").append("<img src='https://pa1.narvii.com/6417/2205b83599f571d1e67ca27e430964b0eb615279_hq.gif'>");
    
    } if(pet.age === 10) {
      alert("Died of Old Age!!");
    }
      else if(pet.hunger >= 10 || pet.sleepiness >= 10 || pet.boredom >= 10 || pet.age >= 10) {
     $("#pet-image").empty();
     $("#pet-image").append("<img src='https://i0.wp.com/mrwgifs.com/wp-content/uploads/2013/05/Squirtle-Cries-Water-Puddles-On-Pokemon.gif'>");
     alert("Your pet has died!!");
    
    clearInterval(newCount);
    }
  }, 500);
}
  // use % to make things happen every so many seconds
  // pet.hunger = pet.hunger + 1


  // if hunger, boredom, and sleepiness are too high
  	// dies
  		// stop timer
  		// tell user add message with jQuery?
  		// change picture somehow






  // nice-to-have/save for later






// create your tomagotchi

// Display a character of your choice on the screen to represent 
// your pet

// Display the following metrics for your pet. Hunger (1-10 scale), 
// Sleepiness (1-10 scale), Boredom (1-10 scale), Age

// Add buttons to the screen to feed your pet, turn off the lights, 
// and play with your pet

// Add the ability to name your pet

// Style the page

// Increase your pet's age every x minutes

// Increase your pet's Hunger, Sleepiness, and Bored metrics on 
// an interval of your choosing.

// You pet should die if Hunger, Boredom, or Sleepiness hits 10.

// Morph your pet at certain ages

// Animate your pet across the screen







// setTimeout
