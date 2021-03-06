import React from "react";
import styled from "styled-components/macro";
import { Link } from "react-router-dom";
import { IoMdArrowRoundForward } from "react-icons/io";
import ImageOne from "../images/1easy.jpeg";
import ImageTwo from "../images/2easy.jpeg";

const Section = styled.section`
  width: 100%;
  height: 100%;
  padding: 10rem calc((100vw - 1300px) / 2);
`;

const Container = styled.div`
  height: 100%;
  width: 100%;
  padding: 2rem 1rem;
`;

const Heading = styled.div`
  font-size: 1.5rem;
  padding: 2rem 1rem;
  margin-bottom: 40px;

  @media screen and (max-width: 768px) {
    text-align: start;
  }
`;

const InfoRow = styled.div`
  display: flex;
  flex-direction: row;
  padding: 1rem 0rem;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const InfoWrap = styled.div`
  padding: 0rem 1rem;
  min-height: 550px;
  height: 100%;

  h2 {
    margin-bottom: 1rem;
    font-weight: 400;
  }

  @media screen and (max-width: 768px) {
    margin-bottom: 1rem;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  max-width: 600px;
  max-height: 400px;
  object-fit: cover;
  margin-bottom: 1rem;
`;

const InfoLink = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #000d1a;
  width: 140px;
  transition: 0.3s;

  &:hover {
    transform: translateY(-2px);
  }
`;

const Arrow = styled(IoMdArrowRoundForward)`
  margin-left: 10px;
`;



const Listings = () => {
  return (
    <Section>
      <Container>
        <Heading>
          <h1>Beginner Plants</h1>
        </Heading>
        <InfoRow>
          <InfoWrap>
            <Image src={ImageOne} alt="home" />
            <h2>
              Monstera are species of evergreen tropical vines/shrubs that are
              native to Central America. Monsteras are famous for their natural
              leaf-holes, and has led to the rise of its nickname, Swiss Cheese
              Plant.
            </h2>
            <InfoLink to="/plants">
              <p>View Details</p>
              <Arrow />
            </InfoLink>
          </InfoWrap>
          <InfoWrap>
            <Image
              src={ImageTwo}
              alt="home"
              css={`
                margin-top: 120px;
                @media screen and (max-width: 768px) {
                  margin-top: 0px;
                }
              `}
            />
            <h2>
              The Snake Plant Laurentii is a succulent plant characterized by
              its upright swordlike leaves with vibrant yellow edges. A
              multitasker, the snake plant purifies indoor air by removing
              toxins such as formaldehyde, xylene, and toluene.
            </h2>
            <InfoLink to="/plants">
              <p>View Details</p>
              <Arrow />
            </InfoLink>
          </InfoWrap>
        </InfoRow>
      </Container>
    </Section>
  );
};

export default Listings;
