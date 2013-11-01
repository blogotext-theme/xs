/* Tag script found at : http://www.siteduzero.com/tutoriel-3-34703-insertion-de-balises-dans-une-zone-de-texte.html */
function insertTag(startTag, endTag, tag, tagType) {
	var field = document.getElementById(tag);
	var scroll = field.scrollTop;
	field.focus();

	if (window.ActiveXObject) { // C'est IE
		var textRange = document.selection.createRange();            
		var currentSelection = textRange.text;

		textRange.text = startTag + currentSelection + endTag;
		textRange.moveStart("character", -endTag.length - currentSelection.length);
		textRange.moveEnd("character", -endTag.length);
		textRange.select();     
	} else { // c'est pas IE.
		var startSelection   = field.value.substring(0, field.selectionStart);
		var currentSelection = field.value.substring(field.selectionStart, field.selectionEnd);
		var endSelection     = field.value.substring(field.selectionEnd);
		if (currentSelection == "") { currentSelection = "TEXTE"; }
		field.value = startSelection + startTag + currentSelection + endTag + endSelection;
		field.focus();
		field.setSelectionRange(startSelection.length + startTag.length, startSelection.length + startTag.length + currentSelection.length);
	}
	field.scrollTop = scroll;
}

function reply(code) {
	var field = document.getElementById('form-commentaire').getElementsByTagName('textarea')[0];
	field.focus();
	if (field.value !== '') {
		field.value += '\n\n';
	}
	field.value += code;
	field.scrollTop = 10000;
	field.focus();
}

function resize(id, dht) {
	var elem = document.getElementById(id);
	var ht = elem.offsetHeight;
	size = Number(ht)+Number(dht);
	elem.style.height = size+"px";
	return false;
}