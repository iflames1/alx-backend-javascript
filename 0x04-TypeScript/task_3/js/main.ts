/// <reference path="./crud.d.ts" />
import * as CRUD from "./crud";

import { RowID, RowElement } from "./interface";

const row: RowElement = {
  firstName: "Guillaume",
  lastName: "Salva",
};

const newRowID: RowID = CRUD.insertRow(row);
console.log(`Inserted row ID: ${newRowID}`);

// Create an updated row with an age field
const updatedRow: RowElement = {
  firstName: "Guillaume",
  lastName: "Salva",
  age: 23,
};

// Update the row
CRUD.updateRow(newRowID, updatedRow);
console.log(`Updated row ID: ${newRowID}`);

// Delete the row
CRUD.deleteRow(newRowID);
console.log(`Deleted row ID: ${newRowID}`);
