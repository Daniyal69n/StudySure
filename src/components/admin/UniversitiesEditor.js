'use client';
import React from 'react';

const UniversitiesEditor = ({ data, onChange }) => {
  const addUniversity = () => {
    const newUniversities = [...data, { name: "", rank: `#${data.length + 1}` }];
    onChange(newUniversities);
  };

  const updateUniversity = (index, field, value) => {
    const newUniversities = [...data];
    newUniversities[index] = { ...newUniversities[index], [field]: value };
    onChange(newUniversities);
  };

  const removeUniversity = (index) => {
    const newUniversities = data.filter((_, i) => i !== index);
    onChange(newUniversities);
  };

  const moveUniversity = (index, direction) => {
    const newUniversities = [...data];
    const newIndex = direction === 'up' ? index - 1 : index + 1;
    
    if (newIndex >= 0 && newIndex < newUniversities.length) {
      [newUniversities[index], newUniversities[newIndex]] = [newUniversities[newIndex], newUniversities[index]];
      onChange(newUniversities);
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold">Top Universities</h3>
        <button
          onClick={addUniversity}
          className="bg-green-600 text-white px-3 py-1 rounded text-sm hover:bg-green-700"
        >
          + Add University
        </button>
      </div>

      <div className="space-y-3">
        {data.map((university, index) => (
          <div key={index} className="border rounded-lg p-4 bg-gray-50">
            <div className="flex items-center gap-3">
              <div className="bg-[#034833] text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-medium">
                {index + 1}
              </div>
              
              <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-3">
                <div className="md:col-span-2">
                  <input
                    type="text"
                    value={university.name}
                    onChange={(e) => updateUniversity(index, 'name', e.target.value)}
                    placeholder="University name..."
                    className="w-full p-2 border rounded focus:ring-2 focus:ring-[#034833] focus:border-transparent"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    value={university.rank}
                    onChange={(e) => updateUniversity(index, 'rank', e.target.value)}
                    placeholder="#1"
                    className="w-full p-2 border rounded focus:ring-2 focus:ring-[#034833] focus:border-transparent"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1">
                <button
                  onClick={() => moveUniversity(index, 'up')}
                  disabled={index === 0}
                  className="p-1 text-gray-400 hover:text-gray-600 disabled:opacity-30"
                >
                  ↑
                </button>
                <button
                  onClick={() => moveUniversity(index, 'down')}
                  disabled={index === data.length - 1}
                  className="p-1 text-gray-400 hover:text-gray-600 disabled:opacity-30"
                >
                  ↓
                </button>
                <button
                  onClick={() => removeUniversity(index)}
                  className="p-1 text-red-400 hover:text-red-600"
                >
                  ✕
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {data.length === 0 && (
        <div className="text-center py-8 text-gray-500">
          No universities added yet. Click "Add University" to start.
        </div>
      )}
    </div>
  );
};

export default UniversitiesEditor;
