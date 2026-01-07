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
 * Initialize the dispatch tool
 */
function initialize(): void {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  sheet.getRange('A1').setValue('Dispatch Tool 2 - Initialized');
  SpreadsheetApp.getUi().alert('Dispatch Tool initialized successfully!');
}

/**
 * Sample function to demonstrate TypeScript integration
 */
function sampleFunction(): string {
  return 'Hello from TypeScript!';
}
