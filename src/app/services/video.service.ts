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
      'PLUeVBUUlLlK9MSL5jtKHRD90tgZdyNBQ9', // Sunnah audios Fundamentos de la Creencia de Ahlus-Sunnah wal-Yama'ah
      'PLUeVBUUlLlK_FbooN9ZEyxUnVP1hRlbpC&si=n6dke_55rP267jyy', // Sunnah audios Los Cuatro Principios
      'PLUeVBUUlLlK8PgEeZyekMcp-MlalZKdEk&si=eQPR1jEIyXAELQlf', // Sunnah audios  Las Condiciones de la Oración, sus Pilares y sus Obligaciones
      'PLfjw44efNv1wBbNmRC7qBsCKAJ8AoK8hQ&si=xrz6k0oZYKTXPVOu', // MPUBS Los Invalidantes del Islam
      'PL88r_AV4EpklGSKC4EZ6n56Z5EaU7KGHH&si=XYawglktYZLtRTOd', // Salafiyyah Colombia Todos
      'PLUeVBUUlLlK8pkigYJqQKo1Nq-RaDexrJ&si=3PYKasDc1bge_R6n', // Sunnah Audios Los Invalidantes del Islam
      'PLX50sh_ZbgpqT70j8tWjp_VMheTfHZtsU&si=T_bl_rZcuJB1MuZP', // Manhaj al-Salaf Mujer
      'PLoB1iIfGWtBJbwSuNAGGgbj_eVqP8NnjO&si=nQyRJ846vLpQb-Se', // Kitab Wa sunnah TOdos
    ];
    let playListItemUrl = `https://www.googleapis.com/youtube/v3/playlistItems?key=${this.youtubeKey}&part=snippet,contentDetails&maxResults=50`;

    const observables: Observable<any>[] = playlist.map(id => {
      return this.http.get(`${playListItemUrl}&playlistId=${id}`);
    });

    return forkJoin(observables);
  }
}
