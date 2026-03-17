
/**
 *         MY ANTI-DEPRESSANTS JUST KICKED
 *              IN ! FANTASTIC !
 *              _________________________
 *             ╱    /\__/\       //     ╲╲
 *           ⊂╱    ( ´∇ ` )     // ⊃     ||╲ フ 🡖
 *    ,´__▔▔▔▔╱  ▔╱▔  ⌒▔▔▔▔╱▔▔▔▔ 🡖▔  ▔▔|
 *  /,╱_ _╱   /-o—/ ___ ╱▔▔╱ ___/\  |     ▔ | /\____|
 * ,========————´=============/⌒ ╲=/=======||🡖 ||	  )
 * | __  | YIPPEE! |   __   "    |⌒| |/    ___/|    )╯
 * )|🞕|_∈≡≡≡≡≡≡≡≡≡∋__|🞕| "  __|| ╯ ╯__ -‒‒‒‒‒┘  ╯ vroom
 * ▔╲ ▔╲__╯▔▔▔▔▔▔▔▔三三三▔╲  ╲__╯ ▔▔     三三三三╯		vroom
 *   三三三三三三三三三三三三三三三三三三三三三三三三三三三三
 *     三三三三三三三三三三三三三三三三三三三三三三三三三三三三
 *
 * https://pastebin.com/Qv6EQTc6
 *
 */




function $(id){
  return document.getElementById(id)
}

toggle_made = function () {
    var body = document.body
    $("made").classList.toggle("hide")

    if ($("made").classList.contains("hide")) {
    $("made-button").innerHTML = "◡◡"
    document.cookie = "made=hide"
  } else {
    $("made-button").innerHTML = "◉◉"
    document.cookie = "made=visible"
  }
}

toggle_contributed = function () {
    var body = document.body
    $("contributed").classList.toggle("hide")

    if ($("contributed").classList.contains("hide")) {
    $("contributed-button").innerHTML = "◡◡"
    document.cookie = "contributed=hide"
  } else {
    $("contributed-button").innerHTML = "◉◉"
    document.cookie = "contributed=visible"
  }
}

toggle_publications = function () {
    var body = document.body
    $("publications").classList.toggle("hide")

    if ($("publications").classList.contains("hide")) {
    $("publications-button").innerHTML = "◡◡"
    document.cookie = "publications=hide"
  } else {
    $("publications-button").innerHTML = "◉◉"
    document.cookie = "publications=visible"
  }
}


toggle_dark = function () {
  var body = document.body
  $("mode").classList.toggle("dark")
  body.classList.toggle("dark")
  
  if ($("mode").classList.contains("dark")) {
    $("mode").innerHTML = "O 。.( u . u &nbsp; ) "
    document.cookie = "mode=dark"
  } else {
    $("mode").innerHTML = "oV, ( ● v ● &nbsp; )"
    document.cookie = "mode=light"
  }
}

function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i <ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

window.onload = function () {
  let mode = getCookie("mode");
  if (mode == "dark")
    toggle_dark();
  $("mode").onclick = function() {
    toggle_dark();
  }
  
  let made = getCookie("made");
  if (made == "hide")
    toggle_made();
  $("made-button").onclick = function() {
    toggle_made();
  }

  let contributed = getCookie("contributed");
  if (contributed == "hide")
    toggle_contributed();
  $("contributed-button").onclick = function() {
    toggle_contributed();
  }

  let publications = getCookie("publications");
  if (publications == "hide")
    toggle_publications();
  $("publications-button").onclick = function() {
    toggle_publications();
  }
  
}