import Communication from '../Services/Communication';
import { Sequelize } from 'sequelize-typescript';
import FilterDto from '../Dto/Filter.dto';
import * as Seq from 'sequelize';
import User from '../Models/User';

export default abstract class Query {
  protected db: Sequelize;
  protected filter: FilterDto;
  protected user: User;

  constructor(user: User, filters?: string) {
    this.db = Communication.getDB();
    this.filter = new FilterDto(filters !== undefined ? JSON.parse(filters): {});
    this.user = user;
  }

  public abstract Handle(req?: any): any;

  protected paginate(obj?: any): any {
    obj = obj || {};
    obj.offset = (this.filter.page - 1) * this.filter.itemsPerPage;
    obj.limit = this.filter.itemsPerPage;
    obj.where = obj.where || {};
    obj.order = this.filter.orders.length > 0 ? this.filter.orders : obj.order;

    // Filters
    this.filter.filters.forEach(f => {
      if(f[0] in obj.where) {
        var objFilters = obj.where[f[0]];
        obj.where[f[0]] = {};
        obj.where[f[0]][Seq.Op.and] = [
          objFilters,
          { [Seq.Op.substring]: f[1] }
        ];
      } else {
        obj.where[f[0]] = {
          [Seq.Op.substring]: f[1] 
        }
      }
    });
    
    return obj;
  }
}