// 액션이 보내준 데이터를 가지고 판단하여 글로벌 스테이트가 될 데이터를 반환
export default (previousState = null, action) => {
    console.log('active post : ', action);
    switch(action.type) {
        case 'POST_SELECTED':
            return action.post;
        default:
            return previousState;
    }
}
