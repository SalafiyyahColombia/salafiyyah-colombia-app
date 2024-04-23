import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {forkJoin, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class VideoService {
  http: HttpClient = inject(HttpClient);
  youtubeKey: string = environment.youtubeKey;
  constructor() {
  }

  getPlaylist() {
    const playlist = [
      'PLUeVBUUlLlK9MSL5jtKHRD90tgZdyNBQ9',
      'PLUeVBUUlLlK_FbooN9ZEyxUnVP1hRlbpC&si=n6dke_55rP267jyy',
      'PLUeVBUUlLlK8PgEeZyekMcp-MlalZKdEk&si=eQPR1jEIyXAELQlf',
      'PLUeVBUUlLlK8pkigYJqQKo1Nq-RaDexrJ&si=3PYKasDc1bge_R6n',
      'PLUeVBUUlLlK98tEohnk7neXvi0-NKxkmr&si=h145Ue9eXd6Q-g0V',
    ];
    let playListItemUrl = `https://www.googleapis.com/youtube/v3/playlistItems?key=${this.youtubeKey}&part=snippet,contentDetails&maxResults=50`;

    const observables: Observable<any>[] = playlist.map(id => {
      return this.http.get(`${playListItemUrl}&playlistId=${id}`);
    });

    return forkJoin(observables);
  }
}
