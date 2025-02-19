import { Component, OnInit } from '@angular/core';
import { EncryptionService } from '../../encryption.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-customer-details',
  imports: [CommonModule] ,
  standalone: true,
  templateUrl: './customer-details.component.html'
})
export class CustomerDetailsComponent  {
  // constructor(private encryptionService: EncryptionService) {}

  // ngOnInit(): void {
  //   this.testEncryption();
  // }

  // testEncryption() {
  //   const originalText = "Hello, this is a test!";
  //   const encryptedText = this.encryptionService.encryptData(originalText);
  //   console.log("🔒 Encrypted:", encryptedText);

  //   const decryptedText = this.encryptionService.decryptData(encryptedText);
  //   console.log("🔓 Decrypted:", decryptedText);
  // }
}
