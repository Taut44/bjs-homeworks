console.clear();

const weapons = [new Knife(), new Staff(), new Axe(), new StormStaff(), new LongBow(), new Bow()];

function getNames() {
    return weapons.map(weapon => weapon.name);
};

function getCountReliableWeapons(durability) {
    const quantity = weapons.filter(weapon => weapon.durability > durability);
    return quantity.length;
};

function hasReliableWeapons(durability) {
    return weapons.some(weapon => weapon.durability > durability)
};

function getReliableWeaponsNames(durability) {
    return weapons.filter(weapon => weapon.durability > durability).map(weapon => weapon.name);
};

function getTotalDamage() {
    const totalDamage = weapons.reduce((total, weapon) => {
        return total + weapon.attack;
    }, 0);
    return totalDamage;
};

