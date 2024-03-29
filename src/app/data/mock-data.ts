import {Product} from "../interfaces/product.interface";

export class MockData {
  public static products: Product[] = [
    {
      'id': 11,
      'title': 'OPPO F5 Youth',
      'modelName': 'F5 Youth',
      'color': 'Gold',
      'productType': 'Mobile',
      'brand': 'OPPO',
      'price': 16990
    },
    {
      'id': 12,
      'title': 'Dell Inspiron 7000',
      'modelName': 'Inspiron',
      'color': 'Gray',
      'productType': 'Laptop',
      'brand': 'DELL',
      'price': 59990
    }
  ];
}
