function packOption(name, id, defaultstate) {
  document.write(name + ' <span class="checkboxes"><a onclick="boxclicked(\''+ id +'\')"><img style="cursor: pointer;" id='+ id +' src="resources/'+ defaultstate +'.png"></img></a></span>' + info(id) + '<br>')
}