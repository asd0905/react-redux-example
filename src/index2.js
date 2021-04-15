import {createStore} from 'redux';

// 리듀서
const reducer = () => {
    return (
        [
            {
                'title': '2020년을 되돌아본 배짱이의 여행스토리'
            },
            {
                'title': '2020초등교육박람회+에듀테크쇼 8.13 ~ 16 코엑스 B홀 폐막 안내'
            },
            {
                'title': '일본여행 : 오이타, 벳푸, 유후인 여행코스'
            },
            {
                'title': '한국여행 맛집 탐방'
            },
            {
                'title': '주식용어 공매도 뜻과 숏스퀴즈(ft.GME, 게임스탑)'
            },
            {
                'title': '풋풋했던 일본 도쿄 랜선여행 2016'
            },
            {
                'title': '1박 2일 경주 여행코스 List6'
            }
        ]
    )
}

// store
const store = createStore(reducer);

// render
const render = () => {
    document.querySelector('.container').innerHTML = store.getState()[2].title;
}

render();
