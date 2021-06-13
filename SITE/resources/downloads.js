function downloadPack(version) {
  window.location.href = './packs/OSBESv' + version + '.mcpack'
}
function pack(version, badge) {
  output='<a onclick="downloadPack(\'' + version + '\')"><img src="resources/download.png" width="8%"></img></a> OSBES v' + version
  if (badge == "latest") {
    output+=' <img src="resources/badges/latest.svg" height="5%"></img>'
  }
  document.write(output);
}

// Pack definitions
pack("0.12.3", "latest");
document.write("<div class='hidden' id='hidden'>");
pack("0.12.2");
document.write("</div>");

function showHiddenPacks() {
  var hiddendiv = document.getElementById("hidden");
  hiddendiv.style.display = 'block';

  var showhiddendiv = document.getElementById("showhidden");
  showhiddendiv.style.display = 'none';
}