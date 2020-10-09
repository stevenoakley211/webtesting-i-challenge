module.exports = {
  succeed,
  fail,
  repair,
  get,
};

function succeed(item) {
  if (item.enhancement < 20){
    item.enhancement = item.enhancement + 1;
  }return { ...item };
  
}

function fail(item){
  if (item.enhancement < 15) {
  item.durability = item.durability - 5
} else  {
  item.durability = item.durability - 10
}
if (item.enhancement > 16) {
  item.enhancement = item.enhancement - 1
}
  return { ...item };
}

function repair(item) {
  item.durability = 100
  return { ...item };
}

function get(item) {
  let newName = item.name;
    if(item.enhancement > 0 && item.enhancement <= 20) {
      newName = `[+${item.enhancement}] ${item.name}`;
      return { ...item, name: newName }
    }else {
       return { ...item };
      }
    }
 
