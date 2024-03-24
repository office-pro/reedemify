import { Component, OnInit } from '@angular/core';
import * as QRCode from 'qrcode';

@Component({
  selector: 'app-scanner-qr',
  templateUrl: './scanner-qr.component.html',
  styleUrls: ['./scanner-qr.component.scss'],
})
export class ScannerQrComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    
  }

  // Function to generate QR code
  async generateQRCode(): Promise<void> {
    const textInput = (document.getElementById('textInput') as HTMLInputElement).value.trim();
    if (textInput === '') {
      alert('Please enter some text or a URL.');
      return;
    }

    const qrCodeContainer = document.getElementById('qrCodeContainer');
    if (!qrCodeContainer) return;

    qrCodeContainer.innerHTML = ''; // Clear previous QR code, if any

    const dataToEncode = this.isURL(textInput) ? textInput : `TEXT:${textInput}`;
    try {
      const qrCodeDataURL = await QRCode.toDataURL(dataToEncode);
      const qrCodeImg = document.createElement('img');
      qrCodeImg.src = qrCodeDataURL;
      qrCodeContainer.appendChild(qrCodeImg);
    } catch (err) {
      console.error("Error generating QR code:", err);
      alert('Error generating QR code. Please try again.');
    }
  }

  // Function to check if provided string is a URL
  private isURL(str: string): boolean {
    const pattern = new RegExp('^(https?:\\/\\/)?' +
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' +
      '((\\d{1,3}\\.){3}\\d{1,3}))' +
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' +
      '(\\?[;&a-z\\d%_.~+=-]*)?' +
      '(\\#[-a-z\\d_]*)?$', 'i');

    return !!pattern.test(str);
  }
  
}
