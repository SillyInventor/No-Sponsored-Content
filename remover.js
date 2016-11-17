function deleteSuggestedContent() {
  //removes suggested content
  var spans = document.querySelectorAll("span");
  var sponsName = "Suggested Post";
  for (var i  = 0; i < spans.length; ++i) {
    if (spans[i].textContent == sponsName) //Find instances of the heading Suggested Post
    {
        getSpecificParent(spans[i],"class", "userContentWrapper").parentElement.remove(); //Find and remove the parent
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
        getSpecificParent(getSpecificParent(links[i],"class", "userContentWrapper"),"class", "userContentWrapper").parentElement.remove(); //Find and remove the parent
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
       getSpecificParent(divs[i], "data-ownerid", "").remove(); //Find and remove the parent
    }
  }
};

function deleteRightColumn() {
  //removes sponsored content
  var divs = document.querySelectorAll("div");
  var sponsClass = "home_right_column";
  for (var i  = 0; i < divs.length; ++i) {
    if (divs[i].getAttribute("class") == sponsClass) //Find instances of the class StreamSponsoredLink
    {
       getSpecificParent(divs[i],"class", "cardRightCol").parentElement.remove(); //Find and remove the parent
    }
  }
};

function getSpecificParent(content, attr, name) {
    //find the container that has a specific attribute
    while(!content.hasAttribute(attr) || content.getAttribute(attr).indexOf(name)==-1)
    {
        content = content.parentElement;
    }
    return content; // 
};

$(window).bind("DOMSubtreeModified", function() {
    //Whenever the page is updated with new content, recheck for suggested and sponsored posts
    deleteSuggestedContent();
    deleteSponsoredContent();
    deletePeopleAlsoShared();
    deleteRightColumn();
});

debugger; // allows you to access the javascript with console open


//# sourceURL=remover.js