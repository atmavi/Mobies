import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class VideoService {

  constructor(private http: HttpClient) { }
  getPosts(url: string) {
    return this.http.get(url);
  }
}
