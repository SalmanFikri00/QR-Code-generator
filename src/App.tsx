import { useState, useRef, useEffect } from 'react';
import QRCodeStyling from 'qr-code-styling';
import './App.css';

// Import komponen
import InputForm from './components/InputForm';
import QRCodeDisplay from './components/QRCodeDisplay';
import QRCustomizer from './components/QRCustomizer';

function App() {
  const [inputValue, setInputValue] = useState('https://example.com');
  const [qrOptions, setQrOptions] = useState({
    width: 256,
    height: 256,
    data: 'https://example.com',
    margin: 5,
    qrOptions: {
      typeNumber: 0,
      mode: 'Byte',
      errorCorrectionLevel: 'Q'
    },
    imageOptions: {
      hideBackgroundDots: true,
      imageSize: 0.4,
      margin: 0
    },
    dotsOptions: {
      type: 'square',
      color: '#ffffff' // Warna QR code putih untuk dark mode
    },
    backgroundOptions: {
      color: 'rgba(0, 0, 0, 0)', // Background transparan sebagai default
    },
    cornersSquareOptions: {
      type: 'square',
    },
    cornersDotOptions: {
      type: 'square',
    },
  });

  const qrCodeRef = useRef<QRCodeStyling | null>(null);

  useEffect(() => {
    setQrOptions(prev => ({
      ...prev,
      data: inputValue
    }));
  }, [inputValue]);

  const downloadQR = () => {
    if (qrCodeRef.current) {
      qrCodeRef.current.download({
        extension: 'png',
        name: 'qr-code'
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-white mb-3 drop-shadow-lg">Generator QR Code</h1>
          <p className="text-gray-300 text-lg">Buat dan kustomisasi QR code Anda dengan mudah</p>
        </div>

        <div className="backdrop-blur-lg bg-gray-800 bg-opacity-40 rounded-2xl shadow-2xl overflow-hidden p-8 mb-8 border border-gray-700">
          <InputForm value={inputValue} onChange={setInputValue} />
          
          <div className="flex flex-col md:flex-row gap-10">
            <div className="flex-1">
              <QRCustomizer options={qrOptions} setOptions={setQrOptions} />
            </div>
            
            <div className="flex-1 flex justify-center items-start">
              <QRCodeDisplay 
                options={qrOptions} 
                downloadQR={downloadQR}
                qrCodeRef={qrCodeRef}
              />
            </div>
          </div>
        </div>
        
        <div className="text-center text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} QR Code Generator | Dibuat dengan React & Tailwind CSS
        </div>
      </div>
    </div>
  );
}

export default App;
