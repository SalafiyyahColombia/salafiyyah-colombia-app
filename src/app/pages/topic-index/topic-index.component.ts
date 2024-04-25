import {Component, inject} from '@angular/core';
import { MatChipSelectionChange} from "@angular/material/chips";
import {BloggerService} from "../../services/blogger.service";
import {BloggerResponseInterface, Item} from "../../Interfaces/blogger-response.interface";
import {concatMap, filter, Observable, takeWhile, tap} from "rxjs";

@Component({
  selector: 'app-topic-index',
  templateUrl: './topic-index.component.html',
  styleUrls: ['./topic-index.component.scss']
})
export class TopicIndexComponent {
  bloggerService: BloggerService = inject(BloggerService);
  postList: Array<Item> = [];
  filteredPostList: Array<Item> = [];
  searchText: string = '';
  timer: any;
  categories: string[] = [
    'Conceptos básicos',
    'Creencia',
    'Metodología',
    'Corán',
    'Hadith',
    'Adoración',
    'Búsqueda del conocimiento',
    'Suavizantes del corazón',
    'Dawah',
    'Sociedad y cultura',
    'Biografías',
    'Mujeres',
    'Matrimonio',
    'Niños',
    'Refutación'
  ];

  constructor() {
    this.getAllBlogData();
  }

  // @ts-ignore
  getAllBlogData(pageToken?: string ): Observable<any> {
    this.bloggerService.getBlogData(pageToken).pipe(
      tap((response: BloggerResponseInterface) => {
        this.postList = this.postList.concat(response.items);
        this.filteredPostList = this.filteredPostList.concat(response.items);
      }),
      filter((response: BloggerResponseInterface) => !!response.nextPageToken), // Check if there is a nextPageToken
      concatMap((response: BloggerResponseInterface) => this.getAllBlogData(response.nextPageToken)), // Recursively fetch next page
      takeWhile((response: BloggerResponseInterface) => !!response.nextPageToken, true) // Ensure termination when nextPageToken is null
    ).subscribe();
  }

  onChipClick(event: MatChipSelectionChange): void {
    const value = event.source.value;
    if (event.selected) {
      this.filteredPostList =
        this.postList.filter(
          (el: Item) => el.labels?.some(
            (label: string) => label
              .toLowerCase()
              .replace(/\s/g, '') === value
              .toLowerCase()
              .replace(/\s/g, '')));
    } else {
      this.filteredPostList = this.postList;
    }
  }

  onCardClick(url: string): void {
    window.open(url, "_blank");
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
      this.filteredPostList = this.postList;
      return;
    }

    this.filteredPostList = this.postList.filter(item =>
      item.title.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }
}
