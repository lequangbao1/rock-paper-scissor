let person = { name: 'Duoc', age: 24 }
function say(text1, text2) {
  console.log(text1 + ' ' + text2 + ' ' + this.name + ' ' + this.age)
}

say('Xin', 'Chao');