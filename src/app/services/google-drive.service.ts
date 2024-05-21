import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BloggerResponseInterface} from "../Interfaces/blogger-response.interface";
import {environment} from "../../environments/environment.development";

@Injectable({
  providedIn: 'root'
})
export class GoogleDriveService {
  httpClient: HttpClient = inject(HttpClient);
  private apiUrl: string = 'https://www.googleapis.com/drive/v3/files';
  private salafiyyahColombiaDriveId: string = 'AIzaSyBoyJhCVXVYlaaILXPLJLmx2sGL4-aoh6s';
  constructor() { }

  getGoogleDrivePdfs() {
    // https://drive.google.com/drive/folders/1VwTd5FTAttsqE31Za7hJtGUSlC-InSVZ?usp=drive_link
    // https://drive.google.com/drive/folders/1VwTd5FTAttsqE31Za7hJtGUSlC-InSVZ?usp=sharing
    const folderId = '16BsP0MfJhPe1WEekmYiTNYpZgBycV-Yc';
    let url = `${this.apiUrl}?q=${folderId}+in+parents&key=${environment.googleApiKey}`
    return this.httpClient.get<any>(url)
  }
}
