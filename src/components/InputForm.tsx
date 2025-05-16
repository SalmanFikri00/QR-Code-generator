import React from 'react';

interface InputFormProps {
  value: string;
  onChange: (value: string) => void;
}

const InputForm: React.FC<InputFormProps> = ({ value, onChange }) => {
  return (
    <div className="w-full mb-8">
      <label htmlFor="qr-input" className="block text-lg font-medium text-gray-200 mb-3">
        Masukkan URL atau Teks
      </label>
      <div className="relative">
        <input
          id="qr-input"
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="https://example.com atau teks apa saja..."
          className="w-full px-5 py-4 bg-gray-700 bg-opacity-50 backdrop-blur-sm border border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 text-white placeholder-gray-400 transition-all shadow-inner"
        />
      </div>
    </div>
  );
};

export default InputForm;