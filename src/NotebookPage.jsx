import React, { useState, useEffect, useRef } from 'react';
import Popup from './Popup';

export default function NotebookPage({ topicData, onNextTopic, hasNextTopic }) {
  const [popupData, setPopupData] = useState({ isOpen: false, word: '', def: '' });
  const [currentPage, setCurrentPage] = useState(0);

  // Swipe Gesture State & Timer
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const lastSwipeTime = useRef(0);
  const minSwipeDistance = 50;

  useEffect(() => {
    setCurrentPage(0);
  }, [topicData]);

  const ArrowRightIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: '18px', height: '18px' }}>
      <polyline points="9 18 15 12 9 6"></polyline>
    </svg>
  );

  // RECURSIVE PARSER: Looks inside text to find nested [[]] and formats
  const renderInline = (str, glossary) => {
    if (typeof str !== 'string') return str;
    
    // Splits the string by formatting tags safely
    const parts = str.split(/(\[\[\[.*?\]\]\]|\[\[.*?\]\]|\{\{.*?\}\}|\*\*.*?\*\*|\*(?!\s)[^*]+\*(?!\w))/g);
    
    return parts.map((part, index) => {
      if (!part) return null;
      
      if (part.startsWith('[[[') && part.endsWith(']]]')) {
        return <div key={index} className="note-box">{renderInline(part.slice(3, -3), glossary)}</div>;
      
      } else if (part.startsWith('[[') && part.endsWith(']]')) {
        const word = part.slice(2, -2);
        
        // Bulletproof Glossary Lookup
        let definition = "No intel found. Add this to your data glossary.";
        if (glossary) {
          const searchKey = word.trim().toLowerCase();
          for (const [key, val] of Object.entries(glossary)) {
            // Checks for exact match or if the word contains the key
            if (key.trim().toLowerCase() === searchKey || searchKey.includes(key.trim().toLowerCase())) {
              definition = val;
              break;
            }
          }
        }
        
        return (
          <span key={index} className="highlighted-word" onClick={(e) => { e.stopPropagation(); setPopupData({ isOpen: true, word: word, def: definition }); }}>
            {renderInline(word, glossary)}
          </span>
        );
      
      } else if (part.startsWith('{{') && part.endsWith('}}')) {
        return <span key={index} className="highlighter">{renderInline(part.slice(2, -2), glossary)}</span>;
      
      } else if (part.startsWith('**') && part.endsWith('**')) {
        return <strong key={index} className="bold-text">{renderInline(part.slice(2, -2), glossary)}</strong>;
      
      } else if (part.startsWith('*') && part.endsWith('*')) {
        return <strong key={index} className="bold-text">{renderInline(part.slice(1, -1), glossary)}</strong>;
      }
      
      return <React.Fragment key={index}>{part}</React.Fragment>;
    });
  };

  const renderText = (text, glossary) => {
    if (!text) return null;
    
    // CLEANER: Replaces stray bullet-point asterisks with standard dots
    let cleanText = text.replace(/(^|\n|\s)\*\s/g, '$1• ');
    
    const pages = cleanText.split('[PAGE]');
    const currentPageText = pages[currentPage] || "";
    const lines = currentPageText.split('\n');
    
    return {
      totalPages: pages.length,
      content: lines.map((line, index) => {
        if (line.trim() === '') {
          return <br key={index} />;
        } else if (line.startsWith('## ')) {
          return <div key={index} className="banner-heading">{renderInline(line.slice(3), glossary)}</div>;
        }
        return <div key={index} style={{ marginBottom: '8px' }}>{renderInline(line, glossary)}</div>;
      })
    };
  };

  const renderedData = renderText(topicData?.text, topicData?.glossary);
  const isLastPage = renderedData && currentPage === renderedData.totalPages - 1;

  // Touch Event Handlers
  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const now = Date.now();
    
    if (distance > minSwipeDistance) {
      if (now - lastSwipeTime.current < 500 && hasNextTopic) {
        onNextTopic();
      } else if (currentPage < renderedData.totalPages - 1) {
        setCurrentPage(prev => prev + 1);
      }
      lastSwipeTime.current = now;
    }
    
    if (distance < -minSwipeDistance && currentPage > 0) {
      setCurrentPage(prev => prev - 1);
      lastSwipeTime.current = now;
    }

    setTouchStart(null);
    setTouchEnd(null);
  };

  return (
    <div 
      className="page-container" 
      onTouchStart={onTouchStart} 
      onTouchMove={onTouchMove} 
      onTouchEnd={onTouchEnd}
    >
      <div className="notebook-page">
        <div className="text-content">
          {renderedData ? renderedData.content : <p style={{color: '#ef4444'}}>No data found for this mode.</p>}
        </div>
      </div>
      
      {renderedData && renderedData.totalPages > 0 && (
        <div className="floating-nav">
          <div className="pagination">
            {Array.from({ length: renderedData.totalPages }).map((_, idx) => (
              <span 
                key={idx} 
                className={`page-num ${currentPage === idx ? 'active' : ''}`}
                onClick={(e) => { e.stopPropagation(); setCurrentPage(idx); }}
              >
                {idx + 1}
              </span>
            ))}
          </div>
          
          {isLastPage && hasNextTopic && (
            <button className="next-topic-btn" onClick={(e) => { e.stopPropagation(); onNextTopic(); }} title="Go to next topic">
              <ArrowRightIcon />
            </button>
          )}
        </div>
      )}

      <Popup 
        isOpen={popupData.isOpen} 
        word={popupData.word} 
        definition={popupData.def} 
        onClose={() => setPopupData({ ...popupData, isOpen: false })} 
      />
    </div>
  );
}
