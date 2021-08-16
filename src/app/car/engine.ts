export class Engine {
  engineType: string;
  private company = "private";
  protected prote = "protexcted";

  constructor(engineType: string){
    this.engineType =engineType;
  }

  housePower(value){
    return (1000 * value)
  }

}
