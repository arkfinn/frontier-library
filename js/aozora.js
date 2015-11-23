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
	txt = txt.replace(/[｜](.+?)《(.+?)》/g, "<ruby>$1<rp>(</rp><rt>$2</rt><rp>)</rp></ruby>");
	txt = txt.replace(/([^ぁ-んァ-ン　／＼ （）「」、。<>]+?)《(.+?)》/g, "<ruby>$1<rp>(</rp><rt>$2</rt><rp>)</rp></ruby>");
	return txt;
}
