/*

 ### Basic Reqs
- [ ] Where to store data? (localstorage)
- [ ] How to caputure data? (web form)
- [ ] How to modify data? (update action, delete action)
- [ ] How to view data? (style?)
- [ ] UI/UX considerations (how are we going to use this)

*/

//localStorage interaction function
//get item
var getItem = function(key) {
  return window.localStorage.getItem(key);
}

//create
var createItem = function(key, value) { //key is only in string value
  return window.localStorage.setItem(key, value);
}

//update
var updateItem = function(key, value) { //key is only in string value
  return window.localStorage.setItem(key, value);
}

//delete
var deleteItem = function(key) {
  return window.localStorage.removeItem(key);
}

//clear everything
var clearEverything = function() {
  return window.localStorage.clear();
}

var keyExists = function(key) {
  var currentValue = getItem(key);
  return currentValue !== null;
}

///////////////////////////////////////////
//event handlers for the buttons and ... possibly the inputboxes
  //preventdefault on button clicks
$(document).ready(function() {
  var taskList = []; //create an empty array to store all the values

  $('#createButton').click(function(event) { //add event listener to button
    event.preventDefault();

    var currentValue = $("#valueInput").val(); //currentValue is the #valueInput from html

    if (currentValue.length < 1 || currentValue === undefined) { //if the input box is empty
      alert('Please enter a value.'); //alert message with ...
    } else {



    if (keyExists('key')) { //if a key exists
      console.log('hi');
      taskList.push(currentValue); //push the currentValue (input text) into the array
      updateItem('key', JSON.stringify(taskList)); //update the key's value with the array in a string form
      var value = JSON.parse(getItem('key')); //parse the key (which is the value of the key)
      $("ul").append(`<li>${taskList[taskList.length-1]}</li>`); //inside the ul, append <li>last input value</li>
    } else { //if no key exists
      console.log('hi2');
      taskList.push(currentValue); //push currentValue (input text) into the array
      createItem('key', JSON.stringify(taskList)); //creating one key called 'key' with taskList as the value in a string form
      var value = JSON.parse(getItem('key')); //parse the key (which is the value of the key)
      value[0] = currentValue;
      $("ul").append(`<li>${value[0]}</li>`); //inside of ul, append <li>input value (which should only be one at index 0)</li>
    }
  }
  });

  $('#clearButton').click(function(event) { //button to clear everything on the html page/local storage
    event.preventDefault(); //prevent default button function
    deleteItem('key');
    clearEverything(); //this clears local storage
    $("li").remove(); //this clears html page
  });
// ^ WHY DOES THIS BUTTON KEEP RETURNING INDEX 0 FROM THE PREVIOUS ARRAY AFTER CLEARING?!





  $('#updateButton').click(function(event) {
    event.preventDefault();

    var currentKey = $("#keyInput").val();
    var currentValue = $("#valueInput").val();
    if (keyExists(currentKey)) {
      updateItem(currentKey, currentValue);
    } else {
      //current key doesnt exist, do stuff
    }
  });


//   $('#createBtn').on('click', function() {
//   var $newTask = $('<div class="list"></div>');
//   $newTask.appendTo(".list-container");
// });
});











