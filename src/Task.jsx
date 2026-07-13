import React, { useState, useEffect } from 'react';
import { courseStructure } from './data/data_structure';
import './styles/Task.css';

export default function Task({ onClose }) {
  const [completedTopics, setCompletedTopics] = useState(() => {
    const saved = localStorage.getItem('completedTopics');
    return saved ? JSON.parse(saved) : {};
  });

  useEffect(() => {
    localStorage.setItem('completedTopics', JSON.stringify(completedTopics));
  }, [completedTopics]);

  const toggleTopic = (topicId) => {
    setCompletedTopics(prev => ({ ...prev, [topicId]: !prev[topicId] }));
  };

  const handleCopyPrompt = () => {
    const masterPrompt = `You are an expert medical tutor and data structurer. I am expanding my React-based survival study app. 
I need to add a NEW topic. I will provide the raw text and the Mode I want.

APP HIERARCHY & SYNTAX:
- [PAGE] = Manual page break.
- [[word]] = Glossary Link (include in glossary object).
- {{text}} = Highlighter.
- [[[text]]] = Definition Box.
- **text** = Bold.
- ## Text = Heading.

HOW TO OUTPUT THE DATA (CRITICAL):
I ONLY need the NEW KEY-VALUE PAIR to paste directly into my existing mode dictionary. 
Do NOT output "export const...". Just output the new topic ID and its object, ending with a comma.`;

    navigator.clipboard.writeText(masterPrompt);
    alert("Master Prompt copied to clipboard!");
  };

  const CopyIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{width: '16px', height: '16px'}}>
      <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
    </svg>
  );
  
  const CloseIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{width: '18px', height: '18px'}}>
      <line x1="18" y1="6" x2="6" y2="18"></line>
      <line x1="6" y1="6" x2="18" y2="18"></line>
    </svg>
  );

  return (
    <div className="task-view">
      <div className="task-header">
        <h2>Task Directives</h2>
        <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
          <button className="faint-btn" onClick={handleCopyPrompt} title="Copy Prompt"><CopyIcon /></button>
          <button className="comp-close" onClick={onClose}><CloseIcon /></button>
        </div>
      </div>
      
      <p className="task-subtext">Check off the sectors you have survived. Extract the logic prompt to generate new structural data.</p>

      <div className="task-list">
        {Object.entries(courseStructure).map(([subKey, subject]) => (
          <div key={subKey} className="task-subject-group">
            <h3 className="task-subject-title">{subject.title}</h3>
            {Object.entries(subject.systems).map(([sysKey, system]) => (
              <div key={sysKey} className="task-system-group">
                <h4 className="task-system-title">{system.title}</h4>
                {system.topics.map(topic => (
                  <label key={topic.id} className="task-item">
                    <input type="checkbox" checked={!!completedTopics[topic.id]} onChange={() => toggleTopic(topic.id)} />
                    <span className={completedTopics[topic.id] ? "completed-text" : ""}>{topic.title}</span>
                  </label>
                ))}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
