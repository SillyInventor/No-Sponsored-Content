function deleteSuggestedContent() {
  //removes suggested content
  var spans = document.querySelectorAll("span");
  var sponsName = "Suggested Post";
  for (var i  = 0; i < spans.length; ++i) {
    if (spans[i].textContent == sponsName) //Find instances of the heading Suggested Post
    {
        getTopUserParent(spans[i]).remove(); //Find and remove the parent
    }
  }
};

function deleteSponsoredContent() {
  //removes sponsored content
  var links = document.querySelectorAll("a");
  var sponsClass = "uiStreamSponsoredLink";
  for (var i  = 0; i < links.length; ++i) {
    if (links[i].getAttribute("class") == sponsClass) //Find instances of the class StreamSponsoredLink
    {
        getTopUserParent(getTopUserParent(links[i])).remove(); //Find and remove the parent
    }
  }
};

function deletePeopleAlsoShared() {
  //removes sponsored content
  var divs = document.querySelectorAll("div");
  var sponsName = "People Also Shared";
  var sponsClass = "_4_cj";
  for (var i  = 0; i < divs.length; ++i) {
    if (divs[i].textContent == sponsName && divs[i].getAttribute("class") == sponsClass) //Find instances of the class StreamSponsoredLink
    {
       getTopJsonParent(divs[i]).remove(); //Find and remove the parent
    }
  }
};

function getTopUserParent(content) {
    //find the container that has class userContentWrapper
    var facebookClass = "userContentWrapper"; 
    while(!content.hasAttribute("class") || content.getAttribute("class").indexOf(facebookClass)==-1)
    {
        content = content.parentElement;
    }
    return content.parentElement;
};

function getTopJsonParent(content) {
    //find the container that has data-ownerid u_jsonp
    var facebookClass = "u_jsonp"; 
    while(!content.hasAttribute("data-ownerid") || content.getAttribute("data-ownerid").indexOf(facebookClass)==-1)
    {
        content = content.parentElement;
    }
    return content.parentElement;
};

$(window).bind("DOMSubtreeModified", function() {
    //Whenever the page is updated with new content, recheck for suggested and sponsored posts
    deleteSuggestedContent();
    deleteSponsoredContent();
    deletePeopleAlsoShared();
});

debugger; // allows you to access the javascript with console open


//# sourceURL=remover.js