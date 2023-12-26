let selectedRow = null

function onFormSubmit(e) {
   event.preventDefault()
   let formData = readFormData()
   if (selectedRow == null) {
      insertNewRecord(formData)
   } else {
      updateRecord(formData)
   }
   editFormData()
   resetForm()
}

function readFormData() {
   let formData = {}
   formData["productCode"] = document.getElementById("productCode").value
   formData["product"] = document.getElementById("product").value
   formData["qty"] = document.getElementById("qty").value
   formData["perPrice"] = document.getElementById("perPrice").value
   return formData
}

function insertNewRecord(data) {
   let table = document.getElementById('storeList').getElementsByTagName('tbody')[0]
   let newRow = table.insertRow(table.length)

   let cell1 = newRow.insertCell(0)
   cell1.innerHTML = data.productCode

   let cell2 = newRow.insertCell(1)
   cell2.innerHTML = data.product

   let cell3 = newRow.insertCell(2)
   cell3.innerHTML = data.qty

   let cell4 = newRow.insertCell(3)
   cell4.innerHTML = data.perPrice

   let cell5 = newRow.insertCell(4)
   cell5.innerHTML = `<button class='edit' onclick = 'onEdit(this) '>Edit</button> <button class='delete' onclick = 'onDelete(this)'>Delete</button>`
}

function onEdit(td) {
   selectedRow = td.parentElement.parentElement
   document.getElementById('productCode').value = selectedRow.cells[0].innerHTML
   document.getElementById('product').value = selectedRow.cells[1].innerHTML
   document.getElementById('qty').value = selectedRow.cells[2].innerHTML
   document.getElementById('perPrice').value = selectedRow.cells[3].innerHTML
}

function updateRecord(formData) {
   selectedRow.cells[0].innerHTML = formData.productCode
   selectedRow.cells[1].innerHTML = formData.product
   selectedRow.cells[2].innerHTML = formData.qty
   selectedRow.cells[3].innerHTML = formData.perPrice
}

function onDelete(td) {
   if (confirm('Do you want to delete this record ?')) {
      row = td.parentElement.parentElement
      document.getElementById("storeList").deleteRow(row.rowIndex)
      resetForm()
   }

}

function resetForm() {
   document.getElementById('productCode').value = ''
   document.getElementById('product').value = ''
   document.getElementById('qty').value = ''
   document.getElementById('perPrice').value = ''
}