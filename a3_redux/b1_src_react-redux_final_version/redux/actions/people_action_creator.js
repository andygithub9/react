/* 
  該文件專門為 Count 組件生成 action 對象
*/

import { ADD_PERSON } from '../constant';

export const createAddPersonAction = personObj => ({ type: ADD_PERSON, data: personObj });
