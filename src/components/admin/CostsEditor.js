'use client';
import React from 'react';

const CostsEditor = ({ data, onChange }) => {
  const tuitionFees = data.tuitionFees || [];
  
  // Convert intro and notes to array structure for reordering
  const introSections = data.introSections || [
    { type: 'intro', content: data.intro || '', id: 'intro' },
    ...(data.notes || []).map((note, i) => ({ type: 'note', content: note, id: `note-${i}` }))
  ];

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

  // Update intro sections and sync back to original data structure
  const updateIntroSections = (newSections) => {
    const intro = newSections.find(s => s.type === 'intro')?.content || '';
    const notes = newSections.filter(s => s.type === 'note').map(s => s.content);
    onChange({ ...data, intro, notes, introSections: newSections });
  };

  const moveSection = (index, direction) => {
    const newSections = [...introSections];
    const newIndex = direction === 'up' ? index - 1 : index + 1;
    if (newIndex >= 0 && newIndex < newSections.length) {
      [newSections[index], newSections[newIndex]] = [newSections[newIndex], newSections[index]];
      updateIntroSections(newSections);
    }
  };

  const removeSection = (index) => {
    const newSections = introSections.filter((_, i) => i !== index);
    updateIntroSections(newSections);
  };

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

  const moveTuitionLevel = (index, direction) => {
    const newFees = [...tuitionFees];
    const newIndex = direction === 'up' ? index - 1 : index + 1;
    if (newIndex >= 0 && newIndex < newFees.length) {
      [newFees[index], newFees[newIndex]] = [newFees[newIndex], newFees[index]];
      onChange({ ...data, tuitionFees: newFees });
    }
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

      {/* Reorderable Intro paragraph and notes */}
      <div className="space-y-3">
        {introSections.map((section, index) => (
          <div key={section.id} className="border rounded-lg p-4 bg-gray-50">
            <div className="flex items-start gap-3">
              <div className="bg-[#034833] text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-medium">
                {section.type === 'intro' ? '📝' : index}
              </div>
              
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <label className="text-sm font-medium text-gray-700">
                    {section.type === 'intro' ? 'Intro paragraph (optional)' : `Note ${index}`}
                  </label>
                  <label className="text-xs text-gray-500">Font size</label>
                  <select
                    value={extractSize(section.content) ?? ''}
                    onChange={(e) => {
                      const newSections = [...introSections];
                      newSections[index].content = applySize(newSections[index].content, e.target.value ? parseInt(e.target.value, 10) : null);
                      updateIntroSections(newSections);
                    }}
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
                      const base = stripSize(section.content || '');
                      applyBoldAtSelection(`cost-section-${section.id}`, base, (inner) => {
                        const newSections = [...introSections];
                        newSections[index].content = applySize(inner, extractSize(section.content));
                        updateIntroSections(newSections);
                      });
                    }}
                    className="px-2 py-1 text-xs border rounded hover:bg-gray-50"
                  >
                    Bold
                  </button>
                </div>
                <textarea
                  id={`cost-section-${section.id}`}
                  value={stripSize(section.content)}
                  onChange={(e) => {
                    const newSections = [...introSections];
                    const size = extractSize(newSections[index].content);
                    newSections[index].content = applySize(e.target.value, size);
                    updateIntroSections(newSections);
                  }}
                  placeholder={section.type === 'intro' ? "Explain general notes about study costs..." : "Add a cost-related note..."}
                  className="w-full p-3 border rounded resize-none focus:ring-2 focus:ring-[#034833] focus:border-transparent"
                  rows={section.type === 'intro' ? 3 : 2}
                />
              </div>

              <div className="flex items-center gap-1">
                <button
                  onClick={() => moveSection(index, 'up')}
                  disabled={index === 0}
                  className="p-2 text-gray-400 hover:text-gray-600 disabled:opacity-30"
                >
                  ↑
                </button>
                <button
                  onClick={() => moveSection(index, 'down')}
                  disabled={index === introSections.length - 1}
                  className="p-2 text-gray-400 hover:text-gray-600 disabled:opacity-30"
                >
                  ↓
                </button>
                <button
                  onClick={() => removeSection(index)}
                  className="p-2 text-red-400 hover:text-red-600"
                >
                  ✕
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center">
        <button
          onClick={() => {
            const newSections = [...introSections, { type: 'note', content: '', id: `note-${Date.now()}` }];
            updateIntroSections(newSections);
          }}
          className="bg-green-600 text-white px-3 py-1 rounded text-sm hover:bg-green-700"
        >
          + Add Note
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

              <div className="flex items-center gap-1">
                <button
                  onClick={() => moveTuitionLevel(index, 'up')}
                  disabled={index === 0}
                  className="p-2 text-gray-400 hover:text-gray-600 disabled:opacity-30"
                >
                  ↑
                </button>
                <button
                  onClick={() => moveTuitionLevel(index, 'down')}
                  disabled={index === tuitionFees.length - 1}
                  className="p-2 text-gray-400 hover:text-gray-600 disabled:opacity-30"
                >
                  ↓
                </button>
                <button
                  onClick={() => removeTuitionLevel(index)}
                  className="p-2 text-red-400 hover:text-red-600"
                >
                  ✕
                </button>
              </div>
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
