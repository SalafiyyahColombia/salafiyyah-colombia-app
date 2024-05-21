import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {forkJoin, Observable} from "rxjs";
import {environment} from "../../environments/environment.development";

@Injectable({
  providedIn: 'root'
})
export class VideoService {
  http: HttpClient = inject(HttpClient);
  youtubeKey: string = environment.googleApiKey;
  constructor() {
  }

  getPlaylist() {
    const playlist = [
      'PLUeVBUUlLlK9MSL5jtKHRD90tgZdyNBQ9',
      'PLUeVBUUlLlK_FbooN9ZEyxUnVP1hRlbpC&si=n6dke_55rP267jyy',
      'PLUeVBUUlLlK8PgEeZyekMcp-MlalZKdEk&si=eQPR1jEIyXAELQlf',
      'PLfjw44efNv1wBbNmRC7qBsCKAJ8AoK8hQ&si=xrz6k0oZYKTXPVOu',
      'PL88r_AV4EpklgjniNijIAwf-NwU3WJAMQ&si=CZgkw7EnfqhHXQPS',
      'PLUeVBUUlLlK8pkigYJqQKo1Nq-RaDexrJ&si=3PYKasDc1bge_R6n',
      'PL88r_AV4Epknyllz6t7yTkVGmlILzh8jx&si=_51LvjU9tKXqq1t7',
      'PLX50sh_ZbgprKi9UR5a3cVyVQanHxHpo_&si=sVF6gcVuR2rX_BlD',
      'PLX50sh_ZbgpqT70j8tWjp_VMheTfHZtsU&si=Pu4NwqKoXLs3dhPn',
      'PLoB1iIfGWtBIZJZWm2uBYdwKeOIzOD2OD&si=7ZimPf_NTLKyyUgd',
    ];
    let playListItemUrl = `https://www.googleapis.com/youtube/v3/playlistItems?key=${this.youtubeKey}&part=snippet,contentDetails&maxResults=50`;

    const observables: Observable<any>[] = playlist.map(id => {
      return this.http.get(`${playListItemUrl}&playlistId=${id}`);
    });

    return forkJoin(observables);
  }
}
