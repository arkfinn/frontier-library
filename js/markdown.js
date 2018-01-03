/*
 * format
 * url is auto link
 * __word__ underline
 * いwordい sesame
 * # headline
 * . indent
 */

function formatMarkdown(txt){
	txt = urlMarkdown(txt);
	txt = weightMarkdown(txt);
	txt = subjectMarkdown(txt);
	txt = indentMarkdown(txt);
	txt = serifMarkdown(txt);
	return txt;
}

function urlMarkdown(txt){
	return txt.replace(/(http(s)?:\/\/[\x21-\x7e]+)/gi, "<a href='$1' target='_blank'>$1</a>");
}

function weightMarkdown(txt){
	txt = txt.replace(/\__(.*?)__/g, '<span class="em-line">$1</span>');
	txt = txt.replace(/\い(.*?)い/g, '<span class="em-sesame">$1</span>');
	return txt;
}

function subjectMarkdown(txt){
	txt = txt.replace(/##### *?(.*?)[\n\r]/g, "<h5>$1</h5>\n");
	txt = txt.replace(/#### *?(.*?)[\n\r]/g, "<h4>$1</h4>\n");
	txt = txt.replace(/### *?(.*?)[\n\r]/g, "<h3>$1</h3>\n");
	txt = txt.replace(/## *?(.*?)[\n\r]/g, "<h2>$1</h2>\n");
	txt = txt.replace(/# *?(.*?)[\n\r]/g, "<h1>$1</h1>\n");
	return txt;
}

function indentMarkdown(txt) {
	txt = txt.replace(/\.\.\.\.\. *?(.*?)[\n\r]/g, '<p class="indent-5em">$1</p>\n');
	txt = txt.replace(/\.\.\.\. *?(.*?)[\n\r]/g, '<p class="indent-4em">$1</p>\n');
	txt = txt.replace(/\.\.\. *?(.*?)[\n\r]/g, '<p class="indent-3em">$1</p>\n');
	txt = txt.replace(/\.\. *?(.*?)[\n\r]/g, '<p class="indent-2em">$1</p>\n');
	txt = txt.replace(/\. *?(.*?)[\n\r]/g, '<p class="indent-1em">$1</p>\n');
	return txt;
}

function serifMarkdown(txt) {
	txt = txt.replace(/([^\n\r]*?)[\n\r]((; .*?[\n\r])+)/g, function(all, dl, dts) {
		dt = dts.replace(/; (.*?)[\n\r]/g, '<dd>$1</dd>\n');
		return '<dl><dt>'+dl+'</dt>'+dt+'</dl>';
	});
	return txt;
}
