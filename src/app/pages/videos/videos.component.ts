import {Component, inject} from '@angular/core';
import {VideoService} from "../../services/video.service";
import {YoutubePlaylistInterface} from "../../Interfaces/youtube-playlist.interface";

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.scss']
})
export class VideosComponent {
  timer: any;
  searchText: string = '';
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
  filteredPlaylist: YoutubePlaylistInterface[] = [];

  constructor() {

    this.videoService.getPlaylist().subscribe((data => {
      this.playlists = data;
      this.filteredPlaylist = this.playlists;
    }))
  }

  onSearchInput(event: any): void {
    // Clear previous timeout
    clearTimeout(this.timer);

    // Get search text from input event
    this.searchText = event.target.value.trim();

    // Set a new timeout for debounce
    this.timer = setTimeout(() => {
      this.filterData();
    }, 300); // Adjust the delay
  }

  filterData(): void {
    if (!this.searchText) {
      this.filteredPlaylist = this.playlists;
      return;
    }
    this.filteredPlaylist = this.playlists.map((item: YoutubePlaylistInterface) => {
      return {
        ...item,
        items: item.items.filter(el => el.snippet.title.toLowerCase().includes(this.searchText.toLowerCase()))
      };
    }).filter(item => item.items.length > 0);
    console.log(this.filteredPlaylist)
  }

  onButtonClick(id: string) {
    let url = `https://www.youtube.com/watch?v=${id}`
    window.open(url, "_blank");
  }
}
