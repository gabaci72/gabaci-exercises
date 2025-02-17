const team = {
  _players: [
    { firstName: 'Pete', lastName: 'Wheeler', age: 54 },
    { firstName: 'Sam', lastName: 'Smith', age: 30 },
    { firstName: 'Alex', lastName: 'Johnson', age: 25 }
  ],
  _games: [
    { opponent: 'Jets', teamPoints: 42, opponentPoints: 27 },
    { opponent: 'Giants', teamPoints: 35, opponentPoints: 31 },
    { opponent: 'Eagles', teamPoints: 28, opponentPoints: 30 }
  ],

  get players() {
    return this._players;
  },

  get games() {
    return this._games;
  },

  addPlayer(newFirstName, newLastName, newAge) {
    const player = {
      firstName: newFirstName,
      lastName: newLastName,
      age: newAge
    };
    this._players.push(player);
  },

  addGame(newOpponent, newTeamPoints, newOpponentPoints) {
    const game = {
      opponent: newOpponent,
      teamPoints: newTeamPoints,
      opponentPoints: newOpponentPoints
    };
    this._games.push(game);
  }
};

// Add a new game against the 'Titans'
team.addGame('Titans', 100, 98);

// Log the _games property to check the addition
console.log(team.games);
