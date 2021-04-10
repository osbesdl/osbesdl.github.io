// from the right
// 1 - dark mode
// 2 - compatability mode
// 3 - experimental features

var brightnether = "Bright Nether"
var compatabilitymode = "Compatability Mode<span class='alphatag'> [Alpha]</span>"
var experimental = "Experimental"

var compatabilityprompt=true
var experimentalprompt=true

window.history.pushState("", "", '#r01')

function info(option) {
  output = "<span title='"
  switch (option) {
    case "bn":
      output += "Brightens the nether"
      break
    case "cm":
      output += "Disables normal and specular maps. This allows the use of other resource packs at the expense of the textures having less depth and no shine.\n\n!!!WARNING!!!\nThis feature is currently incredibly buggy, and many parts of the game don&#39;t look right."
      break
    case "ex":
      output += "Enables experimental features that are still being tested. Certain parts of the game may not behave as intended or expected, and any toggled options will be ignored."
      break
  }
  output += "'><sup class='info' onclick='infoclick(\""+option+"\")'>i</sup></span>"
  return output
}
function infoclick(option) {
  switch (option) {
    case "bn":
      alert("Bright Nether:\n\nBrightens the nether")
      break
    case "cm":
      alert("Compatability Mode:\n\nDisables normal and specular maps. This allows the use of other resource packs at the expense of the textures having less depth and no shine.\n\n!!!WARNING!!!\nThis feature is currently incredibly buggy, and many parts of the game don't look right.")
      break
    case "ex":
      alert("Experimental:\n\nEnables experimental features that are still being tested. Certain parts of the game may not behave as intended or expected, and any toggled options will be ignored.")
      break
  }
  return output
}
function boxclicked(imgid) {
  switch (document.getElementById(imgid).src.replace(/(^\w+:|^)\/\//, '')) {
    case (parent.location.host + "/resources/disabled.png"):
      document.getElementById(imgid).src = "resources/enabled.png"
      break
    case (parent.location.host + "/resources/enabled.png"):
      document.getElementById(imgid).src = "resources/disabled.png"
      break
  }
  pageid = window.location.href.slice(-4)
  switch (imgid) {
    case "bn": // Bright Nether
      toggleOptionFlag(3);
      break
    case "cm": // Compatability Mode
      if(compatabilityprompt) {
        Qual.infod('Warning', 'This feature is not finished. For now, only use this for development purposes.')
        compatabilityprompt=false
        document.getElementById(imgid).src = "resources/disabled.png"
      }
      else toggleOptionFlag(2);
      break
      case "ex": // Experimental Features
        if(experimentalprompt) {
          Qual.infod('Warning', 'Enables experimental features that are still being tested and any other options will be ignored. As these features are unfinished, certain parts of the game may not behave as intended or expected.')
          experimentalprompt=false
          document.getElementById(imgid).src = "resources/disabled.png"
        }
        else toggleOptionFlag(1, 'r', 'e');
        break
  }
}

function downloadPack() {
  if (window.location.href.charAt(window.location.href.length-3)=='r') {
    window.location.href = './packs/OSBES' + window.location.href.slice(-3) + '.mcpack'
  } else {
    window.location.href = 'https://github.com/jebbyk/OSBES-minecraft-bedrock-edition-shader/archive/refs/heads/develop.zip'
  }
}