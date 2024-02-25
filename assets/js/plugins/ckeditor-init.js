//default
initSample();

//inline editor
// We need to turn off the automatic editor creation first.
CKEDITOR.disableAutoInline = true;

CKEDITOR.inline("editor2", {
  extraPlugins: "sourcedialog",
  removePlugins: "sourcearea",
});

var editor1 = CKEDITOR.replace("editor1", {
  extraAllowedContent: "div",
  height: 460,
});
editor1.on("instanceReady", function () {
  // Output self-closing tags the HTML4 way, like <br>.
  this.dataProcessor.writer.selfClosingEnd = ">";

  // Use line breaks for block elements, tables, and lists.
  var dtd = CKEDITOR.dtd;
  for (var e in CKEDITOR.tools.extend(
    {},
    dtd.$nonBodyContent,
    dtd.$block,
    dtd.$listItem,
    dtd.$tableContent
  )) {
    this.dataProcessor.writer.setRules(e, {
      indent: true,
      breakBeforeOpen: true,
      breakAfterOpen: true,
      breakBeforeClose: true,
      breakAfterClose: true,
    });
  }
  // Start in source mode.
  this.setMode("source");
});

CKEDITOR.replace("testedit", {
  height: 150,
});

CKEDITOR.replace("testedit1", {
  height: 400,
});

CKEDITOR.replace("testedit2", {
  height: 400,
});

CKEDITOR.replace("tool-location", {
  toolbarLocation: "bottom",
  // Remove some plugins that would conflict with the bottom
  // toolbar position.
  removePlugins: "elementspath,resize",
});
