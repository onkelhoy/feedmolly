import{CustomElement as o}from"@papit/core";var e=":host{width:200px;height:80px;display:block;position:relative;user-select:none}:host img{position:absolute;pointer-events:none;top:0;left:0}:host img.pressed{opacity:0}:host img.default{opacity:100%}:host(:active) img.pressed{opacity:100%}:host(:active) img.default{opacity:0}";var t=class extends o{render(){return`
      <img class="default" src="images/play.png" alt="play button" />
      <img class="pressed" src="images/play-pressed.png" alt="play button pressed" />
    `}};t.style=e;if(!window.customElements)throw new Error("Custom Elements not supported");window.customElements.get("play-button")||window.customElements.define("play-button",t);export{t as PlayButton};
