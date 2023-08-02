const fruits = [
  { fruitId: 1, fruitName: "Apel", fruitType: "IMPORT", stock: 10 },
  { fruitId: 2, fruitName: "Kurma", fruitType: "IMPORT", stock: 20 },
  { fruitId: 3, fruitName: "apel", fruitType: "IMPORT", stock: 50 },
  { fruitId: 4, fruitName: "Manggis", fruitType: "LOCAL", stock: 100 },
  { fruitId: 5, fruitName: "Jeruk Bali", fruitType: "LOCAL", stock: 10 },
  { fruitId: 5, fruitName: "KURMA", fruitType: "IMPORT", stock: 20 },
  { fruitId: 5, fruitName: "Salak", fruitType: "LOCAL", stock: 150 },
];

const uniqueFruits = fruits.reduce((acc, fruit) => {
  if (
    !acc.some(
      (item) => item.fruitName.toLowerCase() === fruit.fruitName.toLowerCase()
    )
  ) {
    acc.push(fruit);
  }
  return acc;
}, []);

// Pertanyaan 1
const andiFruits = uniqueFruits.map((fruit) => fruit.fruitName);
console.log("Buah yang dimiliki Andi:", andiFruits);

// Pertanyaan 2
const fruitGroups = {};
fruits.forEach((fruit) => {
  const { fruitType, fruitName } = fruit;
  if (!fruitGroups[fruitType]) {
    fruitGroups[fruitType] = [];
  }
  fruitGroups[fruitType].push(fruitName);
});
const numberOfContainers = Object.keys(fruitGroups).length;
console.log("Jumlah wadah:", numberOfContainers);
console.log("Buah di masing-masing wadah:", fruitGroups);

// Pertanyaan 3
const fruitStocks = {};
fruits.forEach((fruit) => {
  const { fruitType, stock } = fruit;
  if (!fruitStocks[fruitType]) {
    fruitStocks[fruitType] = 0;
  }
  fruitStocks[fruitType] += stock;
});
console.log("Total stock buah di masing-masing wadah:", fruitStocks);
