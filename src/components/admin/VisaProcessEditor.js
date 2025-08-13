'use client';
import React from 'react';

const VisaProcessEditor = ({ data, onChange }) => {
  const addStep = () => {
    const newSteps = [...data, { step: "", description: "" }];
    onChange(newSteps);
  };

  const updateStep = (index, field, value) => {
    const newSteps = [...data];
    newSteps[index] = { ...newSteps[index], [field]: value };
    onChange(newSteps);
  };

  const removeStep = (index) => {
    const newSteps = data.filter((_, i) => i !== index);
    onChange(newSteps);
  };

  const moveStep = (index, direction) => {
    const newSteps = [...data];
    const newIndex = direction === 'up' ? index - 1 : index + 1;
    
    if (newIndex >= 0 && newIndex < newSteps.length) {
      [newSteps[index], newSteps[newIndex]] = [newSteps[newIndex], newSteps[index]];
      onChange(newSteps);
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold">Student Visa Process</h3>
        <button
          onClick={addStep}
          className="bg-green-600 text-white px-3 py-1 rounded text-sm hover:bg-green-700"
        >
          + Add Step
        </button>
      </div>

      <div className="space-y-4">
        {data.map((step, index) => (
          <div key={index} className="border rounded-lg p-4 bg-gray-50">
            <div className="flex items-start gap-3">
              <div className="bg-[#034833] text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-medium">
                {index + 1}
              </div>
              
              <div className="flex-1 space-y-3">
                <input
                  type="text"
                  value={step.step}
                  onChange={(e) => updateStep(index, 'step', e.target.value)}
                  placeholder="Step title..."
                  className="w-full p-2 border rounded focus:ring-2 focus:ring-[#034833] focus:border-transparent font-medium"
                />
                
                <textarea
                  value={step.description}
                  onChange={(e) => updateStep(index, 'description', e.target.value)}
                  placeholder="Step description..."
                  className="w-full p-3 border rounded resize-none focus:ring-2 focus:ring-[#034833] focus:border-transparent"
                  rows={3}
                />
                
                <div className="text-xs text-gray-500">
                  Use line breaks for sub-points (a. b. c.)
                </div>
              </div>

              <div className="flex flex-col gap-1">
                <button
                  onClick={() => moveStep(index, 'up')}
                  disabled={index === 0}
                  className="p-1 text-gray-400 hover:text-gray-600 disabled:opacity-30"
                >
                  ↑
                </button>
                <button
                  onClick={() => moveStep(index, 'down')}
                  disabled={index === data.length - 1}
                  className="p-1 text-gray-400 hover:text-gray-600 disabled:opacity-30"
                >
                  ↓
                </button>
                <button
                  onClick={() => removeStep(index)}
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
          No visa steps added yet. Click "Add Step" to start.
        </div>
      )}
    </div>
  );
};

export default VisaProcessEditor;
