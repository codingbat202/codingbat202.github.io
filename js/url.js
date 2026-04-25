

function goUrl(newurl) {
    var url_string = window.location;
    var url = new URL(url_string);
    var loggedIn = url.searchParams.get("login");

    if (loggedIn != null) {
        newurl += '?login='
    }

    window.location.href=newurl
}
