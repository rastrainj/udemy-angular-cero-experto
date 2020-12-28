import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { YoutubeResponse } from '../models/youtube.models';

@Injectable({
  providedIn: 'root',
})
export class YoutubeService {
  private youtubeUrl = 'https://www.googleapis.com/youtube/v3';
  private apiKey = 'AIzaSyBbK25Ga3YryhimUuZrOMyPDDU_t44rbwM';
  private playlist = 'UUuaPTYj15JSkETGnEseaFFg';
  private nextPageToken = '';
  constructor(private http: HttpClient) {}

  getVideos() {
    const url = `${this.youtubeUrl}/playlistItems`;
    const params = new HttpParams()
      .set('part', 'snippet')
      .set('maxResults', '10')
      .set('playlistId', this.playlist)
      .set('key', this.apiKey);
    return this.http
      .get<YoutubeResponse>(url, { params })
      .pipe(
        map((response) => {
          this.nextPageToken = response.nextPageToken;
          return response.items;
        }),
        map((items) => items.map((video) => video.snippet))
      );
  }
}
