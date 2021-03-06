import {FETCH_POSTS, NEW_POST} from '../action/type'

const initiateState = {
items:[],
item:{}
}
export default function (state = initiateState, action)
{
     switch(action.type) {
         case FETCH_POSTS:
         return {
             ...state,
             items:action.payLoad
         }
         case NEW_POST:
         return {
            ...state,
            item:action.payLoad
        }
         default:
         return state;
     }

}