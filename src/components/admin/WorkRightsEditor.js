'use client';
import React from 'react';

const WorkRightsEditor = ({ data, onChange }) => {
  const updateField = (field, value) => {
    onChange({ ...data, [field]: value });
  };

  const extractSize = (text) => {
    if (typeof text !== 'string') return null;
    const m = text.match(/^\[size=(\d+)\]([\s\S]*)\[\/size\]$/);
    return m ? parseInt(m[1], 10) : null;
  };
  const stripSize = (text) => {
    if (typeof text !== 'string') return text;
    const m = text.match(/^\[size=\d+\]([\s\S]*)\[\/size\]$/);
    return m ? m[1] : text;
  };
  const applySize = (text, sizePx) => {
    const inner = stripSize(text ?? '');
    return sizePx ? `[size=${sizePx}]${inner}[/size]` : inner;
  };
  const applyBoldAtSelection = (elementId, currentValue, updateFn) => {
    const el = document.getElementById(elementId);
    if (!el) return;
    const start = el.selectionStart ?? 0;
    const end = el.selectionEnd ?? 0;
    const before = currentValue.slice(0, start);
    const selection = currentValue.slice(start, end) || 'bold';
    const after = currentValue.slice(end);
    updateFn(`${before}**${selection}**${after}`);
    requestAnimationFrame(() => {
      const pos = start + 2;
      el.setSelectionRange(pos, pos + selection.length);
      el.focus();
    });
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
          <div className="flex items-center gap-2 mb-2">
            <label className="text-xs text-gray-500">Font size</label>
            <select
              value={extractSize(data.termTime) ?? ''}
              onChange={(e) => updateField('termTime', applySize(data.termTime, e.target.value ? parseInt(e.target.value, 10) : null))}
              className="border rounded px-2 py-1 text-xs"
            >
              <option value="">Default</option>
              <option value="14">14</option>
              <option value="16">16</option>
              <option value="18">18</option>
              <option value="20">20</option>
              <option value="22">22</option>
              <option value="24">24</option>
            </select>
            <button
              type="button"
              onClick={() => {
                const base = stripSize(data.termTime || '');
                applyBoldAtSelection('wr-term', base, (inner) => updateField('termTime', applySize(inner, extractSize(data.termTime))));
              }}
              className="px-2 py-1 text-xs border rounded hover:bg-gray-50"
            >
              Bold
            </button>
          </div>
          <input
            id="wr-term"
            type="text"
            value={stripSize(data.termTime || "")}
            onChange={(e) => {
              const size = extractSize(data.termTime);
              updateField('termTime', applySize(e.target.value, size));
            }}
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
          <div className="flex items-center gap-2 mb-2">
            <label className="text-xs text-gray-500">Font size</label>
            <select
              value={extractSize(data.holidays) ?? ''}
              onChange={(e) => updateField('holidays', applySize(data.holidays, e.target.value ? parseInt(e.target.value, 10) : null))}
              className="border rounded px-2 py-1 text-xs"
            >
              <option value="">Default</option>
              <option value="14">14</option>
              <option value="16">16</option>
              <option value="18">18</option>
              <option value="20">20</option>
              <option value="22">22</option>
              <option value="24">24</option>
            </select>
            <button
              type="button"
              onClick={() => {
                const base = stripSize(data.holidays || '');
                applyBoldAtSelection('wr-holidays', base, (inner) => updateField('holidays', applySize(inner, extractSize(data.holidays))));
              }}
              className="px-2 py-1 text-xs border rounded hover:bg-gray-50"
            >
              Bold
            </button>
          </div>
          <input
            id="wr-holidays"
            type="text"
            value={stripSize(data.holidays || "")}
            onChange={(e) => {
              const size = extractSize(data.holidays);
              updateField('holidays', applySize(e.target.value, size));
            }}
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
