export class Engine {
  engineType: string;

  constructor(engineType: string){
    this.engineType =engineType;
  }

  housePower(value){
    return (1000 * value)
  }

}
