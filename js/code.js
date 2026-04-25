// let paramString = urlString.split('?')[1];
// let queryString = new URLSearchParams(paramString);
// for (let pair of queryString.entries()) {
//    console.log("Key is: " + pair[0]);
//    console.log("Value is: " + pair[1]);
// }






// Source - https://stackoverflow.com/a/979995
// Posted by Quentin, modified by community. See post 'Timeline' for change history
// Retrieved 2026-04-24, License - CC BY-SA 4.0

// You can get url_string from window.location.href if you want to work with
// the URL of the current page
var url_string = window.location;
var url = new URL(url_string);
var loggedIn = url.searchParams.get("login");

if (loggedIn != null) {
    ele = document.getElementById("login-buttons");
    ele.style.display = 'none';

    ele = document.getElementById("account-tab");
    ele.style.display = null;
    
    ele2 = document.getElementById("logged-in");
    ele2.style.display = null;
}
