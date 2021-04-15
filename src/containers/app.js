import React, {Component} from 'react';
import {connect} from 'react-redux';
import {selectPost} from '../actions';
import {bindActionCreators} from 'redux';

import PostListComponent from '../components/post-list';
import PostDetailComponent from '../components/post-detail';

class App extends Component {
    renderList() {
        return this.props.post.map(post => {
            return (
                <PostListComponent
                    // onPostSelect={(selectPost1) => this.props.dispatch(selectPost(selectPost1))}
                    onPostSelect={(selectPost) => this.props.selectPost(selectPost)}
                    key={post.title}
                    post={post}/>
            )
        })
    }
    render() {
        return (
            <div>
                <ul className="list-group col-sm-4">
                    {this.renderList()}
                </ul>
                <PostDetailComponent activePost={this.props.activePost} />
            </div>
        )
    }
}

// 글로벌 어플리케이션 스테이트를 가져와서 props에서 사용할 수 있도록 변환
const mapStateToProps = (state) => {
    return {
        post: state.post,
        activePost: state.activePost
    }
};

// dispatch를 사용하고 싶은 actions을 골라와서 props로 사용할 수 있도록 변호나
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({selectPost: selectPost}, dispatch);
}

// 컨테이너로 만들기 위해서 컴포넌트와, 필요한 데이터를 연결해줌, 그리고 반환
export default connect(mapStateToProps, mapDispatchToProps)(App)
