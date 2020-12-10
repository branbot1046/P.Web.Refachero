function check(x,y) {
  if (x.value.length==0) {
    alert("Error: "+y+" no puede estar en blanco!");
    return false;
    x.focus();
  } else {if (x.value.length>=25) {
    alert("Error: "+y+" Maximo de 25 caracteres!");
    return false;
    x.focus();
  } else {
    return true;
  }}
}
function checkemail(x,y) {
    if (x.value.length==0) {
      alert("Error: "+y+" no puede estar en blanco!");
      return false;
      x.focus();
    } else {if (x.value.length>=120) {
      alert("Error: "+y+" Maximo de 120 caracteres!");
      return false;
      x.focus();
    } else {
      return true;
    }}}
function checkPassword(str)
  {          
    var re =/(?=.\d)(?=.[a-z])(?=.[A-Z])|(?=.[#|%|/|&]).{15,20}/;
    return re.test(str);
  }
function checkusuario(x)
  {
    var re =/(?=.*[#|%|/|&])/;
    
        return re.test(x);
  }
function myFunction() {
    var a = "nombre";
    var x = document.getElementById(a);
    if (check(x,a)==false) {
        return false;
    }
    var b = "apellido";
    var x = document.getElementById(b);
    if (check(x,b)==false) {
        return false;
    }
    var c = "ccusuario";
    var x = document.getElementById(c).value;
    if (checkusuario(x)==true||x.length<10||x.length>=20) {
        alert("Error: Usuario debe ser mayor 10 y menor de 20 caracteres y sin #, %, / o & !");
        return false;
    }
    var d = "ccpaswd1";
    var e = "ccpaswd2";
    var x = document.getElementById(d);
    var y = document.getElementById(e);
    if (checkPassword(x.value)==true) {
        if (x.value!=y.value) {
            alert("Error: la contraseña no es igual");
        return false;
    }
    }else{
        alert("Error: la contraseña no cumple los requisitos");
    return false;}
    var f = "email";
    var x = document.getElementById(f);
    if(checkemail(x,f)==false) {
        return false;
    }
    return true;   
}