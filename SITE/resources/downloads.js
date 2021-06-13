function pack(version, badge) {
  output='<a href="./packs/OSBESv' + version + '.mcpack"><img src="resources/download.png" width="8%"></img> OSBES v' + version;
  if (badge == "latest") {
    output+=' <img src="resources/badges/latest.svg" height="25px"></img>'
  }
  document.write(output+"</a><br>");
}

// Pack definitions
pack("0.12.3", "latest");
document.write("<div class='hidden' id='hidden'>");
pack("0.12.2");
pack("0.12.1");
pack("0.11.2");
pack("0.11.1");
pack("0.11.0");
pack("0.10.2");
pack("0.10.1");
pack("0.9.3");
pack("0.9.2");
pack("0.9.0");
pack("0.8.3");
pack("0.8.2");
pack("0.8.1");
pack("0.8.0");
pack("0.7.11");
pack("0.7.10");
pack("0.7.9");
pack("0.7.8");
pack("0.7.5");
pack("0.7.3");
pack("0.7.2");
pack("0.7.1");
pack("0.6.2");
pack("0.5.0");
document.write("</div>");

function showHiddenPacks() {
  var hiddendiv = document.getElementById("hidden");
  hiddendiv.style.display = 'block';

  var showhiddendiv = document.getElementById("showhidden");
  showhiddendiv.style.display = 'none';
}