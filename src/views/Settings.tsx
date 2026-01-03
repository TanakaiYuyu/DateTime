import {
  SettingsContainer,
  SettingsDivider,
  SettingsField,
  SettingsInputFrame,
  SettingsLabel,
  SettingsSelectFrame,
  SettingsSliderFrame,
  SettingsSwitchFrame,
} from '@telemetryos/sdk/react'
import {
  useUiScaleStoreState,
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
  type DateFormat,
  type DayOfWeekDisplay,
  type VisualStyle,
  type DisplayMode,
  type OverlayPosition,
  type TimeFormat,
} from '../hooks/store'
import { timezones, getTimezoneDisplayName } from '../utils/timezones'

const Settings: React.FC = () => {
  const [, uiScale, setUiScale] = useUiScaleStoreState(5)
  const [, dateFormat, setDateFormat] = useDateFormatStoreState(5)
  const [, dayOfWeek, setDayOfWeek] = useDayOfWeekStoreState(5)
  const [, visualStyle, setVisualStyle] = useVisualStyleStoreState(5)
  const [, timezone, setTimezone] = useTimezoneStoreState(5)
  const [, language, setLanguage] = useLanguageStoreState(5)
  const [, displayMode, setDisplayMode] = useDisplayModeStoreState(5)
  const [, overlayPosition, setOverlayPosition] = useOverlayPositionStoreState(5)
  const [, textColor, setTextColor] = useTextColorStoreState(5)
  const [, backgroundColor, setBackgroundColor] = useBackgroundColorStoreState(5)
  const [, backgroundOpacity, setBackgroundOpacity] = useBackgroundOpacityStoreState(5)
  const [, showTime, setShowTime] = useShowTimeStoreState(5)
  const [, showSeconds, setShowSeconds] = useShowSecondsStoreState(5)
  const [, showDate, setShowDate] = useShowDateStoreState(5)
  const [, timeFormat, setTimeFormat] = useTimeFormatStoreState(5)
  const [, fontFamily, setFontFamily] = useFontFamilyStoreState(5)

  return (
    <SettingsContainer>
      <SettingsField>
        <SettingsLabel>UI Scale</SettingsLabel>
        <SettingsSliderFrame>
          <input
            type="range"
            min={1}
            max={3}
            step={0.01}
            value={uiScale}
            onChange={(e) => setUiScale(parseFloat(e.target.value))}
          />
          <span>{uiScale}x</span>
        </SettingsSliderFrame>
      </SettingsField>

      <SettingsDivider />

      <SettingsField>
        <SettingsLabel>Date Format</SettingsLabel>
        <SettingsSelectFrame>
          <select
            value={dateFormat}
            onChange={(e) => setDateFormat(e.target.value as DateFormat)}
          >
            <option value="MM/DD/YYYY">MM/DD/YYYY (12/16/2025)</option>
            <option value="DD/MM/YYYY">DD/MM/YYYY (16/12/2025)</option>
            <option value="YYYY-MM-DD">YYYY-MM-DD (2025-12-16)</option>
            <option value="short-written">Short Written (Dec 16, 2025)</option>
            <option value="long-written">Long Written (December 16, 2025)</option>
          </select>
        </SettingsSelectFrame>
      </SettingsField>

      <SettingsField>
        <SettingsLabel>Day of Week</SettingsLabel>
        <SettingsSelectFrame>
          <select
            value={dayOfWeek}
            onChange={(e) => setDayOfWeek(e.target.value as DayOfWeekDisplay)}
          >
            <option value="hidden">Hidden</option>
            <option value="short">Short (Mon)</option>
            <option value="full">Full (Monday)</option>
          </select>
        </SettingsSelectFrame>
      </SettingsField>

      <SettingsDivider />

      <SettingsField>
        <SettingsLabel>Visual Style</SettingsLabel>
        <SettingsSelectFrame>
          <select
            value={visualStyle}
            onChange={(e) => setVisualStyle(e.target.value as VisualStyle)}
          >
            <option value="minimal">Minimal</option>
            <option value="bold">Bold</option>
            <option value="elegant">Elegant</option>
            <option value="digital">Digital/LED</option>
            <option value="modern">Modern</option>
          </select>
        </SettingsSelectFrame>
      </SettingsField>

      <SettingsField>
        <SettingsLabel>Font Family</SettingsLabel>
        <SettingsSelectFrame>
          <select
            value={fontFamily}
            onChange={(e) => setFontFamily(e.target.value)}
          >
            <option value="Rubik">Rubik</option>
            <option value="Arial">Arial</option>
            <option value="Helvetica">Helvetica</option>
            <option value="Georgia">Georgia</option>
            <option value="Times New Roman">Times New Roman</option>
            <option value="Courier New">Courier New</option>
            <option value="Verdana">Verdana</option>
            <option value="Trebuchet MS">Trebuchet MS</option>
            <option value="Impact">Impact</option>
            <option value="Comic Sans MS">Comic Sans MS</option>
          </select>
        </SettingsSelectFrame>
      </SettingsField>

      <SettingsDivider />

      <SettingsField>
        <SettingsLabel>Show Time</SettingsLabel>
        <SettingsSwitchFrame>
          <input
            type="checkbox"
            checked={showTime}
            onChange={(e) => setShowTime(e.target.checked)}
          />
        </SettingsSwitchFrame>
      </SettingsField>

      {showTime && (
        <>
          <SettingsField>
            <SettingsLabel>Time Format</SettingsLabel>
            <SettingsSelectFrame>
              <select
                value={timeFormat}
                onChange={(e) => setTimeFormat(e.target.value as TimeFormat)}
              >
                <option value="24">24 hours</option>
                <option value="12">12 hours (AM/PM)</option>
              </select>
            </SettingsSelectFrame>
          </SettingsField>

          <SettingsField>
            <SettingsLabel>Show Seconds</SettingsLabel>
            <SettingsSwitchFrame>
              <input
                type="checkbox"
                checked={showSeconds}
                onChange={(e) => setShowSeconds(e.target.checked)}
              />
            </SettingsSwitchFrame>
          </SettingsField>
        </>
      )}

      <SettingsField>
        <SettingsLabel>Show Date</SettingsLabel>
        <SettingsSwitchFrame>
          <input
            type="checkbox"
            checked={showDate}
            onChange={(e) => setShowDate(e.target.checked)}
          />
        </SettingsSwitchFrame>
      </SettingsField>

      <SettingsDivider />

      <SettingsField>
        <SettingsLabel>Timezone</SettingsLabel>
        <SettingsSelectFrame>
          <select
            value={timezone}
            onChange={(e) => setTimezone(e.target.value)}
          >
            {timezones.map((tz) => (
              <option key={tz} value={tz}>
                {getTimezoneDisplayName(tz)}
              </option>
            ))}
          </select>
        </SettingsSelectFrame>
      </SettingsField>

      <SettingsField>
        <SettingsLabel>Language</SettingsLabel>
        <SettingsSelectFrame>
          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
          >
            <option value="en">English</option>
            <option value="es">Español</option>
            <option value="fr">Français</option>
            <option value="de">Deutsch</option>
            <option value="it">Italiano</option>
            <option value="pt">Português</option>
            <option value="ja">日本語</option>
            <option value="zh">中文</option>
            <option value="ko">한국어</option>
            <option value="ru">Русский</option>
          </select>
        </SettingsSelectFrame>
      </SettingsField>

      <SettingsDivider />

      <SettingsField>
        <SettingsLabel>Display Mode</SettingsLabel>
        <SettingsSelectFrame>
          <select
            value={displayMode}
            onChange={(e) => setDisplayMode(e.target.value as DisplayMode)}
          >
            <option value="full-screen">Full Screen</option>
            <option value="overlay">Overlay</option>
          </select>
        </SettingsSelectFrame>
      </SettingsField>

      {displayMode === 'overlay' && (
        <SettingsField>
          <SettingsLabel>Overlay Position</SettingsLabel>
          <SettingsSelectFrame>
            <select
              value={overlayPosition}
              onChange={(e) => setOverlayPosition(e.target.value as OverlayPosition)}
            >
              <option value="top-left">Top Left</option>
              <option value="top-right">Top Right</option>
              <option value="bottom-left">Bottom Left</option>
              <option value="bottom-right">Bottom Right</option>
              <option value="center">Center</option>
            </select>
          </SettingsSelectFrame>
        </SettingsField>
      )}

      <SettingsDivider />

      <SettingsField>
        <SettingsLabel>Text Color</SettingsLabel>
        <SettingsInputFrame>
          <input
            type="color"
            value={textColor}
            onChange={(e) => setTextColor(e.target.value)}
          />
          <input
            type="text"
            value={textColor}
            onChange={(e) => setTextColor(e.target.value)}
            style={{ marginLeft: '0.5rem' }}
          />
        </SettingsInputFrame>
      </SettingsField>

      <SettingsField>
        <SettingsLabel>Background Color</SettingsLabel>
        <SettingsInputFrame>
          <input
            type="color"
            value={backgroundColor}
            onChange={(e) => setBackgroundColor(e.target.value)}
          />
          <input
            type="text"
            value={backgroundColor}
            onChange={(e) => setBackgroundColor(e.target.value)}
            style={{ marginLeft: '0.5rem' }}
          />
        </SettingsInputFrame>
      </SettingsField>

      <SettingsField>
        <SettingsLabel>Background Opacity</SettingsLabel>
        <SettingsSliderFrame>
          <input
            type="range"
            min={0}
            max={1}
            step={0.01}
            value={backgroundOpacity}
            onChange={(e) => setBackgroundOpacity(parseFloat(e.target.value))}
          />
          <span>{Math.round(backgroundOpacity * 100)}%</span>
        </SettingsSliderFrame>
      </SettingsField>
    </SettingsContainer>
  )
}

export default Settings;