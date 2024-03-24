import { Component } from '@angular/core';

@Component({
  selector: 'app-scanner-generator-home',
  templateUrl: './scanner-generator-home.component.html',
  styleUrls: ['./scanner-generator-home.component.scss']
})
export class ScannerGeneratorHomeComponent {
  isQRCodeVisible: boolean = false;
  isBarcodeVisible: boolean = false;

  generateQRCode(): void {
    this.isQRCodeVisible = true;
    this.isBarcodeVisible = false;
  }

  generateBarcode(): void {
    this.isQRCodeVisible = false;
    this.isBarcodeVisible = true;
  }
}
