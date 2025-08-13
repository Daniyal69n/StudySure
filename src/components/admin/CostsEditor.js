'use client';
import React from 'react';

const CostsEditor = ({ data, onChange }) => {
  const tuitionFees = data.tuitionFees || [];

  const addTuitionLevel = () => {
    const newFees = [...tuitionFees, { level: "", range: "" }];
    onChange({ ...data, tuitionFees: newFees });
  };

  const updateTuitionLevel = (index, field, value) => {
    const newFees = [...tuitionFees];
    newFees[index] = { ...newFees[index], [field]: value };
    onChange({ ...data, tuitionFees: newFees });
  };

  const removeTuitionLevel = (index) => {
    const newFees = tuitionFees.filter((_, i) => i !== index);
    onChange({ ...data, tuitionFees: newFees });
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold">Study Costs</h3>
        <button
          onClick={addTuitionLevel}
          className="bg-green-600 text-white px-3 py-1 rounded text-sm hover:bg-green-700"
        >
          + Add Degree Level
        </button>
      </div>

      <div className="space-y-3">
        {tuitionFees.map((fee, index) => (
          <div key={index} className="border rounded-lg p-4 bg-gray-50">
            <div className="flex items-center gap-3">
              <div className="bg-[#034833] text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-medium">
                💰
              </div>
              
              <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-3">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Degree Level
                  </label>
                  <select
                    value={fee.level}
                    onChange={(e) => updateTuitionLevel(index, 'level', e.target.value)}
                    className="w-full p-2 border rounded focus:ring-2 focus:ring-[#034833] focus:border-transparent"
                  >
                    <option value="">Select degree level...</option>
                    <option value="Bachelor's Degree">Bachelor's Degree</option>
                    <option value="Master's Degree">Master's Degree</option>
                    <option value="Doctoral Degree">Doctoral Degree</option>
                    <option value="Diploma">Diploma</option>
                    <option value="Certificate">Certificate</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Price Range
                  </label>
                  <input
                    type="text"
                    value={fee.range}
                    onChange={(e) => updateTuitionLevel(index, 'range', e.target.value)}
                    placeholder="e.g., 10,000 - 20,000 GBP / year"
                    className="w-full p-2 border rounded focus:ring-2 focus:ring-[#034833] focus:border-transparent"
                  />
                </div>
              </div>

              <button
                onClick={() => removeTuitionLevel(index)}
                className="p-2 text-red-400 hover:text-red-600"
              >
                ✕
              </button>
            </div>
          </div>
        ))}
      </div>

      {tuitionFees.length === 0 && (
        <div className="text-center py-8 text-gray-500">
          No tuition fees added yet. Click "Add Degree Level" to start.
        </div>
      )}
    </div>
  );
};

export default CostsEditor;
