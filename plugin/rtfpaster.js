/**
 * RTF-Paster plugin for TinyMCE
 *
 * On Paste events, check if there's an RTF content in the clipboard
 * along with HTML content.
 * If yes, it extracts found images from the RTF and replaces the images
 * in the HTML with those converted to data: URLs in the same order.
 * Whether this is a viable approach is in the stars.
 *
 * Images in unknown formats are for now replaced with a static 100x75
 * PNG that shows the text "Unknown Img Format".
 *
 * @param editor
 *
 */

tinymce.PluginManager.add('rtfpaster', (editor, url) => {

	const unknownImage = 'data:image/png;base64,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';

	var $ = jQuery;
	
	function stringToArrayBuffer(str) {
    const buffer = new ArrayBuffer(str.length);
    const bufferView = new Uint8Array(buffer);
    for (let i = 0; i < str.length; i++) {
        bufferView[i] = str.charCodeAt(i);
    }
    return buffer;
	}
	
	function extractImages(rtf) {
		const re = /\\[a-z0-9]+\S+\\([a-z]+blip)(?:\\bliptag-\d+\{[^}]+\})?\n?([^}]+)/smg;
		var hits = [...rtf.matchAll(re)];
		return hits;
	}

	function getMime(blip) {
		switch(blip) {
			case 'pngblip':
				return 'image/png';
			case 'jpegblip':
				return 'image/jpeg';
			default:
				return null;
		}
	}

	function formatImage(blip, imgHex) {
		var imgMime = getMime(blip);
		if(imgMime === null) {
			return unknownImage;
		}
		imgHex = imgHex.replaceAll("\n", '');
		var imgBin = imgHex.replaceAll(/(..)/g, function(m, g1) {
			return String.fromCharCode(parseInt(g1, 16));
		});
		return 'data:' + imgMime + ';base64,' + btoa(imgBin);
	}

	function replaceImages(html, imgs) {
		const re = /(<img\s+[^>]*src=)(["'])(.*?)\2/gsmi;
		var imgIdx = 0;
		var htmlOut = html.replaceAll(re, function(m, g1, g2, g3) {
			var curImg = imgs[imgIdx];
			imgIdx++;
			return '' + g1 + g2 + formatImage(curImg[1], curImg[2]) + g2;
		});
		return htmlOut;
	}

	editor.on("paste", (e) => {

		var rtf = e.clipboardData.getData("text/rtf");
		
		if(rtf === null || rtf == "") {
			// No RTF data, continue with original handler
			return;
		}
		
		var imgs = extractImages(rtf);
		
		var html = e.clipboardData.getData("text/html");
		
		html = replaceImages(html, imgs);
		html = html.replace(/^.*<body[^>]*>/smi, '');
		html = html.replace(/<\/body.*$/smi, '');
		
		editor.insertContent({content: html});
		
		e.preventDefault();
		
	});
	
	// Return metadata for the plugin 
	return {
		getMetadata: () => ({ name: 'RtfPaster' })
	};

});
