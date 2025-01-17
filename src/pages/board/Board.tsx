import axios from "axios";
import * as React from "react";
import { useParams } from "react-router";
import styled from "styled-components";
import Container from "../../components/container/Container";
import Header from "../../components/header/Header";
import TitleInput from "../../components/titleInput/TitleInput";
import { BASE_URL, TOKEN } from "../../constants";
import {
  ShareLinkToWriter,
  ShareLinkToReceiver,
} from "../../elements/buttons/shareBtn";

export const BoardWrap = styled.div`
  padding-top: 15px;
  @media (max-width: 680px) {
    height: 100%;
    background-color: #fffafc;
    padding-top: 10px;
  }
`;

export const ShareLinkBox = styled.div`
  max-width: 1400px;
  display: flex;
  flex-direction: row-reverse;
  gap: 10px;
  margin: 10px auto 0;
  padding: 10px;
  @media (max-width: 680px) {
    justify-content: center;
  }
`;

const Board = () => {
  const { id } = useParams();
  const [boardTit, setBoardTit] = React.useState("");
  React.useEffect(() => {
    const setBoard = async () => {
      try {
        const res = await axios.get(`${BASE_URL}/post/${id}`, {
          headers: {
            Authorization: `Bearer ${TOKEN}`,
            "Content-type": "application/json",
          },
        });
        setBoardTit(res.data.post.content);
      } catch (error) {
        console.log(error);
      }
    };
    setBoard();
  }, []);
  return (
    <>
      <Header />
      <BoardWrap>
        {/* <TitleInput /> */}
        <Container post={[]} boardTit={boardTit} />
        <ShareLinkBox>
          <ShareLinkToReceiver />
          <ShareLinkToWriter />
        </ShareLinkBox>
      </BoardWrap>
    </>
  );
};

export default Board;
