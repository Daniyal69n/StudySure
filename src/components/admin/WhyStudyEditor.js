'use client';
import React from 'react';

const WhyStudyEditor = ({ data, onChange }) => {
  const addReason = () => {
    const newReasons = [...data, ""];
    onChange(newReasons);
  };

  const updateReason = (index, value) => {
    const newReasons = [...data];
    newReasons[index] = value;
    onChange(newReasons);
  };

  const removeReason = (index) => {
    const newReasons = data.filter((_, i) => i !== index);
    onChange(newReasons);
  };

  const moveReason = (index, direction) => {
    const newReasons = [...data];
    const newIndex = direction === 'up' ? index - 1 : index + 1;
    
    if (newIndex >= 0 && newIndex < newReasons.length) {
      [newReasons[index], newReasons[newIndex]] = [newReasons[newIndex], newReasons[index]];
      onChange(newReasons);
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold">Why Study Reasons</h3>
        <button
          onClick={addReason}
          className="bg-green-600 text-white px-3 py-1 rounded text-sm hover:bg-green-700"
        >
          + Add Reason
        </button>
      </div>

      <div className="space-y-3">
        {data.map((reason, index) => (
          <div key={index} className="border rounded-lg p-4 bg-gray-50">
            <div className="flex items-start gap-3">
              <div className="bg-[#034833] text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-medium">
                {index + 1}
              </div>
              
              <div className="flex-1">
                <textarea
                  value={reason}
                  onChange={(e) => updateReason(index, e.target.value)}
                  placeholder="Enter reason for studying in this country..."
                  className="w-full p-3 border rounded-lg resize-none focus:ring-2 focus:ring-[#034833] focus:border-transparent"
                  rows={3}
                />
                <div className="text-xs text-gray-500 mt-1">
                  Use **text** for bold formatting
                </div>
              </div>

              <div className="flex flex-col gap-1">
                <button
                  onClick={() => moveReason(index, 'up')}
                  disabled={index === 0}
                  className="p-1 text-gray-400 hover:text-gray-600 disabled:opacity-30"
                >
                  ↑
                </button>
                <button
                  onClick={() => moveReason(index, 'down')}
                  disabled={index === data.length - 1}
                  className="p-1 text-gray-400 hover:text-gray-600 disabled:opacity-30"
                >
                  ↓
                </button>
                <button
                  onClick={() => removeReason(index)}
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
          No reasons added yet. Click "Add Reason" to start.
        </div>
      )}
    </div>
  );
};

export default WhyStudyEditor;
