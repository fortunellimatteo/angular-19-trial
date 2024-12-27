import { Component } from '@angular/core';
import { BarcodeFormat } from '@zxing/library';
import { ZXingScannerModule } from '@zxing/ngx-scanner';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { TopMenuComponent } from "../top-menu/top-menu.component";

@Component({
  selector: 'app-scanner',
  imports: [CommonModule, CardModule, ButtonModule, ZXingScannerModule, TopMenuComponent],
  templateUrl: './scanner.component.html',
  styleUrl: './scanner.component.css'
})
export class ScannerComponent {
  allowedFormats = [ BarcodeFormat.QR_CODE, BarcodeFormat.EAN_13, BarcodeFormat.CODE_128, BarcodeFormat.DATA_MATRIX];

  scannedResult: string | null = null;
  selectedDevice: MediaDeviceInfo | null = null;

  // Funzione per gestire il risultato della scansione
  handleScanResult(result: string) {
    this.scannedResult = result;
    console.log('Scanned Result:', result);
  }

  // Funzione per gestire errori di scansione
  handleScanError(error: any) {
    console.log('Scan Error:', error);
  }

  // Funzione per selezionare la fotocamera
  onDevicesFound(devices: MediaDeviceInfo[]) {
    this.selectedDevice = devices[0];  // Seleziona la prima fotocamera disponibile
  }
}
