// Exercise: Find the top navbar by query for the element type, which is <nav>.
var navBarArray = $('nav');
// Exercise: Find the sidebar on the right by using it's id.
var rightSideBar = $('#sidebar-right');
// Exercise: Find the "Pages" and "Groups" sections of the sidebar by using their class.
var pages = $(".pages");
var groups = $(".groups");
// Exercise: Find all of the comments on the page.
var panels = $(".panel");
// Exercise: Find the first comment on the page.
var firstComment = panels.first();
// Exercise: Find the last comment on the page.
var lastComment = panels.last();
// Exercise: Find the fourth comment on the page.
var nthComment = function(n) { // why doesn't nth-child do what is expected?
  return $($('.panel')[n - 1]);
}
nthComment(4)
// Exercise: Find one of the ads in the sidebar and use .hide() to hide it.
var adSlot1 = $($(".ad-slot")[0]);
adSlot1.hide()
// Exercise: Use .show() to make the ad that you hid in the previous step visible again.
adSlot1.show()
// Exercise: Use .toggle() to toggle the display of the nav bar at the top of the page.
var navBar = $($('nav')[0]);
navBar.toggle()
// Exercise: Use .attr() to change src attribute of one of the ads in the sidebar. Here's an image source if you need one: http://placebear.com/200/300.
$($(".ad-slot img")[1]).attr("src", "http://placebear.com/200/300");
// Exercise: Find Sam's post and change it's text to something incredible.
var changePost = function(posterName) {
  var postBody = $(".post")

  for(var i = 0; i < postBody.length; i++) {
    var mediaBodyH4 = $($('.post .media-body h4')[i]); //this the ith element of a jQuery obj
    var mediaBodyP = $($('.post .media-body h4').siblings("p")[i]) //this is the ith element of a jQuery obj which checks for siblings of h4, so that no other "p"s are called from other classes
    if(mediaBodyH4.text() == posterName) {
        mediaBodyP.text("OMG PLEASE WORK");
    }
  }
}
changePost("Sam McTaggart")
// Exercise: Find the first post and use .addClass() to add the .post-liked class to it.

// Exercise: Find the second post and use .removeClass() to remove the .post-liked class.

// Exercise: Find any post and use .toggleClass() to toggle the .post-liked class.
