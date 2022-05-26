class SodaMachine {
  constructor(args = {}) {
    this.sodas = args.sodas;
    this.cash = args.cash;
  }

  currentInventoryCount() {
    return this.sodas.length; //возвращаем кол-во напитков в массиве sodas: [pepsi, mountainDew, cokeZero, secondPepsi]
  }

  findSoda(sodaBrand) {
    return this.sodas.find(el => el.brand === sodaBrand);// с помощью метода find() возвращаем значение первого найденного в массиве элемента, значание которое запросил пользователь
  }

  sell(sodaBrand) {
  //нужно найти индекс газировки чтобы по нему удалить ее из автомата
    this.sodas.find((el, i) => {
        if(el.brand === sodaBrand) {
         this.sodas.splice(i, 1);
         return this.cash += el.price;
        } 
      })
  }
}

module.exports = { SodaMachine };
