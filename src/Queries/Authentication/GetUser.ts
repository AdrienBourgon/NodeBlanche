import Query from '../Query';
import * as jwt from 'jsonwebtoken';
import * as AppConfig from '../../Config/app.json';
import Exception from '../../Infrastructure/Exception';

export default class GetUser extends Query {
  public Handle(req?: any): any {
    // Test user credentials here
    if(1 !== 1) {
      throw new Exception("Login failed");
    }

    // Generate authentication token
    return Promise.resolve({
      token: jwt.sign({
      user: {
        id: 1,
        name: 'foo',
        rights: ['READ', 'EDIT', 'DELETE']
      }
    },
    AppConfig.authentication.secret)
    });
  }
}
