$(onHtmlLoaded)

function onHtmlLoaded() {
  console.log('HTML loaded')
  
   
  var getShowsData = function (query) {
    var url = `http://api.tvmaze.com/search/shows?q=` + query
    $.ajax({
      url: url,
      method: 'GET',
      success: manageData
    })
  }
  
  $('#invoke-ajax-test-call').on('click', function() {
    var query = $('input').val()
    getShowsData(query)
  })
  
  function manageData (data, textStatus, jqXHR) {
    $(".container").html(renderHtml(data))
  }
  
  function renderHtml (data) {
    var html = `<ul>`
    for (i = 0; i<data.length; i++) {
//     console.log('Title', data[i].show.name);
     var name = data[i].show.name;
     var score = data[i].score;
     var url = data[i].show.url;
     console.log(name, score, url);
     html += `<li>` + name + " * Score: " + score + " * Link: " + `<a href="` + url + `" target="_blank">Visit website!</a></li>`
    }
    
    html += `</ul>`
    return html;
  } 
}