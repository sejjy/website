// Source - https://stackoverflow.com/a/46163215
// Posted by V Maharajh, modified by community.
// See post 'Timeline' for change history.
// Retrieved 2026-07-20, License - CC BY-SA 4.0

var element = document.getElementById("back-link");

// Provide a standard href to facilitate standard browser features such as
//  - Hover to see link
//  - Right click and copy link
//  - Right click and open in new tab
element.setAttribute("href", document.referrer);

// We can't let the browser use the above href for navigation. If it does,
// the browser will think that it is a regular link, and place the current
// page on the browser history, so that if the user clicks "back" again,
// it'll actually return to this page. We need to perform a native back to
// integrate properly into the browser's history behavior
element.onclick = function () {
	history.back();
	return false;
};
