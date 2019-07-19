export class Ingredient {
  public name: string;
  public amount: number;
  public price?: number;

  constructor(name: string, amount: number, price?: number) {
    (this.name = name), (this.amount = amount), (this.price = price);
  }
}

export class Recipe {
  public name: string;
  public description: string;
  public imagePath: string;
  public ingredients: Ingredient[];

  constructor(
    name: string,
    descr: string,
    imgpath: string,
    ingredients: Ingredient[]
  ) {
    this.name = name;
    this.description = descr;
    this.imagePath = imgpath;
    this.ingredients = ingredients;
  }
}
