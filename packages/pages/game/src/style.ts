export const style = `canvas{position:absolute;top:0;left:0}div.score{position:absolute;top:0;left:0;text-align:end;width:100%;padding:1rem;box-sizing:border-box;font-size:1.5rem}div.menu{position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);width:400px;height:300px}div.menu>img{position:absolute;top:0;left:0;z-index:1}div.menu button{position:absolute;z-index:2;background:none;border:0;top:50%;left:50%;transform:translate(-50%, -50%);width:200px;height:80px}div.menu button div{position:absolute;top:0;left:0}div.menu button div.press{opacity:0}div.menu button div.default{opacity:100%}div.menu button:active div.press{opacity:100%}div.menu button:active div.default{opacity:0}:host([play=true]) div.menu{display:none}`;
