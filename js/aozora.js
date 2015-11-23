function formatAozora(txt){
	txt = titleAozora(txt);
	txt = nl2brAozora(txt);
	return rubyAozora(txt);
}

function titleAozora(txt){
	return txt.replace(/^(.*?[\n\r]+?)/, '<h1 id="title">$1</h1>');
}

function nl2brAozora(txt){
	return txt.replace(/([\n\r]+?)/g, "$1<br />");
}

function rubyAozora(txt){
	return txt.replace(/｜{0,1}([一-龠々]+?)《(.+?)》/g, "<ruby>$1<rp>(</rp><rt>$2</rt><rp>)</rp></ruby>");
}
