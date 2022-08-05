class Vehicle {
  constructor(name, wheel) {
    this.name = name;
    this.wheel = wheel;
  }
}
const myVehicle = new Vehicle('운송수단', 2);
console.log(myVehicle);


class Bicycle extends Vehicle {
  constructor(name, wheel) {
    super(name, wheel); //Vehicle 클래스를 의미
  }
}
const myBicycle = new Bicycle('삼천리', 2);
const daughtesrBicycle = new Bicycle('세발', 3);
console.log(myBicycle);
console.log(daughtesrBicycle);


class Car extends Vehicle {
  constructor(name, wheel, license) {
    super(name, wheel); //Vehicle 클래스를 의미
    this.license = license; //추가적인 내용 확장(상속)
  }
}
const myCar = new Car('현대', 4, true);
const daughtersCar = new Car('기아', 4, false);
console.log(myCar);
console.log(daughtersCar);