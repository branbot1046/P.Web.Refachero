$(document).ready(function () {
    var hoy = new Date();
    var dd=0;
    var m;
    var sen=0;
    var val;
    var p;
    
    $("#alert").hide();
    $("#alert2").hide();

    $("#edad").click(function (e) { 
        e.preventDefault();
        var brithdate= $("#date").val();
        var hoyy= hoy.getFullYear();
        brithdate= new Date(brithdate);
        var brithdatey= brithdate.getFullYear();
        dd=hoyy-brithdatey;
        m = hoy.getMonth() - brithdate.getMonth();
        if (m < 0 || (m === 0 && hoy.getDate() < brithdate.getDate())) {
            dd--;
        }
        $("#edad").val(dd);
        
    });

   
    $("#user").on("keypress", function (event) {
        var regex = new RegExp("^[a-zA-Z0-9]+$");
        var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
        if (!regex.test(key)) {
            $("#user").val("");
            $("#alert").show();
            $("#user").val("");
         }
        
        
    });
    $("#register").click(function (e) { 
        e.preventDefault();
        var psw=$("#psw").val();
        var psw2=$("#psw2").val();
        if ((psw != psw2) || ($("#psw").val().length) == 0) {
            $("#alert2").show();
            $("#psw").val("");
            $("#psw2").val("");
        }
        else{
            alert("Sus datos fueron registrados");
            location.reload();
        }
        
    });
    
    var datos;

    $.ajax({
        type: "GET",
        url: "https://raw.githubusercontent.com/marcovega/colombia-json/master/colombia.min.json",
        dataType: "JSON",
        crossDomain: true,
        success: function (data) {
           
            console.log(data[0].id);
            datos=data;

        }
    });

    $("#inputGroupSelect01").change(function (e) { 
        e.preventDefault();
        val="";
        $("#inputGroupSelect02").html("");
        p = $("#inputGroupSelect01").val();
        var as=find_in_object(datos,{id:p});
        console.log(as);
        for (let i = 0; i < as.length; i++) {
            console.log(as[i].ciudades.length)
            for (let j=0; j< as[i].ciudades.length;j++)
                {
                 val+=`
                <option>${as[i].ciudades[j]}</option>
                `;
                $("#inputGroupSelect02").html(val);
            }
        }

    });
    function find_in_object(my_object, my_criteria){

        return my_object.filter(function(obj) {
          return Object.keys(my_criteria).every(function(c) {
            return obj[c] == my_criteria[c];
          });
        });
      
      }
   
});