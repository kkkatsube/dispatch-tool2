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
 * Optimized to minimize API calls for faster performance
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

  // Calculate the range to update
  // If row > 1, update current row and row above (2 rows)
  // If row = 1, update only current row (1 row)
  const startRow = row > 1 ? row - 1 : row;
  const numRows = row > 1 ? 2 : 1;

  // Update colors for H and I columns (columns 8-9) in a single API call
  // Get the range covering both columns and both rows
  const targetRange = sheet.getRange(startRow, 8, numRows, 2);

  // Create color array: all cells get the same color
  const colors: string[][] = [];
  for (let i = 0; i < numRows; i++) {
    colors.push([color, color]);
  }

  // Set all colors in one API call for better performance
  targetRange.setFontColors(colors);
}

/**
 * Initialize the dispatch tool
 */
function initialize(): void {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  sheet.getRange('A1').setValue('Dispatch Tool 2 - Initialized');
  SpreadsheetApp.getUi().alert('Dispatch Tool initialized successfully!');
}
