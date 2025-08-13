'use client';
import React from 'react';

const WorkRightsEditor = ({ data, onChange }) => {
  const updateField = (field, value) => {
    onChange({ ...data, [field]: value });
  };

  return (
    <div className="space-y-6">
      <h3 className="text-lg font-semibold">Work Rights</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Term Time Work */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Work During Term Time
          </label>
          <input
            type="text"
            value={data.termTime || ""}
            onChange={(e) => updateField('termTime', e.target.value)}
            placeholder="e.g., 20 hrs/week"
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#034833] focus:border-transparent"
          />
          <div className="text-xs text-gray-500 mt-1">
            Work hours allowed during study period
          </div>
        </div>

        {/* Holiday Work */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Work During Holidays
          </label>
          <input
            type="text"
            value={data.holidays || ""}
            onChange={(e) => updateField('holidays', e.target.value)}
            placeholder="e.g., Full-time"
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#034833] focus:border-transparent"
          />
          <div className="text-xs text-gray-500 mt-1">
            Work hours allowed during holidays/breaks
          </div>
        </div>
      </div>

      {/* Preview */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <h4 className="font-medium text-blue-900 mb-2">Preview</h4>
        <div className="text-sm text-blue-800">
          <p><strong>Term Time:</strong> {data.termTime || 'Not specified'}</p>
          <p><strong>Holidays:</strong> {data.holidays || 'Not specified'}</p>
        </div>
      </div>
    </div>
  );
};

export default WorkRightsEditor;
