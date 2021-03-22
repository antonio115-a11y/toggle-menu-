let ToggleNavStatus = false;

let toggleNav = function(){
    let getSideBar = document.querySelector(".nav-sidebar");
    let getSideBarUl = document.querySelector(".nav-sidebar ul");
    let getSideBarTitle = document.querySelector(".nav-sidebar span");
    let getSideBarLinks = document.querySelectorAll(".nav-sidebar a");



if(ToggleNavStatus === false){
    getSideBarUl.style.visibility ="visible";
    getSideBar.style.width ="260px";
    getSideBarTitle.style.opacity = "0.5";
    getSideBarTitle.style.color = "#39CCCC";


    let arrayLength = getSideBarLinks.length;
    for (let i = 0; i < arrayLength; i++){
        getSideBarLinks[i].style.opacity = "1";

    }

    ToggleNavStatus = true;
}


else if(ToggleNavStatus === true){
    getSideBar.style.width ="50px";
    getSideBarTitle.style.opacity = "0";


    let arrayLength = getSideBarLinks.length;
    for (let i = 0; i < arrayLength; i++){
        getSideBarLinks[i].style.opacity = "1";

    }
    getSideBarUl.style.visibility = "hidden";
    ToggleNavStatus = false;

}
}
 