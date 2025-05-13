declare module 'qr-code-styling' {
  export interface QRCodeStylingOptions {
    width?: number;
    height?: number;
    data?: string;
    margin?: number;
    qrOptions?: {
      typeNumber?: number;
      mode?: string;
      errorCorrectionLevel?: string;
    };
    imageOptions?: {
      hideBackgroundDots?: boolean;
      imageSize?: number;
      margin?: number;
      src?: string;
    };
    dotsOptions?: {
      type?: string;
      color?: string;
    };
    backgroundOptions?: {
      color?: string;
    };
    cornersSquareOptions?: {
      type?: string;
      color?: string;
    };
    cornersDotOptions?: {
      type?: string;
      color?: string;
    };
  }

  export interface DownloadOptions {
    extension?: string;
    name?: string;
  }

  export default class QRCodeStyling {
    constructor(options: QRCodeStylingOptions);
    append(element: HTMLElement): void;
    update(options: Partial<QRCodeStylingOptions>): void;
    download(options?: DownloadOptions): void;
  }
}