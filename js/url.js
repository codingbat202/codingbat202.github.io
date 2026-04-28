

function goUrl(newurl) {
    var url_string = window.location;
    var url = new URL(url_string);
    var loggedIn = url.searchParams.get("login");

    if (newurl == '/login/') { newurl += '?prev=' + window.location.pathname }

    if (loggedIn != null) { newurl += '?login=' }

    window.location.href=newurl
}


function goPrevLoggedIn() {
    var url_string = window.location;
    var url = new URL(url_string);
    var prevUrl = url.searchParams.get("prev");

    if (prevUrl != null) {
        window.location.href = prevUrl + '?login='
    } else {
        window.location.href = '/?login='
    }
}

function signOutUrl() {
    window.location.href = window.location.pathname;
}

function ni() {
    alert('not implemented!');
}
