'use client';
import React from 'react';

const WhyStudyEditor = ({ data, onChange }) => {
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
  const addTextBlock = () => {
    const newReasons = [...(Array.isArray(data) ? data : []), '__TEXT__|'];
    onChange(newReasons);
  };
  const addReason = () => {
    const newReasons = [...(Array.isArray(data) ? data : []), ""];
    onChange(newReasons);
  };

  const updateReason = (index, value) => {
    const newReasons = [...(Array.isArray(data) ? data : [])];
    newReasons[index] = value;
    onChange(newReasons);
  };

  const removeReason = (index) => {
    const newReasons = (Array.isArray(data) ? data : []).filter((_, i) => i !== index);
    onChange(newReasons);
  };

  const moveReason = (index, direction) => {
    const newReasons = Array.isArray(data) ? [...data] : [];
    const newIndex = direction === 'up' ? index - 1 : index + 1;
    if (newIndex >= 0 && newIndex < newReasons.length) {
      [newReasons[index], newReasons[newIndex]] = [newReasons[newIndex], newReasons[index]];
      onChange(newReasons);
    }
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
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold">Why Study Content</h3>
        <div className="flex items-center gap-2">
          <button
            onClick={addReason}
            className="bg-green-600 text-white px-3 py-1 rounded text-sm hover:bg-green-700"
          >
            + Add Bullet
          </button>
          <button
            onClick={addTextBlock}
            className="bg-blue-600 text-white px-3 py-1 rounded text-sm hover:bg-blue-700"
          >
            + Add Text Block
          </button>
        </div>
      </div>

      <div className="space-y-3">
          {(Array.isArray(data) ? data : []).map((reason, index) => (
            <div key={index} className="border rounded-lg p-4 bg-gray-50">
              <div className="flex items-start gap-3">
                {typeof reason === 'string' && reason.startsWith('__TEXT__|') ? (
                  <div className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-medium">T</div>
                ) : (
                  <div className="bg-[#034833] text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-medium">{index + 1}</div>
                )}
                
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <label className="text-xs text-gray-500">Font size</label>
                    <select
                      value={(() => { const v = typeof reason === 'string' ? (reason.startsWith('__TEXT__|') ? extractSize(reason.replace(/^__TEXT__\|/, '')) : extractSize(reason)) : null; return v ?? ''; })()}
                      onChange={(e) => {
                        const current = typeof reason === 'string' ? reason : '';
                        const isText = current.startsWith('__TEXT__|');
                        const content = isText ? current.replace(/^__TEXT__\|/, '') : current;
                        const next = applySize(content, e.target.value ? parseInt(e.target.value, 10) : null);
                        updateReason(index, isText ? `__TEXT__|${next}` : next);
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
                        const current = typeof reason === 'string' ? (reason.startsWith('__TEXT__|') ? reason.replace(/^__TEXT__\|/, '') : reason) : '';
                        const size = typeof reason === 'string' ? (reason.startsWith('__TEXT__|') ? extractSize(reason.replace(/^__TEXT__\|/, '')) : extractSize(reason)) : null;
                        applyBoldAtSelection(`why-reason-${index}`, stripSize(current), (inner) => {
                          const wrapped = applySize(inner, size);
                          updateReason(index, (typeof reason === 'string' && reason.startsWith('__TEXT__|')) ? `__TEXT__|${wrapped}` : wrapped);
                        });
                      }}
                      className="px-2 py-1 text-xs border rounded hover:bg-gray-50"
                    >
                      Bold
                    </button>
                  </div>
                  <textarea
                    id={`why-reason-${index}`}
                    value={typeof reason === 'string' && reason.startsWith('__TEXT__|') ? stripSize(reason.replace(/^__TEXT__\|/, '')) : (typeof reason === 'string' ? stripSize(reason) : reason)}
                    onChange={(e) => {
                      const base = e.target.value;
                      const current = typeof reason === 'string' ? reason : '';
                      const isText = current.startsWith('__TEXT__|');
                      const size = isText ? extractSize(current.replace(/^__TEXT__\|/, '')) : extractSize(current);
                      const wrapped = applySize(base, size);
                      updateReason(index, isText ? `__TEXT__|${wrapped}` : wrapped);
                    }}
                    placeholder={typeof reason === 'string' && reason.startsWith('__TEXT__|') ? "Enter text block (supports **bold**)" : "Enter bullet reason..."}
                    className="w-full p-3 border rounded-lg resize-none focus:ring-2 focus:ring-[#034833] focus:border-transparent"
                    rows={typeof reason === 'string' && reason.startsWith('__TEXT__|') ? 4 : 3}
                  />
                  <div className="text-xs text-gray-500 mt-1">
                    {typeof reason === 'string' && reason.startsWith('__TEXT__|') ? 'This will render as a paragraph.' : 'Use **text** for bold formatting'}
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
                    disabled={index === (Array.isArray(data) ? data.length - 1 : 0)}
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

      {(Array.isArray(data) ? data.length : 0) === 0 && (
        <div className="text-center py-8 text-gray-500">
          No reasons added yet. Click "Add Reason" to start.
        </div>
      )}
    </div>
  );
};

export default WhyStudyEditor;
