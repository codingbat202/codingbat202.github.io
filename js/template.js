





var template = document.getElementById('body')

var bodyContent = document.getElementById('body-insert')

bodyContent.parentNode.insertBefore(template, bodyContent)





function selectedTabIndex(index) {
    var nav = document.getElementById('navigation');
    var tabs = nav.children;
    tabs[index].classList.add('navigation-selected')
}
