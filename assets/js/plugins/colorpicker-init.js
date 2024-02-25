$(".demo").each(function () {
  //
  // Dear reader, it's actually very easy to initialize MiniColors. For example:
  //
  //  $(selector).minicolors();
  //
  // The way I've done it below is just for the demo, so don't get confused
  // by it. Also, data- attributes aren't supported at this time...they're
  // only used for this demo.
  //
  $(this).minicolors({
    control: $(this).attr("data-control") || "hue",
    defaultValue: $(this).attr("data-defaultValue") || "",
    format: $(this).attr("data-format") || "hex",
    keywords: $(this).attr("data-keywords") || "",
    inline: $(this).attr("data-inline") === "true",
    letterCase: $(this).attr("data-letterCase") || "lowercase",
    opacity: $(this).attr("data-opacity"),
    position: $(this).attr("data-position") || "bottom left",
    swatches: $(this).attr("data-swatches")
      ? $(this).attr("data-swatches").split("|")
      : [],
    change: function (value, opacity) {
      if (!value) return;
      if (opacity) value += ", " + opacity;
      if (typeof console === "object") {
        console.log(value);
      }
    },
    theme: "bootstrap",
  });
});
