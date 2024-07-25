# RtfPasterTinyMce
ProcessWire module - TinyMCE Plugin for pasting RTF converted to HTML instead of plain text

## What it does

It allows you to copy content from office applications on Windows including images.
Unlike regular copy and paste e.g. from MS Word, where images are contained as file:// links
and unusable, images are pasted as data: URLs.

Since every application constructs the clipboard contents differently, the RTF parser may
or may not be able to extract everything.

### Tested
Microsoft Word:  works
LibreOffice Writer: doesn't work

## Version

0.0.3 - alpha

## Status

This is a proof-of-concept module.

## Usage

- Download the contents of this repository and unpack into a folder in site/modules
- Open ProcessWre admin and select Modules -> Refresh
- Click "Install" for "Rtf Paster TinyMCE"
- Go to "Fields" and select your TinyMCE field where you want to paste office content including images
- Check "rtfpaster" in "Additional plugins" on the "Input" tab and save your field configuration
- Edit a page with that field and copy a passage that contains both text and images from your word processor
  into your TinyMCE field. You should see your images there.

### Advanced

- Go into InputfieldTinyMCE's module settings and enable "Image fields for ImgUpload"
- Edit your TinyMCE field and select an existing image field in the "Image fiels for ImgUpload" select
  on the Input tab
- Paste some text / images mixture from your word processor

Tadaa! Your images are magically uploaded into the selected field.

Since the RTF doesn't contain any information about the file name of the source image, your
uploaded images will be named fieldname.png, fieldname-1.png, fieldname-2.png etc.

## Credits

Credits go to [tbluemel](https://github.com/tbluemel) for creating the [rtf.js](https://github.com/tbluemel/rtf.js) RTF convert.

## LICENSE

This module is licensed under Mozilla Public License v2. See file LICENSE for details.
