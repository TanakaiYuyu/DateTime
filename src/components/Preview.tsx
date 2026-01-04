import { useEffect, useState } from 'react'
import {
  useDateFormatStoreState,
  useDayOfWeekStoreState,
  useVisualStyleStoreState,
  useTimezoneStoreState,
  useLanguageStoreState,
  useDisplayModeStoreState,
  useOverlayPositionStoreState,
  useTextColorStoreState,
  useBackgroundColorStoreState,
  useBackgroundOpacityStoreState,
  useShowTimeStoreState,
  useShowSecondsStoreState,
  useShowDateStoreState,
  useTimeFormatStoreState,
  useFontFamilyStoreState,
} from '../hooks/store'
import { formatDate, formatTime, isValidTimezone } from '../utils/dateFormatter'
import { SevenSegmentDisplay } from './SevenSegmentDisplay'
import '../views/Render.css'
import './Preview.css'

interface PreviewProps {
  className?: string
}

const Preview: React.FC<PreviewProps> = ({ className = '' }) => {
  const [, dateFormat] = useDateFormatStoreState()
  const [, dayOfWeek] = useDayOfWeekStoreState()
  const [, visualStyle] = useVisualStyleStoreState()
  const [, timezone] = useTimezoneStoreState()
  const [, language] = useLanguageStoreState()
  const [, displayMode] = useDisplayModeStoreState()
  const [, overlayPosition] = useOverlayPositionStoreState()
  const [, textColor] = useTextColorStoreState()
  const [, backgroundColor] = useBackgroundColorStoreState()
  const [, backgroundOpacity] = useBackgroundOpacityStoreState()
  const [, showTime] = useShowTimeStoreState()
  const [, showSeconds] = useShowSecondsStoreState()
  const [, showDate] = useShowDateStoreState()
  const [, timeFormat] = useTimeFormatStoreState()
  const [, fontFamily] = useFontFamilyStoreState()

  const [currentDate, setCurrentDate] = useState(new Date())
  const [timezoneError, setTimezoneError] = useState(false)

  // Debug logging
  useEffect(() => {
    console.log('[Preview] Store values:', {
      dateFormat,
      visualStyle,
      showTime,
      showDate,
      textColor,
      backgroundColor
    })
  }, [dateFormat, visualStyle, showTime, showDate, textColor, backgroundColor])

  // Update date/time based on display settings
  useEffect(() => {
    const updateDate = () => {
      setCurrentDate(new Date())
    }

    // Validate timezone
    setTimezoneError(!isValidTimezone(timezone))

    // Update immediately
    updateDate()

    // Update interval: every second if showing time with seconds, every minute otherwise
    const updateInterval = showTime && showSeconds ? 1000 : 60000
    const interval = setInterval(updateDate, updateInterval)

    return () => clearInterval(interval)
  }, [timezone, showTime, showSeconds])

  // Format the time
  const formattedTime = showTime ? formatTime(currentDate, {
    timeFormat,
    showSeconds,
    timezone: timezoneError ? 'UTC' : timezone,
    language,
  }) : ''

  // Format the date
  const formattedDate = showDate ? formatDate(currentDate, {
    format: dateFormat,
    dayOfWeek,
    timezone: timezoneError ? 'UTC' : timezone,
    language,
  }) : ''

  // Determine CSS class for visual style
  const styleClass = `date-display--${visualStyle}`
  const modeClass = displayMode === 'overlay' ? 'date-display--overlay' : 'date-display--fullscreen'
  const positionClass = displayMode === 'overlay' ? `date-display--position-${overlayPosition}` : ''

  return (
    <div className={`preview-container ${className} ${modeClass} ${positionClass}`}>
      <div
        className={`date-display ${styleClass} preview-display`}
        style={{
          color: textColor,
          backgroundColor: `${backgroundColor}${Math.round(backgroundOpacity * 255).toString(16).padStart(2, '0')}`,
          fontFamily: visualStyle === 'digital' ? 'Courier New, monospace' : fontFamily,
        }}
      >
        <div className="date-display__content">
          {showTime && (
            <div className={`date-display__time ${visualStyle === 'digital' ? 'date-display__time--digital' : ''}`}>
              {visualStyle === 'digital' ? (
                <SevenSegmentDisplay value={formattedTime} color={textColor} />
              ) : (
                formattedTime
              )}
            </div>
          )}
          {showDate && (
            <div className="date-display__date">
              {formattedDate}
            </div>
          )}
          {!showTime && !showDate && (
            <div className="date-display__empty">
              No display selected
            </div>
          )}
        </div>
        {timezoneError && (
          <div className="date-display__error">
            ⚠ Invalid Timezone - Using UTC
          </div>
        )}
      </div>
    </div>
  )
}

export default Preview

