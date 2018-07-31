$(onHtmlLoaded)

function onHtmlLoaded() {
  var apiUrl = "https://jsonplaceholder.typicode.com/posts/";
  
  
  getPosts();
  
  $('#deletePost').on('click', deletePost);
  
  function deletePost() {
    var idInput = $('input[name="delete"]').val();
    $.ajax({
      url: apiUrl + idInput,
      method: "DELETE",
      success: function() {
        console.log("Post was deleted", idInput);
      }
    })
  }
  
  function getPosts() {
    var listContainer = $("#listPosts");
    $.ajax({
      url: apiUrl,
      succes: function(response) {
        console.log("Response ", response);
        for (var i=0; i < response.length; i++) {
//           console.log(response[i].title);
          var title = "<h3>" + response[i].title + "</h3>";
          listContainer.append(title);
        }
      }
    })
  }
  
  
}