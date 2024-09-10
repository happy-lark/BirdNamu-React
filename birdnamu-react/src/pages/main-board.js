import React from 'react';
import { useHistory } from 'react-router-dom'; 
import '../assets/styles/main.css';


const HomePage = () => {
  const history = useHistory();

  const handleItemClick = (url) => {
    history.push(url);
  };

  return (
    <div>
      <header className="journal-list">
        <div>
          <ul style={{ listStyle: 'none' }}>
            <li>
              <object data="../data/img/icons/crow-solid.svg" type="image/svg+xml"></object>
            </li>
            <li className="journal-title">자유게시판</li>
          </ul>
        </div>
        <div className="sort">
          <form>
            <select name="sort" id="sort">
              <option id="sort-option" value="whole" selected>전체글</option>
              <option id="sort-option" value="q">질문글</option>
              <option id="sort-option" value="no-q">일상글</option>
            </select>
          </form>
        </div>
      </header>
      <main>
        <section>
          <article className="jitem" onClick={() => handleItemClick('./board.html')}>
            <div>
              <ul className="jtext">
                <li id="jdate">#질문</li>
                <li id="jtitle">성별은 언제쯤 알 수 있나요?</li>
                <li id="content">어쩌다 보니 집사가 된 지 3일차네요...</li>
                <li id="jreaction">2024년00월00일 추천 00 댓글 00</li>
              </ul>
            </div>
            <div id="jimage">
              <img src="../data/img/사랑앵무.jpg" alt="임의의 사진" />
            </div>
          </article>
          <article className="jitem" onClick={() => handleItemClick('./board.html')}>
            <div>
              <ul className="jtext">
                <li id="jdate">#일상</li>
                <li id="jtitle">소파가 남아 나지않는 요즘</li>
                <li id="content">소파 뒷부분은 잘 안 보여서 몰랐는데...</li>
                <li id="jreaction">2024년00월00일 추천 00 댓글 00</li>
              </ul>
            </div>
            <div id="jimage">
              <img src="../data/img/사랑앵무.jpg" alt="임의의 사진" />
            </div>
          </article>
        </section>
        <div id="floating-btn">
          <a href="../html/board-create.html">
            <img src="../data/img/icons/circle-pluc-solid.svg" alt="추가 아이콘" />
          </a>
        </div>
      </main>
      <footer className="navbar">
        <ul>
          <li>
            <a href="../html/main-board.html">
              <img src="../data/img/icons/compass-solid-color.svg" alt="Compass" />
            </a>
          </li>
          <li>
            <a href="../html/main-todo.html">
              <img src="../data/img/icons/list-check-solid.svg" alt="List" />
            </a>
          </li>
          <li>
            <a href="../html/main.html">
              <img src="../data/img/icons/pen-nib-solid.svg" alt="Pen" />
            </a>
          </li>
          <li>
            <a href="../html/checker_info.html">
              <img src="../data/img/icons/stethoscope-solid.svg" alt="Stethoscope" />
            </a>
          </li>
          <li>
            <a href="../html/login.html">
              <img src="../data/img/icons/circle-user-solid.svg" alt="User" />
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
};

export default HomePage;
