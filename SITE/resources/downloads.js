function downloadPack(version) {
  window.location.href = './packs/OSBESv' + version + '.mcpack'
}
function pack(version, badge) {
  output='<a onclick="downloadPack(\'' + version + '\')"><img src="resources/download.png" width="3%"></img></a> OSBES v' + version
  if (badge == "latest") {
    output+=' <img src="resources/badges/latest.svg" height="5%"></img>'
  }
  document.write(output);
}

// Pack definitions
pack("0.12.3", "latest");