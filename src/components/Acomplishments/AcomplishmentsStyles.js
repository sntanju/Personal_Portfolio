import styled from "styled-components"

export const Boxes = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  margin: 30px 0;

  @media ${props => props.theme.breakpoints.sm}{
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 10px;
  }
`
export const OuterBox = styled.div``;

export const Box = styled.div`
  background: #212D45;
  border-radius: 12px;
  padding: 20px;
  
  ${OuterBox} :hover & {
    animation-name: example;
    animation-duration: 1s;
    animation-iteration-count: 1;
    @keyframes example{
      0% { transform: rotateY(0deg); }
      100% { transform: rotateY(360deg); }
    }
  }
  @media ${props => props.theme.breakpoints.md} {
    padding: 15px;
  }

  @media ${props => props.theme.breakpoints.sm} {
    padding: 10px;
  }
`
export const BoxNum = styled.h5`
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  letter-spacing: 0.01em;
  color: #FFFFFF;
  margin-bottom: 8px;
`

export const BoxText = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.02em;
  color: rgba(255, 255, 255, 0.75);
`

export const Join = styled.div`
  display: flex;
  max-width: 1040px;
  justify-content: center;
  align-items: center;
  padding-bottom: 80px;

  @media ${props => props.theme.breakpoints.md}{
    display: flex;
    justify-content: center;
    padding-bottom: 64px;
  }

  @media ${props => props.theme.breakpoints.sm}{
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 32px;
  }
`

export const JoinText = styled.h5`
  display: flex;
  font-size: 24px;
  line-height: 40px;
  letter-spacing: 0.02em;
  color: rgba(255, 255, 255, 0.5);

@media ${props => props.theme.breakpoints.md}{
  line-height: 32px;
  font-size: 20px;
};

@media ${props => props.theme.breakpoints.sm}{
  font-size: 16px;
  line-height: 24px;
  margin: 0 0 16px;
}
`

export const IconContainer = styled.div`
  display: flex;

  @media ${props => props.theme.breakpoints.sm}{
    width: 160px;
    justify-content: space-between;
  }
`
