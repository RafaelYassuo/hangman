import styled, {css} from "styled-components";
interface Props {
    type: 'success' | 'error' | 'info' | undefined;
}

export const MainContainer = styled.div<Props>`
    z-index: 9999;
    background-color: white;
    width: 70%;
    height: 100vh;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    --color: #E1E1E1;
  background-color: #F3F3F3;
  background-image: linear-gradient(0deg, transparent 24%, var(--color) 25%, var(--color) 26%, transparent 27%,transparent 74%, var(--color) 75%, var(--color) 76%, transparent 77%,transparent),
      linear-gradient(90deg, transparent 24%, var(--color) 25%, var(--color) 26%, transparent 27%,transparent 74%, var(--color) 75%, var(--color) 76%, transparent 77%,transparent);
  background-size: 55px 55px;

  @media (max-width: 1400px) {
    width: 100%;
  }

  @media (max-width: 768px) {
       flex-direction: column-reverse;
       justify-content: flex-end;
       height: 150vh;
  }

    .Forca{
        width: 100%;
        display: flex;
        margin-top: 4rem;
        height: 470px;
        /* flex-wrap: wrap; */

        @media (max-width: 768px) {
           flex-direction: column;
           margin-top: 0;
        }
    }

    .ImgContainer{
        max-width: 400px;

        @media (max-width: 768px) {
            margin: 0 auto;
        }

    }

    .img{
        width: 100%;
    }

    .LettersContainer{
        flex-wrap: wrap;
        height: 92%;
        display: flex;
        align-items: flex-end;
        
    }

    .Letters{
        color: black;
        margin-left: 2rem;
    }

    .gameover {
    ${(props) => {
      switch (props.type) {
        case "success":
          return css`
            color: green;
          `;
        case "error":
          return css`
            color: red;
          `;
        case "info":
          return css`
            color: blue;
          `;
        default:
          return css`
            background-color: white;
            color: black;
          `;
      }
    }}
        font-size: 1.25rem;
        margin-top: 2rem;
        text-align: center;

    @media (max-width: 768px) {
      font-size: 0.9rem;
    }
    }

    .centralizer{
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
`