// from the right
// 1 - dark mode
// 2 - compatability mode

var brightnether = "Bright Nether"
var compatabilitymode = "Compatability Mode<span style='font-size: 20'>[Alpha]</span>"

window.history.pushState("", "", '#01')

function info(option) {
  output = "<span title='"
  switch (option) {
    case "brightnether":
      output += "Brightens the nether"
      break
    case "compatabilitymode":
      output += "Disables normal and specular maps. This allows the use of other resource packs at the expense of the textures having less depth and no shine.\n\n!!!WARNING!!!\nThis feature is currently incredibly buggy, and many parts of the game don&#39;t look right."
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
  pageid = window.location.href.slice(-3)
  switch (imgid) {
    case "bn":
      if (pageid.substring(2,3) == 1) {
        window.history.pushState("", "", '#' + pageid.substring(1,2) + '0')
      } else {
        window.history.pushState("", "", '#' + pageid.substring(1,2) + '1')
      }
      break
    case "cm":
      if (pageid.substring(1,2) == 1) {
        window.history.pushState("", "", '#' + '0' + pageid.substring(2,3))
      } else {
        window.history.pushState("", "", '#' + '1' + pageid.substring(2,3))
      }
      break
  }
}

function downloadPack() {
  window.location.href = './packs/OSBES' + window.location.href.slice(-2) + '.mcpack'
}