import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class BloggerService {
  httpClient: HttpClient = inject(HttpClient);
  apiKey = environment.youtubeKey;
  constructor() { }

  getBlogData() {
    //942962238894202923 ?key=${this.apiKey}`
    let id = '942962238894202923';
    return this.httpClient.get(`https://www.googleapis.com/blogger/v3/blogs/942962238894202923/posts?key=${this.apiKey}`)
  }
}
