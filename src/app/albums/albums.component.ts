import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {
player = false;
audio = new Audio();

  constructor() { }

  ngOnInit(): void {
  }
playSound(){
let audio1 = this.audio;
audio1.src ="../assets/cat.mp3";
audio1.load();
this.player = true;
if(this.player == true){
  audio1.play();
}
}
stopSound(){
  let audio2 =  this.audio;
  audio2.src ="../assets/cat.mp3";
  audio2.load();
  this.player = false;
  if(this.player == false){
    audio2.pause();
  }
}
}
