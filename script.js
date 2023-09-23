const trafficLight = "yellow";

switch (trafficLight) {
  case "Yellow":
    console.log("Slow Down");
    break;
  case "Green":
    console.log("GO");
    break;
  case "Red":
    console.log("STOP");
    break;
  default:
    console.log("Traffic Light not working");
}

const grade = 60;

switch (true) {
  case grade >= 80:
    console.log("Latter Grade: A");
    break;
  case grade >= 70:
    console.log("Latter Grade: B");
    break;
  case grade >= 60:
    console.log("Latter Grade: C");
    break;
  case grade >= 50:
    console.log("Latter Grade: D");
    break;
  default:
    console.log("Latter Grade: F");
}

const animal = "Dog";

switch (animal) {
  case "Cow":
  case "Giraffe":
  case "Dog":
  case "Pig":
    console.log("This animal is NOT extinct");
    break;
  case "Dinosaur":
  case "Dodo":
    console.log("This animal is extinct");
    break;
  default:
    console.log("I am not an animal of this kind.");
}
