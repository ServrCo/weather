general.datetime.innerHTML = new Date().toString().substring(4, 21); 

window.setInterval(function(){
    general.datetime.innerHTML = new Date().toString().substring(4, 21);
  }, 1000);
