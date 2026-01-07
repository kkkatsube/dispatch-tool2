/**
 * Main entry point for the Google Apps Script
 */

/**
 * Creates a custom menu when the spreadsheet opens
 */
function onOpen(): void {
  const ui = SpreadsheetApp.getUi();
  ui.createMenu('Dispatch Tool')
    .addItem('Initialize', 'initialize')
    .addToUi();
}

/**
 * Triggered when a cell is edited
 * Handles checkbox changes in column J to update text colors in columns H and I
 */
function onEdit(e: GoogleAppsScript.Events.SheetsOnEdit): void {
  const range = e.range;
  const sheet = range.getSheet();
  const row = range.getRow();
  const col = range.getColumn();

  // Check if the edited cell is in column J (column 10)
  if (col !== 10) {
    return;
  }

  // Get the value of the edited cell (checkbox value)
  const value = range.getValue();

  // Determine the color based on checkbox state
  // true (checked) → red, false (unchecked) → white
  const color = value === true ? '#ff0000' : '#ffffff';

  // Update colors for H and I columns in the current row and one row above
  updateRowColors(sheet, row, color);

  // Update the row above if it's not the first row
  if (row > 1) {
    updateRowColors(sheet, row - 1, color);
  }
}

/**
 * Update text color for columns H and I in the specified row
 */
function updateRowColors(
  sheet: GoogleAppsScript.Spreadsheet.Sheet,
  row: number,
  color: string
): void {
  // Column H (column 8)
  sheet.getRange(row, 8).setFontColor(color);

  // Column I (column 9)
  sheet.getRange(row, 9).setFontColor(color);
}

/**
 * Initialize the dispatch tool
 */
function initialize(): void {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  sheet.getRange('A1').setValue('Dispatch Tool 2 - Initialized');
  SpreadsheetApp.getUi().alert('Dispatch Tool initialized successfully!');
}
