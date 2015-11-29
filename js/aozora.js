function formatAozora(txt){
	txt = titleAozora(txt);
	txt = groundAozora(txt);
	txt = nl2brAozora(txt);
	return rubyAozora(txt);
}

function titleAozora(txt){
	return txt.replace(/^(.*?)[\n\r]+?/g, '<h1 id="title">$1</h1>');
}

function groundAozora(txt){
	return txt.replace(/［＃地付き］(.*?[\n\r]+?)/g, '<p class="ground">$1</p>');
}

function nl2brAozora(txt){
	return txt.replace(/([\n\r]+?)/g, "$1<br />");
}

function rubyAozora(txt){
	txt = txt.replace(/[｜](.+?)《(.+?)》/g, "<ruby>$1<rp>(</rp><rt>$2</rt><rp>)</rp></ruby>");
	txt = txt.replace(/([^ぁ-んァ-ンゝゞ　／＼ （）「」、。<>]+?)《(.+?)》/g, "<ruby>$1<rp>(</rp><rt>$2</rt><rp>)</rp></ruby>");
	return txt;
}
