export class Recipe {
  public name: string;
  public description: string;
  public imagePath: string;

  constructor(name: string, descr: string, imgpath: string) {
    this.name = name;
    this.description = descr;
    this.imagePath = imgpath;
  }
}

export class Ingredient {
  constructor(
    public name: string,
    public amount: number,
    public price: number
  ) {}
}
