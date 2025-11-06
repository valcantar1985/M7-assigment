// GET ADD EMPLOYEE FORM AND EMPLOYEE TABLE FROM THE DOM
const form = document.querySelector('#addForm');
const table = document.querySelector('#employees');
const outputCount = document.querySelector('#empCount');


// SET A COUNT VARIABLE TO DISPLAY NEXT TO EMPLOYEES HEADER
let employeeCount = 0;


// ADD EMPLOYEE
form.addEventListener('submit', (e) => {
    // PREVENT FORM SUBMISSION
    e.preventDefault();

    // GET THE VALUES FROM THE TEXT BOXES
    const empID = document.querySelector('#id').value;
    const empName = document.querySelector('#name').value;
    const empExt = document.querySelector('#extension').value;
    const empEmail = document.querySelector('#email').value;
    const empDept = document.querySelector('#department').value;

    // INSERT A NEW ROW AT THE END OF THE EMPLOYEES TABLE
    const row = table.insertRow();


    // INSERT A CELL FOR EACH ITEM WITHIN THE NEW ROW
    const cellID = row.insertCell();
    const cellName = row.insertCell();
    const cellExt = row.insertCell();
    const cellEmail = row.insertCell();
    const cellDept = row.insertCell();
    const cellDelete = row.insertCell();


    // APPEND THE TEXT VALUES AS TEXT NODES WITHIN THE CELLS
    cellID.appendChild(document.createTextNode(empID));
    cellName.appendChild(document.createTextNode(empName));
    cellExt.appendChild(document.createTextNode(empExt));
    cellEmail.appendChild(document.createTextNode(empEmail));
    cellDept.appendChild(document.createTextNode(empDept));



    // CREATE THE DELETE BUTTON
    const delBtn = document.createElement('button');
    delBtn.textContent = 'X';
    delBtn.className = 'btn btn-danger btn-sm';
    cellDelete.appendChild(delBtn);


    // RESET THE FORM
    form.reset();


    // SET FOCUS BACK TO THE ID TEXT BOX
    document.querySelector('#id').focus();


    // INCREMENENT THE NUMBER OF EMPLOYEES IN THE TABLE
    employeeCount++;
    outputCount.textContent = employeeCount;

})

// DELETE EMPLOYEE
table.addEventListener('click', function(e) {
    if (e.target.tagName === 'BUTTON' && e.target.textContent === 'Delete') {
        if (confirm('Are you sure you want to delete this employee?')) {
            const rowIndex = e.target.parentElement.parentElement.rowIndex;
            table.deleteRow(rowIndex);
            employeeCount--;
            outputCount.textContent = employeeCount;
        }
    }
});



// LOGGING ON FORM SUBMIT
window.addEventListener('load', () => {
    const form = document.getElementById('addForm');
    
    form.addEventListener('submit', e => {
        const employee = {
            id: document.getElementById('id').value,
            name: document.getElementById('name').value,
            ext: document.getElementById('extension').value,
            email: document.getElementById('email').value,
            department: document.getElementById('department').value
        };
        console.log('Employee Added:', employee);
    });
});