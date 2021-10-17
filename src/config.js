const layersOrder = [
    { name: 'background', number: 7 },
    { name: 'gradient', number: 3 },
    { name: 'overlay', number: 4 },
    { name: 'text2', number: 54 },
];
  
const format = {
    width: 150,
    height: 150
};

const rarity = [
    { key: "", val: "original" },
    { key: "_r", val: "rare" },
    { key: "_sr", val: "super rare" },
];

const defaultEdition = 1000;

module.exports = { layersOrder, format, rarity, defaultEdition };