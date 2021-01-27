function packOption(name, id, defaultstate) {
  document.write(name + ' <span class="checkboxes"><a onclick="boxclicked(\''+ id +'\')"><img style="cursor: pointer;" id="bn" src="resources/'+ defaultstate +'.png"></img></a></span>' + info(id) + '<br>')
}