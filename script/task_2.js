const calculateEngravingPrice = function(message, pricePerWord) {
  message = message.split(" ");
  console.log(message);
  for (let i = 0; i < message.length; i += 1) {
    return (
      "Цена гравировки предложения: " +
      [message.length * pricePerWord] +
      "." +
      "Цена гравировки одного слова: " +
      [pricePerWord] +
      "."
    );
  }
};

console.log(
  calculateEngravingPrice(
    "Proin sociis natoque et magnis parturient montes mus",
    10,
  ),
); // 80

console.log(
  calculateEngravingPrice(
    "Proin sociis natoque et magnis parturient montes mus",
    20,
  ),
); // 160

console.log(
  calculateEngravingPrice("Donec orci lectus aliquam est magnis", 40),
); // 240

console.log(
  calculateEngravingPrice("Donec orci lectus aliquam est magnis", 20),
); // 120
