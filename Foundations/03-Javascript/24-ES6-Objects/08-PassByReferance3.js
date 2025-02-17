let spaceship = {
    'Fuel Type': 'Turbo Fuel',
    homePlanet: 'Earth'
};

let greenEnergy = obj => {
    obj['Fuel Type'] = 'avocado oil';
};

let remotelyDisable = obj => {
    obj.disabled = true;
};

// Fonksiyonların tanımını string olarak logla
console.log("1- Initial spaceship:", spaceship);
console.log("2- Definition of greenEnergy function:", greenEnergy.toString());
console.log("3- Definition of remotelyDisable function:", remotelyDisable.toString());

// Fonksiyonları çağır ve sonuçları logla
greenEnergy(spaceship);
remotelyDisable(spaceship);

console.log("4- Final spaceship:", spaceship);