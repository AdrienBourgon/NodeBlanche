import * as AppConfig from '../Config/app.json'

export default class FilterDto {
  public page: number;
  public itemsPerPage: number;
  public orders: string[];
  public filters: string[][];

  constructor(obj) {
    this.page = obj.page || 1;
    this.itemsPerPage = obj.itemsPerPage || AppConfig.pagination.itemsPerPage;
    this.orders = obj.orders || [];
    this.filters = obj.filters || [];
  }
}