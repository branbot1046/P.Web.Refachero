$(document).ready(function(){
  $(".selc_ok").hide();
  $(".form-control").hide();
  $(".text-secondary").hide();
  $("#texto").hide();
  $("button").hide();

  var alimento;
  var calorias;
  var grasas;
  var proteina;
  var carbohidratos;

  
$("#fila .1tx_edit").click(function () { 
  if (editar==true){
    editar = "1"; 
    $("#fila .fila_datos").hide();
    $("#fila i").hide();
    $("#ffila_1").hide();
    $("#fila .form-control").show();
    $("#selc_ok").show();
    $("#slc1").show();
    $("#fila .text-secondary").show();
    $("#texto").show();
    $("button").show();

  }
   else{
  alert("solo puede editar una tabla a la vez");
  } 
  });
  $("#fila1 .1tx_edit").click(function () {
  if (editar==true){ 
    editar = "2"; 
    $("#fila1 .fila_data").hide();
    $("#fila1 i").hide();
    $("#rfila_2").hide();
    $("#fila1 .form-control").show();
    $("#selc_ok").show();
    $("#slc2").show();
    $("#fila1 .text-secondary").show();
    $("#texto").show();
    $("button").show();

    }
   else{
  alert("solo puede editar una tabla a la vez");
  } 
    
  });
  $("#fila2 .1tx_edit").click(function () { 
  if (editar==true){
    editar = "3";  
    $("#fila2 .fila_data").hide();
    $("#fila2 i").hide();
    $("#rfila_3").hide();
    $("#fila2 .form-control").show();
    $("#selc_ok").show();
    $("#slc3").show();
    $("#fila2 .text-secondary").show();
    $("#texto").show();
    $("button").show();


  }
   else{
  alert("solo puede editar una tabla a la vez");
  } 

  });
  $("#fila3 .1tx_edit").click(function () { 
  if (editar==true){
    editar = "4"; 
    $("#fila3 .fila_data").hide();
    $("#fila3 i").hide();
    $("#rfila_4").hide();
    $("#fila3 .form-control").show();
    $("#selc_ok").show();
    $("#slc4").show();
    $("#fila3 .text-secondary").show();
    $("#texto").show();
    $("button").show();

  }
   else{
  alert("solo puede editar una tabla a la vez");
  } 

  });
  
  $("#reset").click(function () { 
    location. reload();
    
  });

 });