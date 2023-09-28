export interface IStoreState {
  quiz: IQuizState;
  products: IProductsState;
  ui: IUiState;
}

export interface IQuizState {
  currentPage: number;
  answers: any[];
}
export interface IUiState {
  isLoading: boolean;
}

export interface IProductsState {
  products: IProduct[];
}
export interface IProduct {
  id: number;
  title: string;
  image: string;
  price: number;
  oldPrice: null | number;
}

export interface IQuestion {
  question: string;
  options: string[];
}
