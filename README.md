# Dispatch Tool 2

Google Sheets dispatch tool built with TypeScript and clasp.

## Setup Instructions

### 1. Install Dependencies

```bash
npm install
```

### 2. Login to clasp

```bash
npx clasp login
```

### 3. Link to Your Spreadsheet

Option A: Create a new Apps Script project
```bash
npx clasp create --type sheets --title "Dispatch Tool 2" --rootDir ./dist
```

Option B: Use existing script (if you already have a script bound to your spreadsheet)
1. Open your spreadsheet: https://docs.google.com/spreadsheets/d/1H4aeFXZmo-eQs8rBJbAmAPCVqKx5CdcRbWMc6IoIbog/edit
2. Go to Extensions > Apps Script
3. Copy the Script ID from the URL (format: `https://script.google.com/.../.../projects/{SCRIPT_ID}/edit`)
4. Create `.clasp.json` from template:
```bash
cp .clasp.json.template .clasp.json
```
5. Edit `.clasp.json` and replace `YOUR_SCRIPT_ID_HERE` with your actual Script ID

### 4. Build and Deploy

```bash
# Build TypeScript
npm run build

# Push to Google Apps Script
npm run push

# Or build and push in one command
npx clasp push
```

### 5. Open in Apps Script Editor

```bash
npm run open
```

## Development Workflow

1. Edit TypeScript files in `src/`
2. Build: `npm run build`
3. Push to Apps Script: `npm run push`
4. Test in your spreadsheet

For continuous development:
```bash
npm run watch
```

## Project Structure

```
dispatch-tool2/
├── src/              # TypeScript source files
│   └── Code.ts       # Main entry point
├── dist/             # Compiled JavaScript (generated)
├── .clasp.json       # clasp configuration (not in git)
├── appsscript.json   # Apps Script manifest
├── tsconfig.json     # TypeScript configuration
└── package.json      # Node.js dependencies
```

## Spreadsheet ID

Current spreadsheet: `1H4aeFXZmo-eQs8rBJbAmAPCVqKx5CdcRbWMc6IoIbog`

## Scripts

- `npm run build` - Compile TypeScript to JavaScript
- `npm run watch` - Watch for changes and auto-compile
- `npm run push` - Build and push to Google Apps Script
- `npm run deploy` - Build, push, and create deployment
- `npm run open` - Open project in Apps Script editor
