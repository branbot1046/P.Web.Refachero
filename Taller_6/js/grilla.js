$(document).ready(function () {
    var val;
    $.ajax({
        type: "GET",
        url: "https://jsonplaceholder.typicode.com/users",
        dataType: "JSON",
        success: function (data) {
            $("#rows").html("");
            for (let i = 0; i < data.length; i++) {
                val+=`<tr>
                <td>${data[i].id}</td>
                <td>${data[i].name}</td>
                <td>${data[i].username}</td>
                <td>${data[i].email}</td>
                <td>${data[i].address.street + " " + data[i].address.suite}</td>
                <td>${data[i].phone}</td>
                <td>${data[i].website}</td>
                <td>${data[i].company.name + " " + data[i].company.catchPhrase}</td>
                </tr>`;
                
                console.log(data[i].id);
               $("#rows").html(val);
               
            }
        }
    });
    
    
});

function getFilteredByKey(array, key, value) {
    return array.filter(function(e) {
      return e[key] == value;
    });
  }