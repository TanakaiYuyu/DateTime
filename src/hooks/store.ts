import { createUseInstanceStoreState } from '@telemetryos/sdk/react'

// UI Scale
export const useUiScaleStoreState = createUseInstanceStoreState<number>('ui-scale', 1)

// Date Format
export type DateFormat = 'MM/DD/YYYY' | 'DD/MM/YYYY' | 'YYYY-MM-DD' | 'short-written' | 'long-written'
export const useDateFormatStoreState = createUseInstanceStoreState<DateFormat>('date-format', 'long-written')

// Day of Week Display
export type DayOfWeekDisplay = 'hidden' | 'short' | 'full'
export const useDayOfWeekStoreState = createUseInstanceStoreState<DayOfWeekDisplay>('day-of-week', 'full')

// Visual Style
export type VisualStyle = 'minimal' | 'bold' | 'elegant' | 'digital' | 'modern'
export const useVisualStyleStoreState = createUseInstanceStoreState<VisualStyle>('visual-style', 'elegant')

// Timezone
export const useTimezoneStoreState = createUseInstanceStoreState<string>('timezone', 'America/New_York')

// Language/Locale
export const useLanguageStoreState = createUseInstanceStoreState<string>('language', 'en')

// Display Mode
export type DisplayMode = 'full-screen' | 'overlay'
export const useDisplayModeStoreState = createUseInstanceStoreState<DisplayMode>('display-mode', 'full-screen')

// Overlay Position
export type OverlayPosition = 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | 'center'
export const useOverlayPositionStoreState = createUseInstanceStoreState<OverlayPosition>('overlay-position', 'top-right')

// Text Color
export const useTextColorStoreState = createUseInstanceStoreState<string>('text-color', '#ffffff')

// Background Options
export const useBackgroundColorStoreState = createUseInstanceStoreState<string>('background-color', '#1a1a1a')
export const useBackgroundOpacityStoreState = createUseInstanceStoreState<number>('background-opacity', 0)

// Time Display Options
export const useShowTimeStoreState = createUseInstanceStoreState<boolean>('show-time', false)
export const useShowSecondsStoreState = createUseInstanceStoreState<boolean>('show-seconds', true)
export const useShowDateStoreState = createUseInstanceStoreState<boolean>('show-date', true)

// Time Format
export type TimeFormat = '12' | '24'
export const useTimeFormatStoreState = createUseInstanceStoreState<TimeFormat>('time-format', '24')

// Font Family
export const useFontFamilyStoreState = createUseInstanceStoreState<string>('font-family', 'Rubik')
