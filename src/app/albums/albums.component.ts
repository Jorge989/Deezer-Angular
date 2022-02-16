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
  playSound11(id:number) {
    this.id = id;
    let audio1 = this.audio;
    audio1.src = '../assets/cbjr.mp3';
    audio1.load();
    this.player = true;
    if (this.player == true) {
      audio1.play();
    }
  }
  stopSound11(id:number) {
    this.id = id;
    let audio2 = this.audio;
    audio2.src = '../assets/cbjr.mp3';
    audio2.load();
    this.player = false;
    if (this.player == false) {
      audio2.pause();
    }
  }
  playSound12(id:number) {
    this.id = id;
    let audio1 = this.audio;
    audio1.src = '../assets/os-baroes-da-pisadinha.mp3';
    audio1.load();
    this.player = true;
    if (this.player == true) {
      audio1.play();
    }
  }
  stopSound12(id:number) {
    this.id = id;
    let audio2 = this.audio;
    audio2.src = '../assets/os-baroes-da-pisadinha.mp3';
    audio2.load();
    this.player = false;
    if (this.player == false) {
      audio2.pause();
    }
  }
  playSound13(id:number) {
    this.id = id;
    let audio1 = this.audio;
    audio1.src = '../assets/ferrugem.mp3';
    audio1.load();
    this.player = true;
    if (this.player == true) {
      audio1.play();
    }
  }
  stopSound13(id:number) {
    this.id = id;
    let audio2 = this.audio;
    audio2.src = '../assets/ferrugem.mp3';
    audio2.load();
    this.player = false;
    if (this.player == false) {
      audio2.pause();
    }
  }
  playSound14(id:number) {
    this.id = id;
    let audio1 = this.audio;
    audio1.src = '../assets/ed-sheeran.mp3';
    audio1.load();
    this.player = true;
    if (this.player == true) {
      audio1.play();
    }
  }
  stopSound14(id:number) {
    this.id = id;
    let audio2 = this.audio;
    audio2.src = '../assets/ed-sheeran.mp3';
    audio2.load();
    this.player = false;
    if (this.player == false) {
      audio2.pause();
    }
  }
  playSound15(id:number) {
    this.id = id;
    let audio1 = this.audio;
    audio1.src = '../assets/anitta.mp3';
    audio1.load();
    this.player = true;
    if (this.player == true) {
      audio1.play();
    }
  }
  stopSound15(id:number) {
    this.id = id;
    let audio2 = this.audio;
    audio2.src = '../assets/anitta.mp3';
    audio2.load();
    this.player = false;
    if (this.player == false) {
      audio2.pause();
    }
  }
  playSound16(id:number) {
    this.id = id;
    let audio1 = this.audio;
    audio1.src = '../assets/xamã.mp3';
    audio1.load();
    this.player = true;
    if (this.player == true) {
      audio1.play();
    }
  }
  stopSound16(id:number) {
    this.id = id;
    let audio2 = this.audio;
    audio2.src = '../assets/xamã.mp3';
    audio2.load();
    this.player = false;
    if (this.player == false) {
      audio2.pause();
    }
  }
  playSound17(id:number) {
    this.id = id;
    let audio1 = this.audio;
    audio1.src = '../assets/linkin-park.mp3';
    audio1.load();
    this.player = true;
    if (this.player == true) {
      audio1.play();
    }
  }
  stopSound17(id:number) {
    this.id = id;
    let audio2 = this.audio;
    audio2.src = '../assets/linkin-park.mp3';
    audio2.load();
    this.player = false;
    if (this.player == false) {
      audio2.pause();
    }
  }
  playSound18(id:number) {
    this.id = id;
    let audio1 = this.audio;
    audio1.src = '../assets/vintage-culture.mp3';
    audio1.load();
    this.player = true;
    if (this.player == true) {
      audio1.play();
    }
  }
  stopSound18(id:number) {
    this.id = id;
    let audio2 = this.audio;
    audio2.src = '../assets/vintage-culture.mp3';
    audio2.load();
    this.player = false;
    if (this.player == false) {
      audio2.pause();
    }
  }
  playSound19(id:number) {
    this.id = id;
    let audio1 = this.audio;
    audio1.src = '../assets/akon.mp3';
    audio1.load();
    this.player = true;
    if (this.player == true) {
      audio1.play();
    }
  }
  stopSound19(id:number) {
    this.id = id;
    let audio2 = this.audio;
    audio2.src = '../assets/akon.mp3';
    audio2.load();
    this.player = false;
    if (this.player == false) {
      audio2.pause();
    }
  }
  playSound20(id:number) {
    this.id = id;
    let audio1 = this.audio;
    audio1.src = '../assets/legiao-urbana.mp3';
    audio1.load();
    this.player = true;
    if (this.player == true) {
      audio1.play();
    }
  }
  stopSound20(id:number) {
    this.id = id;
    let audio2 = this.audio;
    audio2.src = '../assets/legiao-urbana.mp3';
    audio2.load();
    this.player = false;
    if (this.player == false) {
      audio2.pause();
    }
  }
  playSound21(id:number) {
    this.id = id;
    let audio1 = this.audio;
    audio1.src = '../assets/system-of-a-down.mp3';
    audio1.load();
    this.player = true;
    if (this.player == true) {
      audio1.play();
    }
  }
  stopSound21(id:number) {
    this.id = id;
    let audio2 = this.audio;
    audio2.src = '../assets/system-of-a-down.mp3';
    audio2.load();
    this.player = false;
    if (this.player == false) {
      audio2.pause();
    }
  }
  playSound22(id:number) {
    this.id = id;
    let audio1 = this.audio;
    audio1.src = '../assets/daft-punk.mp3';
    audio1.load();
    this.player = true;
    if (this.player == true) {
      audio1.play();
    }
  }
  stopSound22(id:number) {
    this.id = id;
    let audio2 = this.audio;
    audio2.src = '../assets/daft-punk.mp3';
    audio2.load();
    this.player = false;
    if (this.player == false) {
      audio2.pause();
    }
  }
  playSound23(id:number) {
    this.id = id;
    let audio1 = this.audio;
    audio1.src = '../assets/neelix.mp3';
    audio1.load();
    this.player = true;
    if (this.player == true) {
      audio1.play();
    }
  }
  stopSound23(id:number) {
    this.id = id;
    let audio2 = this.audio;
    audio2.src = '../assets/neelix.mp3';
    audio2.load();
    this.player = false;
    if (this.player == false) {
      audio2.pause();
    }
  }
  playSound24(id:number) {
    this.id = id;
    let audio1 = this.audio;
    audio1.src = '../assets/red-hot-chilli-peppers.mp3';
    audio1.load();
    this.player = true;
    if (this.player == true) {
      audio1.play();
    }
  }
  stopSound24(id:number) {
    this.id = id;
    let audio2 = this.audio;
    audio2.src = '../assets/red-hot-chilli-peppers.mp3';
    audio2.load();
    this.player = false;
    if (this.player == false) {
      audio2.pause();
    }
  }
  }
