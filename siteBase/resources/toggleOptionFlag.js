function toggleOptionFlag(pos, disabled, enabled) {
  if (typeof disabled === 'undefined') { optionalArg = '0'; }
  if (typeof enabled === 'undefined') { optionalArg = '1'; }
  
  if (pageid.substring(pos,pos+1) == enabled) {
    newpageid=pageid
    newpageid[pos]=disabled
    window.history.pushState("", "", newpageid)
  } else {
    newpageid=pageid
    newpageid[pos]=enabled
    window.history.pushState("", "", newpageid)
  }
}