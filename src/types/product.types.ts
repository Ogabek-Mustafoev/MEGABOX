export interface IProduct {
  id?: string;
  productName: {
    uz: string;
    ru: string;
    cyr: string;
  };
  isNew: boolean;
  price: string;
  monthlyPrice: string;
  bonusPrise: string;
}
