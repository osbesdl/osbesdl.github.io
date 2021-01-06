// from the right
// 1 - dark mode
// 2 - compatability mode

var brightnether = "Bright Nether"
var compatabilitymode = "Compatability Mode<span style='font-size: 20'>[Alpha]</span>"
var experimental = "Experimental"

var compatabilityprompt=true
var experimentalprompt=true

window.history.pushState("", "", '#001')

function info(option) {
  output = "<span title='"
  switch (option) {
    case "brightnether":
      output += "Brightens the nether"
      break
    case "compatabilitymode":
      output += "Disables normal and specular maps. This allows the use of other resource packs at the expense of the textures having less depth and no shine.\n\n!!!WARNING!!!\nThis feature is currently incredibly buggy, and many parts of the game don&#39;t look right."
      break
    case "experimental":
      output += "Enables experimental features. Some parts of the game may not work as intended or expected.\n\nOnly enable if you know what you are doing"
      break
  }
  output += "'><sup style='color:blue; font-size:20; cursor: help;'>?</sup></span>"
  return output
}

function boxclicked(imgid) {
  switch (document.getElementById(imgid).src.replace(/(^\w+:|^)\/\//, '')) {
    case (parent.location.host + "/resources/uncheck.png"):
      document.getElementById(imgid).src = "resources/check.png"
      break
    case (parent.location.host + "/resources/check.png"):
      document.getElementById(imgid).src = "resources/uncheck.png"
      break
  }
  pageid = window.location.href.slice(-4)
  switch (imgid) {
    case "bn":
      if (pageid.substring(3,4) == 1) {
        window.history.pushState("", "", '#' + pageid.substring(1,2) + pageid.substring(2,3) + '0')
      } else {
        window.history.pushState("", "", '#' + pageid.substring(1,2) + pageid.substring(2,3) + '1')
      }
      break
    case "cm":
      if(compatabilityprompt) {
        alert("This feature is not finished.\nFor now, only use this for development purposes.\n")
        compatabilityprompt=false
        document.getElementById(imgid).src = "resources/uncheck.png"
      }
      else if (pageid.substring(2,3) == 1) {
        window.history.pushState("", "", '#' + pageid.substring(1,2) + '0' + pageid.substring(3,4))
      } else {
        window.history.pushState("", "", '#' + pageid.substring(1,2) + '1' + pageid.substring(3,4))
      }
      break
      case "ex":
        if(experimentalprompt) {
          alert("This will enable features that may or may not be finshed.\nParts of the game may behave in unexpected ways.\n")
          experimentalprompt=false
          document.getElementById(imgid).src = "resources/uncheck.png"
        }
         else if (pageid.substring(1,2) == 1) {
          window.history.pushState("", "", '#' + '0' + pageid.substring(2,3) + pageid.substring(3,4))
        } else {
          window.history.pushState("", "", '#' + '1' + pageid.substring(2,3) + pageid.substring(3,4))
        }
        break
  }
}

function downloadPack() {
  window.location.href = './packs/OSBES' + window.location.href.slice(-3) + '.mcpack'
}