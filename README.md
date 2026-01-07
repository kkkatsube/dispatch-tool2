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

Create `.clasp.json` with the script ID:

```bash
cat > .clasp.json << 'EOF'
{
  "scriptId": "1T-pxVj5EdZRum_tWgFDMDH9fZssLCvaEx69nJZHFGdZH49bqqXEjvvAL",
  "rootDir": "./dist"
}
EOF
```

Or manually create `.clasp.json` with the following content:
```json
{
  "scriptId": "1T-pxVj5EdZRum_tWgFDMDH9fZssLCvaEx69nJZHFGdZH49bqqXEjvvAL",
  "rootDir": "./dist"
}
```

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

## Project IDs

- **Spreadsheet ID**: `1H4aeFXZmo-eQs8rBJbAmAPCVqKx5CdcRbWMc6IoIbog`
- **Script ID**: `1T-pxVj5EdZRum_tWgFDMDH9fZssLCvaEx69nJZHFGdZH49bqqXEjvvAL`
- **Spreadsheet URL**: https://docs.google.com/spreadsheets/d/1H4aeFXZmo-eQs8rBJbAmAPCVqKx5CdcRbWMc6IoIbog/edit

## Scripts

- `npm run build` - Compile TypeScript to JavaScript
- `npm run watch` - Watch for changes and auto-compile
- `npm run push` - Build and push to Google Apps Script
- `npm run deploy` - Build, push, and create deployment
- `npm run open` - Open project in Apps Script editor
