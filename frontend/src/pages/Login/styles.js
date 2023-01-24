import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
  height: 100vh;
`;

export const Content = styled.div`
  gap: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  box-shadow: 0 1px 2px #0003;
  background-color: white;
  min-width: 675px;
  min-height: 700px;
  padding: 20px;
  border-radius: 15px;
`;
export const OutsideContent = styled.div`
  display: flex;
  align-items:center;
  justify-content:center;
  flex-direction: row;
  gap: 100px;
`;

export const Label = styled.label`
  font-size: 120px;
  font-weight: bold;
  color: #6F42C1;
  font-family: Sora;
  padding-right: 39.5%;

`;
export const Title = styled.h1`
  font-size: 40px;
  font-weight: 700;
  color: #6610F2;
`;
export const subtitle = styled.h2`
  font-weight: 400;
  font-size: 24px;
  line-height: 29px;

  color: #1E1E1E;
`;

export const LabelSignup = styled.label`
  font-size: 16px;
  color: #676767;
`;

export const labelError = styled.label`
  font-size: 14px;
  color: red;
`;

export const Strong = styled.strong`
  cursor: pointer;
  a {
    text-decoration: none;
    color: #676767;
  }
`;

export const Banner = styled.img`
  max-width: 705px;
  height: 625px;
`;

export const Line = styled.img`
  display:flex;
  width: 100%;
`;
