function deleteSuggestedContent() {
  var spans = document.querySelectorAll("span");
  var sponsName = "Suggested Post";
  for (var i  = 0; i < spans.length; ++i) {
    var text = spans[i].textContent;
    if (text == sponsName)
    {
        getTopParent(spans[i]).remove();
    }
  }
};

function deleteSponsoredContent() {
  var links = document.querySelectorAll("a");
  var sponsClass = "uiStreamSponsoredLink";
  for (var i  = 0; i < links.length; ++i) {
    if (links[i].getAttribute("class") == sponsClass)
    {
        getTopParent(getTopParent(links[i])).remove();
    }
  }
};

function getTopParent(content) {
    var facebookClass = "userContentWrapper"; 
    while(!content.hasAttribute("class") || content.getAttribute("class").indexOf(facebookClass)==-1)
    {
        content = content.parentElement;
    }
    return content.parentElement;
};

$(window).bind("DOMSubtreeModified", function() {
    deleteSuggestedContent();
    deleteSponsoredContent();
});
 debugger;


//# sourceURL=code.js