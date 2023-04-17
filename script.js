var today = dayjs();
var hour = today.format('H')
console.log('Current Hour:', hour)
console.log(today);

$(function () {
  $('#currentDay').text(today.format('dddd, MMMM D YYYY'));

  const nine = $('#hour-9')   
  const ten = $('#hour-10')   
  const eleven = $('#hour-11')    
  const twelve = $('#hour-12')    
  const thirteen = $('#hour-13')  
  const fourteen = $('#hour-14')  
  const fifteen = $('#hour-15')  
  const sixteen = $('#hour-16')   
  const seventeen = $('#hour-17')  
  const times = [nine, ten, eleven, twelve, thirteen, fourteen, fifteen, sixteen, seventeen]
  times.forEach(time => {
    console.log(time.data('time'))
    if(time.data('time') < hour) {
      console.log('past')
      time.addClass('past')
    } else if (time.data('time') > hour) {
      console.log('future')
      time.addClass('future')
    } else {
      console.log('present')
      time.addClass('present')
    }
  })


  
  
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});
