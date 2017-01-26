/* Here’s an example of some code that would add the location of one your companies to the page:
    * `var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);`
     `$(".work-entry:last").append(formattedLocation);`
     */
//The header/bio belongs here
var bio = {
    "name": "Rashaun Ellison",
    "role": "Web Developer",
    "contacts": {
        "mobile": "404-518-8099",
        "email": "rashaunellison@yahoo.com",
        "github": "rellison27",
        "twitter": "@rellison",
        "location": "Alanta, GA"
    },
    "welcomeMessage": "Coding is my life!",
    "skills": [
        "JSON", "javaScript", "HTML", "CSS"
    ],
    "biopic": "images/DSC_1908.jpg"
};
bio.display = function() {
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    var formattedGitHub = HTMLgithub.replace("%data%", bio.contacts.github);
    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
    var formattedPic = HTMLbioPic.replace("%data%", bio.biopic);
    var formattedWelcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    $("#header").prepend(formattedRole);
    $("#header").prepend(formattedName);
    $("#topContacts, #footerContacts").append(formattedMobile);
    $("#topContacts, #footerContacts").append(formattedEmail);
    $("#topContacts, #footerContacts").append(formattedGitHub);
    $("#topContacts, #footerContacts").append(formattedLocation);
    $("#header").append(formattedPic);
    $("#header").append(formattedWelcomeMessage);
    //Skills if Quiz
    if (bio.skills.length > 0) {
        $("#header").append(HTMLskillsStart);
    }
    // Never write the same code twice
    for (var i = 0; i < bio.skills.length; i++) {
        formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
        $("#skills").append(formattedSkill);
    }
};
bio.display();

// Work Goes Here

var work = {
    "jobs": [{
        "employer": "Content Instrumentals",
        "title": "Web Developer",
        "location": "Atlanta, GA",
        "dates": "2016-2017",
        "description": "Designed every page on the site. I designed the homepage, the about page, and the blog."
    }, {
        "employer": "Fake Job",
        "title": "Pretend WebDeveloper",
        "location": "Los Angeles, CA",
        "dates": "January 2000 - Present",
        "description": "This is my description for my fake job in which I love."
    }]
};

work.display = function() {
    for (var i = 0; i < work.jobs.length; i++) {
        //
        $("#workExperience").append(HTMLworkStart);
        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
        $(".work-entry:last").append(formattedEmployer + formattedTitle);
        //Code for dates
        var formattedJobDates = HTMLworkDates.replace("%data%", work.jobs[i].dates);
        $(".work-entry:last").append(formattedJobDates);
        //Code for location
        var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
        $(".work-entry:last").append(formattedLocation);
        //Code for description
        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);
        $(".work-entry:last").append(formattedDescription);
    }
};
work.display();
//

// HERE ARE projects
var projects = {
    "projects": [{
        "title": "Sample Project 1",
        "dates": "2017",
        "description": "This is my sample project description.",
        "images": [
            "http://placehold.it/350x150",
            "http://placehold.it/350x150"
        ]
    }]
};
projects.display = function() {
    for (var i = 0; i < projects.projects.length; i++) {
        //
        $("#projects").append(HTMLprojectStart);
        var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title);
        $(".project-entry:last").append(formattedProjectTitle);
        //Code for dates
        var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[i].dates);
        $(".project-entry:last").append(formattedProjectDates);
        //Code for description
        var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);
        $(".project-entry:last").append(formattedProjectDescription);
        //Code for images
        for (var j = 0; j < projects.projects[i].images.length; j++) {

            var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[i].images[j]);
            $(".project-entry:last").append(formattedImage);
        }
    }
};
projects.display();

// Education section starts here

var education = {
    "schools": [{
        "name": "Georgia State University",
        "location": "Atlanta",
        "degree": "BS",
        "majors": "ExSci",
        "dates": "2010-2015",
        "url": "https://gsu.edu"
    }, {
        "name": "Udacity",
        "location": "California",
        "degree": "Front-End Developer",
        "major": "Front-End Web Developer",
        "dates": "2016-2017",
        "url": "https://udacity.com"
    }],
    "onlineCourses": [{
        "title": "JavaScript Basics",
        "school": "Udacity",
        "dates": "2017",
        "url": "https://www.udacity.com/course/javascript-basics--ud804"
    }]
};
education.display = function() {
    for (var i = 0; i < education.schools.length; i++) {

        $("#education").append(HTMLschoolStart);
        var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[i].name);
        var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
        $(".education-entry:last").append(formattedSchoolName + formattedSchoolDegree);
        //Code for dates
        var formattedschoolDates = HTMLschoolDates.replace("%data%", education.schools[i].dates);
        $(".education-entry:last").append(formattedschoolDates);
        //Code for location
        var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);
        $(".education-entry:last").append(formattedSchoolLocation);
        //Code for major
        var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[i].majors);
        $(".education-entry:last").append(formattedMajor);
    }
    // Online courses code
    $("#education").append(HTMLonlineClasses);
    for (var h = 0; h < education.onlineCourses.length; h++) {
        $("#education").append(HTMLschoolStart);
        var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[h].title);
        var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[h].school);
        $(".education-entry:last").append(formattedOnlineTitle + formattedOnlineSchool);
        //dates
        var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[h].dates);
        $(".education-entry:last").append(formattedOnlineDates);
        //url
        var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[h].url);
        $(".education-entry:last").append(formattedOnlineURL);
    }
};
education.display();

$("#mapDiv").append(googleMap);

/* if (bio.skills.length > 0 ) {
      return $("#header").append(HTMLskillsStart)
}

*/


 /*
 **Location function

 function locationizer(work_obj) {
     var locationArray = [];

     for(i = 0; i < work_obj.jobs.length; i++) {
         var newLocation = work_obj.jobs[i].location;
         locationArray.push(newLocation)
     }
     return locationArray;
 }

 // Did locationizer() work? This line will tell you!
 console.log(locationizer(work));
 */
