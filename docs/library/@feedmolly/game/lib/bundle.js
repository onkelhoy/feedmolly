var v=Object.defineProperty;var x=Object.getOwnPropertyDescriptor;var g=(p,d,e,t)=>{for(var i=t>1?void 0:t?x(d,e):d,s=p.length-1,l;s>=0;s--)(l=p[s])&&(i=(t?l(d,e,i):l(i))||i);return t&&i&&v(d,e,i),i};import{CustomElement as I,debounce as R,html as C,property as y}from"@papit/core";import{Engine as z,getlink as L}from"@papit/game-engine";import{InputEvents as S}from"@papit/game-input-events";import"@feedmolly/play-button";import"@feedmolly/heart";var b=':host{overflow:hidden;position:relative;width:100%;height:100%;display:block}canvas,img.background{position:absolute;top:0;left:0}img.background{min-width:100%;height:100%}header{display:flex;position:relative;justify-content:flex-end;align-items:center;padding:1rem;gap:1rem}header div.score{box-sizing:border-box;font-size:1.5rem}footer{position:absolute;bottom:0;right:0;text-align:right;padding-right:1rem;font-size:.8rem;color:rgba(233,233,233,.633)}div.menu{position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);width:400px;height:300px;display:none}div.menu img{position:absolute;top:0;left:0;z-index:1}div.menu play-button{position:absolute;z-index:2;top:50%;left:50%;transform:translate(-50%, -50%)}div.menu.end img.game-over{z-index:2;top:35%;left:50%;transform:translate(-50%, -50%)}div.menu.end play-button{position:absolute;z-index:2;top:65%;left:50%;transform:translate(-50%, -50%)}:host([mode=start]) div.menu.start{display:block}:host([mode=end]) div.menu.end{display:block}:host([hearts="0"]) feedmolly-heart{display:none}:host([hearts="1"]) feedmolly-heart+feedmolly-heart{display:none}:host([hearts="2"]) feedmolly-heart+feedmolly-heart+feedmolly-heart{display:none}';import{getlink as o,LoadImage as a}from"@papit/game-engine";import{Vector as k}from"@papit/game-vector";var r=class extends k{constructor(e){super(150+(e-300)*Math.random(),-200);this.index=Math.floor(Math.random()*r.items.length)%r.items.length,this.rotation=0,this.speed=(Math.random()*7+8)/10,this.rotationspeed=.01+Math.random()/100}static async load(){r.items.length>0||r.items.push({image:await a(o("/images/beef.png")),score:1},{image:await a(o("/images/bone.png")),score:-1},{image:await a(o("/images/can.png")),score:-1},{image:await a(o("/images/candy.png")),score:1},{image:await a(o("/images/carrot.png")),score:1},{image:await a(o("/images/chicken.png")),score:1},{image:await a(o("/images/egg.png")),score:1},{image:await a(o("/images/plastic-bag.png")),score:-1},{image:await a(o("/images/potato.png")),score:1},{image:await a(o("/images/sausage.png")),score:1},{image:await a(o("/images/water.png")),score:1})}get image(){return r.items[this.index].image}get score(){return r.items[this.index].score}update(){this.rotation+=this.rotationspeed,this.y+=this.speed}draw(e){e.save(),e.translate(this.x,this.y),e.rotate(this.rotation),e.drawImage(this.image,-this.image.width/2,-this.image.height/2),e.restore()}},h=r;h.items=[];import{getlink as u,LoadImage as f}from"@papit/game-engine";import{Vector as M}from"@papit/game-vector";import{debounce as E}from"@papit/core";var n=class extends M{constructor(e,t){super(e/2,t);this._mode="normal";this.resetMode=()=>{this.mode="normal"};this.resetMode=E(this.resetMode,400)}static async load(){n.images={miss:await f(u("/images/molly-miss-the-food400.png")),eat:await f(u("/images/molly-eat400.png")),normal:await f(u("/images/molly-normal400.png"))}}get mode(){return this._mode}set mode(e){e!=="normal"&&this.resetMode(),this._mode=e}get face(){return{x:this.x+60,y:this.y-130,r:35}}eat(e){e.score>0?this.mode="eat":this.mode="miss"}update(e){this.x=e.x}draw(e){let t=n.images[this.mode];e.drawImage(t,this.x-t.width/2,this.y-230)}drawBoundary(e){let t=this.face;e.beginPath(),e.arc(t.x,t.y,t.r,0,Math.PI*2),e.lineWidth=3,e.strokeStyle="orange",e.stroke()}};import{Vector as T}from"@papit/game-vector";var m=class extends I{constructor(){super();this.items=[];this.mode="start";this.score=0;this.hearts=3;this.handleplayclick=()=>{this.score=0,this.hearts=3,this.engine.loop(this.draw),this.setplay()};this.setplay=()=>{this.mode="play"};this.gameend=()=>{this.items=[],this.engine.stop(),this.mode="end"};this.draw=()=>{this.engine.ctx.clearRect(0,0,this.engine.width,this.engine.height),this.time++;let e=performance.now();e-this.time>this.interval&&(this.interval=Math.random()*1e3+500,this.time=e,this.items.push(new h(this.engine.width))),this.molly.update(this.events.mouse.position);let t=this.molly.face;for(let i=0;i<this.items.length;i++){let s=this.items[i];s.update(),s.draw(this.engine.context);let l=T.Distance(s,t),w=!1;l<=t.r&&(this.molly.eat(s),w=!0,s.score>0?this.score++:this.hearts>0&&this.hearts--,this.eatSound.play());let c=s.y>this.engine.height+50&&s.score>0;(w||c)&&(c&&(this.molly.mode="miss"),this.items.splice(i,1),i--,c&&this.hearts>0&&this.hearts--)}this.hearts<=0&&this.gameend(),this.molly.draw(this.engine.context)};this.interval=1e3,this.time=performance.now(),this.setplay=R(this.setplay)}async firstRender(){if(super.firstRender(),!this.shadowRoot)throw new Error("could not establish shadowRoot");this.engine=new z({query:"canvas",documentElemenet:this.shadowRoot}),this.events=new S(this.engine.canvas,{keyboard:void 0,touch:void 0,mouse:{pointerlock:void 0}}),this.molly=new n(this.engine.width,this.engine.height),await h.load(),await n.load(),this.eatSound=new Audio(L("/sounds/flip.mp3"))}render(){return C`
      <img class="background" src="images/background.jpg" alt="game background" />
      <canvas>Your browser does not support html-canvas</canvas>
      <header>
        <div>
          <feedmolly-heart key="0" index="0"></feedmolly-heart>
          <feedmolly-heart key="1" index="1"></feedmolly-heart>
          <feedmolly-heart key="2" index="2"></feedmolly-heart>
        </div>
        <div class="score">
          SCORE: <span>${this.score}</span>
        </div>
      </header>

      <footer>
        <p>art & concept by Phượng Ngọc Đào</p>
      </footer>

      <div class="menu start">
        <img src="images/menu-background.png" alt="menu background" />
        <play-button @click="${this.handleplayclick}"></play-button>
      </div>

      <div class="menu end">
        <img src="images/menu-background.png" alt="menu background" />
        <img class="game-over" src="images/game-over.png" alt="game over" />
        <play-button @click="${this.handleplayclick}"></play-button>
      </div>
    `}};m.style=b,g([y({type:String,rerender:!1})],m.prototype,"mode",2),g([y({type:Number})],m.prototype,"score",2),g([y({type:Number})],m.prototype,"hearts",2);if(!window.customElements)throw new Error("Custom Elements not supported");window.customElements.get("feedmolly-game")||window.customElements.define("feedmolly-game",m);export{m as Game};