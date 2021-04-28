let getFit = document.getElementsByTagName ("h1");
console.log (getFit [0].innerText);

let weeklyRoutine = document.getElementsByClassName ("exercise-routine");
  for (routine of weeklyRoutine) {
    console.log (routine.innerText)
};  
  
  
  /* the example above, we used 'innerText' property, which returns the text from inside an element. */

  /* when we retrive an element, the'innerText' property will return the text between the TAGS,this property works as a 'getter' and 'setter' meaning we can both retreive and change data. * /

  /* to set or change data, we simply supply and = sign and value, eg: 'document.getElementById ("name").innerText'= "Arther Dent" in this example, we target the element with the id of "name" and set the text to "Arther Dent" */