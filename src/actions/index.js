// 상태변환이 필요한 데이터를 가져와서 원하는 데이터로 맵핑 시켜준뒤 반환
// 이때 반환되는 객체 데이터가 액션, 함수는 액션 생성자
// 액션에 type은 필수, 기본
export const selectPost = (post) => {
    console.log('action: ', post);
    return (
        {
            type: 'POST_SELECTED',
            post
        }
    )
}
