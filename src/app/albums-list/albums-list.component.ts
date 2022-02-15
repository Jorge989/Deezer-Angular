import { Component, OnInit } from '@angular/core';
import { AlbumService } from 'src/service/album.service';
@Component({
  selector: 'app-albums-list',
  templateUrl: './albums-list.component.html',
  styleUrls: ['./albums-list.component.css']
})
export class AlbumsListComponent  {

  constructor( public albumService:AlbumService) { }



}
