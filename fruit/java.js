let f1 = document.getElementById("f1");
let f2 = document.getElementById("f2");
let f3 = document.getElementById("f3");

var fruit = ["&#127817; "
            , "&#127824; "
            , "&#127822; "
            , "&#127827; "
            , "&#55; "
            , "&#127820; "
            ,"&#127818; "];

random_fruit();

function random_fruit() {
  var random1 = fruit [Math.floor(Math.random() * fruit.length)];
  f1.innerHTML = random1;

  var random2 = fruit [Math.floor(Math.random() * fruit.length)];
  f2.innerHTML = random2;

  var random3 = fruit [Math.floor(Math.random() * fruit.length)];
  f3.innerHTML = random3;
}
