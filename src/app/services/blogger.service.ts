import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {BloggerResponseInterface} from "../Interfaces/blogger-response.interface";

@Injectable({
  providedIn: 'root'
})
export class BloggerService {
  httpClient: HttpClient = inject(HttpClient);
  apiKey = environment.youtubeKey;
  private apiUrl: string = 'https://www.googleapis.com/blogger/v3/blogs';
  private salafiyyahColombiaBlogId: string = '942962238894202923';
  constructor() { }

  getBlogData(pageToken?: string): Observable<BloggerResponseInterface> {
    //942962238894202923 ?key=${this.apiKey}`
    let url = `${this.apiUrl}/${this.salafiyyahColombiaBlogId}/posts?maxResults=20&fetchBodies=false&fetchImages=true&key=${this.apiKey}`

    if (pageToken) {
      url += `&pageToken=${pageToken}`;
    }
    return this.httpClient.get<BloggerResponseInterface>(url)
  }
}
