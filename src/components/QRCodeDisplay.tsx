import React, { useRef, useEffect } from 'react';
import QRCodeStyling from 'qr-code-styling';

interface QRCodeDisplayProps {
  options: any;
  downloadQR: () => void;
  qrCodeRef: React.MutableRefObject<QRCodeStyling | null>;
}

const QRCodeDisplay: React.FC<QRCodeDisplayProps> = ({ options, downloadQR, qrCodeRef }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!qrCodeRef.current) {
      qrCodeRef.current = new QRCodeStyling(options);
      if (containerRef.current) {
        containerRef.current.innerHTML = '';
        qrCodeRef.current.append(containerRef.current);
      }
    } else {
      qrCodeRef.current.update(options);
    }
  }, [options, qrCodeRef]);

  return (
    <div className="flex flex-col items-center">
      <div className="backdrop-blur-sm bg-gray-800 bg-opacity-50 p-6 rounded-xl shadow-lg border border-gray-700 mb-6">
        <div 
          ref={containerRef} 
          className="w-64 h-64 flex items-center justify-center overflow-hidden animate-fade-in"
          style={{ background: 'rgba(30, 30, 30, 0.3)' }}
        />
      </div>
      <button
        onClick={downloadQR}
        className="px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full hover:from-purple-700 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 font-medium"
      >
        Unduh QR Code
      </button>
    </div>
  );
};

export default QRCodeDisplay;