// Get element by ID
console.log("Comments list", document.getElementById('comments-list'));

window.addEventListener("load", function(event) {
 console.log("All resources finished loading!");
});

 // WHen document object is available
document.addEventListener("DOMContentLoaded", onHtmlLoaded);

function onHtmlLoaded() {
  console.log("DOM fully loaded and parsed");
  // by id
  console.log("Comments list", document.getElementById('comments-list'));
  // by class
  console.log("Comment items", document.getElementsByClassName('comment-items'));
  // first by class
  console.log("First comment", document.getElementsByClassName('comment-item')[0]);
  // by tag
  console.log("Comments items", document.getElementsByTagName('section'));
  // second by tag
  console.log("Second comment", document.getElementsByTagName('section')[1]);
  // first by class and tag
  console.log("First comment", document.querySelector('section.comment-item'));
   // all by class and tag
  console.log("Comments items", document.querySelectorAll('section.comment-item'));
  // all users
  console.log("User for comments", document.querySelectorAll('section.comment-item strong'));
  
  
  // Change H1 content
  var h1 = document.querySelector('h1');
  h1.innerText = 'JS DOM Manipulation NEW'; // as string
  console.log("H1 text", h1.innerText);
  h1.innerHTML = 'JS DOM Manipulation <em>NEW</em>'; // as HTML
  console.log("H1 text", h1.innerHTML);
  
  
  // Manipulate attribute
  var h2 = document.querySelector('h2');
  h2.setAttribute('title', 'Comments list'); // set attribute
  console.log('Get attribute', h2.getAttribute('title'));
  h2.id = "comments-list-id"
  console.log("Comments list id", h2.id);
  
  // Change style
  var commentsContainer = document.getElementById('comments-list');
  commentsContainer.style.border = "solid 1px green";
  var commentsItems = document.getElementsByClassName('comment-item');
  for (var i = 0; i < commentsItems.length; i++) {
  commentsItems[i].style.border = "solid 2px blue";
  }
  
  // Add new dom elements;
  var commentItem = document.createElement('section');
  commentItem.ClassName = 'comment-item';
  commentItem.innerHTML = '<h3>New comment</h3>' + 
                          '<p>New comment content<strong> Author<strong></p>';
  commentsContainer.appendChild(commentItem);
  
  // Remoe first comment item
  var commentItem = document.querySelector('section.comment-item');
  commentsContainer.removeChild(commentItem);
  
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
    var comment = list[i];
    var item = document.createElement('section');
    item.className = 'comment-item';
    item.innerHTML = '<h3>' + comment.title + '</h3>' +
                     '<p>' + comment.body + '<strong>' + comment.author + '</strong></p>';
    commentsContainer.appendChild(item);
  }
  
  // Event listener
  var btnSearch = document.getElementById('btn-search');
  btnSearch.addEventListener('click', onSearch);
  // btnSearch.addEventListener('mouseover', onHover);
  
  function onSearch () {
    alert(1);
  }
  
  // unbind from click
  btnSearch.removeEventListener('click', onSearch);
  
  
}