window.addEventListener('load', function () {

});
/*
================================================================================================
Action Movies
================================================================================================
*/

function restoreActionMovies() {
    /*Restore*/
    document.getElementById("fig_inception").style.display = "inline-block";
    document.getElementById("fig_taken").style.display = "inline-block";
    document.getElementById("fig_extraction").style.display = "inline-block";
    document.getElementById("fig_furious").style.display = "inline-block";
    document.getElementById("fig_skyfall").style.display = "inline-block";
    document.getElementById("fig_avengers").style.display = "inline-block";

    /*Unhide*/
    document.getElementById("img_inception").style.visibility = "visible";
    document.getElementById("img_taken").style.visibility = "visible";
    document.getElementById("img_extraction").style.visibility = "visible";
    document.getElementById("img_furious").style.visibility = "visible";
    document.getElementById("img_skyfall").style.visibility = "visible";
    document.getElementById("img_avengers").style.visibility = "visible";
}


/*
=============================================================================================
Romantic Movies
=============================================================================================
*/

function restoreRomanticMovies() {
    /*Restore*/
    document.getElementById("fig_notebook").style.display = "inline-block";
    document.getElementById("fig_whms").style.display = "inline-block";
    document.getElementById("fig_mby").style.display = "inline-block";
    document.getElementById("fig_titanic").style.display = "inline-block";
    document.getElementById("fig_nothingHill").style.display = "inline-block";
    document.getElementById("fig_beforeSunrise").style.display = "inline-block";

    /*Unhide*/
    document.getElementById("img_notebook").style.visibility = "visible";
    document.getElementById("img_whms").style.visibility = "visible";
    document.getElementById("img_mby").style.visibility = "visible";
    document.getElementById("img_titanic").style.visibility = "visible";
    document.getElementById("img_nothingHill").style.visibility = "visible";
    document.getElementById("img_beforeSunrise").style.visibility = "visible";
}

/*
=============================================================================================
Horror Movies
=============================================================================================
*/
/*Restore*/
function restoreHorrorMovies() {
    document.getElementById("fig_getOut").style.display = "inline-block";
    document.getElementById("fig_theConjuring").style.display = "inline-block";
    document.getElementById("fig_itFollows").style.display = "inline-block";
    document.getElementById("fig_midsommar").style.display = "inline-block";
    document.getElementById("fig_trainToBushan").style.display = "inline-block";
    document.getElementById("fig_hush").style.display = "inline-block";

    /*Unhide*/
    document.getElementById("img_getOut").style.visibility = "visible";
    document.getElementById("img_theConjuring").style.visibility = "visible";
    document.getElementById("img_itFollows").style.visibility = "visible";
    document.getElementById("img_midsommar").style.visibility = "visible";
    document.getElementById("img_trainToBushan").style.visibility = "visible";
    document.getElementById("img_hush").style.visibility = "visible";
}

/*
=============================================================================================
Kids Movies
=============================================================================================
*/

function restoreKidsMovies() {
    /*Restore*/
    document.getElementById("fig_theIncredibles").style.display = "inline-block";
    document.getElementById("fig_toyStory").style.display = "inline-block";
    document.getElementById("fig_iniseOut").style.display = "inline-block";
    document.getElementById("fig_wall-e").style.display = "inline-block";
    document.getElementById("fig_tangled").style.display = "inline-block";
    document.getElementById("fig_theLionKing").style.display = "inline-block";

    /*Unhide*/
    document.getElementById("img_theIncredibles").style.visibility = "visible";
    document.getElementById("img_toyStory").style.visibility = "visible";
    document.getElementById("img_iniseOut").style.visibility = "visible";
    document.getElementById("img_wall-e").style.visibility = "visible";
    document.getElementById("img_tangled").style.visibility = "visible";
    document.getElementById("img_theLionKing").style.visibility = "visible";
}

/*
=============================================================================================
Login system:
=============================================================================================
*/
function formValidation() {
    //username: lixinsu   / password:1234
    if (document.myForm.User.value == "") {
        alert("Please provide your user name");
        document.myForm.User.focus();
        return false;
    }
    if (document.myForm.Pwd.value == "") {
        alert("Please provide your password");
        document.myForm.Pwd.focus();
        return false;
    }

    if (document.myForm.User.value == "Abdus" && document.myForm.Pwd.value == "1234") {
        //setTimeout(function(){window.location = "https://www.bbc.com";}, 5000);		
        var counter = document.getElementById('sp1');
        let second = 5;
        setInterval(function () {
            counter.textContent = "You will be redirected after " + second + " seconds";
            if (--second === 0) {
                window.location = "index.html";
            }
            //second--;	
        }, 1000);
    } else {
        alert("Username or password incorrect!");
        document.myForm.User.focus();
    }
    return false;
}