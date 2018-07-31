$(onLoad)

function onLoad() {
  $('#button').on('click', function () {
    $('#spinner').css('visibility', 'visible');
    
    getName(function(fullName) {
      $('#spinner').css('visibility', 'hidden');
      $('.content').html('Full name is ' + fullName);
    })
  })


  $('#button2').on('click', getPosts)
  function getPosts() {
     $.ajax({
       url: 'https://jsonplaceholder.typicode.com/posts',
       method: 'GET'
    })
    .then(function(response) {
      console.log('Response', response);
    });
  }
}