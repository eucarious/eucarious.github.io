/**
 *         MY ANTI DEPRESSANTS JUST KICKED
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

let average = 0;
let total = 0;
let qtyTotal = 0;

let drinks = [["coffee",2.2],["tea",2.2],["choco",2.2],["softbottle",2.2]]
let breakfast = [["pudding",0.50],["beans",0.8],["toast",0.5]]
let baked = [["roll",0.50]]
let fruit = [["apple",0.70]]
let custom = []

function $(id){
  return document.getElementById(id)
}


setDefaults = function() {
  $("owncup").checked = false
  $("cup-qty").disabled = true
  $("cup-qty").value = 0

  for (i = 0 ; i < drinks.length; i++)
  {
    let idName = drinks[i][0]
    idName = idName.toLowerCase()
    $(idName+"-qty").value = 0;
  }

  for (i = 0 ; i < breakfast.length; i++)
  {
    let idName = breakfast[i][0]
    idName = idName.toLowerCase()
    $(idName+"-qty").value = 0;
  }

  for (i = 0 ; i < baked.length; i++)
  {
    let idName = baked[i][0]
    idName = idName.toLowerCase()
    $(idName+"-qty").value = 0;
  }

  for (i = 0 ; i < fruit.length; i++)
  {
    let idName = fruit[i][0]
    idName = idName.toLowerCase()
    $(idName+"-qty").value = 0;
  }

}

setPrices = function() {
  for (i = 0 ; i < drinks.length; i++)
  {
    let idName = drinks[i][0]
    idName = idName.toLowerCase()
    $(idName+"-price").innerText = drinks[i][1].toFixed(2);
  }

  for (i = 0 ; i < breakfast.length; i++)
  {
    let idName = breakfast[i][0]
    idName = idName.toLowerCase()
    $(idName+"-price").innerText = breakfast[i][1].toFixed(2);
  }

  for (i = 0 ; i < baked.length; i++)
  {
    let idName = baked[i][0]
    idName = idName.toLowerCase()
    $(idName+"-price").innerText = baked[i][1].toFixed(2);
  }

  for (i = 0 ; i < fruit.length; i++)
  {
    let idName = fruit[i][0]
    idName = idName.toLowerCase()
    $(idName+"-price").innerText = fruit[i][1].toFixed(2);
  }
}

cupDiscountToggle = function() {
  if ($("owncup").checked == true)  {
    $("cup-qty").disabled = false
  } else if ($("owncup").checked == false) {
    $("cup-qty").disabled = true
  }
}

reset = function() {
  $("total").innerText = "";
  $("qtytotal").innerText = "";
  $("average").innerText = ""

  setDefaults()
}

calculateTotal = function() {
  total = 0 ;
  qtyTotal = 0;
  let qtyTemp = 0;
  let had_NaN = false;
  for (i = 0 ; i < drinks.length; i++)
  {
    total += drinks[i][1]*parseInt($(drinks[i][0]+"-qty").value);
    qtyTemp = parseInt($(drinks[i][0]+"-qty").value);
    if (isNaN(qtyTemp)) {
      qtyTotal += 0;
      had_NaN = true;
    } else {
      qtyTotal += qtyTemp;
    }
  }
  for (i = 0 ; i < breakfast.length; i++)
  {
    total += breakfast[i][1]*parseInt($(breakfast[i][0]+"-qty").value);
    qtyTemp = parseInt($(breakfast[i][0]+"-qty").value);
    if (isNaN(qtyTemp)) {
      qtyTotal += 0;
      had_NaN = true;
    } else {
      qtyTotal += qtyTemp;
    }
  }
  for (i = 0 ; i < baked.length; i++)
  {
    total += baked[i][1]*parseInt($(baked[i][0]+"-qty").value);
    qtyTemp = parseInt($(baked[i][0]+"-qty").value);
    if (isNaN(qtyTemp)) {
      qtyTotal += 0;
      had_NaN = true;
    } else {
      qtyTotal += qtyTemp;
    }
  }
  for (i = 0 ; i < fruit.length; i++)
  {
    total += fruit[i][1]*parseInt($(fruit[i][0]+"-qty").value);
    qtyTemp = parseInt($(fruit[i][0]+"-qty").value);
    if (isNaN(qtyTemp)) {
      qtyTotal += 0;
      had_NaN = true;
    } else {
      qtyTotal += qtyTemp;
    }
  }

  if(had_NaN)
  {
    alert("Items with invalid quantities have been omitted from the calculation. Please check your quantities")
  }

  total = discountCalc(total).toFixed(2);

  $("total").innerText = "Total: "+total;
  $("qtytotal").innerText = "Item total: "+qtyTotal;

  if (qtyTotal == 0) {
    $("average").innerText = "Average cost: N/A"
  } else {
    $("average").innerText = "Average cost: "+(total/qtyTotal).toFixed(2);  }
  console.log(total)
  console.log(qtyTotal)
}

function discountCalc (amount) {
  if ($("owncup").checked == true && parseInt($("cup-qty").value) > 0) {
    let qtyTemp = 0;
    let qtyDrinks = 0;
    for (i = 0 ; i < drinks.length; i++)
    {
      qtyTemp = parseInt($(drinks[i][0]+"-qty").value)
      if (isNaN(qtyTemp)) {
        qtyDrinks += 0;
      } else if ($(drinks[i][0]+"-qty").classList.contains("discount")) {
        qtyDrinks += qtyTemp;
      }
    }
    if (qtyDrinks >= parseInt($("cup-qty").value))
    {
      amount -= 0.2*parseInt($("cup-qty").value)
    } else {
      amount -= 0.2*qtyDrinks
    }
    return amount
  } else {
    return amount
  }
}

window.onload = function () {
  setDefaults();
  setPrices();
  $("calc-total").onclick = function() {
    calculateTotal();
  }
  $("reset").onclick = function() {
    reset();
  }

  $("owncup").onclick = function() {
    cupDiscountToggle();
  }
}
