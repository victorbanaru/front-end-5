$(onHtmlLoaded)

function onHtmlLoaded() {
  
  
  var loadPosts = function() {
    $.ajax({
      url: "https://jsonplaceholder.typicode.com/posts",
  //     method: "GET",
      success: function (data) {
        console.log("Posts =  ", data);
      }
    });
  }
  
  var loadPost = function(id) {
    $.ajax({
      url: "https://jsonplaceholder.typicode.com/posts/" + id,
  //     method: "GET", by default este apelata aceasta metoda
      success: function(data) {
        console.log("Post =  ", data);
      }
    });
  }
  
  // REQUEST TO CREATE A POST
  var createPost = function() {
    $.ajax({
      url: "https://jsonplaceholder.typicode.com/posts/",
      method: "POST",
      data: {
        title: "Post by Anca",
        body: "bla by Anca",
        userId: 1
      },
      succes: function(data) {
        console.log("Create post", data);
        console.log("Create post with id", data.id);
      }
    });
  }
  
  // REQUEST TO UPDATE A POST
  var editPost = function(id) {
    $.ajax({
      url: "https://jsonplaceholder.typicode.com/posts/" + id,
      method: "PUT",
      data: {
        title: "Edit post",
        body: "Edit post body",
        userId: 1,
      },
      success: function(data) {
        console.log("Updated post = ", data);
      }
    })
  }
  
  // REQUEST TO DELETE A POST
  var deletePost = function(id) {
    $.ajax({
      url: "https://jsonplaceholder.typicode.com/posts/" + id,
      method: "DELETE",
      success: function() {
        console.log("Post was deleted");
      }
    })
  }
  
  loadPosts();
  
  loadPost(3);
  loadPost(10);
  loadPost(50);
  
  createPost();
  
  editPost(1);
  editPost(10);
  
}