import { doPost } from '../../../base/utilities/network';
import { Todo } from '../../objects/todo';

export default class MemberApiClient {

  constructor(
    private baseUrl: string
  ) {
  }

  public async listTodo() {
    type RESULT_TYPE = Todo[];
    return await doPost<RESULT_TYPE>(this.baseUrl + '/api/listTodo');
  }
}
