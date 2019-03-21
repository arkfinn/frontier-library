/*
 * format
 * url is auto link
 * __word__ underline
 * ,,word,, sesame
 * ,,,word,,, circle
 * # headline
 * . indent
 * <[word] warichu ※未対応
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
	return txt.replace(/(http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w- :.\/?%&=]*)?)/gi, "<a href='$1' class='url' target='_blank'>$1</a>");
}

function weightMarkdown(txt){
	txt = txt.replace(/__(.*?)__/g, '<span class="em-line">$1</span>');
	txt = txt.replace(/,,,(.*?),,,/g, '<span class="em-circle">$1</span>');
	txt = txt.replace(/,,(.*?),,/g, '<span class="em-sesame">$1</span>');
	return txt;
}

function subjectMarkdown(txt){
	txt = txt.replace(/^##### *?(.*?)[\n\r]/mg, "<h5>$1</h5>\n");
	txt = txt.replace(/^#### *?(.*?)[\n\r]/mg, "<h4>$1</h4>\n");
	txt = txt.replace(/^### *?(.*?)[\n\r]/mg, "<h3>$1</h3>\n");
	txt = txt.replace(/^## *?(.*?)[\n\r]/mg, "<h2>$1</h2>\n");
	txt = txt.replace(/^# *?(.*?)[\n\r]/mg, "<h1>$1</h1>\n");
	return txt;
}

function indentMarkdown(txt) {
	txt = txt.replace(/^\.\.\.\.\. *?(.*?)[\n\r]/mg, '<p class="indent-5em">$1</p>\n');
	txt = txt.replace(/^\.\.\.\. *?(.*?)[\n\r]/mg, '<p class="indent-4em">$1</p>\n');
	txt = txt.replace(/^\.\.\. *?(.*?)[\n\r]/mg, '<p class="indent-3em">$1</p>\n');
	txt = txt.replace(/^\.\. *?(.*?)[\n\r]/mg, '<p class="indent-2em">$1</p>\n');
	txt = txt.replace(/^\. *?(.*?)[\n\r]/mg, '<p class="indent-1em">$1</p>\n');
	return txt;
}

function serifMarkdown(txt) {
	txt = txt.replace(/([^\n\r]*?)[\n\r]((; .*?[\n\r])+)/g, function(all, dl, dts) {
		dt = dts.replace(/; (.*?)[\n\r]/g, '<dd>$1</dd>\n');
		return '<dl><dt>'+dl+'</dt>'+dt+'</dl>';
	});
	return txt;
}
