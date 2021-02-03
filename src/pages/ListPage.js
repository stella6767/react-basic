import React, { useState } from 'react';
import styled from 'styled-components';

const StyledItemBoxDiv = styled.div`
  border: 1px solid black;
  padding: 10px;
  height: 100px;
  display: flex;
  margin: 20px;
  justify-content: space-between;
  align-items: center;
`;

const ListPage = () => {
  const [no, setNo] = useState(6);

  const [post, setPost] = useState({
    id: 5,
    title: '',
    content: '',
  });
  const [posts, setPosts] = useState([
    { id: 1, title: '내용1', content: '내용1' },
    { id: 2, title: '내용2', content: '내용1' },
    { id: 3, title: '내용3', content: '내용1' },
    { id: 4, title: '내용4', content: '내용1' },
    { id: 5, title: '내용5', content: '내용1' },
  ]);

  const handleWrite = (e) => {
    //listpage의 setPosts에 무엇을 담아야 함?
    //let post = { id: 6, title: '인풋값' };
    //setPosts({ ...posts, id:no });
    e.preventDefault(); // form태그가 하려는 액션을 중지 시켜야 함.
    setPosts([...posts, { ...post, id: post.id + 1 }]);
    //setPosts([...posts, post]);
    setPost({ ...post, id: post.id + 1 });
  };

  const handleForm = (e) => {
    console.log(e.target.name);
    console.log(e.target.value);

    //computed property names 문법(키 값 동적할당)
    setPost({ ...post, [e.target.name]: e.target.value }); //변수 키값을 동적으로 만들어냄...자바에는 없는 문법
    console.log(post.title);
    console.log(post.content);
  };

  // 삭제하기
  const handleDelete = (id) => {
    setPosts(posts.filter((post) => post.id !== id));
  };
  return (
    <div>
      <h1>리스트 페이지</h1>

      <form>
        <input
          type="text"
          placeholder="제목을 입력하세요..."
          value={post.title}
          onChange={handleForm}
          name="title"
        />
        <input
          type="text"
          placeholder="내용을 입력하세요..."
          value={post.content}
          onChange={handleForm}
          name="content"
        />
        <button type="button" onClick={handleWrite}>
          글쓰기
        </button>
      </form>
      <hr />
      {posts.map((post) => (
        <StyledItemBoxDiv>
          번호:{post.id} / 제목: {post.title} / 내용:{post.content}
        </StyledItemBoxDiv>
      ))}
    </div>
  );
};

export default ListPage;
