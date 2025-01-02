export declare const style = ":host{overflow:hidden;position:relative;width:100%;height:100%;display:block}canvas,img.background{position:absolute;top:0;left:0}img.background{min-width:100%;height:100%}header{display:flex;position:relative;justify-content:flex-end;align-items:center;padding:1rem;gap:1rem}header div.score{box-sizing:border-box;font-size:1.5rem}footer{position:absolute;bottom:0;right:0;text-align:right;padding-right:1rem;font-size:.8rem;color:rgba(233,233,233,.633)}div.menu{position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);width:400px;height:300px;display:none}div.menu img{position:absolute;top:0;left:0;z-index:1}div.menu play-button{position:absolute;z-index:2;top:50%;left:50%;transform:translate(-50%, -50%)}div.menu.end img.game-over{z-index:2;top:35%;left:50%;transform:translate(-50%, -50%)}div.menu.end play-button{position:absolute;z-index:2;top:65%;left:50%;transform:translate(-50%, -50%)}:host([mode=start]) div.menu.start{display:block}:host([mode=end]) div.menu.end{display:block}:host([hearts=\"0\"]) feedmolly-heart{display:none}:host([hearts=\"1\"]) feedmolly-heart+feedmolly-heart{display:none}:host([hearts=\"2\"]) feedmolly-heart+feedmolly-heart+feedmolly-heart{display:none}";
