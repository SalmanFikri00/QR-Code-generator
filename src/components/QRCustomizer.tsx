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
    <div className="backdrop-blur-sm bg-white bg-opacity-10 p-6 rounded-xl border border-white border-opacity-30 shadow-lg">
      <h3 className="text-xl font-medium mb-5 text-white">Kustomisasi QR Code</h3>
      
      <div className="grid grid-cols-1 gap-5">
        {/* Warna Dot */}
        <div className="bg-white bg-opacity-10 p-4 rounded-lg">
          <label className="block text-sm font-medium text-white mb-2">
            Warna QR Code
          </label>
          <input
            type="color"
            value={options.dotsOptions.color}
            onChange={(e) => updateOptions('dotsOptions', 'color', e.target.value)}
            className="w-full h-10 rounded-lg cursor-pointer"
          />
        </div>

        {/* Warna Background */}
        <div className="bg-white bg-opacity-10 p-4 rounded-lg">
          <label className="block text-sm font-medium text-white mb-2">
            Warna Background
          </label>
          <div className="flex items-center space-x-3">
            <input
              type="color"
              value={options.backgroundOptions.color === 'rgba(0, 0, 0, 0)' ? '#ffffff' : options.backgroundOptions.color}
              onChange={(e) => updateOptions('backgroundOptions', 'color', e.target.value)}
              className="w-full h-10 rounded-lg cursor-pointer"
            />
            <button 
              onClick={setTransparentBackground}
              className="px-3 py-2 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-lg text-white text-sm transition-all"
            >
              Transparan
            </button>
          </div>
        </div>

        {/* Bentuk Dot */}
        <div className="bg-white bg-opacity-10 p-4 rounded-lg">
          <label className="block text-sm font-medium text-white mb-2">
            Bentuk Dot
          </label>
          <select
            value={options.dotsOptions.type}
            onChange={(e) => updateOptions('dotsOptions', 'type', e.target.value)}
            className="w-full px-3 py-2 bg-white bg-opacity-20 border border-white border-opacity-30 rounded-lg focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 text-white"
          >
            {dotTypes.map((type) => (
              <option key={type} value={type} className="bg-indigo-800 text-white">
                {type.charAt(0).toUpperCase() + type.slice(1)}
              </option>
            ))}
          </select>
        </div>

        {/* Bentuk Corner Square */}
        <div className="bg-white bg-opacity-10 p-4 rounded-lg">
          <label className="block text-sm font-medium text-white mb-2">
            Bentuk Sudut
          </label>
          <select
            value={options.cornersSquareOptions.type}
            onChange={(e) => updateOptions('cornersSquareOptions', 'type', e.target.value)}
            className="w-full px-3 py-2 bg-white bg-opacity-20 border border-white border-opacity-30 rounded-lg focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 text-white"
          >
            {cornerSquareTypes.map((type) => (
              <option key={type} value={type} className="bg-indigo-800 text-white">
                {type.charAt(0).toUpperCase() + type.slice(1)}
              </option>
            ))}
          </select>
        </div>

        {/* Bentuk Corner Dot */}
        <div className="bg-white bg-opacity-10 p-4 rounded-lg">
          <label className="block text-sm font-medium text-white mb-2">
            Bentuk Titik Sudut
          </label>
          <select
            value={options.cornersDotOptions.type}
            onChange={(e) => updateOptions('cornersDotOptions', 'type', e.target.value)}
            className="w-full px-3 py-2 bg-white bg-opacity-20 border border-white border-opacity-30 rounded-lg focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 text-white"
          >
            {cornerDotTypes.map((type) => (
              <option key={type} value={type} className="bg-indigo-800 text-white">
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