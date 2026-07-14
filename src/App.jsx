import React, { useState } from 'react';
import { Menu, ChevronRight } from 'lucide-react';
import { courseStructure } from './data/data_structure';
import Task from './Task';
import Competition from './Competition';
import NotebookPage from './NotebookPage';
import { suruData } from './data/data_suru';
import { thorfinnData } from './data/data_thorfinn';
import { simpleData } from './data/data_simple';
import { advancedData } from './data/data_advanced';

import './styles/App.css';

const allModeData = { suru: suruData, thorfinn: thorfinnData, simple: simpleData, advanced: advancedData };

// Your requested premium fonts
const fonts = [
  { name: 'Bubblegum', value: "'Bubblegum Sans', cursive" },
  { name: 'Open Sans', value: "'Open Sans', sans-serif" },
  { name: 'Philosopher', value: "'Philosopher', sans-serif" },
  { name: 'Mulish', value: "'Mulish', sans-serif" },
  { name: 'Poiret One', value: "'Poiret One', cursive" },
  { name: 'Montserrat', value: "'Montserrat', sans-serif" },
  { name: 'Rethink Sans', value: "'Rethink Sans', sans-serif" },
  { name: 'Quicksand', value: "'Quicksand', sans-serif" },
  { name: 'DotGothic16', value: "'DotGothic16', sans-serif" },
  { name: 'Space Mono', value: "'Space Mono', monospace" },
  { name: 'Stint Ultra', value: "'Stint Ultra Expanded', cursive" },
  { name: 'Pontano Sans', value: "'Pontano Sans', sans-serif" },
  { name: 'Unica One', value: "'Unica One', cursive" },
  { name: 'Arima', value: "'Arima', system-ui" }
];

