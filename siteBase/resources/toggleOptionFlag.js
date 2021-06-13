function setCharAt(str,index,chr) {
  if(index > str.length-1) return str;
  return str.substring(0,index) + chr + str.substring(index+1);
}

function toggleOptionFlag(pos, disabled, enabled) {
  if (disabled === undefined) { disabled = '0'; }
  if (enabled === undefined) { enabled = '1'; }

  if (pageid.substring(pos,pos+1) == enabled) {
    newpageid=setCharAt(pageid,pos,disabled)
    window.history.pushState("", "", newpageid)
  } else {
    newpageid=pageid
    newpageid=setCharAt(pageid,pos,enabled)
    window.history.pushState("", "", newpageid)
  }
  disabled = undefined
  enabled = undefined
}