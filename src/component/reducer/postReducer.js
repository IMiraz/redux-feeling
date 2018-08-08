import {FETCH_POSTS, NEW_POST} from '../action/type'

const initiateState = {
items:[],
item:{}
}

export default function (state = initiateState, action)
{
     switch(action.type) {
         default:
         return state;
     }

}