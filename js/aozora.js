function formatAozora(txt){
	txt = rubyAozora(txt);
	txt = titleAozora(txt);
	txt = txt.replace(/［＃外字：(.*?)］/mg, '<img class="glyph-img" src="../../glyph/$1">\n');
	txt = txt.replace(/^(.*?)[\n\r]+?/mg, function(all, line){
		if(!line || line.match(/^\</)){
			return line;
		}
		if(line.match(/^［＃地付き］/)){
			return line.replace(/^［＃地付き］(.*)$/, '<p class="align-end">$1</p>\n');
		}
		if(line.match(/^［＃１字下げ］/)){
			return line.replace(/^［＃１字下げ］(.*)$/, '<p class="indent-1em">$1</p>\n');
		}
		if(line.match(/^［＃２字下げ］/)){
			return line.replace(/^［＃２字下げ］(.*)$/, '<p class="indent-2em">$1</p>\n');
		}
		if(line.match(/^［＃３字下げ］/)){
			return line.replace(/^［＃３字下げ］(.*)$/, '<p class="indent-3em">$1</p>\n');
		}
		if(line.match(/^［＃折り返して１字下げ］/)){
			return line.replace(/^［＃折り返して１字下げ］(.*)$/, '<p class="h-indent-1em">$1</p>\n');
		}
		if(line.match(/^［＃折り返して２字下げ］/)){
			return line.replace(/^［＃折り返して２字下げ］(.*)$/, '<p class="h-indent-2em">$1</p>\n');
		}
		if(line.match(/^［＃折り返して３字下げ］/)){
			return line.replace(/^［＃折り返して３字下げ］(.*)$/, '<p class="h-indent-3em">$1</p>\n');
		}
		if(line.match(/^［＃ここから太字］/)){
			return "<strong>";
		}
		if(line.match(/^［＃ここで太字終わり］/)){
			return "</strong>";
		}
		if(line.match(/^［＃ここから１字下げ］/)){
			return '<div class="indent-1em">';
		}
		if(line.match(/^［＃ここから２字下げ］/)){
			return '<div class="indent-2em">';
		}
		if(line.match(/^［＃ここから３字下げ］/)){
			return '<div class="indent-3em">';
		}
		if(line.match(/^［＃ここで字下げ終わり］/)){
			return "</div>";
		}
		if(line.match(/^［＃改ページ］\f*/)){
			return '<hr class="pagebreak">';
		}
		return '<p>'+line+'</p>\n';
	});
	txt = endAozora(txt);
	return txt;
}

function titleAozora(txt){
	return txt.replace(/^(.*?)[\n\r]+?/g, '<h1 id="title">$1</h1>\n');
}

function nl2brAozora(txt){
	return txt.replace(/^(.*?)([\n\r]+?)/gm, "<p>$1</p>$2");
}

function rubyAozora(txt){
	txt = txt.replace(/[｜](.+?)《(.+?)》/g, "<ruby>$1<rp>(</rp><rt>$2</rt><rp>)</rp></ruby>");
	txt = txt.replace(/([^ぁ-んァ-ンゝゞ〻　／＼ （）「」『』―・、。<>_\*{}\n\r]+?)《(.+?)》/g, "<ruby>$1<rp>(</rp><rt>$2</rt><rp>)</rp></ruby>");
	return txt;
}

function endAozora(txt){
	return txt.replace(/［＃本文終わり］([\s\S]*)$/, "<div class='author-text'>$1</div>");
}
