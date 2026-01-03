import './SevenSegmentDisplay.css'

interface SevenSegmentDisplayProps {
  value: string
  color?: string
}

// Map of characters to segment states (a, b, c, d, e, f, g)
const segmentMap: Record<string, boolean[]> = {
  '0': [true, true, true, true, true, true, false],
  '1': [false, true, true, false, false, false, false],
  '2': [true, true, false, true, true, false, true],
  '3': [true, true, true, true, false, false, true],
  '4': [false, true, true, false, false, true, true],
  '5': [true, false, true, true, false, true, true],
  '6': [true, false, true, true, true, true, true],
  '7': [true, true, true, false, false, false, false],
  '8': [true, true, true, true, true, true, true],
  '9': [true, true, true, true, false, true, true],
  ':': [false, false, false, false, false, false, false], // colon is handled separately
  ' ': [false, false, false, false, false, false, false],
  'A': [true, true, true, false, true, true, true],
  'P': [true, true, false, false, true, true, true],
  'M': [true, true, true, false, true, true, false],
}

function SevenSegmentDigit({ char, color = '#00ff00' }: { char: string; color?: string }) {
  const segments = segmentMap[char.toUpperCase()] || [false, false, false, false, false, false, false]
  const isColon = char === ':'

  if (isColon) {
    return (
      <div className="seven-segment-colon">
        <div className="seven-segment-colon__dot seven-segment-colon__dot--on" style={{ backgroundColor: color }} />
        <div className="seven-segment-colon__dot seven-segment-colon__dot--on" style={{ backgroundColor: color }} />
      </div>
    )
  }

  return (
    <div className="seven-segment-digit">
      {/* Segment A - top */}
      <div className={`seven-segment-digit__segment seven-segment-digit__segment--a ${segments[0] ? 'seven-segment-digit__segment--on' : ''}`} style={segments[0] ? { backgroundColor: color, boxShadow: `0 0 1rem ${color}` } : {}} />
      
      {/* Segment B - top right */}
      <div className={`seven-segment-digit__segment seven-segment-digit__segment--b ${segments[1] ? 'seven-segment-digit__segment--on' : ''}`} style={segments[1] ? { backgroundColor: color, boxShadow: `0 0 1rem ${color}` } : {}} />
      
      {/* Segment C - bottom right */}
      <div className={`seven-segment-digit__segment seven-segment-digit__segment--c ${segments[2] ? 'seven-segment-digit__segment--on' : ''}`} style={segments[2] ? { backgroundColor: color, boxShadow: `0 0 1rem ${color}` } : {}} />
      
      {/* Segment D - bottom */}
      <div className={`seven-segment-digit__segment seven-segment-digit__segment--d ${segments[3] ? 'seven-segment-digit__segment--on' : ''}`} style={segments[3] ? { backgroundColor: color, boxShadow: `0 0 1rem ${color}` } : {}} />
      
      {/* Segment E - bottom left */}
      <div className={`seven-segment-digit__segment seven-segment-digit__segment--e ${segments[4] ? 'seven-segment-digit__segment--on' : ''}`} style={segments[4] ? { backgroundColor: color, boxShadow: `0 0 1rem ${color}` } : {}} />
      
      {/* Segment F - top left */}
      <div className={`seven-segment-digit__segment seven-segment-digit__segment--f ${segments[5] ? 'seven-segment-digit__segment--on' : ''}`} style={segments[5] ? { backgroundColor: color, boxShadow: `0 0 1rem ${color}` } : {}} />
      
      {/* Segment G - middle */}
      <div className={`seven-segment-digit__segment seven-segment-digit__segment--g ${segments[6] ? 'seven-segment-digit__segment--on' : ''}`} style={segments[6] ? { backgroundColor: color, boxShadow: `0 0 1rem ${color}` } : {}} />
    </div>
  )
}

export function SevenSegmentDisplay({ value, color = '#00ff00' }: SevenSegmentDisplayProps) {
  const characters = value.split('')

  return (
    <div className="seven-segment-display">
      {characters.map((char, index) => (
        <SevenSegmentDigit key={index} char={char} color={color} />
      ))}
    </div>
  )
}

