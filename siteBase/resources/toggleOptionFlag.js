function toggleOptionFlag(pos, ) {
  if (pageid.substring(pos,pos+1) == 1) {
    newpageid=pageid
    newpageid[pos]=0
    window.history.pushState("", "", newpageid)
  } else {
    newpageid=pageid
    newpageid[pos]=1
    window.history.pushState("", "", newpageid)
  }
}