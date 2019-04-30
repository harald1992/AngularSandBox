export interface IRecipe {
  name: string;
  components: IShoppingItem[];
}

export interface IShoppingItem {
  name: string;
  price: number;
}
