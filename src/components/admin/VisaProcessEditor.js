'use client';
import React, { useMemo } from 'react';

const VisaProcessEditor = ({ data, onChange }) => {
  // Optional intro paragraph stored as first item marker
  const hasIntro = Array.isArray(data) && data.length > 0 && typeof data[0]?.step === 'string' && data[0].step.startsWith('__TEXT__|');
  const introText = hasIntro ? data[0].step.replace(/^__TEXT__\|/, '') : '';

  const setIntro = (value) => {
    const newData = Array.isArray(data) ? [...data] : [];
    const val = value ?? '';
    if (val) {
      if (hasIntro) newData[0].step = `__TEXT__|${val}`; else newData.unshift({ step: `__TEXT__|${val}`, description: '' });
    } else if (hasIntro) {
      newData.shift();
    }
    onChange(newData);
  };
  const addStep = () => {
    const newSteps = [...(Array.isArray(data) ? data : []), { step: "", description: "" }];
    onChange(newSteps);
  };

  const addTextBlock = () => {
    const newSteps = [...(Array.isArray(data) ? data : []), { step: "__TEXT__|", description: "" }];
    onChange(newSteps);
  };

  const updateStep = (index, field, value) => {
    const newSteps = [...data];
    newSteps[index] = { ...newSteps[index], [field]: value };
    onChange(newSteps);
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
        <div className="flex gap-2">
          <button
            onClick={addStep}
            className="bg-green-600 text-white px-3 py-1 rounded text-sm hover:bg-green-700"
          >
            + Add Step
          </button>
          <button
            onClick={addTextBlock}
            className="bg-blue-600 text-white px-3 py-1 rounded text-sm hover:bg-blue-700"
          >
            + Add Text Block
          </button>
        </div>
      </div>

      {/* Intro paragraph (optional) */}
      <div className="border rounded-lg p-4 bg-gray-50">
        <label className="block text-sm font-medium text-gray-700 mb-2">Intro paragraph (optional)</label>
        <textarea
          value={introText}
          onChange={(e) => setIntro(e.target.value)}
          placeholder="Introductory text shown above the steps."
          className="w-full p-3 border rounded resize-none focus:ring-2 focus:ring-[#034833] focus:border-transparent"
          rows={4}
        />
      </div>

      <div className="space-y-4">
        {(Array.isArray(data) ? data : []).map((step, index) => {
          const isText = typeof step?.step === 'string' && step.step.startsWith('__TEXT__|');
          const displayNumber = (Array.isArray(data) ? data.slice(0, index) : []).filter(s => !(typeof s?.step === 'string' && s.step.startsWith('__TEXT__|'))).length + 1;
          return (
            <div key={index} className="border rounded-lg p-4 bg-gray-50">
              <div className="flex items-start gap-3">
                {isText ? (
                  <div className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-medium">T</div>
                ) : (
                  <div className="bg-[#034833] text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-medium">{displayNumber}</div>
                )}

                <div className="flex-1 space-y-3">
                  {isText ? (
                    <>
                    <div className="flex items-center gap-2">
                      <label className="text-xs text-gray-500">Font size</label>
                      <select
                        value={extractSize(step.step.replace(/^__TEXT__\|/, '')) ?? ''}
                        onChange={(e) => updateStep(index, 'step', `__TEXT__|${applySize(step.step.replace(/^__TEXT__\|/, ''), e.target.value ? parseInt(e.target.value, 10) : null)}`)}
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
                          const el = document.getElementById(`visa-text-${index}`);
                          if (!el) return;
                          const start = el.selectionStart ?? 0;
                          const end = el.selectionEnd ?? 0;
                          const base = stripSize(step.step.replace(/^__TEXT__\|/, ''));
                          const before = base.slice(0, start);
                          const sel = base.slice(start, end) || 'bold';
                          const after = base.slice(end);
                          updateStep(index, 'step', `__TEXT__|${applySize(`${before}**${sel}**${after}`, extractSize(step.step.replace(/^__TEXT__\|/, '')))}`);
                          requestAnimationFrame(() => {
                            const node = document.getElementById(`visa-text-${index}`);
                            if (node) {
                              const pos = start + 2;
                              node.setSelectionRange(pos, pos + sel.length);
                              node.focus();
                            }
                          });
                        }}
                        className="px-2 py-1 text-xs border rounded hover:bg-gray-50"
                      >
                        Bold
                      </button>
                    </div>
                    <textarea
                      id={`visa-text-${index}`}
                      value={stripSize(step.step.replace(/^__TEXT__\|/, ''))}
                      onChange={(e) => updateStep(index, 'step', `__TEXT__|${e.target.value}`)}
                      placeholder="Text block (supports **bold**)"
                      className="w-full p-3 border rounded resize-none focus:ring-2 focus:ring-[#034833] focus:border-transparent"
                      rows={4}
                    />
                    </>
                  ) : (
                    <>
                      <div className="flex items-center gap-2">
                        <label className="text-xs text-gray-500">Title size</label>
                        <select
                          value={extractSize(step.step) ?? ''}
                          onChange={(e) => updateStep(index, 'step', applySize(step.step, e.target.value ? parseInt(e.target.value, 10) : null))}
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
                            const el = document.getElementById(`visa-title-${index}`);
                            if (!el) return;
                            const start = el.selectionStart ?? 0;
                            const end = el.selectionEnd ?? 0;
                            const base = stripSize(step.step);
                            const before = base.slice(0, start);
                            const sel = base.slice(start, end) || 'bold';
                            const after = base.slice(end);
                            updateStep(index, 'step', applySize(`${before}**${sel}**${after}`, extractSize(step.step)));
                            requestAnimationFrame(() => {
                              const node = document.getElementById(`visa-title-${index}`);
                              if (node) {
                                const pos = start + 2;
                                node.setSelectionRange(pos, pos + sel.length);
                                node.focus();
                              }
                            });
                          }}
                          className="px-2 py-1 text-xs border rounded hover:bg-gray-50"
                        >
                          Bold
                        </button>
                      </div>
                      <input
                        type="text"
                        id={`visa-title-${index}`}
                        value={stripSize(step.step)}
                        onChange={(e) => {
                          const size = extractSize(step.step);
                          updateStep(index, 'step', applySize(e.target.value, size));
                        }}
                        placeholder="Step title..."
                        className="w-full p-2 border rounded focus:ring-2 focus:ring-[#034833] focus:border-transparent font-medium"
                      />
                      <div className="flex items-center gap-2">
                        <label className="text-xs text-gray-500">Desc size</label>
                        <select
                          value={extractSize(step.description) ?? ''}
                          onChange={(e) => updateStep(index, 'description', applySize(step.description, e.target.value ? parseInt(e.target.value, 10) : null))}
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
                            const el = document.getElementById(`visa-desc-${index}`);
                            if (!el) return;
                            const start = el.selectionStart ?? 0;
                            const end = el.selectionEnd ?? 0;
                            const base = stripSize(step.description || '');
                            const before = base.slice(0, start);
                            const sel = base.slice(start, end) || 'bold';
                            const after = base.slice(end);
                            updateStep(index, 'description', applySize(`${before}**${sel}**${after}`, extractSize(step.description)));
                            requestAnimationFrame(() => {
                              const node = document.getElementById(`visa-desc-${index}`);
                              if (node) {
                                const pos = start + 2;
                                node.setSelectionRange(pos, pos + sel.length);
                                node.focus();
                              }
                            });
                          }}
                          className="px-2 py-1 text-xs border rounded hover:bg-gray-50"
                        >
                          Bold
                        </button>
                      </div>
                      <textarea
                        id={`visa-desc-${index}`}
                        value={stripSize(step.description)}
                        onChange={(e) => {
                          const size = extractSize(step.description);
                          updateStep(index, 'description', applySize(e.target.value, size));
                        }}
                        placeholder="Step description..."
                        className="w-full p-3 border rounded resize-none focus:ring-2 focus:ring-[#034833] focus:border-transparent"
                        rows={3}
                      />
                      <div className="text-xs text-gray-500">Use line breaks for sub-points (a. b. c.)</div>
                    </>
                  )}
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
          );
        })}
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
