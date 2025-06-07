let emp = [];
  let editi = null;

  let form = document.getElementById("empform");
  let fname = document.getElementById("name");
  let email = document.getElementById("email");
  let role = document.getElementById("role");
  let btn = document.getElementById("btn");
  let tbl = document.getElementById("tbl");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    let n = fname.value.trim();
    let em = email.value.trim();
    let r = role.value.trim();

    if (!n || !em || !r) return;

    let emdata = { n, em, r };

    if (editi === null) {
      emp.push(emdata);
    } else {
      emp[editi] = emdata;
      editi = null;
      btn.textContent = "Add Employee";
    }

    form.reset();
    renderTable();
  });

  function renderTable() {
    tbl.innerHTML = ""; 

    emp.forEach((e, i) => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${e.n}</td>
        <td>${e.em}</td>
        <td>${e.r}</td>
        <td><button onclick="edit(${i})">Edit</button></td>
        <td><button onclick="delet(${i})">Delete</button></td>
      `;
      tbl.appendChild(row);
    });
  }

  edit = function (i) {
    let e = emp[i];
    fname.value = e.n;
    email.value = e.em;
    role.value = e.r;
    editi = i;
    btn.textContent = "Update Employee";
  };

  delet = function (i) {
    emp.splice(i, 1);
    renderTable();
  };