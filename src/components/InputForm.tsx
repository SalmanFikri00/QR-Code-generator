import React from 'react';

interface InputFormProps {
  value: string;
  onChange: (value: string) => void;
}

const InputForm: React.FC<InputFormProps> = ({ value, onChange }) => {
  return (
    <div className="w-full mb-8">
      <label htmlFor="qr-input" className="block text-lg font-medium text-white mb-3">
        Masukkan URL atau Teks
      </label>
      <div className="relative">
        <input
          id="qr-input"
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="https://example.com atau teks apa saja..."
          className="w-full px-5 py-4 bg-white bg-opacity-20 backdrop-blur-sm border border-white border-opacity-30 rounded-xl focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 text-white placeholder-white placeholder-opacity-70 transition-all shadow-inner"
        />
      </div>
    </div>
  );
};

export default InputForm;