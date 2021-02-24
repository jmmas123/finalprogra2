
function addToTable() {
    var num1 = document.getElementsByName("num1")[0].value;
    var num2 = document.getElementsByName("num2")[0].value;
    var sum = Number(num1) + Number(num2);
    document.getElementsByName("sum")[0].value = sum;

    var table = document.getElementById("data");
    var row = table.insertRow(0);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2)
    cell1.innerHTML = "num1";
    cell2.innerHTML = "num2";
    cell3.innerHTML = "sum"

    alert("La operacion ha sido agregada a la tabla, el total es: "+sum)
  }