export default function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [currentFont, setCurrentFont] = useState(fonts[8].value); // Default to DotGothic16
  const [currentFontSize, setCurrentFontSize] = useState('1rem');
  const [currentMode, setCurrentMode] = useState('simple'); 
  const [activeTopic, setActiveTopic] = useState(null);
  
  const [inChallenge, setInChallenge] = useState(false);
  const [inTaskView, setInTaskView] = useState(false); 
  const [scores, setScores] = useState({ user: 0, opponent: 0 });
  const [isImmersive, setIsImmersive] = useState(false);

  const getNextTopic = (currentTopicId) => {
    let foundCurrent = false;
    for (const subKey in courseStructure) {
      for (const sysKey in courseStructure[subKey].systems) {
        for (const topic of courseStructure[subKey].systems[sysKey].topics) {
          if (foundCurrent) return topic;
          if (topic.id === currentTopicId) foundCurrent = true;
        }
      }
    }
    return null; 
  };

  const nextTopicObj = activeTopic ? getNextTopic(activeTopic.id) : null;

  const handleNextTopic = () => {
    if (nextTopicObj) {
      setActiveTopic(nextTopicObj);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleScoreUpdate = (entity, points) => {
    setScores(prev => ({ ...prev, [entity]: Math.min(Math.max(prev[entity] + points, 0), 100) }));
  };

  const TrialIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{width: '24px', height: '24px'}}>
      <polygon points="7 5 19 12 7 19 7 5"></polygon>
    </svg>
  );

  const activeModePayload = activeTopic && allModeData[currentMode] ? allModeData[currentMode][activeTopic.id] || {} : {};

  return (
    <div 
      className={`app-wrapper ${isImmersive ? 'immersive-mode' : ''}`} 
      style={{ fontFamily: currentFont, fontSize: currentFontSize }}
      onDoubleClick={() => setIsImmersive(!isImmersive)}
    >
      <div className={`sidebar-overlay ${sidebarOpen ? 'open' : ''}`} onClick={() => setSidebarOpen(false)}></div>

      <div className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
        <button className="sidebar-close" style={{ float: 'right', background: 'none', border: 'none', color: '#fff', fontSize: '1.5rem', cursor: 'pointer' }} onClick={() => setSidebarOpen(false)}>×</button>
        <h2 className="home-btn" onClick={() => { setActiveTopic(null); setSidebarOpen(false); setInTaskView(false); }}>Home</h2>
        
        <div className="progress-container" style={{ margin: '1.5rem 0', paddingBottom: '1rem', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
          <p className="progress-label" style={{ fontSize: '0.75rem', color: '#737373', marginBottom: '4px' }}>Your Survival: {scores.user}</p>
          <div style={{ width: '100%', height: '4px', background: '#333', borderRadius: '2px', marginBottom: '10px' }}>
            <div style={{ width: `${scores.user}%`, height: '100%', background: '#fff', borderRadius: '2px' }}></div>
          </div>
          <p className="progress-label" style={{ fontSize: '0.75rem', color: '#737373', marginBottom: '4px' }}>Opponent: {scores.opponent}</p>
          <div style={{ width: '100%', height: '4px', background: '#333', borderRadius: '2px' }}>
            <div style={{ width: `${scores.opponent}%`, height: '100%', background: '#555', borderRadius: '2px' }}></div>
          </div>
        </div>
        
        <div 
          style={{ marginTop: '1.5rem', padding: '12px 10px', background: 'rgba(255,255,255,0.05)', borderRadius: '8px', border: '1px solid transparent', cursor: 'pointer', display: 'flex', alignItems: 'center' }} 
          onClick={() => { setInTaskView(true); setActiveTopic(null); setSidebarOpen(false); }}
        >
          <h3 style={{ margin: 0, color: '#E0E0E0', fontSize: '1rem', fontWeight: 'bold' }}>Task Directives</h3>
        </div>
        
        {courseStructure && Object.entries(courseStructure).map(([subKey, subject]) => (
          <div key={subKey}>
            <h3 className="sidebar-subject">{subject.title}</h3>
            {Object.entries(subject.systems).map(([sysKey, system]) => (
              <div key={sysKey} className="sidebar-system">
                <p>{system.title}</p>
                {system.topics.map(topic => (
                  <p 
                    key={topic.id} 
                    className={`sidebar-topic ${activeTopic?.id === topic.id && !inTaskView ? 'active' : ''}`} 
                    onClick={() => { setActiveTopic(topic); setSidebarOpen(false); setInChallenge(false); setInTaskView(false); }}
                  >
                    <ChevronRight size={12} style={{ marginRight: '5px' }} /> {topic.title}
                  </p>
                ))}
              </div>
            ))}
          </div>
        ))}
      </div>

      <div className="content-area">
        <div className="top-controls">
          <div style={{ width: '40px', display: 'flex', alignItems: 'center' }}>
            {!sidebarOpen && <Menu onClick={() => setSidebarOpen(true)} className="icon-btn" size={28} />}
          </div>
          
          <div className="dropdown-group" style={{ marginLeft: 'auto', display: 'flex', gap: '8px' }}>
            <select className="micro-select" value={currentFontSize} onChange={(e) => setCurrentFontSize(e.target.value)}>
              <option value="0.85rem">Size: S</option>
              <option value="1rem">Size: M</option>
              <option value="1.25rem">Size: L</option>
            </select>
            
            <select className="micro-select" value={currentFont} onChange={(e) => setCurrentFont(e.target.value)}>
              {fonts.map((f, idx) => (
                <option key={idx} value={f.value}>{f.name}</option>
              ))}
            </select>
          </div>
        </div>

        {inTaskView ? (
          <Task onClose={() => setInTaskView(false)} />
        ) : !activeTopic ? (
          <div className="start-screen">
            <h3>Immortality Protocol Offline.</h3>
            <p>Shall we get started.</p>
          </div>
        ) : (
          <div>
            {!inChallenge && (
              <>
                <h1 className="topic-title">{activeTopic.title}</h1>
                <div className="mode-select-container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2.5rem', marginTop: '1.5rem', padding: '0 1.5rem', width: '100%', boxSizing: 'border-box', transition: '0.3s' }}>
                  <select className="micro-select mode-select" value={currentMode} onChange={(e) => setCurrentMode(e.target.value)}>
                    <option value="simple">Mode: Simple</option>
                    <option value="suru">Mode: Suru</option>
                    <option value="thorfinn">Mode: Thorfinn</option>
                    <option value="advanced">Mode: Advanced</option>
                  </select>
                  
                  <button className="bare-play-btn" onClick={() => setInChallenge(true)} title="Initialize Trial">
                    <TrialIcon />
                  </button>
                </div>
                
                <NotebookPage 
                  topicData={activeModePayload} 
                  onNextTopic={handleNextTopic}
                  hasNextTopic={!!nextTopicObj}
                />
              </>
            )}
            {inChallenge && (
              <Competition 
                topicTitle={activeTopic.title}
                modeData={activeModePayload} 
                modeName={currentMode}
                onClose={() => setInChallenge(false)} 
                onUpdateScore={handleScoreUpdate}
              />
            )}
          </div>
        )}
      </div>
    </div>
  );
}
