
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
  $("eye").classList.toggle("dark")
  body.classList.toggle("dark")
  
  if ($("eye").classList.contains("dark")) {
    $("eye").innerText = "◡"
  
  } else {
    $("eye").innerText = "◉"
  }
}


window.onload = function () {
  $("eye").onclick = function() {
    toggle_dark();
  }
}