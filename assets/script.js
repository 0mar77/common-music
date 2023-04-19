// The today variable contains today's informatin
var today = dayjs();
// The hour variable contains the current hour
var hour = today.format('H')
console.log('Current Hour:', hour)
console.log(today);

$(function () {
  // Displays the current date
  $('#currentDay').text(today.format('dddd, MMMM D YYYY'));

  const nine = $('#hour-9');   
  const ten = $('#hour-10');   
  const eleven = $('#hour-11');    
  const twelve = $('#hour-12');   
  const thirteen = $('#hour-13');  
  const fourteen = $('#hour-14');  
  const fifteen = $('#hour-15');  
  const sixteen = $('#hour-16');   
  const seventeen = $('#hour-17');  
  const times = [nine, ten, eleven, twelve, thirteen, fourteen, fifteen, sixteen, seventeen];

  const textNine = $('#text-nine');
  // Changes colors depending if its past, present or future
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
  });

  // Renders a div telling the user that the new event was added to localStorage
  function localStorageNotification() {
    const localStorageDiv = $('#local-storage');
    localStorageDiv.html(
      `Appointment added to 
      <span class="text-danger">localStorage</span>
      <span class="text-success">✔</span>`
    );
  }
  
  // Code in charge of saving and rendering hour 9 AM
  nine.children('button').click(function(){
    const hour = nine.children('textarea').val();
    localStorage.setItem('nine', hour);
    localStorageNotification();
  })
  
  function renderNine() {
    const text = localStorage.getItem('nine');
    nine.children('textarea').html(text);
  }
  renderNine();


  // Code in charge of saving and rendering hour 10 AM
  ten.children('button').click(function(){
    const hour = ten.children('textarea').val();
    localStorage.setItem('ten', hour);
    localStorageNotification();
  })
  
  function renderTen() {
    const text = localStorage.getItem('ten');
    ten.children('textarea').html(text);
  }
  renderTen();

  // Code in charge of saving and rendering hour 11 AM
  eleven.children('button').click(function() {
    const hour = eleven.children('textarea').val();
    localStorage.setItem('eleven', hour);
    localStorageNotification();
  })

  function renderEleven() {
    const text = localStorage.getItem('eleven');
    eleven.children('textarea').html(text);
  }
  renderEleven();

  // Code in charge of saving and rendering hour 12 PM
  twelve.children('button').click(function() {
    const hour = twelve.children('textarea').val();
    localStorage.setItem('twelve', hour);
    localStorageNotification();
  })

  function renderTwelve() {
    const text = localStorage.getItem('twelve');
    twelve.children('textarea').html(text);
  }
  renderTwelve();

  // Code in charge of saving and rendering hour 1 PM
  thirteen.children('button').click(function() {
    const hour = thirteen.children('textarea').val();
    localStorage.setItem('thirteen', hour);
    localStorageNotification();
  })

  function renderThirteen() {
    const text = localStorage.getItem('thirteen');
    thirteen.children('textarea').html(text);
  }
  renderThirteen();

  // Code in charge of saving and rendering hour 2 PM
  fourteen.children('button').click(function() {
    const hour = fourteen.children('textarea').val();
    localStorage.setItem('fourteen', hour);
    localStorageNotification();
  })

  function renderFourteen() {
    const text = localStorage.getItem('fourteen');
    fourteen.children('textarea').html(text);
  }
  renderFourteen();

  // Code in charge of saving and rendering hour 3 PM
  fifteen.children('button').click(function() {
    const hour = fifteen.children('textarea').val();
    localStorage.setItem('fifteen', hour);
    localStorageNotification();
  })

  function renderFifteen() {
    const text = localStorage.getItem('fifteen');
    fifteen.children('textarea').html(text);
  }
  renderFifteen();

  // Code in charge of saving and rendering hour 4 PM
  sixteen.children('button').click(function() {
    const hour = sixteen.children('textarea').val();
    localStorage.setItem('sixteen', hour);
    localStorageNotification();
  })

  function renderSixteen() {
    const text = localStorage.getItem('sixteen');
    sixteen.children('textarea').html(text);
  }
  renderSixteen();

  // Code in charge of saving and rendering hour 5 PM
  seventeen.children('button').click(function() {
    const hour = seventeen.children('textarea').val();
    localStorage.setItem('seventeen', hour);
    localStorageNotification();
  })

  function renderSeventeen() {
    const text = localStorage.getItem('seventeen');
    seventeen.children('textarea').html(text);
  }
  renderSeventeen();
  
});



