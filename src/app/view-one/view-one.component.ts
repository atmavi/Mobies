import { Component, OnInit } from '@angular/core';
import { VideoService } from '../services/video.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-one',
  templateUrl: './view-one.component.html',
  styleUrls: ['./view-one.component.css']
})
export class ViewOneComponent implements OnInit {
  id: string;
  item: any;
  url: string;

  constructor(private videoService: VideoService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap
      .subscribe(params => {
        this.id = params.get('id');
        this.url= `http://www.omdbapi.com/?i=${this.id}&apikey=thewdb`;
        console.log(this.id);
        console.log(this.url);
      });

    this.videoService.getPosts(this.url)
      .subscribe(res => {
        console.log(res);
        this.item = res;
      });
  }
}
