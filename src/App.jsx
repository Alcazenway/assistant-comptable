import React, { useState } from 'react';
import { HomeWireframe, CourseWireframe, ModelsWireframe, ExerciseWireframe } from './components/Wireframes';

export default function App() {
  const [view, setView] = useState('home');
  return (
    <>
      <nav className="p-4 bg-white shadow flex gap-2">
        {['home','course','models','exercise'].map(v => (
          <button key={v} onClick={()=>setView(v)} className="px-3 py-1 bg-blue-500 text-white rounded">{v}</button>
        ))}
      </nav>
      {{
        home: <HomeWireframe />,
        course: <CourseWireframe />,
        models: <ModelsWireframe />,
        exercise: <ExerciseWireframe />
      }[view]}
    </>
  );
}
