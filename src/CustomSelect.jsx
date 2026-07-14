import React, { useState, useRef, useEffect } from 'react';

export default function CustomSelect({ value, options, onChange, className = '' }) {
  const [isOpen, setIsOpen] = useState(false);
  const wrapperRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, []);

  const selectedOption = options.find(opt => opt.value === value);

  return (
    <div className={`custom-select ${className}`} ref={wrapperRef}>
      <div
        className="custom-select-trigger"
        onClick={(e) => { e.stopPropagation(); setIsOpen(!isOpen); }}
      >
        {selectedOption ? selectedOption.label : ''}
        <span className={`custom-select-arrow ${isOpen ? 'open' : ''}`}>▾</span>
      </div>

      {isOpen && (
        <div className="custom-select-menu">
          {options.map((opt, idx) => (
            <div
              key={idx}
              className={`custom-select-option ${opt.value === value ? 'active' : ''}`}
              onClick={(e) => {
                e.stopPropagation();
                onChange(opt.value);
                setIsOpen(false);
              }}
            >
              {opt.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
