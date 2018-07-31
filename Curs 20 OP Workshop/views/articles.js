window.addEventListener("load", function() {
  var containerEl = document.getElementById("articles-list");
  
  var articlesModel = new Articles();
  articlesModel.getAll().then(function(response) {
    displayAllArticles(response);
  });
  
  function displayAllArticles(articlesData) {
    for (var i = 0; i < articlesData.length; i++) {
      var article = new Article(articlesData[i]);
      displayArticle(article);
    }
  }
  
  function displayArticle(article) {
    var liEl = document.createElement('li');
    
    var titleEl = document.createElement('h1');
    titleEl.innerHTML = article.title;
    
    titleEl.addEventListener("click", function() {
      window.location = "http://cursuri-v-banaru-banaru702140.codeanyapp.com/Curs%2020%20OP%20Workshop/templates/article.html?articleId=" + article.id;
    });
    
    var bodyEl = document.createElement('p');
    bodyEl.innerHTML = article.body;
    
    liEl.appendChild(titleEl);
    liEl.appendChild(bodyEl);
    
    containerEl.appendChild(liEl); 
  }
                        
});