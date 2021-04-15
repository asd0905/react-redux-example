import {combineReducers} from 'redux';

import PostReducer from './reducer_post';
import ActivePost from './reducer_active_post';

// 글로벌 스테이트로 사용할 수 있도록 리듀서들을 모으고, 원하는 키값으로 맵핑
const rootReducer = combineReducers({
    post: PostReducer,
    activePost: ActivePost
})

export default rootReducer;