// var dogBreeds = ['Affenpinscher', 'Afghan Hound', 'Airedale Terrier', 'Akita', 'Alaskan Klee Kai', 'Alaskan Malamute', 'American Bulldog', 'American English Coonhound', 'American Eskimo Dog', 'American Foxhound', 'American Pit Bull Terrier', 'American Staffordshire Terrier', 'American Water Spaniel', 'Anatolian Shepherd Dog', 'Appenzeller Sennenhunde', 'Australian Cattle Dog', 'Australian Kelpie', 'Australian Shepherd', 'Australian Terrier', 'Azawakh', 'Barbet', 'Basenji', 'Basset Hound', 'Beagle', 'Bearded Collie', 'Bedlington Terrier', 'Belgian Malinois', 'Belgian Sheepdog', 'Belgian Tervuren', 'Berger Picard', 'Bernedoodle', 'Bernese Mountain Dog', 'Bichon Frise', 'Black and Tan Coonhound', 'Black Mouth Cur', 'Black Russian Terrier', 'Bloodhound', 'Blue Lacy', 'Bluetick Coonhound', 'Boerboel', 'Bolognese', 'Border Collie', 'Border Terrier', 'Borzoi', 'Boston Terrier', 'Bouvier des Flandres', 'Boxer', 'Boykin Spaniel', 'Bracco Italiano', 'Briard', 'Brittany', 'Brussels Griffon', 'Bull Terrier', 'Bulldog', 'Bullmastiff', 'Cairn Terrier', 'Canaan Dog', 'Cane Corso', 'Cardigan Welsh Corgi', 'Catahoula Leopard Dog', 'Caucasian Shepherd Dog', 'Cavalier King Charles Spaniel', 'Cesky Terrier', 'Chesapeake Bay Retriever', 'Chihuahua', 'Chinese Crested', 'Chinese Shar-Pei', 'Chinook', 'Chow Chow', 'Clumber Spaniel', 'Cockapoo', 'Cocker Spaniel', 'Collie', 'Coton de Tulear', 'Curly-Coated Retriever', 'Dachshund', 'Dalmatian', 'Dandie Dinmont Terrier', 'Doberman Pinscher', 'Dogo Argentino', 'Dogue de Bordeaux', 'Dutch Shepherd', 'English Cocker Spaniel', 'English Foxhound', 'English Setter', 'English Springer Spaniel', 'English Toy Spaniel', 'Entlebucher Mountain Dog', 'Field Spaniel', 'Finnish Lapphund', 'Finnish Spitz', 'Flat-Coated Retriever', 'Fox Terrier', 'French Bulldog', 'German Pinscher', 'German Shepherd Dog', 'German Shorthaired Pointer', 'German Wirehaired Pointer', 'Giant Schnauzer', 'Glen of Imaal Terrier', 'Goldador', 'Golden Retriever', 'Goldendoodle', 'Gordon Setter', 'Great Dane', 'Great Pyrenees', 'Greater Swiss Mountain Dog', 'Greyhound', 'Harrier', 'Havanese', 'Ibizan Hound', 'Icelandic Sheepdog', 'Irish Red and White Setter', 'Irish Setter', 'Irish Terrier', 'Irish Water Spaniel', 'Irish Wolfhound', 'Italian Greyhound', 'Jack Russell Terrier', 'Japanese Chin', 'Japanese Spitz', 'Karelian Bear Dog', 'Keeshond', 'Kerry Blue Terrier', 'Komondor', 'Kooikerhondje', 'Korean Jindo Dog', 'Kuvasz', 'Labradoodle', 'Labrador Retriever', 'Lagotto Romagnolo', 'Lakeland Terrier', 'Lancashire Heeler', 'Leonberger', 'Lhasa Apso', 'Lowchen', 'Maltese', 'Maltese Shih Tzu', 'Maltipoo', 'Manchester Terrier', 'Mastiff', 'Miniature Pinscher', 'Miniature Schnauzer', 'Mudi', 'Mutt', 'Neapolitan Mastiff', 'Newfoundland', 'Norfolk Terrier', 'Norwegian Buhund', 'Norwegian Elkhound', 'Norwegian Lundehund', 'Norwich Terrier', 'Nova Scotia Duck Tolling Retriever', 'Old English Sheepdog', 'Otterhound', 'Papillon', 'Peekapoo', 'Pekingese', 'Pembroke Welsh Corgi', 'Petit Basset Griffon Vendeen', 'Pharaoh Hound', 'Plott', 'Pocket Beagle', 'Pointer', 'Polish Lowland Sheepdog', 'Pomeranian', 'Pomsky', 'Poodle', 'Portuguese Water Dog', 'Pug', 'Puggle', 'Puli', 'Pyrenean Shepherd', 'Rat Terrier', 'Redbone Coonhound', 'Rhodesian Ridgeback', 'Rottweiler', 'Saint Bernard', 'Saluki', 'Samoyed', 'Schipperke', 'Schnoodle', 'Scottish Deerhound', 'Scottish Terrier', 'Sealyham Terrier', 'Shetland Sheepdog', 'Shiba Inu', 'Shih Tzu', 'Siberian Husky', 'Silken Windhound', 'Silky Terrier', 'Skye Terrier', 'Sloughi', 'Small Munsterlander Pointer', 'Soft Coated Wheaten Terrier', 'Stabyhoun', 'Staffordshire Bull Terrier', 'Standard Schnauzer', 'Sussex Spaniel', 'Swedish Vallhund', 'Tibetan Mastiff', 'Tibetan Spaniel', 'Tibetan Terrier', 'Toy Fox Terrier', 'Treeing Tennessee Brindle', 'Treeing Walker Coonhound', 'Vizsla', 'Weimaraner', 'Welsh Springer Spaniel', 'Welsh Terrier', 'West Highland White Terrier', 'Whippet', 'Wirehaired Pointing Griffon', 'Xoloitzcuintli', 'Yorkipoo', 'Yorkshire Terrier'];

// var catBreeds = ['Abyssinian', 'American Bobtail', 'American Curl', 'American Shorthair', 'American Wirehair', 'Balinese', 'Bengal Cats', 'Birman', 'Bombay', 'British Shorthair', 'Burmese', 'Burmilla', 'Chartreux', 'Chinese Li Hua', 'Colorpoint Shorthair', 'Cornish Rex', 'Cymric', 'Devon Rex', 'Egyptian Mau', 'European Burmese', 'Exotic', 'Havana Brown', 'Himalayan', 'Japanese Bobtail', 'Javanese', 'Korat', 'LaPerm', 'Maine Coon', 'Manx', 'Nebelung', 'Norwegian Forest', 'Ocicat', 'Oriental', 'Persian', 'Pixie-Bob', 'Ragamuffin', 'Ragdoll Cats', 'Russian Blue', 'Savannah', 'Scottish Fold', 'Selkirk Rex', 'Siamese Cat', 'Siberian', 'Singapura', 'Snowshoe', 'Somali', 'Sphynx', 'Tonkinese', 'Turkish Angora', 'Turkish Van'];

var category = ['building a home', 'skin regime', 'new pup', 'traveling', 'opening a credit card', ];

var randomMessage = function(){
  return "to-do list for all your needs:" + [randomElement(category)];
};

