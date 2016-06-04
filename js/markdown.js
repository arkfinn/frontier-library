function formatMarkdown(txt){
	txt = urlMarkdown(txt);
	txt = weightMarkdown(txt);
	return subjectMarkdown(txt);
}

function urlMarkdown(txt){
	return txt.replace(/(http(s)?:\/\/[\x21-\x7e]+)/gi, "<a href='$1' target='_blank'>$1</a>");
}

function weightMarkdown(txt){
	return txt.replace(/\__(.*?)__/g, '<span class="em-line">$1</span>');
}

function subjectMarkdown(txt){
	txt = txt.replace(/##### *?(.*?)[\n\r]/g, "<h5>$1</h5>\n");
	txt = txt.replace(/#### *?(.*?)[\n\r]/g, "<h4>$1</h4>\n");
	txt = txt.replace(/### *?(.*?)[\n\r]/g, "<h3>$1</h3>\n");
	txt = txt.replace(/## *?(.*?)[\n\r]/g, "<h2>$1</h2>\n");
	txt = txt.replace(/# *?(.*?)[\n\r]/g, "<h1>$1</h1>\n");
	return txt;
}
