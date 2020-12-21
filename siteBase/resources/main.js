// from the right
// 1 - dark mode
// 2 - compatability mode
var brightnether = "Bright Nether"
var compatabilitymode = "Compatability Mode (Alpha)"
var id = window.location.href.split('/').slice(-2)[0]
  switch (id) {
    case "00":
      document.write(brightnether + ' <a href="../01"><img src="../resources/uncheck.png"></img></a><br>')
      document.write(compatabilitymode + ' <a href="../10"><img src="../resources/uncheck.png"></img></a><br>')
      break
    case "01":
      document.write(brightnether + ' <a href="../00"><img src="../resources/check.png"></img></a><br>')
      document.write(compatabilitymode + ' <a href="../11"><img src="../resources/uncheck.png"></img></a><br>')
      break
    case "10":
      document.write(brightnether + ' <a href="../11"><img src="../resources/uncheck.png"></img></a><br>')
      document.write(compatabilitymode + ' <a href="../00"><img src="../resources/check.png"></img></a><br>')
      break
    case "11":
      document.write(brightnether + ' <a href="../10"><img src="../resources/check.png"></img></a><br>')
      document.write(compatabilitymode + ' <a href="../01"><img src="../resources/check.png"></img></a><br>')
      break
    }
document.write('<br><a href="../packs/'+id+'.mcpack">download</a>')