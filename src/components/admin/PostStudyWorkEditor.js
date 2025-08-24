'use client';
import React from 'react';

const PostStudyWorkEditor = ({ data, onChange }) => {
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
        <div className="flex items-center gap-2 mb-2">
          <label className="text-xs text-gray-500">Font size</label>
          <select
            value={extractSize(data.description) ?? ''}
            onChange={(e) => updateField('description', applySize(data.description, e.target.value ? parseInt(e.target.value, 10) : null))}
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
        </div>
        <textarea
          id="psw-desc"
          value={stripSize(data.description || "")}
          onChange={(e) => {
            const size = extractSize(data.description);
            updateField('description', applySize(e.target.value, size));
          }}
          placeholder="Describe the post-study work opportunities..."
          className="w-full p-3 border rounded-lg resize-none focus:ring-2 focus:ring-[#034833] focus:border-transparent"
          rows={4}
        />
        <button
          type="button"
          onClick={() => {
            const base = stripSize(data.description || '');
            applyBoldAtSelection('psw-desc', base, (inner) => {
              updateField('description', applySize(inner, extractSize(data.description)));
            });
          }}
          className="mt-1 px-2 py-1 text-xs border rounded hover:bg-gray-50"
        >
          Bold
        </button>
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
                
                <div className="flex items-center gap-2 mb-1">
                  <label className="text-xs text-gray-500">Font size</label>
                  <select
                    value={extractSize(benefit) ?? ''}
                    onChange={(e) => updateBenefit(index, applySize(benefit, e.target.value ? parseInt(e.target.value, 10) : null))}
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
                </div>
                <textarea
                  id={`psw-benefit-${index}`}
                  value={stripSize(benefit)}
                  onChange={(e) => {
                    const size = extractSize(benefit);
                    updateBenefit(index, applySize(e.target.value, size));
                  }}
                  placeholder="Enter benefit description..."
                  className="flex-1 p-2 border rounded resize-none focus:ring-2 focus:ring-[#034833] focus:border-transparent"
                  rows={2}
                />
                <button
                  type="button"
                  onClick={() => {
                    const base = stripSize(benefit || '');
                    applyBoldAtSelection(`psw-benefit-${index}`, base, (inner) => {
                      updateBenefit(index, applySize(inner, extractSize(benefit)));
                    });
                  }}
                  className="mt-1 px-2 py-1 text-xs border rounded hover:bg-gray-50"
                >
                  Bold
                </button>

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
