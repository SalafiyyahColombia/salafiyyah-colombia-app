import {Component, inject} from '@angular/core';
import {GoogleDriveService} from "../../services/google-drive.service";

@Component({
  selector: 'app-pdf',
  templateUrl: './pdf.component.html',
  styleUrls: ['./pdf.component.scss']
})
export class PdfComponent {
  googleDriveService: GoogleDriveService = inject(GoogleDriveService)

  constructor() {
    this.googleDriveService.getGoogleDrivePdfs().subscribe(data => {
      console.log(data)
    })
  }
}
