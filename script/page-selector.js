$("#about").click(function(){
    $("#content").load("./pages/about.html");
    if(!$("#nav-button").is(":hidden")){
      $("#nav-button").click();}
});

$("#programs").click(function(){
    $("#content").load("./pages/program.html");
    if(!$("#nav-button").is(":hidden")){
      $("#nav-button").click();}
});

$("#locations").click(function(){
    $("#content").load("./pages/locations.html");
    if(!$("#nav-button").is(":hidden")){
      $("#nav-button").click();}
});

$("#join").click(function(){
    $("#content").load("./pages/join.html");
    if(!$("#nav-button").is(":hidden")){
      $("#nav-button").click();}
});

$("#contact").click(function(){
    $("#content").load("./pages/contact.html");
    if(!$("#nav-button").is(":hidden")){
      $("#nav-button").click();}
});

$("#sign-in").click(function(){
    $("#content").load("./pages/signin.html");
    if(!$("#nav-button").is(":hidden")){
      $("#nav-button").click();}
});
