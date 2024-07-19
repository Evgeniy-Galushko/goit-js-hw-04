'use strict';


const profile = {
  players: {username: "Jacob", playTime: 300,},
  
  getInfo() {
    return `${this.players.username} has ${this.players.playTime} active hours!`;
  },
  changeUsername(newName) {
    this.players.username = newName;
  },
  updatePlayTime(hours) {
    this.players.playTime += hours
  }
}

console.log(profile.getInfo()); // "Jacob has 300 active hours!"

profile.changeUsername("Marco");
console.log(profile.getInfo()); // "Marco has 300 active hours!"

profile.updatePlayTime(20);
console.log(profile.getInfo()); // "Marco has 320 active hours!"

