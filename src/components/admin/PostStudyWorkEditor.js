'use client';
import React from 'react';

const PostStudyWorkEditor = ({ data, onChange }) => {
  const updateField = (field, value) => {
    onChange({ ...data, [field]: value });
  };

  const addBenefit = () => {
    const newBenefits = [...(data.benefits || []), ""];
    onChange({ ...data, benefits: newBenefits });
  };

  const updateBenefit = (index, value) => {
    const newBenefits = [...(data.benefits || [])];
    newBenefits[index] = value;
    onChange({ ...data, benefits: newBenefits });
  };

  const removeBenefit = (index) => {
    const newBenefits = (data.benefits || []).filter((_, i) => i !== index);
    onChange({ ...data, benefits: newBenefits });
  };

  return (
    <div className="space-y-6">
      <h3 className="text-lg font-semibold">Post Study Work Information</h3>

      {/* Title */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Section Title
        </label>
        <input
          type="text"
          value={data.title || ""}
          onChange={(e) => updateField('title', e.target.value)}
          placeholder="e.g., POST STUDY WORK / PR IN UK"
          className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#034833] focus:border-transparent"
        />
      </div>

      {/* Description */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Main Description
        </label>
        <textarea
          value={data.description || ""}
          onChange={(e) => updateField('description', e.target.value)}
          placeholder="Describe the post-study work opportunities..."
          className="w-full p-3 border rounded-lg resize-none focus:ring-2 focus:ring-[#034833] focus:border-transparent"
          rows={4}
        />
        <div className="text-xs text-gray-500 mt-1">
          Use **text** for bold formatting
        </div>
      </div>

      {/* Benefits */}
      <div>
        <div className="flex justify-between items-center mb-3">
          <label className="block text-sm font-medium text-gray-700">
            Benefits
          </label>
          <button
            onClick={addBenefit}
            className="bg-green-600 text-white px-3 py-1 rounded text-sm hover:bg-green-700"
          >
            + Add Benefit
          </button>
        </div>

        <div className="space-y-3">
          {(data.benefits || []).map((benefit, index) => (
            <div key={index} className="border rounded-lg p-3 bg-gray-50">
              <div className="flex items-start gap-3">
                <div className="bg-[#034833] text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-medium">
                  {index + 1}
                </div>
                
                <textarea
                  value={benefit}
                  onChange={(e) => updateBenefit(index, e.target.value)}
                  placeholder="Enter benefit description..."
                  className="flex-1 p-2 border rounded resize-none focus:ring-2 focus:ring-[#034833] focus:border-transparent"
                  rows={2}
                />

                <button
                  onClick={() => removeBenefit(index)}
                  className="p-1 text-red-400 hover:text-red-600"
                >
                  ✕
                </button>
              </div>
            </div>
          ))}
        </div>

        {(!data.benefits || data.benefits.length === 0) && (
          <div className="text-center py-6 text-gray-500">
            No benefits added yet. Click "Add Benefit" to start.
          </div>
        )}
      </div>
    </div>
  );
};

export default PostStudyWorkEditor;
