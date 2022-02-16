import { Component, OnInit } from '@angular/core';
import { faPlay, faPause } from '@fortawesome/free-solid-svg-icons';
import { HostListener } from "@angular/core";
@HostListener('window:scroll', ['$event'])
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
  marilha = false;
  id = 0;
  counter:any =0;
  teste=false;
  control1 =window.pageYOffset;
  control2 =document.querySelector('.container') as HTMLElement;
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

  playSound3(id:number) {
    this.id = id;
    let audio1 = this.audio;
    audio1.src = '../assets/gustavo-lima.mp3';
    audio1.load();
    this.player = true;
    if (this.player == true) {
      audio1.play();
    }
  }
  stopSound3(id:number) {
    this.id = id;
    let audio2 = this.audio;
    audio2.src = '../assets/gustavo-lima.mp3';
    audio2.load();
    this.player = false;
    if (this.player == false) {
      audio2.pause();
    }
  }
  playSound4(id:number) {
    this.id = id;
    let audio1 = this.audio;
    audio1.src = '../assets/joao-gomes.mp3';
    audio1.load();
    this.player = true;
    if (this.player == true) {
      audio1.play();
    }
  }
  stopSound4(id:number) {
    this.id = id;
    let audio2 = this.audio;
    audio2.src = '../assets/joao-gomes.mp3';
    audio2.load();
    this.player = false;
    if (this.player == false) {
      audio2.pause();
    }
  }
  playSound5(id:number) {
    this.id = id;
    let audio1 = this.audio;
    audio1.src = '../assets/ze-felipe.mp3';
    audio1.load();
    this.player = true;
    if (this.player == true) {
      audio1.play();
    }
  }
  stopSound5(id:number) {
    this.id = id;
    let audio2 = this.audio;
    audio2.src = '../assets/ze-felipe.mp3';
    audio2.load();
    this.player = false;
    if (this.player == false) {
      audio2.pause();
    }
  }
  playSound6(id:number) {
    this.id = id;
    let audio1 = this.audio;
    audio1.src = '../assets/gloria-groove.mp3';
    audio1.load();
    this.player = true;
    if (this.player == true) {
      audio1.play();
    }
  }
  stopSound6(id:number) {
    this.id = id;
    let audio2 = this.audio;
    audio2.src = '../assets/gloria-groove.mp3';
    audio2.load();
    this.player = false;
    if (this.player == false) {
      audio2.pause();
    }
  }
  playSound7(id:number) {
    this.id = id;
    let audio1 = this.audio;
    audio1.src = '../assets/renan.mp3';
    audio1.load();
    this.player = true;
    if (this.player == true) {
      audio1.play();
    }
  }
  stopSound7(id:number) {
    this.id = id;
    let audio2 = this.audio;
    audio2.src = '../assets/renan.mp3';
    audio2.load();
    this.player = false;
    if (this.player == false) {
      audio2.pause();
    }
  }
  playSound8(id:number) {
    this.id = id;
    let audio1 = this.audio;
    audio1.src = '../assets/ludmila.mp3';
    audio1.load();
    this.player = true;
    if (this.player == true) {
      audio1.play();
    }
  }
  stopSound8(id:number) {
    this.id = id;
    let audio2 = this.audio;
    audio2.src = '../assets/ludmila.mp3';
    audio2.load();
    this.player = false;
    if (this.player == false) {
      audio2.pause();
    }
  }
  playSound9(id:number) {
    this.id = id;
    let audio1 = this.audio;
    audio1.src = '../assets/dilsinho.mp3';
    audio1.load();
    this.player = true;
    if (this.player == true) {
      audio1.play();
    }
  }
  stopSound9(id:number) {
    this.id = id;
    let audio2 = this.audio;
    audio2.src = '../assets/dilsinho.mp3';
    audio2.load();
    this.player = false;
    if (this.player == false) {
      audio2.pause();
    }
  }
  playSound10(id:number) {
    this.id = id;
    let audio1 = this.audio;
    audio1.src = '../assets/alok.mp3';
    audio1.load();
    this.player = true;
    if (this.player == true) {
      audio1.play();
    }
  }
  stopSound10(id:number) {
    this.id = id;
    let audio2 = this.audio;
    audio2.src = '../assets/alok.mp3';
    audio2.load();
    this.player = false;
    if (this.player == false) {
      audio2.pause();
    }
  }
  }
