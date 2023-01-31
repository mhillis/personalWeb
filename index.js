function openPage(pageName){
    //hide all tab content by default
    var i, tabcontent;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

//show specific tab content
    document.getElementById(pageName).style.display = "block";
    
}


