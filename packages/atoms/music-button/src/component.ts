// import statements 
// system 
import { CustomElement, html, property } from "@papit/core";

// local 
import { style } from "./style";

export class MusicButton extends CustomElement {
  static style = style;

  song: HTMLAudioElement;
  @property({ 
    type: Boolean, 
    rerender: false,
    after: function(this:MusicButton, value: boolean) {
      if (value) {
        this.song.play();
      }
      else 
      {
        this.song.pause();
      }
    }
  }) play:boolean = false;

  constructor() {
    super();
    this.song = new Audio("sounds/theme.mp3");
    this.song.loop = true;
    this.addEventListener("click", this.handleclick);
  }

  handleclick = () => {
    this.play = !this.play;
  }

  render() {
    return html`
      <img class="play" src="images/music-play.png" alt="music play" />
      <img class="paused" src="images/music-pause.png" alt="music pause" />
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "music-button": MusicButton;
  }
}