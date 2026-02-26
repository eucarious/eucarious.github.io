
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
}