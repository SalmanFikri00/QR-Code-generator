import React from 'react';

interface QRCustomizerProps {
  options: {
    dotsOptions: {
      color: string;
      type: string;
    };
    backgroundOptions: {
      color: string;
    };
    cornersSquareOptions: {
      type: string;
    };
    cornersDotOptions: {
      type: string;
    };
  };
  setOptions: (options: any) => void;
}

const QRCustomizer: React.FC<QRCustomizerProps> = ({ options, setOptions }) => {
  const dotTypes = ['square', 'dots', 'rounded', 'classy', 'classy-rounded', 'extra-rounded'];
  const cornerSquareTypes = ['square', 'dot', 'extra-rounded'];
  const cornerDotTypes = ['square', 'dot'];

  const updateOptions = (key: string, subKey: string, value: string) => {
    setOptions({
      ...options,
      [key]: {
        ...options[key as keyof typeof options],
        [subKey]: value
      }
    });
  };

  const setTransparentBackground = () => {
    setOptions({
      ...options,
      backgroundOptions: {
        ...options.backgroundOptions,
        color: 'rgba(0, 0, 0, 0)'
      }
    });
  };

  return (
    <div className="backdrop-blur-sm bg-gray-800 bg-opacity-50 p-6 rounded-xl border border-gray-700 shadow-lg">
      <h3 className="text-xl font-medium mb-5 text-gray-200">Kustomisasi QR Code</h3>
      
      <div className="grid grid-cols-1 gap-5">
        {/* Warna Dot */}
        <div className="bg-gray-700 bg-opacity-50 p-4 rounded-lg">
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Warna QR Code
          </label>
          <input
            type="color"
            value={options.dotsOptions.color}
            onChange={(e) => updateOptions('dotsOptions', 'color', e.target.value)}
            className="w-full h-10 rounded-lg cursor-pointer bg-gray-800"
          />
        </div>

        {/* Warna Background */}
        <div className="bg-gray-700 bg-opacity-50 p-4 rounded-lg">
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Warna Background
          </label>
          <div className="flex items-center space-x-3">
            <input
              type="color"
              value={options.backgroundOptions.color === 'rgba(0, 0, 0, 0)' ? '#1f2937' : options.backgroundOptions.color}
              onChange={(e) => updateOptions('backgroundOptions', 'color', e.target.value)}
              className="w-full h-10 rounded-lg cursor-pointer bg-gray-800"
            />
            <button 
              onClick={setTransparentBackground}
              className="px-3 py-2 bg-gray-600 hover:bg-gray-500 rounded-lg text-gray-200 text-sm transition-all"
            >
              Transparan
            </button>
          </div>
        </div>

        {/* Bentuk Dot */}
        <div className="bg-gray-700 bg-opacity-50 p-4 rounded-lg">
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Bentuk Dot
          </label>
          <select
            value={options.dotsOptions.type}
            onChange={(e) => updateOptions('dotsOptions', 'type', e.target.value)}
            className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-200"
          >
            {dotTypes.map((type) => (
              <option key={type} value={type} className="bg-gray-800 text-gray-200">
                {type.charAt(0).toUpperCase() + type.slice(1)}
              </option>
            ))}
          </select>
        </div>

        {/* Bentuk Corner Square */}
        <div className="bg-gray-700 bg-opacity-50 p-4 rounded-lg">
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Bentuk Sudut
          </label>
          <select
            value={options.cornersSquareOptions.type}
            onChange={(e) => updateOptions('cornersSquareOptions', 'type', e.target.value)}
            className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-200"
          >
            {cornerSquareTypes.map((type) => (
              <option key={type} value={type} className="bg-gray-800 text-gray-200">
                {type.charAt(0).toUpperCase() + type.slice(1)}
              </option>
            ))}
          </select>
        </div>

        {/* Bentuk Corner Dot */}
        <div className="bg-gray-700 bg-opacity-50 p-4 rounded-lg">
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Bentuk Titik Sudut
          </label>
          <select
            value={options.cornersDotOptions.type}
            onChange={(e) => updateOptions('cornersDotOptions', 'type', e.target.value)}
            className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-200"
          >
            {cornerDotTypes.map((type) => (
              <option key={type} value={type} className="bg-gray-800 text-gray-200">
                {type.charAt(0).toUpperCase() + type.slice(1)}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default QRCustomizer;