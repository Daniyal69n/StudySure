'use client';
import React, { useMemo } from 'react';

const UniversitiesEditor = ({ data, onChange }) => {
  // Optional intro paragraph using first item marker
  const hasIntro = Array.isArray(data) && data.length > 0 && typeof data[0]?.name === 'string' && data[0].name.startsWith('__TEXT__|');
  const introText = hasIntro ? data[0].name.replace(/^__TEXT__\|/, '') : '';

  const setIntro = (value) => {
    const newData = Array.isArray(data) ? [...data] : [];
    const val = value ?? '';
    if (val) {
      if (hasIntro) newData[0].name = `__TEXT__|${val}`; else newData.unshift({ name: `__TEXT__|${val}`, rank: '' });
    } else if (hasIntro) {
      newData.shift();
    }
    onChange(newData);
  };
  const addUniversity = () => {
    const list = Array.isArray(data) ? data : [];
    const countNonText = list.filter(u => !(typeof u?.name === 'string' && u.name.startsWith('__TEXT__|'))).length;
    const newUniversities = [...list, { name: "", rank: `#${countNonText + 1}` }];
    onChange(newUniversities);
  };

  const addTextBlock = () => {
    const list = Array.isArray(data) ? data : [];
    const newUniversities = [...list, { name: "__TEXT__|", rank: '' }];
    onChange(newUniversities);
  };

  const updateUniversity = (index, field, value) => {
    const newUniversities = [...data];
    newUniversities[index] = { ...newUniversities[index], [field]: value };
    onChange(newUniversities);
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

  const removeUniversity = (index) => {
    const newUniversities = data.filter((_, i) => i !== index);
    onChange(newUniversities);
  };

  const moveUniversity = (index, direction) => {
    const newUniversities = [...data];
    const newIndex = direction === 'up' ? index - 1 : index + 1;
    
    if (newIndex >= 0 && newIndex < newUniversities.length) {
      [newUniversities[index], newUniversities[newIndex]] = [newUniversities[newIndex], newUniversities[index]];
      onChange(newUniversities);
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold">Top Universities</h3>
        <div className="flex gap-2">
          <button
            onClick={addUniversity}
            className="bg-green-600 text-white px-3 py-1 rounded text-sm hover:bg-green-700"
          >
            + Add University
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
          placeholder="Introductory text shown above the university list."
          className="w-full p-3 border rounded resize-none focus:ring-2 focus:ring-[#034833] focus:border-transparent"
          rows={4}
        />
      </div>

      <div className="space-y-3">
        {(Array.isArray(data) ? data : []).map((university, index) => {
          const isText = typeof university?.name === 'string' && university.name.startsWith('__TEXT__|');
          const displayNumber = (Array.isArray(data) ? data.slice(0, index) : []).filter(u => !(typeof u?.name === 'string' && u.name.startsWith('__TEXT__|'))).length + 1;
          return (
            <div key={index} className="border rounded-lg p-4 bg-gray-50">
              <div className="flex items-center gap-3">
                {isText ? (
                  <div className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-medium">T</div>
                ) : (
                  <div className="bg-[#034833] text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-medium">
                    {displayNumber}
                  </div>
                )}

                <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-3">
                  <div className="md:col-span-2">
                    {isText ? (
                      <>
                        <div className="flex items-center gap-2 mb-1">
                          <label className="text-xs text-gray-500">Font size</label>
                          <select
                            value={extractSize(university.name.replace(/^__TEXT__\|/, '')) ?? ''}
                            onChange={(e) => updateUniversity(index, 'name', `__TEXT__|${applySize(university.name.replace(/^__TEXT__\|/, ''), e.target.value ? parseInt(e.target.value, 10) : null)}`)}
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
                          id={`uni-text-${index}`}
                          value={stripSize(university.name.replace(/^__TEXT__\|/, ''))}
                          onChange={(e) => updateUniversity(index, 'name', `__TEXT__|${e.target.value}`)}
                          placeholder="Intro text (supports **bold**)"
                          className="w-full p-2 border rounded focus:ring-2 focus:ring-[#034833] focus:border-transparent"
                          rows={3}
                        />
                        <button
                          type="button"
                          onClick={() => {
                            const base = stripSize(university.name.replace(/^__TEXT__\|/, ''));
                            applyBoldAtSelection(`uni-text-${index}`, base, (inner) => {
                              updateUniversity(index, 'name', `__TEXT__|${applySize(inner, extractSize(university.name.replace(/^__TEXT__\|/, '')))}`);
                            });
                          }}
                          className="mt-1 px-2 py-1 text-xs border rounded hover:bg-gray-50"
                        >
                          Bold
                        </button>
                      </>
                    ) : (
                      <>
                        <div className="flex items-center gap-2 mb-1">
                          <label className="text-xs text-gray-500">Font size</label>
                          <select
                            value={extractSize(university.name) ?? ''}
                            onChange={(e) => updateUniversity(index, 'name', applySize(university.name, e.target.value ? parseInt(e.target.value, 10) : null))}
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
                        <input
                          type="text"
                          id={`uni-name-${index}`}
                          value={stripSize(university.name)}
                          onChange={(e) => {
                            const size = extractSize(university.name);
                            updateUniversity(index, 'name', applySize(e.target.value, size));
                          }}
                          placeholder="University name..."
                          className="w-full p-2 border rounded focus:ring-2 focus:ring-[#034833] focus:border-transparent"
                        />
                        <button
                          type="button"
                          onClick={() => {
                            const base = stripSize(university.name);
                            applyBoldAtSelection(`uni-name-${index}`, base, (inner) => {
                              updateUniversity(index, 'name', applySize(inner, extractSize(university.name)));
                            });
                          }}
                          className="mt-1 px-2 py-1 text-xs border rounded hover:bg-gray-50"
                        >
                          Bold
                        </button>
                      </>
                    )}
                  </div>
                  {!isText && (
                    <div>
                      <input
                        type="text"
                        value={university.rank}
                        onChange={(e) => updateUniversity(index, 'rank', e.target.value)}
                        placeholder="#1"
                        className="w-full p-2 border rounded focus:ring-2 focus:ring-[#034833] focus:border-transparent"
                      />
                    </div>
                  )}
                </div>

                <div className="flex flex-col gap-1">
                  <button
                    onClick={() => moveUniversity(index, 'up')}
                    disabled={index === 0}
                    className="p-1 text-gray-400 hover:text-gray-600 disabled:opacity-30"
                  >
                    ↑
                  </button>
                  <button
                    onClick={() => moveUniversity(index, 'down')}
                    disabled={index === data.length - 1}
                    className="p-1 text-gray-400 hover:text-gray-600 disabled:opacity-30"
                  >
                    ↓
                  </button>
                  <button
                    onClick={() => removeUniversity(index)}
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
          No universities added yet. Click "Add University" to start.
        </div>
      )}
    </div>
  );
};

export default UniversitiesEditor;
