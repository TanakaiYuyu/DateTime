import { useEffect } from 'react'
import Preview from './Preview'
import './Preview.css'

interface PreviewModalProps {
  isOpen: boolean
  onClose: () => void
}

const PreviewModal: React.FC<PreviewModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      // Prevent body scroll when modal is open
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }

    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }

    if (isOpen) {
      window.addEventListener('keydown', handleEscape)
    }

    return () => {
      window.removeEventListener('keydown', handleEscape)
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div className="preview-modal" onClick={onClose}>
      <div className="preview-modal__content" onClick={(e) => e.stopPropagation()}>
        <button className="preview-modal__close" onClick={onClose} aria-label="Close preview">
          ×
        </button>
        <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Preview className="preview-modal-render" />
        </div>
      </div>
    </div>
  )
}

export default PreviewModal

