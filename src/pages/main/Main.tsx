import axios, { AxiosResponse } from "axios";
import * as React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ACCOUNTNAME, TOKEN, BASE_URL } from "../../constants";
import { ContainerStyled } from "../../components/container/Container";
import Header from "../../components/header/Header";
import { BoardWrap } from "../board/Board";

const MainContainer = styled(ContainerStyled)`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 30px;
  @media (max-width: 680px) {
    width: 100%;
    position: relative;
    margin-top: 0;
    padding: 10px;
  }
`;

const BoardLink = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: none;
  cursor: pointer;
  width: 30%;
  height: 44px;
  border-radius: 5px;
  font-size: 18px;
  font-weight: 700;
  text-align: center;
  line-height: 2.3;
  margin: 10px auto;
  background: #977ae1;
  color: #ffffff;
  &:hover {
    background-color: #5a4a82;
  }
  @media (max-width: 680px) {
    width: 70%;
    font-size: 18px;
    line-height: auto;
  }
  @media (max-width: 460px) {
    font-size: 16px;
    font-weight: 500;
  }
`;

const MainExp = styled.strong`
  font-size: 22px;
  font-weight: 700;
  margin-bottom: 30px;
  text-align: center;
  display: block;
  @media (max-width: 680px) {
    word-break: keep-all;
    line-height: 28px;
    padding: 10px;
    font-size: 22px;
  }
`;

const Main = () => {
  interface BoardDataProps {
    id: string;
    content: string;
  }
  interface BoardDataResponse {
    post: BoardDataProps[];
  }
  const [boardData, setBoardData] = React.useState<BoardDataResponse>();

  React.useEffect(() => {
    const getBoardList = async () => {
      try {
        const res: AxiosResponse<any> = await axios.get(
          `${BASE_URL}/post/${ACCOUNTNAME}/userpost/`,
          {
            headers: {
              Authorization: `Bearer ${TOKEN}`,
              "Content-type": "application/json",
            },
          },
        );
        setBoardData(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getBoardList();
  }, []);

  return (
    <>
      <Header />
      <BoardWrap>
        <MainContainer>
          <MainExp>이름을 클릭해서 롤링페이지를 작성해주세요 💚</MainExp>
          {boardData?.post?.map(data => (
            <BoardLink
              to={`/board/${data.id}`}
              key={data.id}
              state={{ boardTitle: data.content }}
            >
              {data.content}
            </BoardLink>
          ))}
        </MainContainer>
      </BoardWrap>
    </>
  );
};

export default Main;
