/* Research Questions */
var waypoint = new Waypoint({
  element: document.getElementById('rq1'),
  handler: function() {
    //notify('Basic waypoint triggered')
    console.log('scrolled to point')
    var element = document.getElementById('rq1');
    element.classList.add("activated");
  },
  offset: 600
});

var waypoint = new Waypoint({
  element: document.getElementById('rq2'),
  handler: function() {
    //notify('Basic waypoint triggered')
    console.log('scrolled to point')
    var element = document.getElementById('rq2');
    element.classList.add("activated");
  },
  offset: 600
});

var waypoint = new Waypoint({
  element: document.getElementById('rq3'),
  handler: function() {
    //notify('Basic waypoint triggered')
    console.log('scrolled to point')
    var element = document.getElementById('rq3');
    element.classList.add("activated");
  },
  offset: 600
});

var waypoint = new Waypoint({
  element: document.getElementById('rq4'),
  handler: function() {
    //notify('Basic waypoint triggered')
    console.log('scrolled to point')
    var element = document.getElementById('rq4');
    element.classList.add("activated");
  },
  offset: 600
});

var waypoint = new Waypoint({
  element: document.getElementById('rq5'),
  handler: function() {
    //notify('Basic waypoint triggered')
    console.log('scrolled to point')
    var element = document.getElementById('rq5');
    element.classList.add("activated");
  },
  offset: 600
});

/* To trigger the underlining of research methodologies */

var waypoint = new Waypoint({
  element: document.getElementById('sub1'),
  handler: function() {
    //notify('Basic waypoint triggered')
    console.log('scrolled to point')
    var element = document.getElementById('sub1');
    element.classList.add("headingactivated");
  },
  offset: 600
});

var waypoint = new Waypoint({
  element: document.getElementById('sub2'),
  handler: function() {
    //notify('Basic waypoint triggered')
    console.log('scrolled to point')
    var element = document.getElementById('sub2');
    element.classList.add("headingactivated");
  },
  offset: 650
});

var waypoint = new Waypoint({
  element: document.getElementById('sub3'),
  handler: function() {
    //notify('Basic waypoint triggered')
    console.log('scrolled to point')
    var element = document.getElementById('sub3');
    element.classList.add("headingactivated");
  },
  offset: 600
});

var waypoint = new Waypoint({
  element: document.getElementById('sub4'),
  handler: function() {
    //notify('Basic waypoint triggered')
    console.log('scrolled to point')
    var element = document.getElementById('sub4');
    element.classList.add("headingactivated");
  },
  offset: 600
});

var waypoint = new Waypoint({
  element: document.getElementById('sub5'),
  handler: function() {
    //notify('Basic waypoint triggered')
    console.log('scrolled to point')
    var element = document.getElementById('sub5');
    element.classList.add("headingactivated");
  },
  offset: 600
});

var waypoint = new Waypoint({
  element: document.getElementById('sub6'),
  handler: function() {
    //notify('Basic waypoint triggered')
    console.log('scrolled to point')
    var element = document.getElementById('sub6');
    element.classList.add("headingactivated");
  },
  offset: 600
});

/* HOW MIGHT WE QUESTIONS */
var waypoint = new Waypoint({
  element: document.getElementById('hmw1'),
  handler: function() {
    //notify('Basic waypoint triggered')
    console.log('scrolled to point')
    var element = document.getElementById('hmw1');
    element.classList.add("activated2");
  },
  offset: 600
});

var waypoint = new Waypoint({
  element: document.getElementById('hmw2'),
  handler: function() {
    //notify('Basic waypoint triggered')
    console.log('scrolled to point')
    var element = document.getElementById('hmw2');
    element.classList.add("activated2");
  },
  offset: 600
});

var waypoint = new Waypoint({
  element: document.getElementById('hmw3'),
  handler: function() {
    //notify('Basic waypoint triggered')
    console.log('scrolled to point')
    var element = document.getElementById('hmw3');
    element.classList.add("activated2");
  },
  offset: 600
});

// Javascript for the companion website //

// Get the container element
var header = document.getElementById("tab");

// Get all buttons with class="btn" inside the container
var btns = header.getElementsByClassName("hidebuttons");

// Loop through the buttons and add the active class to the current/clicked button
/* Code for the tabs original */
function openTitle(evt, openTitle) {
  console.log('change colour now')
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(openTitle).style.display = "block";
    evt.currentTarget.className += " active";
}



// Code for tabs for User information //

function openTab2(evt, openTab2) {
    var i, tabcontent2, tablinks2;
    tabcontent2 = document.getElementsByClassName("tabcontent2");
    for (i = 0; i < tabcontent2.length; i++) {
        tabcontent2[i].style.display = "none";
    }
    tablinks2 = document.getElementsByClassName("tablinks2");
    for (i = 0; i < tablinks2.length; i++) {
        tablinks2[i].className = tablinks2[i].className.replace(" active", "");
    }
    document.getElementById(openTab2).style.display = "block";
    evt.currentTarget.className += " active";
}

document.getElementById("defaultOpen").click();


// Code for tabs for Lug my Luggage Tabs //

function openTab3(evt, openTab3) {
    var i, lml, tablinks3;
    lml = document.getElementsByClassName("lml");
    for (i = 0; i < lml.length; i++) {
        lml[i].style.display = "none";
    }
    tablinks3 = document.getElementsByClassName("tablinks3");
    for (i = 0; i < tablinks3.length; i++) {
        tablinks3[i].className = tablinks3[i].className.replace(" active", "");
    }
    document.getElementById(openTab3).style.display = "block";
    evt.currentTarget.className += " active";
}

document.getElementById("defaultOpen2").click();

     
// Code for tabs for NavigGATE Tabs //

function openTab4(evt, openTab4) {
    var i, ng, tablinks4;
    ng = document.getElementsByClassName("ng");
    for (i = 0; i < ng.length; i++) {
        ng[i].style.display = "none";
    }
    tablinks4 = document.getElementsByClassName("tablinks4");
    for (i = 0; i < tablinks4.length; i++) {
        tablinks4[i].className = tablinks4[i].className.replace(" active", "");
    }
    document.getElementById(openTab4).style.display = "block";
    evt.currentTarget.className += " active";
}

document.getElementById("defaultOpen3").click();

// Code for tabs for friendbot Tabs //

function openTab5(evt, openTab5) {
    var i, fb, tablinks5;
    fb = document.getElementsByClassName("fb");
    for (i = 0; i < fb.length; i++) {
        fb[i].style.display = "none";
    }
    tablinks5 = document.getElementsByClassName("tablinks5");
    for (i = 0; i < tablinks5.length; i++) {
        tablinks5[i].className = tablinks5[i].className.replace(" active", "");
    }
    document.getElementById(openTab5).style.display = "block";
    evt.currentTarget.className += " active";
}

document.getElementById("defaultOpen4").click();