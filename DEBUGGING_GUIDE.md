# Date App - SDK Debugging Guide

## Changes Made to Fix Store Updates

### 1. Removed Timeout Parameters from Store Hooks
**Problem**: Settings hooks were using a 5-second timeout, preventing immediate subscription.

**Fixed in**: `src/views/Settings.tsx`
```typescript
// BEFORE (WRONG):
const [, uiScale, setUiScale] = useUiScaleStoreState(5)

// AFTER (CORRECT):
const [, uiScale, setUiScale] = useUiScaleStoreState()
```

### 2. Added SDK Configuration Logging
**Added in**: `src/index.tsx`
- Logs when SDK is being configured
- Logs the applicationInstance parameter
- Warns if SDK is not configured

### 3. Updated Vite Configuration
**Added in**: `vite.config.ts`
```typescript
ssr: {
  noExternal: ['@telemetryos/sdk', '@telemetryos/sdk/react', '@telemetryos/root-sdk'],
}
```

This ensures the SDK is properly bundled in development mode.

### 4. Added Debug Logging
**Added in**: `src/views/Settings.tsx` and `src/components/Preview.tsx`
- Logs store values when they change
- Helps verify that updates are propagating

### 5. Added Visual SDK Status Indicator
**Added in**: `src/views/Settings.tsx`
- Top-left corner shows "SDK: ✓ Active" or "SDK: ✗ Not Configured"
- Helps quickly identify if SDK is working

## How to Test

### Step 1: Open localhost:5173/settings
The page should automatically redirect to add the `applicationInstance` parameter.

**Expected URL**:
```
http://localhost:5173/settings?applicationInstance=6465762d6c6f63616c2d646576656c6f706d656e742d696e7374616e63652d696436353634
```

### Step 2: Check Console (F12)
You should see:
```
[Date App] Missing applicationInstance, adding and reloading...
(page reloads)
[Date App] Configuring TelemetryOS SDK with applicationInstance: 6465762d...
[Date App] SDK configured successfully
[Settings] Current store values: {dateFormat: "long-written", ...}
[Preview] Store values: {dateFormat: "long-written", ...}
```

### Step 3: Check Visual Indicator
Top-left corner should show: **SDK: ✓ Active**

### Step 4: Test Changes
1. Change "Visual Style" from "Elegant" to "Bold"
2. **Preview should update immediately**
3. Console should log: `[Settings] Current store values: {...visualStyle: "bold"...}`
4. Console should log: `[Preview] Store values: {...visualStyle: "bold"...}`

### Step 5: Verify in Render View
1. Navigate to http://localhost:5173/render (with same applicationInstance parameter)
2. Should show the Bold style
3. Changes made in Settings should persist here

## Troubleshooting

### Issue: Changes don't reflect in preview

**Check 1**: SDK Status Indicator
- If it shows "✗ Not Configured", the URL is missing the `applicationInstance` parameter
- Solution: Hard refresh (Ctrl+Shift+R)

**Check 2**: Console Logs
- If you don't see `[Settings] Current store values:` logs when changing settings, the hooks aren't subscribing
- Solution: Verify no timeout parameters in hook calls

**Check 3**: URL Parameter
- URL must include `?applicationInstance=...`
- Solution: Clear browser cache and reload

### Issue: Preview shows but doesn't update

**Check 1**: Console Errors
- Look for any errors in console
- SDK errors might indicate configuration issues

**Check 2**: Store Hook Subscriptions
- Verify Preview component is using hooks without timeout parameters
- Check that `useEffect` dependencies include the store values

### Issue: Works on localhost:2426 but not localhost:5173

**Explanation**: 
- localhost:2426 is the TelemetryOS development server (`tos serve`)
- localhost:5173 is the direct Vite server (`vite --port 5173`)
- The Vite server requires the `applicationInstance` parameter to be manually added

**Solution**:
- The app now automatically adds this parameter and reloads
- If it doesn't work, use `npm run dev` instead of `npm run dev:direct`

## Key Files Modified

1. **src/index.tsx** - SDK configuration and redirect logic
2. **src/views/Settings.tsx** - Removed timeout parameters, added logging
3. **src/components/Preview.tsx** - Added logging
4. **vite.config.ts** - Added SDK externalization
5. **src/views/Settings.css** - Improved styling
6. **src/components/Preview.css** - Better preview layout

## How the Store Works

The TelemetryOS SDK uses a persistent store that:
1. Requires an `applicationInstance` parameter (40-char hex hash)
2. Syncs state across all components using the same hooks
3. Persists data across page reloads
4. Updates all subscribers immediately when values change

When you call:
```typescript
const [, value, setValue] = useStoreState()
```

- `value` is the current store value
- `setValue` updates the store AND notifies all subscribers
- All components using the same hook automatically re-render with new value

## Success Criteria

✅ URL includes `?applicationInstance=...`
✅ Console shows SDK configured successfully
✅ Top-left shows "SDK: ✓ Active"
✅ Changing settings logs new values in console
✅ Preview updates immediately when changing settings
✅ /render page shows the same values as settings
✅ Changes persist after page reload

