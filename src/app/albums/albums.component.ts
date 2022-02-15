import { Component, OnInit } from '@angular/core';
import { faPlay, faPause } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css'],
})
export class AlbumsComponent implements OnInit {
  player = false;
  audio = new Audio();
  faPlay = faPlay;
  faPause = faPause;
  marilha = true;
  id = 0;
  constructor() {}

  ngOnInit(): void {}
  playSound(id: number) {
    console.log(id);
    this.id = id;
    let audio1 = this.audio;
    audio1.src = '../assets/marilha-bebi.mp3';
    audio1.load();
    this.player = true;
    if (this.player == true) {
      audio1.play();
    }
  }
  stopSound(id:number) {
    let audio2 = this.audio;
    this.id = id;
    audio2.src = '../assets/marilha-bebi.mp3';
    audio2.load();
    this.player = false;
    if (this.player == false) {
      audio2.pause();
    }
  }
  playSound2(id:number) {
    this.id = id;
    let audio1 = this.audio;
    audio1.src = '../assets/henrique-juliano.mp3';
    audio1.load();
    this.player = true;
    if (this.player == true) {
      audio1.play();
    }
  }
  stopSound2(id:number) {
    this.id = id;
    let audio2 = this.audio;
    audio2.src = '../assets/henrique-juliano.mp3';
    audio2.load();
    this.player = false;
    if (this.player == false) {
      audio2.pause();
    }
  }
}
