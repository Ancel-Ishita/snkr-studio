import React, { useState } from 'react';
import { Palette, Pencil, Box, Save } from 'lucide-react';

const MATERIALS = [
  { id: 'leather', name: 'Premium Leather', price: 2000 },
  { id: 'canvas', name: 'Canvas', price: 1000 },
  { id: 'suede', name: 'Suede', price: 1500 },
  { id: 'mesh', name: 'Breathable Mesh', price: 800 }
];

const COLORS = [
  { id: 'white', name: 'White', hex: '#FFFFFF' },
  { id: 'black', name: 'Black', hex: '#000000' },
  { id: 'red', name: 'Red', hex: '#FF0000' },
  { id: 'blue', name: 'Blue', hex: '#0000FF' },
  { id: 'green', name: 'Green', hex: '#00FF00' }
];

export function DesignStudio() {
  const [activeTab, setActiveTab] = useState<'sketch' | 'materials' | 'colors'>('sketch');
  const [selectedMaterial, setSelectedMaterial] = useState('');
  const [selectedColor, setSelectedColor] = useState('');

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">Design Studio</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Tools Panel */}
        <div className="lg:col-span-1">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
            <div className="flex mb-6 border-b dark:border-gray-700">
              <button
                className={`flex items-center px-4 py-2 border-b-2 ${
                  activeTab === 'sketch'
                    ? 'border-indigo-500 text-indigo-600 dark:text-indigo-400'
                    : 'border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400'
                }`}
                onClick={() => setActiveTab('sketch')}
              >
                <Pencil className="h-5 w-5 mr-2" />
                Sketch
              </button>
              <button
                className={`flex items-center px-4 py-2 border-b-2 ${
                  activeTab === 'materials'
                    ? 'border-indigo-500 text-indigo-600 dark:text-indigo-400'
                    : 'border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400'
                }`}
                onClick={() => setActiveTab('materials')}
              >
                <Box className="h-5 w-5 mr-2" />
                Materials
              </button>
              <button
                className={`flex items-center px-4 py-2 border-b-2 ${
                  activeTab === 'colors'
                    ? 'border-indigo-500 text-indigo-600 dark:text-indigo-400'
                    : 'border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400'
                }`}
                onClick={() => setActiveTab('colors')}
              >
                <Palette className="h-5 w-5 mr-2" />
                Colors
              </button>
            </div>

            {activeTab === 'sketch' && (
              <div className="space-y-4">
                <p className="text-gray-600 dark:text-gray-300">
                  Use the canvas to sketch your design. Click and drag to draw.
                </p>
                <div className="flex space-x-2">
                  <button className="px-4 py-2 bg-gray-100 dark:bg-gray-700 rounded-md">
                    Pencil
                  </button>
                  <button className="px-4 py-2 bg-gray-100 dark:bg-gray-700 rounded-md">
                    Eraser
                  </button>
                  <button className="px-4 py-2 bg-gray-100 dark:bg-gray-700 rounded-md">
                    Clear
                  </button>
                </div>
              </div>
            )}

            {activeTab === 'materials' && (
              <div className="space-y-4">
                {MATERIALS.map((material) => (
                  <label
                    key={material.id}
                    className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg cursor-pointer"
                  >
                    <div className="flex items-center">
                      <input
                        type="radio"
                        name="material"
                        value={material.id}
                        checked={selectedMaterial === material.id}
                        onChange={(e) => setSelectedMaterial(e.target.value)}
                        className="h-4 w-4 text-indigo-600"
                      />
                      <span className="ml-3 text-gray-900 dark:text-white">
                        {material.name}
                      </span>
                    </div>
                    <span className="text-gray-500 dark:text-gray-400">
                      ₹{material.price.toLocaleString('en-IN')}
                    </span>
                  </label>
                ))}
              </div>
            )}

            {activeTab === 'colors' && (
              <div className="grid grid-cols-2 gap-4">
                {COLORS.map((color) => (
                  <button
                    key={color.id}
                    onClick={() => setSelectedColor(color.id)}
                    className={`p-4 rounded-lg border-2 ${
                      selectedColor === color.id
                        ? 'border-indigo-500'
                        : 'border-transparent'
                    }`}
                  >
                    <div
                      className="w-full h-12 rounded-md mb-2"
                      style={{ backgroundColor: color.hex }}
                    />
                    <span className="text-sm text-gray-900 dark:text-white">
                      {color.name}
                    </span>
                  </button>
                ))}
              </div>
            )}
          </div>

          <button className="w-full mt-6 bg-indigo-600 text-white py-3 px-6 rounded-lg flex items-center justify-center font-semibold hover:bg-indigo-700">
            <Save className="h-5 w-5 mr-2" />
            Save Design
          </button>
        </div>

        {/* Preview Area */}
        <div className="lg:col-span-2">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 h-[600px] flex items-center justify-center">
            <div className="text-center text-gray-500 dark:text-gray-400">
              <p>3D Preview will be rendered here</p>
              <p className="text-sm mt-2">Interactive 3D model coming soon</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}