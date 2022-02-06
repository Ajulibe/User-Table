import styled from "@emotion/styled";

export const EmptyContainer = styled.div`
  justify-content: center;
  display: flex;
  align-items: center;
  margin-top: 10%;
  padding-bottom: 2rem;
  .icon {
    font-size: 4rem;
  }

  @media only screen and (max-width: 312px) {
    align-items: flex-start;
    justify-content: flex-start;
    margin-left: 3.9rem;
  }

  .desc {
    width: 42.2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding-bottom: 4rem;

    .header {
      font-size: 1.8rem;
      font-weight: 500;
      margin-top: 2.1rem;
    }

    .body {
      margin-top: 2.1rem;
      line-height: 2.4rem;
      font-weight: 300;
      font-size: 1.4rem;

      @media only screen and (max-width: 312px) {
        text-align: left;
      }
    }
  }
`;
