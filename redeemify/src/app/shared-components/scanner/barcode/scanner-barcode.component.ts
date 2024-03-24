import { Component } from '@angular/core';
import * as JsBarcode from 'jsbarcode';

@Component({
  selector: 'app-scanner-barcode',
  templateUrl: './scanner-barcode.component.html',
  styleUrls: ['./scanner-barcode.component.scss']
})
export class ScannerBarcodeComponent {

  constructor() { }

  generateBarcode(): void {
    const barcodeInput = (document.getElementById('barcodeInput') as HTMLInputElement).value.trim();
    if (barcodeInput === '') {
      alert('Please enter a value for the barcode.');
      return;
    }

    const svgElement = document.getElementById('barcode');
    if (!svgElement) {
      console.error('SVG element not found.');
      return;
    }

    // Clear previous barcode, if any
    svgElement.innerHTML = '';

    // Generate barcode
    JsBarcode(svgElement, barcodeInput, {
      format: 'CODE128',
      displayValue: true
    });
  }

}
