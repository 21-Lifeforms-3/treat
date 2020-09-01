
      //    CHANGE COSTUME   //
x = 0;
function switchImg() {
var closet = ["../images/char_group/alien.png", "../images/char_group/witch.png", "../images/char_group/devil.png", "../images/char_group/bear.png", "../images/char_group/bee.png", "../images/char_group/convict.png", "../images/char_group/elf.png", "../images/char_group/frankmonster.png", "../images/char_group/girl-pirate.png", "../images/char_group/girl-pumpkin.png", "../images/char_group/gray-vamp.png", "../images/char_group/green-witch.png", "../images/char_group/mermaid.png", "../images/char_group/mummy.png", "../images/char_group/pirate.png", "../images/char_group/pumpkin.png", "../images/char_group/ridinghood.png", "../images/char_group/vamp.png"];
 var image = document.getElementById("imgToSwitch");
 var choicex = closet[x];
 image.src = choicex;
 var choicex = choicex.substring(0, choicex.length -4);
 var choicex = choicex.concat("-clear.png");
 userData.choicex = choicex; 
 x++;
 if (x > 17) {x = 0};
};
     //     CHANGE HOUSE    //
y = 0;
function switchhome() {
var closet = ["../images/home_group/2.png", "../images/home_group/3.png", "../images/home_group/4.png", "../images/home_group/5.png", "../images/home_group/6.png", "../images/home_group/7.png", "../images/home_group/8.png", "../images/home_group/9.png", "../images/home_group/10.png", "../images/home_group/11.png", "../images/home_group/12.png", "../images/home_group/13.png"];
 var image = document.getElementById("homeToSwitch");
 var choicey = closet[y];
 image.src = choicey;
 userData.choicey = choicey;
 y++;
 if (y > 11) {y = 0};
};
       //    INTENSITY   LEVEL      //
z = 0;
function swFright() {
  var level = ["../images/intensity-low.png", "../images/intensity-med.png", "../images/intensity-high.png"];
  var image = document.getElementById("intensity")
  var lvl = level[z];
  userData.lvl = z;
  image.src = lvl;
  z++;
  if (z > 2) {z = 0};
};
      //     CHANGE   NAME       //
function newname() {
  var firstnames = ["Hairy ", "Alarming ", "Sweet ", "Sour ", "Floating ", "Big ", "Cool ", "Intimidating ", "Small ", "Grim ", "Horrid ", "Pretty ", "Mean ", "Nice ", "Ghastly ", "Good ", "Evil ", "Sharp ", "Quick ", "One ", "Ten ", "Long ", "Short ", "Flaming ", "Frigid "];
  var middlenames = ["Toe", "Finger", "Tooth", "Tail", "Horn", "Foot", "Hand", "Eye", "Candy", "Scar", "Ear", "Nose", "Beak", "Form", "Mouth", "Claw", "Breath", "Voice", "Paw", "Mind", "Fin", "Shadow", "Coffee", "Tea", "Cheek"];
  var lastnames = [" Bear", " Lion", "  Zombie", "  Ghoul", "  Vampire", "  Revenant", "  Skeleton", "  Ghost", "  Wolf", "  Rabbit", "  Pirate", "  Dragon", "  Shark", "  Demon", "  Reaper", "  Alien", "  King", "  Queen", "  Jester", "  Knight", "  Princess", "  Gorrila", "  Monkey", "  Robot", " Insect"];
 var ni1 = firstnames[Math.floor(Math.random() * firstnames.length)];
 var ni2 = middlenames[Math.floor(Math.random() * middlenames.length)];
 var ni3 = lastnames[Math.floor(Math.random() * lastnames.length)];
newn = ni1.concat(ni2, ni3);
userData.newn = newn;
document.getElementById("newn").innerText = newn
};
    //    CHNAGE TITLE   //
function newtitle() {
  var firstnames = ["Eerie ", "Dark ", "Misty ", "Haunted ", "Frightful ", "Comfortable ", "Uncomfortable ", "Decripit ", "Ruined ", "Pristine ", "Filthy ", "Disharmonious ", "Candlelight ", "Bookless ", "Gardened ", "Statlier ", "Tucked ", "Livable ", "Unlivable ", "Invaded ", "Spacious ", "Peaceful ", "Unbroken ", "Undisturbed ", "Secluded "];
  var middlenames = ["Oceanfront", "Hillside", "Swamp", "Town", "Village", "City", "Forest", "Hideaway", "Mountainside", "Highland", "Neighborhood", "Woodland", "Vacation", "Uptown", "Rural", "Hilltop", "Mountaintop", "Farm", "Downstream", "Mobile", "Riverfront", "Beachfront", "Lakefront", "Treetop", "Waterside"];
  var lastnames = [" Tower", " Home", " Cottage", " Cabin", " Mansion", " Tent", " Treehouse", " Castle", " Bungalow", " Apartmant", " Yurt", " Igloo", " Palace", " Cave", " Chalet", " Villa", " Condominium", " Duplex", " Château", " McMansion", " Suite", " Dormitory", " Shack", " Barndominium", " Fort"];
  var ti1 = firstnames[Math.floor(Math.random() * firstnames.length)];
  var ti2 = middlenames[Math.floor(Math.random() * middlenames.length)];
  var ti3 = lastnames[Math.floor(Math.random() * lastnames.length)];
newt = ti1.concat(ti2, ti3);
userData.newt = newt;
document.getElementById("newt").innerText = newt
};
     //  STORE USER DATA   //
    var userData = [];
    var GameData = [];
function storeUser() {
//   pwd, email, choicex, choicey, lvl, newn, newt, ...

  if (userData.choicex === undefined) {
    x = Math.floor(Math.random() * 16);
    switchImg();
  };
    if (userData.choicey === undefined) {
    x = Math.floor(Math.random() * 10);
    switchhome();
  };
    if (userData.newn === undefined) {
    newname();
  };
    if (userData.newt === undefined) {
    newtitle();
  };
    userData.pwd = document.getElementById("joining").elements[1].value;
    userData.email = document.getElementById("joining").elements[0].value;


 GameData[GameData.length] = userData;
 myJSON = JSON.stringify(GameData);
 localStorage.setItem("GameData", myJSON);
  console.log(userData);
  console.log(GameData);
   
};
function readUser() {
  Pname = getElementById(pwd).innerText = pwd;
  text = localStorage.getItem("Pname");
  myJSON = JSON.parse(text);
  var userData = getElementById("myJSON").innerText = myJSON;
  email = userData[0];
  choicex = userData[1];
  choicey = userData[2];
  lvl = userData[3];
  newn = userData[4];
  newt = userData[5];
 // document.getElementById("userData").innerHTML = userData;
};
var ShopList = [];
var c = 0;
function addtolist (item) {
  ShopList.pop(); ShopList.pop();
  ShopList[ShopList.length] = item;
  ShopList[ShopList.length] = "TOTAL$";
  var c = ShopList.length;
  c -= 1; c *= .25;
  ShopList[ShopList.length] = c;
   var j = document.getElementById("ShopList");
   j.innerHTML = ShopList.join(" ");
};
function trolly() {
  var cp = ShopList.length;
    if (cp >= 1) {
    document.getElementById("Cimage").style.background 
    = "url('../images/full_cart.png') no-repeat";
    document.getElementById("Cimage").style.background 
    = "url('../images/full_cart.png') no-repeat";
    }
};
