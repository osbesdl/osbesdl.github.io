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
      output += "Enables experimental features. Some parts of the game may not work as intended or expected.\n\nOnly enable if you know what you are doing"
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
      alert("Experimental:\n\nEnables experimental features. Some parts of the game may not work as intended or expected.\n\nOnly enable if you know what you are doing")
      break
  }
  return output
}
function boxclicked(imgid) {
  switch (document.getElementById(imgid).src.replace(/(^\w+:|^)\/\//, '')) {
    case (parent.location.host + "/resources/disabled.png"):
      document.getElementById(imgid).src = "resources/check.png"
      break
    case (parent.location.host + "/resources/check.png"):
      document.getElementById(imgid).src = "resources/disabled.png"
      break
  }
  pageid = window.location.href.slice(-4)
  switch (imgid) {
    case "bn": // Bright Nether
      if (pageid.substring(3,4) == 1) {
        window.history.pushState("", "", '#' + pageid.substring(1,2) + pageid.substring(2,3) + '0')
      } else {
        window.history.pushState("", "", '#' + pageid.substring(1,2) + pageid.substring(2,3) + '1')
      }
      break
    case "cm": // Compatability Mode
      if(compatabilityprompt) {
        Qual.infod('Warning', 'This feature is not finished. For now, only use this for development purposes.')
        compatabilityprompt=false
        document.getElementById(imgid).src = "resources/disabled.png"
      }
      else if (pageid.substring(2,3) == 1) {
        window.history.pushState("", "", '#' + pageid.substring(1,2) + '0' + pageid.substring(3,4))
      } else {
        window.history.pushState("", "", '#' + pageid.substring(1,2) + '1' + pageid.substring(3,4))
      }
      break
      case "ex": // Experimental Features
        if(experimentalprompt) {
          Qual.infod('Warning', 'This will enable features that may or may not be finshed. Parts of the game may behave in unexpected ways.')
          experimentalprompt=false
          document.getElementById(imgid).src = "resources/disabled.png"
        }
         else if (pageid.substring(1,2) == 'e') {
          window.history.pushState("", "", '#' + 'r' + pageid.substring(2,3) + pageid.substring(3,4))
        } else {
          window.history.pushState("", "", '#' + 'e' + pageid.substring(2,3) + pageid.substring(3,4))
        }
        break
  }
}

function downloadPack() {
  window.location.href = './packs/OSBES' + window.location.href.slice(-3) + '.mcpack'
}