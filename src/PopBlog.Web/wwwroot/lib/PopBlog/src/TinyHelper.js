﻿function launchImageManager() {
	tinymce.activeEditor.windowManager.openUrl({
		url: "/Admin/ImageManager",
		title: "Insert Image",
		height: 570,
		width: 680
	});
}

function launchImageFolderManager() {
	tinymce.activeEditor.windowManager.openUrl({
		url: "/Admin/ImageFolderManager",
		title: "Manage Image Folders",
		height: 250,
		width: 400
	});
}

function insertImage(editor, url) {
	editor.execCommand("mceInsertContent", false, '<img src="' + url + '" />');
}

function initEditor(id) {
	tinyMCE.init({
		mode: "exact",
		elements: id,
		theme: "silver",
		relative_urls: false,
		plugins: ["lists","code","link","image"],

		menubar: "edit insert view format table tools",
		toolbar: "undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | outdent indent bullist numlist | imgmgr imgfoldermgr | link image code",

		extended_valid_elements: "iframe[src|width|height|name|align],script[src|async|defer|type|charset]",

		content_css: "/lib/bootstrap/dist/css/bootstrap.css",
		gecko_spellcheck: true,
		setup: function (ed) {
			ed.ui.registry.addIcon("photofolder", '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24" height="24" viewBox="0 0 512 512"><path d="M360,96h-24V56c0-4.416-3.576-8-8-8H144V8c0-4.416-3.584-8-8-8H8C3.584,0,0,3.584,0,8v352c0,4.416,3.584,8,8,8h352 c4.424,0,8-3.584,8-8V104C368,99.584,364.424,96,360,96z M144,64h176v32H144V64z M352,352H16V16h112v80H72c-4.416,0-8,3.584-8,8 s3.584,8,8,8h280V352z"/><path d="M312,144H56c-4.416,0-8,3.584-8,8v160c0,0.128,0.064,0.232,0.072,0.352c0.024,0.568,0.184,1.096,0.328,1.64 c0.128,0.472,0.2,0.944,0.4,1.376c0.2,0.424,0.512,0.784,0.792,1.176c0.336,0.464,0.64,0.936,1.064,1.32 c0.088,0.08,0.128,0.2,0.224,0.28c0.376,0.312,0.816,0.472,1.232,0.704c0.336,0.192,0.632,0.424,0.992,0.568 C54.04,319.784,55.016,320,56,320h256c0.968,0,1.936-0.224,2.864-0.576c0.344-0.136,0.632-0.344,0.952-0.52 c0.392-0.216,0.816-0.36,1.184-0.648c0.12-0.096,0.168-0.232,0.28-0.336c0.416-0.376,0.728-0.816,1.064-1.272 c0.288-0.4,0.6-0.768,0.808-1.2c0.208-0.44,0.304-0.912,0.432-1.384c0.144-0.544,0.296-1.064,0.328-1.624 c0.008-0.16,0.088-0.288,0.088-0.44V152C320,147.584,316.424,144,312,144z  M73.08,304l63.12-75.736l57.824,65.056 c0.128,0.144,0.304,0.2,0.44,0.328s0.192,0.304,0.336,0.424c0.272,0.232,0.616,0.312,0.904,0.504 c0.456,0.296,0.896,0.584,1.4,0.784c0.488,0.192,0.968,0.288,1.472,0.376c0.496,0.088,0.976,0.176,1.48,0.168 c0.528,0,1.024-0.096,1.544-0.208c0.48-0.096,0.944-0.2,1.408-0.384c0.504-0.208,0.944-0.504,1.408-0.816 c0.288-0.192,0.624-0.28,0.896-0.52c0.144-0.128,0.2-0.304,0.328-0.44s0.304-0.192,0.424-0.336l41.72-48.664L295.352,304H73.08z M304,289.192l-49.752-62.184c-1.496-1.864-3.736-2.96-6.12-3c-0.04,0-0.088,0-0.136,0c-2.336,0-4.552,1.016-6.072,2.792 l-42.04,49.048l-57.912-65.152c-1.536-1.752-3.64-2.696-6.096-2.696c-2.328,0.04-4.528,1.088-6.016,2.88L64,289.904V160h240 V289.192z"/><circle cx="200" cy="208" r="16" /></svg>');
			ed.ui.registry.addIcon("addphoto", '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24" height="24" viewBox="0 0 512 512"><circle cx="158" cy="144.4" r="28.8"/><path d="M394.4,250.4c-13.6-12.8-30.8-21.2-49.6-23.6V80.4c0-15.6-6.4-29.6-16.4-40C318,30,304,24,288.4,24h-232 c-15.6,0-29.6,6.4-40,16.4C6,50.8,0,64.8,0,80.4v184.4V282v37.2c0,15.6,6.4,29.6,16.4,40c10.4,10.4,24.4,16.4,40,16.4h224.4 c14.8,12,33.2,19.6,53.6,19.6c23.6,0,44.8-9.6,60-24.8c15.2-15.2,24.8-36.4,24.8-60C419.2,286.8,409.6,265.6,394.4,250.4z M21.2,80.4c0-9.6,4-18.4,10.4-24.8c6.4-6.4,15.2-10.4,24.8-10.4h232c9.6,0,18.4,4,24.8,10.4c6.4,6.4,10.4,15.2,10.4,24.8v124.8 l-59.2-58.8c-4-4-10.8-4.4-15.2,0L160,236l-60.4-60.8c-4-4-10.8-4.4-15.2,0l-63.2,64V80.4z M56,354.8v-0.4 c-9.6,0-18.4-4-24.8-10.4c-6-6.4-10-15.2-10-24.8V282v-12.8L92.4,198l60.4,60.4c4,4,10.8,4,15.2,0l89.2-89.6l58.4,58.8 c-1.2,0.4-2.4,0.8-3.6,1.2c-1.6,0.4-3.2,0.8-5.2,1.6c-1.6,0.4-3.2,1.2-4.8,1.6c-1.2,0.4-2,0.8-3.2,1.6c-1.6,0.8-2.8,1.2-4,2 c-2,1.2-4,2.4-6,3.6c-1.2,0.8-2,1.2-3.2,2c-0.8,0.4-1.2,0.8-2,1.2c-3.6,2.4-6.8,5.2-9.6,8.4c-15.2,15.2-24.8,36.4-24.8,60 c0,6,0.8,11.6,2,17.6c0.4,1.6,0.8,2.8,1.2,4.4c1.2,4,2.4,8,4,12v0.4c1.6,3.2,3.2,6.8,5.2,9.6H56z M378.8,355.2 c-11.6,11.6-27.2,18.4-44.8,18.4c-16.8,0-32.4-6.8-43.6-17.6c-1.6-1.6-3.2-3.6-4.8-5.2c-1.2-1.2-2.4-2.8-3.6-4 c-1.6-2-2.8-4.4-4-6.8c-0.8-1.6-1.6-2.8-2.4-4.4c-0.8-2-1.6-4.4-2-6.8c-0.4-1.6-1.2-3.6-1.6-5.2c-0.8-4-1.2-8.4-1.2-12.8 c0-17.6,7.2-33.2,18.4-44.8c11.6-11.6,27.2-18.4,44.8-18.4c17.6,0,33.2,7.2,44.8,18.4c11.6,11.2,18.4,27.2,18.4,44.8 C397.2,328,390,343.6,378.8,355.2z"/>	<path d="M368.8,299.6h-24.4v-24.4c0-6-4.8-10.8-10.8-10.8s-10.8,4.8-10.8,10.8v24.4h-24.4c-6,0-10.8,4.8-10.8,10.8 s4.8,10.8,10.8,10.8h24.4v24.4c0,6,4.8,10.8,10.8,10.8s10.8-4.8,10.8-10.8v-24.4h24.4c6,0,10.8-4.8,10.8-10.8 S374.8,299.6,368.8,299.6z"/></svg>');
			ed.ui.registry.addButton("imgmgr", {
				tooltip: "Insert/Upload Image",
				icon: "photofolder",
				onAction: launchImageManager
			});
			ed.ui.registry.addButton("imgfoldermgr", {
				tooltip: "Manage Image Folders",
				icon: "addphoto",
				onAction: launchImageFolderManager
			});
		}
	});
}