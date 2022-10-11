import {Component, OnInit} from '@angular/core';
import {FormControl} from "@angular/forms";

interface ThemeColor {
  background: string;
  card: string;
  header: string;
  numbers: string;
  toggleBack: string;
  toggleBackImage: string;
  ballColor: string;
  cardClassHover: string;
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'social-media-dashboard';

  darkTheme: ThemeColor = {
    background: "hsl(230, 17%, 14%)",
    card: "hsl(228, 28%, 20%)",
    header: "hsl(232, 19%, 15%)",
    numbers: "hsl(0, 0%, 100%)",
    toggleBack: "hsl(210, 78%, 56%)",
    toggleBackImage: "linear-gradient(to right, hsl(210, 78%, 56%), hsl(146, 68%, 55%))",
    ballColor: "color-dark",
    cardClassHover: "dark"
  };
  whiteTheme: ThemeColor = {
    background: "hsl(0, 0%, 100%)",
    card: "hsl(227, 47%, 96%)",
    header: "hsl(225, 100%, 98%)",
    numbers: "hsl(230, 17%, 14%)",
    toggleBack: "hsl(230, 22%, 74%)",
    toggleBackImage: "none",
    ballColor: "color-white",
    cardClassHover: "white"
  };
  themeActive: ThemeColor;
  themeControl: FormControl = new FormControl();

  constructor() {
    this.themeActive = this.darkTheme;
  }


  ngOnInit(): void {
    this.themeControl.valueChanges.subscribe(action => {

      this.themeActive = !action ? this.darkTheme : this.whiteTheme;

    });
    this.themeControl.setValue(false);
  }

}
