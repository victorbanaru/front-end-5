$(onLoad) 
  
function onLoad (){
  $('#button1').click(getPostsAndComments);
  
  function getPostsAndCommentsUsingFetch() {
    fetch (
      
    )
  }
  
  function getPostsAndComments(){
    $.ajax({
      url: "https://jsonplaceholder.typicode.com/posts",
      method: "GET"
    })
    .then(function (posts){
      var html = '<ul>' 
      for(var i=0; i<10; i++){
         var postId = posts[i].id;
         getCommentsPost(postId);
         html += '<li>';
         html += '<div>' + posts[i].title + '</div>';
         html += '<ol id="post_id_' + postId + '"></ol>';
         html += '</li>';    
       }
       html += '</ul>'
      $('.content').html(html);
    })
  }
  
  function getCommentsPost (postId){
    var computedPostId = postId
    if (postId === 4 || postId === 7) {
      computedPostId = '///dsds/' 
    }
    
    $.ajax({
       url: "https://jsonplaceholder.typicode.com/posts/" + computedPostId + "/comments",
       method: "GET",
    })
    .then(function (comments){
      var commentsList = "";
      var maxComments = comments.length > 10 ? 10 : comments.length;
      for (i=0; i<maxComments; i++) {
        commentsList += '<li>' + comments[i].name + '</li>'; 
//         console.log(comments[i]);
        }
      $('#post_id_' + postId).html(commentsList);
      console.log('comments are: ', comments)
    })
    .catch(function(error) {
      $('#post_id_' + postId).html('<li style="color:red;">Cannot get comments for post id ' + postId + '</li>')
    })
  }
  
}