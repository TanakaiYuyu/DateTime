# 6_Date - TelemetryOS Application

A production-ready date and time display application for TelemetryOS digital signage platform. Displays the current date and/or time in various formats, styles, and languages with full timezone support.

## Features

### Date Formats
- **MM/DD/YYYY** - American format (e.g., 12/16/2025)
- **DD/MM/YYYY** - European format (e.g., 16/12/2025)
- **YYYY-MM-DD** - ISO format (e.g., 2025-12-16)
- **Short Written** - Abbreviated month (e.g., Dec 16, 2025)
- **Long Written** - Full month name (e.g., December 16, 2025)

### Day of Week Display
- **Hidden** - No day of week shown
- **Short** - Abbreviated day name (e.g., Mon)
- **Full** - Complete day name (e.g., Monday)

When enabled, the day of week prepends to the date (e.g., "Monday, December 16, 2025")

### Visual Styles

The application includes 5 distinct visual styles optimized for viewing from 10+ feet:

1. **Minimal** - Clean, lightweight design with thin fonts
2. **Bold** - Strong, impactful presentation with heavy fonts and shadows
3. **Elegant** - Sophisticated serif design with border accents
4. **Digital/LED** - Classic LED display with green glow effect
5. **Modern** - Contemporary glassmorphism design with gradients

Each style scales appropriately for different zone shapes and sizes.

### Time Display

**Show Time Toggle** - Enable/disable time display independently from date

**Time Format Options:**
- 24-hour format (e.g., 17:30:33)
- 12-hour format with AM/PM (e.g., 5:30:33 PM)

**Show Seconds Toggle** - Display or hide seconds in time

**Digital 7-Segment Display** - When using Digital/LED style, time displays in authentic 7-segment LED format with:
- Glowing green LED effect
- Monospace digital font
- Subtle flicker animation
- Proper spacing for digital readability

### Timezone Support
- Dropdown selector with 80+ IANA timezones organized by region
- Displays date/time in selected timezone regardless of device location
- Automatic fallback to UTC with visual indicator if timezone is invalid
- Easy timezone search by city name

### Localization
Supports multiple languages for day and month names:
- English (en)
- Spanish (es)
- French (fr)
- German (de)
- Italian (it)
- Portuguese (pt)
- Japanese (ja)
- Chinese (zh)
- Korean (ko)
- Russian (ru)

### Display Modes

**Full Screen Mode**
- Date prominently centered on screen
- Perfect for lobbies, waiting areas, and common spaces

**Overlay Mode**
- Transparent background allowing underlying content to show through
- Configurable positioning:
  - Top Left
  - Top Right
  - Bottom Left
  - Bottom Right
  - Center

### Customization Options
- **Text Color** - Full color picker with hex input
- **Background Color** - Customizable background
- **Background Opacity** - Adjustable from 0% (fully transparent) to 100% (fully opaque)
- **Font Family** - Choose from 10 different font families:
  - Rubik (default)
  - Arial
  - Helvetica
  - Georgia
  - Times New Roman
  - Courier New
  - Verdana
  - Trebuchet MS
  - Impact
  - Comic Sans MS
- **Show Date Toggle** - Enable/disable date display
- **Show Time Toggle** - Enable/disable time display

### Automatic Updates
- Updates display every second when showing time with seconds
- Updates every minute when showing time without seconds or date only
- Automatically advances at midnight without requiring page refresh
- No network dependency - uses device system clock

### Error Handling
- Invalid timezone detection with visual warning
- Automatic fallback to UTC for invalid timezone configurations
- Graceful degradation ensures date is always displayed

## Installation

1. Clone the repository
2. Install dependencies:
```bash
npm install
```

## Development

Run the development server:
```bash
npm run dev
```

The application will be available at:
- Render view: `http://localhost:3000/render`
- Settings view: `http://localhost:3000/settings`

## Building for Production

```bash
npm run build
```

## Application Structure

```
src/
├── hooks/
│   └── store.ts          # State management hooks
├── utils/
│   └── dateFormatter.ts  # Date formatting logic
├── views/
│   ├── Render.tsx        # Main display component
│   ├── Render.css        # Visual styles
│   └── Settings.tsx      # Configuration UI
├── App.tsx               # Application router
└── index.tsx             # Entry point
```

## Configuration

All settings are configurable through the Settings interface:

1. **UI Scale** - Adjusts component size for different display zones
2. **Date Format** - Select preferred date format
3. **Day of Week** - Configure day display preference
4. **Visual Style** - Choose from 5 distinct styles
5. **Font Family** - Select custom font
6. **Show Time** - Toggle time display on/off
7. **Time Format** - 12-hour or 24-hour format (when time is enabled)
8. **Show Seconds** - Toggle seconds display (when time is enabled)
9. **Show Date** - Toggle date display on/off
10. **Timezone** - Select from dropdown of 80+ timezones
11. **Language** - Select localization language
12. **Display Mode** - Full screen or overlay
13. **Overlay Position** - Position for overlay mode
14. **Text Color** - Customize text appearance
15. **Background Color** - Set background color
16. **Background Opacity** - Adjust background transparency

## Technical Details

### SDK Usage
- `useUiScaleToSetRem()` - Responsive scaling across different display sizes
- `createUseInstanceStoreState()` - Persistent configuration storage
- Settings components - Standard UI elements for operator configuration

### Browser APIs
- `Date` - System time access
- `Intl.DateTimeFormat` - Timezone conversion and localization

### Responsive Design
- Adapts to square, rectangle, and extreme rectangle zone shapes
- Font sizes scale appropriately based on aspect ratio
- Optimized for viewing distance of 10+ feet from screens

## Performance

- Immediate rendering on startup (no loading spinners)
- Efficient update cycle (every 60 seconds)
- Minimal CPU usage
- No network dependencies for core functionality

## Browser Compatibility

Works on all modern browsers supporting:
- ES6+ JavaScript
- CSS Grid and Flexbox
- Intl.DateTimeFormat API

## License

Proprietary - Built for TelemetryOS Platform

## Author

Max

## Version

0.1.0

