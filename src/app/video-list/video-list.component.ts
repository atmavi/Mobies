import { Component, OnInit } from '@angular/core';
import { VideoService } from '../services/video.service';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css']
})
export class VideoListComponent implements OnInit {
  response: any;
  posts: any;
  isSelectedCard = false;

  constructor(private videoService: VideoService) { }

  ngOnInit() {
    this.videoService.getPosts('http://www.omdbapi.com/?s=home&apikey=thewdb')
      .subscribe(response => {
        this.response = response; // for some reason "Search" field of response cant be accessed directly.
        this.posts = this.response.Search;
      });
  }

  toggleSelect() {
    this.isSelectedCard = !this.isSelectedCard;
  }

}
