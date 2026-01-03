// Common IANA timezone identifiers organized by region
export const timezones = [
  // Americas
  'America/New_York',
  'America/Chicago',
  'America/Denver',
  'America/Los_Angeles',
  'America/Anchorage',
  'America/Honolulu',
  'America/Toronto',
  'America/Vancouver',
  'America/Montreal',
  'America/Mexico_City',
  'America/Cancun',
  'America/Buenos_Aires',
  'America/Sao_Paulo',
  'America/Santiago',
  'America/Bogota',
  'America/Lima',
  'America/Caracas',
  
  // Europe
  'Europe/London',
  'Europe/Paris',
  'Europe/Berlin',
  'Europe/Rome',
  'Europe/Madrid',
  'Europe/Amsterdam',
  'Europe/Brussels',
  'Europe/Vienna',
  'Europe/Stockholm',
  'Europe/Copenhagen',
  'Europe/Oslo',
  'Europe/Helsinki',
  'Europe/Warsaw',
  'Europe/Prague',
  'Europe/Budapest',
  'Europe/Athens',
  'Europe/Istanbul',
  'Europe/Moscow',
  'Europe/Kiev',
  'Europe/Zurich',
  
  // Asia
  'Asia/Dubai',
  'Asia/Kolkata',
  'Asia/Shanghai',
  'Asia/Hong_Kong',
  'Asia/Tokyo',
  'Asia/Seoul',
  'Asia/Singapore',
  'Asia/Bangkok',
  'Asia/Jakarta',
  'Asia/Manila',
  'Asia/Taipei',
  'Asia/Kuala_Lumpur',
  'Asia/Ho_Chi_Minh',
  'Asia/Karachi',
  'Asia/Dhaka',
  'Asia/Tehran',
  'Asia/Baghdad',
  'Asia/Riyadh',
  'Asia/Jerusalem',
  
  // Pacific
  'Pacific/Auckland',
  'Pacific/Sydney',
  'Pacific/Melbourne',
  'Pacific/Brisbane',
  'Pacific/Perth',
  'Pacific/Adelaide',
  'Pacific/Fiji',
  'Pacific/Honolulu',
  'Pacific/Guam',
  'Pacific/Tahiti',
  
  // Africa
  'Africa/Cairo',
  'Africa/Johannesburg',
  'Africa/Lagos',
  'Africa/Nairobi',
  'Africa/Casablanca',
  'Africa/Algiers',
  'Africa/Tunis',
  'Africa/Accra',
  'Africa/Addis_Ababa',
  
  // Atlantic
  'Atlantic/Reykjavik',
  'Atlantic/Azores',
  'Atlantic/Cape_Verde',
  
  // Other
  'UTC',
]

// Get timezone display name (city name from timezone)
export function getTimezoneDisplayName(timezone: string): string {
  const parts = timezone.split('/')
  const city = parts[parts.length - 1].replace(/_/g, ' ')
  const region = parts[0]
  return `${city} (${region})`
}

