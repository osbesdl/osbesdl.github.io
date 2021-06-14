function pack(version, badge) {
  if (version!="Experimental") {
    output='<a href="./packs/OSBESv' + version + '.mcpack"><img src="resources/download.png" class="download"></img> OSBES v' + version;
  } else {
    output='<a href="https://github.com/jebbyk/OSBES-minecraft-bedrock-edition-shader/archive/refs/heads/develop.zip"><img src="resources/download.png" class="download"></img> OSBES ' + version;
  }
  switch (badge) {
    case "latest": output+=' <img class="badge" src="resources/badges/latest.svg"></img>'; break
    case "legacy": output+=' <img class="badge" src="resources/badges/legacy.svg"></img>'; break
    case "experimental": output+=' <img class="badge" src="resources/badges/experimental.svg"></img>'; break
  }
  if (badge == "latest") {
    
  }
  document.write(output+"</a><br>");
}

// Pack definitions
pack("Experimental", "experimental")
pack("0.12.3", "latest");
document.write("<div class='hidden' id='hidden'>");
pack("0.12.2");
pack("0.12.1");
pack("0.11.2");
pack("0.11.1", "legacy");
pack("0.11.0", "legacy");
pack("0.10.2", "legacy");
pack("0.10.1", "legacy");
pack("0.9.3", "legacy");
pack("0.9.2", "legacy");
pack("0.9.0", "legacy");
pack("0.8.3", "legacy");
pack("0.8.2", "legacy");
pack("0.8.1", "legacy");
pack("0.8.0", "legacy");
pack("0.7.11", "legacy");
pack("0.7.10", "legacy");
pack("0.7.9", "legacy");
pack("0.7.8", "legacy");
pack("0.7.5", "legacy");
pack("0.7.3", "legacy");
pack("0.7.2", "legacy");
pack("0.7.1", "legacy");
pack("0.6.2", "legacy");
pack("0.5.0", "legacy");
document.write("</div>");

function showHiddenPacks() {
  var hiddendiv = document.getElementById("hidden");
  hiddendiv.style.display = 'block';

  var showhiddendiv = document.getElementById("showhidden");
  showhiddendiv.style.display = 'none';
}