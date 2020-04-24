!function a(i,s,l){function u(t,e){if(!s[t]){if(!i[t]){var r="function"==typeof require&&require;if(!e&&r)return r(t,!0);if(d)return d(t,!0);var n=new Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}var o=s[t]={exports:{}};i[t][0].call(o.exports,function(e){return u(i[t][1][e]||e)},o,o.exports,a,i,s,l)}return s[t].exports}for(var d="function"==typeof require&&require,e=0;e<l.length;e++)u(l[e]);return u}({1:[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var d=e("./enums"),c=e("./UIElements/Card"),p=e("./WordList"),n=(o.prototype.ToString=function(e){for(var t="",r="",n=0;n<e.Cards.length;n++){var o=e.Cards[n],a=p.Words.indexOf(o.Word);t+=this.Pad(a.toString(36),2),r+=o.CardType.toString()}return t+(r=parseInt(r,4).toString(36))},o.prototype.Pad=function(e,t){for(var r=e;r.length<t;)r="0"+r;return r},o.prototype.FromString=function(e,t){var r=[],n=t.slice(0,50),o=t.slice(50);o=this.Pad(parseInt(o,36).toString(4),25);for(var a=n.match(/.{1,2}/g),i=0,s=0;s<a.length;s++){var l=p.Words[parseInt(a[s],36)],u=parseInt(o[s]);i+=u,r.push(new c.Card(l,u,e.Board))}e.Cards=r,e.StartingTeam=25==i?d.eCardType.RedSpy:d.eCardType.BlueSpy},o);function o(){}r.BoardCodec=n},{"./UIElements/Card":6,"./WordList":12,"./enums":13}],2:[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var o=e("./enums"),a=e("./WordList"),i=e("./UIElements/Board"),s=e("./UIElements/Card"),l=e("./UiElements/SpyMaterQrcode"),u=e("./BoradCodec"),n=e("./UIElements/Menu"),d=(c.prototype.GetSpyMasterUrl=function(){return this.SpyMasterUrlBase+this.GameEncode},c.prototype.Run=function(){var e=this.ReadGETdata("SM");this.SpyMaster=null!=e,this.SpyMaster?this.LoadSpyMaster(e):this.NewGame(),this.MainMenu=new n.Menu(this),this.MainMenu.Render(document.body),document.body.style.backgroundImage='url("./images/bg'+(this.StartingTeam==o.eCardType.RedSpy?"red":"blue")+'.png")'},c.prototype.ReadGETdata=function(e){if(0<window.location.href.indexOf("?")){for(var t={},r=window.location.href.split("?")[1].split("&"),n=0;n<r.length;n++){var o=r[n].split("=");t[o[0]]=o[1]}return t[e]}return null},c.prototype.NewGame=function(){this.StartingTeam=1==Math.floor(2*Math.random())?o.eCardType.RedSpy:o.eCardType.BlueSpy;var e=this.BuildArray([[o.eCardType.Neutral,7],[o.eCardType.RedSpy,8],[o.eCardType.BlueSpy,8],[o.eCardType.Assassin,1],[this.StartingTeam,1]]);this.ShuffleArray(e);for(var t=[];t.length<e.length;){var r=Math.floor(Math.random()*a.Words.length);-1<t.indexOf(r)||(t[t.length]=r)}this.Board=new i.Board(this);for(var n=0;n<e.length;n++)this.Cards.push(new s.Card(a.Words[t[n]],e[n],this.Board));this.Board.Render(document.body),this.GameEncode=(new u.BoardCodec).ToString(this),new l.SpyMaterQrcode(this).Render(document.body)},c.prototype.LoadSpyMaster=function(e){this.Board=new i.Board(this),(new u.BoardCodec).FromString(this,e),this.Board.Render(document.body)},c.prototype.BuildArray=function(e){for(var t=[],r=0,n=e;r<n.length;r++)for(var o=n[r],a=0;a<o[1];a++)t.push(o[0]);return t},c.prototype.ShuffleArray=function(e){for(var t,r=e.length-1;0<r;r--){var n=Math.floor(Math.random()*(r+1));t=[e[n],e[r]],e[r]=t[0],e[n]=t[1]}return e},c);function c(){this.Cards=[],this.SpyMaster=!1,this.SpyMasterUrlBase="https://mrluxan.github.io/CodeNames.ts/?SM=",this.GameEncode=""}r.CodeNamesGame=d},{"./BoradCodec":1,"./UIElements/Board":4,"./UIElements/Card":6,"./UIElements/Menu":7,"./UiElements/SpyMaterQrcode":10,"./WordList":12,"./enums":13}],3:[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),(new(e("./Game").CodeNamesGame)).Run()},{"./Game":2}],4:[function(e,t,r){"use strict";var n,o=this&&this.__extends||(n=function(e,t){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])})(e,t)},function(e,t){function r(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)});Object.defineProperty(r,"__esModule",{value:!0});var a,i=e("./UiElement"),s=(a=i.UiElement,o(l,a),l.prototype.Render=function(e){this.DomElement=this.htmlToElement('<div class="Board"><div class="PlayArea"></div></div>'),e.append(this.DomElement);for(var t=this.DomElement.querySelector(".PlayArea"),r=0;r<this.Game.Cards.length;r++)this.Game.Cards[r].Render(t),this.Game.SpyMaster&&this.Game.Cards[r].Click()},l);function l(e){var t=a.call(this)||this;return t.Game=e,t}r.Board=s},{"./UiElement":9}],5:[function(e,t,r){"use strict";var n,o=this&&this.__extends||(n=function(e,t){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])})(e,t)},function(e,t){function r(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)});Object.defineProperty(r,"__esModule",{value:!0});var a,i=e("./UiElement"),s=(a=i.UiElement,o(l,a),l.prototype.NewGameClick=function(){location.reload()},l.prototype.CopyCodeButton=function(){var e=document.createElement("textarea");e.value=this.MainMenu.Game.GetSpyMasterUrl(),document.body.appendChild(e),e.select(),document.execCommand("copy"),document.body.removeChild(e)},l.prototype.Render=function(e,t){var r=this,n=this.htmlToElement('<ul>\n                                <li id="NewGameItem">New game</li>\n                            </ul>');e.appendChild(n),n.querySelector("#NewGameItem").addEventListener("click",function(e){return r.NewGameClick()});var o=this.htmlToElement('<div class="BoardMenuExtras">\n                                    <div class="Qrcode"></div>\n                                    <button class="CopyCodeButton">Copy code</button>\n                                 </div>'),a=o.getElementsByClassName("Qrcode")[0];new QRCode(a,{text:this.MainMenu.Game.GetSpyMasterUrl(),width:150,height:150,colorDark:"#000000",colorLight:"#ffffff",correctLevel:QRCode.CorrectLevel.H,quiteZone:10}),o.querySelector(".CopyCodeButton").addEventListener("click",function(e){return r.CopyCodeButton()}),t.appendChild(o)},l);function l(e){var t=a.call(this)||this;return t.MainMenu=e,t}r.BoardMenu=s},{"./UiElement":9}],6:[function(e,t,r){"use strict";var n,o=this&&this.__extends||(n=function(e,t){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])})(e,t)},function(e,t){function r(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)});Object.defineProperty(r,"__esModule",{value:!0});var a,i=e("../enums"),s=e("./UiElement"),l=(a=s.UiElement,o(u,a),u.prototype.Click=function(){this.GameBoard.Game.SpyMaster?this.CheckMarkCard():this.ToggledColor()},u.prototype.ToggledColor=function(){var e;switch(this.CardType){case i.eCardType.Assassin:e="Black";break;case i.eCardType.Neutral:e="Gray";break;case i.eCardType.RedSpy:e="Red";break;case i.eCardType.BlueSpy:e="Blue"}this.DomElement.style.color="#FFF",this.DomElement.style.backgroundColor=e},u.prototype.CheckMarkCard=function(){var e=this.DomElement.querySelector(".CheckMark");e.style.display="none"==e.style.display?"block":"none"},u.prototype.Render=function(e){var t=this,r='<div class="Card"><div>'+this.Word+"</div><div>"+this.Word+'</div><div class="CheckMark">&#10003;</div></div>';this.DomElement=this.htmlToElement(r),e.appendChild(this.DomElement),this.DomElement.addEventListener("click",function(e){return t.Click()}),this.GameBoard.Game.SpyMaster&&this.ToggledColor()},u);function u(e,t,r){var n=a.call(this)||this;return n.Word=e,n.CardType=t,n.GameBoard=r,n}r.Card=l},{"../enums":13,"./UiElement":9}],7:[function(e,t,r){"use strict";var n,o=this&&this.__extends||(n=function(e,t){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])})(e,t)},function(e,t){function r(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)});Object.defineProperty(r,"__esModule",{value:!0});var a,i=e("./UiElement"),s=e("./BoardMenu"),l=e("./SpyMasterMenu"),u=(a=i.UiElement,o(d,a),d.prototype.MenuButtonClick=function(){"true"!=this.DomElement.dataset.open?(this.DomElement.dataset.open="true",this.DomElement.querySelector(".TopBar").style.transform="rotate(-45deg)",this.DomElement.querySelector(".ButtonBar").style.transform="rotate(45deg)"):(this.DomElement.dataset.open="false",this.DomElement.querySelector(".TopBar").style.transform="rotate(45deg)",this.DomElement.querySelector(".ButtonBar").style.transform="rotate(-45deg)"),this.DomElement.classList.toggle("MenuHidden"),this.DomElement.classList.toggle("TopBar")},d.prototype.Render=function(e){var t=this;this.DomElement=this.htmlToElement('<div data-open="false" class="Menu MenuTransform MenuHidden">\n                                <div class="MenuPanel">\n                                    Menu\n                                    <div class="MenuInsert"></div>\n                                    <div class="Info">\n                                        <div class="MenuExtra"></div>\n                                        <div class="version">v 0.8</div>\n                                    </div>\n                                </div>\n                                <button title="Menu" class="MenuButton">\n                                    <div class="InnerButton">\n                                        <div class="TopBar MenuTransform"></div>\n                                        <div class="ButtonBar MenuTransform"></div>\n                                    </div>\n                                </button>\n                            </div>'),e.appendChild(this.DomElement);var r=this.DomElement.querySelector(".MenuInsert"),n=this.DomElement.querySelector(".MenuExtra");this.Game.SpyMaster?new l.SpyMasterMenu(this).Render(r):new s.BoardMenu(this).Render(r,n),this.DomElement.querySelector(".MenuButton").addEventListener("click",function(e){return t.MenuButtonClick()})},d);function d(e){var t=a.call(this)||this;return t.Game=e,t}r.Menu=u},{"./BoardMenu":5,"./SpyMasterMenu":8,"./UiElement":9}],8:[function(e,t,r){"use strict";var n,o=this&&this.__extends||(n=function(e,t){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])})(e,t)},function(e,t){function r(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)});Object.defineProperty(r,"__esModule",{value:!0});var a,i=e("./UiElement"),s=e("../enums"),l=(a=i.UiElement,o(u,a),u.prototype.Render=function(e,t){void 0===t&&(t=null),this.DomElement=this.htmlToElement('<div class="SpyMasterTypeGrid">\n                                    <div>Red<ul class="redList"></ul></div> \n                                    <div>Bule<ul class="blueList"></ul></div>\n                                    <div>Neutral<ul class="neutralList"></ul></div>\n                                    <div>Assassin<ul class="assassinList"></ul></div>\n                               </div>');for(var r=0;r<this.MainMenu.Game.Cards.length;r++){var n=void 0;switch(this.MainMenu.Game.Cards[r].CardType){case s.eCardType.RedSpy:n=".redList";break;case s.eCardType.BlueSpy:n=".blueList";break;case s.eCardType.Neutral:n=".neutralList";break;case s.eCardType.Assassin:n=".assassinList"}this.DomElement.querySelector(n).appendChild(this.htmlToElement("<li>"+this.MainMenu.Game.Cards[r].Word+"</li>"))}e.appendChild(this.DomElement)},u);function u(e){var t=a.call(this)||this;return t.MainMenu=e,t}r.SpyMasterMenu=l},{"../enums":13,"./UiElement":9}],9:[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n=(o.prototype.htmlToElement=function(e){var t=document.createElement("template");return t.innerHTML=e.trim(),t.content.firstChild},o);function o(){}r.UiElement=n},{}],10:[function(e,t,r){"use strict";var n,o=this&&this.__extends||(n=function(e,t){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])})(e,t)},function(e,t){function r(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)});Object.defineProperty(r,"__esModule",{value:!0});var a,i=e("./UIElement"),s=(a=i.UiElement,o(l,a),l.prototype.CopyCodeButton=function(){var e=document.createElement("textarea");e.value=this.Game.GetSpyMasterUrl(),document.body.appendChild(e),e.select(),document.execCommand("copy"),document.body.removeChild(e)},l.prototype.ReadyButtonClick=function(){this.DomElement.parentNode.removeChild(this.DomElement)},l.prototype.Render=function(e){var t=this;this.DomElement=this.htmlToElement('<div class="SpyMasterOverlay">\n                                <div class="SpyMaterQrcode">\n                                    <div class="Qrcode"></div>\n                                    <div class="ButtonDiv">\n                                        <button class="CopyCodeButton">Copy code</button>\n                                        <button class="ReadyButton">Ready</button>\n                                    </div>\n                                </div>\n                            </div>'),e.append(this.DomElement);var r=this.DomElement.getElementsByClassName("Qrcode")[0];new QRCode(r,{text:this.Game.GetSpyMasterUrl(),width:150,height:150,colorDark:"#000000",colorLight:"#ffffff",correctLevel:QRCode.CorrectLevel.H,quiteZone:10}),this.DomElement.querySelector(".CopyCodeButton").addEventListener("click",function(e){return t.CopyCodeButton()}),this.DomElement.querySelector(".ReadyButton").addEventListener("click",function(e){return t.ReadyButtonClick()})},l);function l(e){var t=a.call(this)||this;return t.Game=e,t}r.SpyMaterQrcode=s},{"./UIElement":11}],11:[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n=(o.prototype.htmlToElement=function(e){var t=document.createElement("template");return t.innerHTML=e.trim(),t.content.firstChild},o);function o(){}r.UiElement=n},{}],12:[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.Words=["Acne","Acre","Addendum","Advertise","Aircraft","Aisle","Alligator","Alphabetize","America","Ankle","Apathy","Applause","Applesauc","Application","Archaeologist","Aristocrat","Arm","Armada","Asleep","Astronaut","Athlete","Atlantis","Aunt","Avocado","Baby-Sitter","Backbone","Bag","Baguette","Bald","Balloon","Banana","Banister","Baseball","Baseboards","Basketball","Bat","Battery","Beach","Beanstalk","Bedbug","Beer","Beethoven","Belt","Bib","Bicycle","Big","Bike","Billboard","Bird","Birthday","Bite","Blacksmith","Blanket","Bleach","Blimp","Blossom","Blueprint","Blunt","Blur","Boa","Boat","Bob","Bobsled","Body","Bomb","Bonnet","Book","Booth","Bowtie","Box","Boy","Brainstorm","Brand","Brave","Bride","Bridge","Broccoli","Broken","Broom","Bruise","Brunette","Bubble","Buddy","Buffalo","Bulb","Bunny","Bus","Buy","Cabin","Cafeteria","Cake","Calculator","Campsite","Can","Canada","Candle","Candy","Cape","Capitalism","Car","Cardboard","Cartography","Cat","Cd","Ceiling","Cell","Century","Chair","Chalk","Champion","Charger","Cheerleader","Chef","Chess","Chew","Chicken","Chime","China","Chocolate","Church","Circus","Clay","Cliff","Cloak","Clockwork","Clown","Clue","Coach","Coal","Coaster","Cog","Cold","College","Comfort","Computer","Cone","Constrictor","Continuum","Conversation","Cook","Coop","Cord","Corduroy","Cot","Cough","Cow","Cowboy","Crayon","Cream","Crisp","Criticize","Crow","Cruise","Crumb","Crust","Cuff","Curtain","Cuticle","Czar","Dad","Dart","Dawn","Day","Deep","Defect","Dent","Dentist","Desk","Dictionary","Dimple","Dirty","Dismantle","Ditch","Diver","Doctor","Dog","Doghouse","Doll","Dominoes","Door","Dot","Drain","Draw","Dream","Dress","Drink","Drip","Drums","Dryer","Duck","Dump","Dunk","Dust","Ear","Eat","Ebony","Elbow","Electricity","Elephant","Elevator","Elf","Elm","Engine","England","Ergonomic","Escalator","Eureka","Europe","Evolution","Extension","Eyebrow","Fan","Fancy","Fast","Feast","Fence","Feudalism","Fiddle","Figment","Finger","Fire","First","Fishing","Fix","Fizz","Flagpole","Flannel","Flashlight","Flock","Flotsam","Flower","Flu","Flush","Flutter","Fog","Foil","Football","Forehead","Forever","Fortnight","France","Freckle","Freight","Fringe","Frog","Frown","Gallop","Game","Garbage","Garden","Gasoline","Gem","Ginger","Gingerbread","Girl","Glasses","Goblin","Gold","Goodbye","Grandpa","Grape","Grass","Gratitude","Gray","Green","Guitar","Gum","Gumball","Hair","Half","Handle","Handwriting","Hang","Happy","Hat","Hatch","Headache","Heart","Hedge","Helicopter","Hem","Hide","Hill","Hockey","Homework","Honk","Hopscotch","Horse","Hose","Hot","House","Houseboat","Hug","Humidifier","Hungry","Hurdle","Hurt","Hut","Ice","Implode","Inn","Inquisition","Intern","Internet","Invitation","Ironic","Ivory","Ivy","Jade","Japan","Jeans","Jelly","Jet","Jig","Jog","Journal","Jump","Key","Killer","Kilogram","King","Kitchen","Kite","Knee","Kneel","Knife","Knight","Koala","Lace","Ladder","Ladybug","Lag","Landfill","Lap","Laugh","Laundry","Law","Lawn","Lawnmower","Leak","Leg","Letter","Level","Lifestyle","Ligament","Light","Lightsaber","Lime","Lion","Lizard","Log","Loiterer","Lollipop","Loveseat","Loyalty","Lunch","Lunchbox","Lyrics","Machine","Macho","Mailbox","Mammoth","Mark","Mars","Mascot","Mast","Matchstick","Mate","Mattress","Mess","Mexico","Midsummer","Mine","Mistake","Modern","Mold","Mom","Monday","Money","Monitor","Monster","Mooch","Moon","Mop","Moth","Motorcycle","Mountain","Mouse","Mower","Mud","Music","Mute","Nature","Negotiate","Neighbor","Nest","Neutron","Niece","Night","Nightmare","Nose","Oar","Observatory","Office","Oil","Old","Olympian","Opaque","Opener","Orbit","Organ","Organize","Outer","Outside","Ovation","Overture","Pail","Paint","Pajamas","Palace","Pants","Paper","Paper","Park","Parody","Party","Password","Pastry","Pawn","Pear","Pen","Pencil","Pendulum","Penis","Penny","Pepper","Personal","Philosopher","Phone","Photograph","Piano","Picnic","Pigpen","Pillow","Pilot","Pinch","Ping","Pinwheel","Pirate","Plaid","Plan","Plank","Plate","Platypus","Playground","Plow","Plumber","Pocket","Poem","Point","Pole","Pomp","Pong","Pool","Popsicle","Population","Portfolio","Positive","Post","Princess","Procrastinate","Protestant","Psychologist","Publisher","Punk","Puppet","Puppy","Push","Puzzle","Quarantine","Queen","Quicksand","Quiet","Race","Radio","Raft","Rag","Rainbow","Rainwater","Random","Ray","Recycle","Red","Regret","Reimbursement","Retaliate","Rib","Riddle","Rim","Rink","Roller","Room","Rose","Round","Roundabout","Rung","Runt","Rut","Sad","Safe","Salmon","Salt","Sandbox","Sandcastle","Sandwich","Sash","Satellite","Scar","Scared","School","Scoundrel","Scramble","Scuff","Seashell","Season","Sentence","Sequins","Set","Shaft","Shallow","Shampoo","Shark","Sheep","Sheets","Sheriff","Shipwreck","Shirt","Shoelace","Short","Shower","Shrink","Sick","Siesta","Silhouette","Singer","Sip","Skate","Skating","Ski","Slam","Sleep","Sling","Slow","Slump","Smith","Sneeze","Snow","Snuggle","Song","Space","Spare","Speakers","Spider","Spit","Sponge","Spool","Spoon","Spring","Sprinkler","Spy","Square","Squint","Stairs","Standing","Star","State","Stick","Stockholder","Stoplight","Stout","Stove","Stowaway","Straw","Stream","Streamline","Stripe","Student","Sun","Sunburn","Sushi","Swamp","Swarm","Sweater","Swimming","Swing","Tachometer","Talk","Taxi","Teacher","Teapot","Teenager","Telephone","Ten","Tennis","Thief","Think","Throne","Through","Thunder","Tide","Tiger","Time","Tinting","Tiptoe","Tiptop","Tired","Tissue","Toast","Toilet","Tool","Toothbrush","Tornado","Tournament","Tractor","Train","Trash","Treasure","Tree","Triangle","Trip","Truck","Tub","Tuba","Tutor","Television","Twang","Twig","Twitterpated","Type","Unemployed","Upgrade","Vest","Vision","Wag","Water","Watermelon","Wax","Wedding","Weed","Welder","Whatever","Wheelchair","Whiplash","Whisk","Whistle","White","Wig","Will","Windmill","Winter","Wish","Wolf","Wool","World","Worm","Wristwatch","Yardstick","Zamboni","Zen","Zero","Zipper","Zone","Zoo"]},{}],13:[function(e,t,r){"use strict";var n;Object.defineProperty(r,"__esModule",{value:!0}),(n=r.eCardType||(r.eCardType={}))[n.RedSpy=0]="RedSpy",n[n.BlueSpy=1]="BlueSpy",n[n.Neutral=2]="Neutral",n[n.Assassin=3]="Assassin"},{}]},{},[3]);
//# sourceMappingURL=CodeNames.js.map
