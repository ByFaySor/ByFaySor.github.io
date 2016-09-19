function getId( id ) {
	return document.getElementById( id );
}

window.onscroll = function () {
	if ( getScroll() > 10 ) {
		getId("barra-bottom").style.visibility = "visible";
	} else {
		getId("barra-bottom").style.visibility = "hidden";
	}
	if ( getScroll() > 400 ) {
		getId("red-socials").style.position = "fixed";
		getId("red-socials").style.left = "-0.3em";
		getId("red-socials").style.marginTop = "6em";
	} else {
		getId("red-socials").style.position = "relative";
		getId("red-socials").style.marginTop = "0em";
	}
}

function getScroll () {
	return Math.max(document.documentElement.scrollTop, document.body.scrollTop);
}
