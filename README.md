# RtfPasterTinyMce
ProcessWire module - TinyMCE Plugin for pasting RTF converted to HTML instead of plain text

## What it does

It allows you to copy content from office applications on Windows including images.
Unlike regular copy and paste e.g. from MS Word, where images are contained as file:// links
and unusable, images are pasted as data: URLs.

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

## Credits

Credits go to [tblueml](https://github.com/tbluemel) for creating the [rtf.js](https://github.com/tbluemel/rtf.js) RTF convert.

## LICENSE

This module is licensed under Mozilla Public License v2. See file LICENSE for details.
