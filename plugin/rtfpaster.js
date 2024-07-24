/**
 * RTF-Paster plugin for TinyMCE
 *
 * On Paste events, check if there's an RTF content in the clipboard.
 * If yes, convert it to HTML and insert it. Any images are uploaded
 * to the configured image field for the current page.
 *
 * @param editor
 *
 */

console.log('rtfpaster.js loaded');

tinymce.PluginManager.add('rtfpaster', (editor, url) => {
	
	var $ = jQuery;
	
	function stringToArrayBuffer(string) {
    const buffer = new ArrayBuffer(string.length);
    const bufferView = new Uint8Array(buffer);
    for (let i = 0; i < string.length; i++) {
        bufferView[i] = string.charCodeAt(i);
    }
    return buffer;
	}

	RTFJS.loggingEnabled(false);
	WMFJS.loggingEnabled(false);
	EMFJS.loggingEnabled(false);
	
	editor.on("paste", (e) => {
		var node = e.originalTarget;

		var rtf = e.clipboardData.getData("text/rtf");
		
		if(rtf === null || rtf == "") {
			// No RTF data, continue with original handler
			return;
		}
		
		var doc = new RTFJS.Document(stringToArrayBuffer(rtf));
		
		e.preventDefault();
		
		doc.render().then(function(htmlElements) {
			var html = '';
			for(var i = 0; i < htmlElements.length; i++) {
				html += htmlElements[i].outerHTML;
			}
			editor.insertContent({content: html});
		}).catch(error => console.error(error));
		
	});
	
	// Return metadata for the plugin 
	return {
		getMetadata: () => ({ name: 'RtfPaster' })
	};

});
