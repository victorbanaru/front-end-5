window.addEventListener("load", function() {
  var containerEl = document.getElementById("article-details");
  
  var article = new Article();
  var articleId = getUrlParameter("articleId");
  // our article object gets id from URL
  article.id = articleId;
  
  article.getArticleDetails().then(function(response) {
        
    displayArticleDetails(article);
    function displayArticleDetails(articleDetails) {
        console.log("articleDetails is ", articleDetails);
        var titleEl = document.createElement('h1');
        titleEl.innerHTML = articleDetails.title;
        containerEl.appendChild(titleEl);
        
        var bodyEl = document.createElement('p');
        bodyEl.innerHTML = articleDetails.body;
        containerEl.appendChild(bodyEl);
    }
  });
  
  
  /**
     * It retrieves a query (URL) parameter value
     * 
     * It expects you to send the parameter key(before '=')
      */
    function getUrlParameter(name) {
        name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
        var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
        var results = regex.exec(location.search);
        return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
    };
});