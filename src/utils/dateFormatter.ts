import type { DateFormat, DayOfWeekDisplay, TimeFormat } from '../hooks/store'

export interface DateFormatterOptions {
  format: DateFormat
  dayOfWeek: DayOfWeekDisplay
  timezone: string
  language: string
}

export interface TimeFormatterOptions {
  timeFormat: TimeFormat
  showSeconds: boolean
  timezone: string
  language: string
}

export function formatDate(date: Date, options: DateFormatterOptions): string {
  const { format, dayOfWeek, timezone, language } = options

  try {
    // Get day of week if needed
    let dayOfWeekText = ''
    if (dayOfWeek !== 'hidden') {
      const dayFormatter = new Intl.DateTimeFormat(language, {
        weekday: dayOfWeek === 'short' ? 'short' : 'long',
        timeZone: timezone,
      })
      dayOfWeekText = dayFormatter.format(date)
    }

    // Format the main date
    let dateText = ''
    
    switch (format) {
      case 'MM/DD/YYYY': {
        const month = new Intl.DateTimeFormat(language, {
          month: '2-digit',
          timeZone: timezone,
        }).format(date)
        const day = new Intl.DateTimeFormat(language, {
          day: '2-digit',
          timeZone: timezone,
        }).format(date)
        const year = new Intl.DateTimeFormat(language, {
          year: 'numeric',
          timeZone: timezone,
        }).format(date)
        dateText = `${month}/${day}/${year}`
        break
      }
      
      case 'DD/MM/YYYY': {
        const month = new Intl.DateTimeFormat(language, {
          month: '2-digit',
          timeZone: timezone,
        }).format(date)
        const day = new Intl.DateTimeFormat(language, {
          day: '2-digit',
          timeZone: timezone,
        }).format(date)
        const year = new Intl.DateTimeFormat(language, {
          year: 'numeric',
          timeZone: timezone,
        }).format(date)
        dateText = `${day}/${month}/${year}`
        break
      }
      
      case 'YYYY-MM-DD': {
        const month = new Intl.DateTimeFormat(language, {
          month: '2-digit',
          timeZone: timezone,
        }).format(date)
        const day = new Intl.DateTimeFormat(language, {
          day: '2-digit',
          timeZone: timezone,
        }).format(date)
        const year = new Intl.DateTimeFormat(language, {
          year: 'numeric',
          timeZone: timezone,
        }).format(date)
        dateText = `${year}-${month}-${day}`
        break
      }
      
      case 'short-written': {
        const dateFormatter = new Intl.DateTimeFormat(language, {
          month: 'short',
          day: 'numeric',
          year: 'numeric',
          timeZone: timezone,
        })
        dateText = dateFormatter.format(date)
        break
      }
      
      case 'long-written': {
        const dateFormatter = new Intl.DateTimeFormat(language, {
          month: 'long',
          day: 'numeric',
          year: 'numeric',
          timeZone: timezone,
        })
        dateText = dateFormatter.format(date)
        break
      }
    }

    // Combine day of week and date
    if (dayOfWeekText) {
      return `${dayOfWeekText}, ${dateText}`
    }
    
    return dateText
  } catch (error) {
    // If timezone is invalid, fall back to UTC
    console.error('Date formatting error:', error)
    
    // Try again with UTC
    try {
      const utcOptions = { ...options, timezone: 'UTC' }
      return formatDate(date, utcOptions) + ' [Invalid Timezone - Using UTC]'
    } catch {
      // Fallback to simple format
      return date.toLocaleDateString()
    }
  }
}

export function formatTime(date: Date, options: TimeFormatterOptions): string {
  const { timeFormat, showSeconds, timezone, language } = options

  try {
    const timeFormatter = new Intl.DateTimeFormat(language, {
      hour: '2-digit',
      minute: '2-digit',
      ...(showSeconds && { second: '2-digit' }),
      hour12: timeFormat === '12',
      timeZone: timezone,
    })
    
    return timeFormatter.format(date)
  } catch (error) {
    console.error('Time formatting error:', error)
    
    // Fallback to UTC
    try {
      const utcOptions = { ...options, timezone: 'UTC' }
      return formatTime(date, utcOptions)
    } catch {
      // Fallback to simple format
      return date.toLocaleTimeString()
    }
  }
}

export function isValidTimezone(timezone: string): boolean {
  try {
    new Intl.DateTimeFormat('en', { timeZone: timezone })
    return true
  } catch {
    return false
  }
}

