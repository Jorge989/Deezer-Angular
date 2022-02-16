import { Component, OnInit } from '@angular/core';
import { faBars} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  faHamburger = faBars;
  control = false
  active= ""
  constructor() { }

  ngOnInit(): void {
  }
  handleMenu(){

if(this.control ==  false){
  this.active = "active";
  this.control = true;
}else if(this.control = true){
  this.active = "";
  this.control = false;
}
  }
}

