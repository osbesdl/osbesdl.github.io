function toggleOptionFlag(pos, disabled, enabled) {
  if (typeof disabled === undefined) { disabled = '0'; }
  if (typeof enabled === undefined) { enabled = '1'; }
  
  if (pageid.substring(pos,pos+1) == enabled) {
    newpageid=pageid
    newpageid[pos]=disabled
    window.history.pushState("", "", newpageid)
    console.log("ye")
  } else {
    newpageid=pageid
    newpageid[pos]=enabled
    window.history.pushState("", "", newpageid)
    console.log("ye")
  }
  disabled = undefined
  enabled = undefined
}