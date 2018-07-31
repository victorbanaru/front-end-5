// DOM Loaded
$(onHtmlLoaded);

function onHtmlLoaded() {
  console.log("On HTML Loaded");
  

  // by id - jqerry element
  console.log("Comment list", $('#comments-list'));
  // by id - native element
  console.log("Comment list", $('#comments-list')[0]);
  
  // by class
  console.log("Item", $('.comment-item'));
  
  // by tag
  console.log("Header ", $('h1'));
  
  // by qerry selector
  console.log("Authoor", $('section.comment-item strong'));
  
  var h1 = $('h1');
  h1.text('JQerry DOM Manipulation New');
  h1.html('JQerry DOM Manipulation <em>New<em>');
  
  var h2 = $('h2');
  h2.attr('title', 'Comments List'); // set attr
  console.log("H2 Title", h2.attr('title')); // get attr
  
  // CSS manipulation
  var commentsContainer = $('#comments-list');
  commentsContainer.css('border', 'solid 1px green');
  commentsContainer.css({
    color: 'blue',
    background: '#ccc'
  });
  console.log("Comments list border", commentsContainer.css('border'));
  
  // Add border to each comment
  var commentItems =  $('.comment-item');
  commentItems.css('border', 'solid 5px pink');
  
  // Add new comment
  var comment = '<section>' +
                  '<h3>New Comment</h3>' +
                  '<p>Content <strong>A B</strong></p>' +
                '</section>';
  commentsContainer.append(comment);
  
  // Add comments list
  var list = [
    {
      title: "Title 1",
      body: "Lorem ipsum ...",
      author: "Ion Pop"
    },
    {
      title: "Title 2",
      body: "Lorem ipsum ...",
      author: "Ana Pop"
    }
  ];
  
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var comment = '<section>' +
                  '<h3>' + item.title + '</h3>' +
                  '<p>' + item.body + '<strong>' + item.author + '</strong></p>' +
                '</section>';
    commentsContainer.append(comment);
  }
  
  // Remove element
  commentItems.first().remove();
  
  // Bind events
  var btnSearch = $('#btn-search');
  btnSearch.on('click', function() {
//     alert(1);
    // get search value
    var search = $('input[name="search"]').val();
    console.log("Search value", search);
  });
  
  console.log(commentsContainer);
  
}