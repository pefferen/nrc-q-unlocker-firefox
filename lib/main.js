var pageMod = require("sdk/page-mod");
var data = require("sdk/self").data;

pageMod.PageMod({
  include: "*.nrcq.nl",
  contentScriptFile: [data.url("jquery-1.11.1.min.js"),
                      data.url("script.js")]
});
