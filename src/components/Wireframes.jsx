import React from 'react';

export function HomeWireframe() {
  return (
    <div className="flex h-screen">
      <aside className="w-1/6 border-r p-4">
        <div className="h-12 bg-gray-200 rounded mb-4" />
        <div className="h-8 bg-gray-200 rounded mb-2" />
        <div className="h-8 bg-gray-200 rounded mb-2" />
        <div className="h-8 bg-gray-200 rounded" />
      </aside>
      <main className="flex-1 p-8">
        <div className="h-12 bg-gray-300 rounded mb-6" />
        <div className="grid grid-cols-3 gap-4">
          {[...Array(6)].map((_, i) => <div key={i} className="h-24 bg-gray-200 rounded" />)}
        </div>
      </main>
    </div>
  );
}

export function CourseWireframe() {
  return (
    <div className="flex h-screen">
      <aside className="w-1/6 border-r p-4">
        {[...Array(4)].map((_,i)=><div key={i} className="h-8 bg-gray-200 rounded mb-2"/>)}
      </aside>
      <main className="flex-1 p-8">
        <div className="h-8 bg-gray-300 rounded mb-4 w-1/3" />
        {[...Array(5)].map((_,i)=><div key={i} className="h-4 bg-gray-200 rounded w-full mb-2"/>)}
      </main>
    </div>
  );
}

export function ModelsWireframe() {
  return (
    <div className="p-8">
      <div className="h-12 bg-gray-300 rounded mb-6 w-1/2" />
      <div className="grid grid-cols-3 gap-6">
        {[...Array(6)].map((_, i)=><div key={i} className="h-32 bg-gray-200 rounded"/>)}
      </div>
    </div>
  );
}

export function ExerciseWireframe() {
  return (
    <div className="flex h-screen">
      <section className="w-1/2 border-r p-8">
        <div className="h-8 bg-gray-300 rounded mb-4 w-1/3" />
        {[...Array(6)].map((_, i)=><div key={i} className="h-4 bg-gray-200 rounded mb-2"/>)}
      </section>
      <aside className="w-1/2 p-8">
        <div className="h-8 bg-gray-300 rounded mb-4 w-1/3" />
        {[...Array(6)].map((_, i)=><div key={i} className="h-4 bg-gray-200 rounded mb-2"/>)}
      </aside>
    </div>
  );
}
