window.addEventListener("load", function () {
  let employees = [
    {
      name: "Employee One",
      age: 40,
      email: "one@gmail.com",
      departments: ["Computer", "Physics"],
    },
    {
      name: "Employee Two",
      age: 10,
      email: "Two@gmail.com",
      departments: ["Computer"],
    },
    {
      name: "aEmployee Three",
      age: 10,
      email: "Three@gmail.com",
      departments: ["Physics", "Chemistry"],
    },
    {
      name: "Employee Four",
      age: 60,
      email: "Four@gmail.com",
      departments: ["Chemistry", "Physics"],
    },
    {
      name: "Employee Five",
      age: 70,
      email: "Five@gmail.com",
      departments: ["Computer", "Physics", "Chemistry"],
    },
    {
      name: "Employee Six",
      age: 70,
      email: "Six@gmail.com",
      departments: ["Computer", "Physics", "maths"],
    },
  ];


  $(document).ready(function () {
    //get uniquw produvt value to drpdown
    uniqvale = [];
    for (var i = 0; i < employees.length; i++) {
      var opt = document.createElement('option');
      var depart = employees[i].departments;
      for (var j = 0; j < depart.length; j++) {
        uniqvale.push(depart[j]);

      };

    }
    var uniqueNames = [];
    $.each(uniqvale, function (i, el) {
      if ($.inArray(el, uniqueNames) === -1) uniqueNames.push(el);
    });
    var sel = document.getElementById('select_dep');

    for (var i = 0; i < uniqueNames.length; i++) {
      var opt = document.createElement('option');
      opt.innerHTML = uniqueNames[i];
      opt.value = uniqueNames[i];
      sel.appendChild(opt);
    }
    //ends
    //title on count of departmens     
    $('[data-toggle="tooltip"]').tooltip();
    // 
    //filter bbase on name and email and product 
    $(document).on('click', '#filterID', function () {
      var data = $('#select_dep').find('option:selected').val();
      // alert(data);
      var fValue = $('#feild_value').val();
      if (data == '' || fValue != '') {
        var value = fValue.toLowerCase();
      } else if (data != '' || fValue == '') {
        var value = data.toLowerCase();
      }
      $(".employeeTable tr").filter(function () {
        $(this).toggle($(this).text()
          .toLowerCase().indexOf(value) > -1)
      });
    });
    //end
    //sorting the value based on name,email,age star
    $(document).on('change', '#sortId', function () {
      var sortValue = $('#sortId').val();
      var table, rows, switching, i, x, y, shouldSwitch;
      table = document.getElementById("employeeTable");
      switching = true;
      while (switching) {
        switching = false;
        rows = table.rows;
        for (i = 1; i < (rows.length - 1); i++) {
          shouldSwitch = false;

          if (sortValue == "asc") {
            x = rows[i].getElementsByTagName("td")[0];
            y = rows[i + 1].getElementsByTagName("td")[0];
            if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
              shouldSwitch = true;
              break;
            }
          } else if (sortValue == "dsc") {
            x = rows[i].getElementsByTagName("td")[0];
            y = rows[i + 1].getElementsByTagName("td")[0];
            if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
              shouldSwitch = true;
              break;
            }
          }
          else if (sortValue == "eAsc") {
            x = rows[i].getElementsByTagName("td")[2];
            y = rows[i + 1].getElementsByTagName("td")[2];
            if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
              shouldSwitch = true;
              break;
            }
          }
          else if (sortValue == "dsc") {
            x = rows[i].getElementsByTagName("td")[2];
            y = rows[i + 1].getElementsByTagName("td")[2];
            if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
              shouldSwitch = true;
              break;
            }
          }
          else if (sortValue == "dsc") {
            x = rows[i].getElementsByTagName("td")[2];
            y = rows[i + 1].getElementsByTagName("td")[2];
            if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
              shouldSwitch = true;
              break;
            }
          }
          else if (sortValue == "aAsc") {
            x = rows[i].getElementsByTagName("td")[1];
            y = rows[i + 1].getElementsByTagName("td")[1];
            if (Number(x.innerHTML) > Number(y.innerHTML)) {
              shouldSwitch = true;
              break;
            }
          }
          else if (sortValue == "aDsc") {
            x = rows[i].getElementsByTagName("td")[1];
            y = rows[i + 1].getElementsByTagName("td")[1];
            if (Number(x.innerHTML) > Number(y.innerHTML)) {
              shouldSwitch = true;
              break;
            }
          }
        }
        if (shouldSwitch) {
          rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
          switching = true;
        }
      }
    });

  });
  //end
  //total num od emp
  document.getElementById("total_emp").innerHTML = employees.length;
  //sort the object asc by name
  employees.sort((a, b) => a.name.localeCompare(b.name, 'es', { sensitivity: 'base' }));

  // Loop through array and add table cells
  html = "<tr>";
  for (var i = 0; i < employees.length; i++) {
    html += "<tr>";
    html += "<td>" + employees[i].name + "</td>";
    html += "<td>" + employees[i].age + "</td>";
    html += "<td>" + employees[i].email + "</td>";
    html += "<td style='display:none'>" + employees[i].departments + "</td>";
    html += "<td data-toggle='tooltip' title='" + employees[i].departments + "'  >" + employees[i].departments.length + "</td>";

    html += "</tr>";
  }
  $('.mytable tbody').html(html);

  // Attach HTML to container
  // document.getElementById("mytable").innerHTML = html;
});