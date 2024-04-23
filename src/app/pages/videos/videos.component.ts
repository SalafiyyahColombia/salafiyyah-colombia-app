import {Component, inject} from '@angular/core';
import {VideoService} from "../../services/video.service";
import {YoutubePlaylistInterface} from "../../Interfaces/youtube-playlist.interface";

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.scss']
})
export class VideosComponent {
  categories: string[] = [
    'Conceptos básicos',
    'Creencia',
    'Metodología',
    'Corán',
    'Hadith',
    'Adoración',
    'Búsqueda del conocimiento',
    'Suavizantes del corazón',
    'Dawa',
    'Sociedad y cultura',
    'Biografías',
    'Mujeres',
    'Matrimonio',
    'Niños',
    'Refutación'
  ];
  videoService: VideoService = inject(VideoService);
  playlists: YoutubePlaylistInterface[] = [];

  constructor() {

    this.videoService.getPlaylist().subscribe((data => {
      console.log(data)
      this.playlists = data;
    }))
  }

  onButtonClick(id: string) {
    let url = `https://www.youtube.com/watch?v=${id}`
    window.open(url, "_blank");
  }
}
