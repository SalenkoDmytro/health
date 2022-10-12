import styled from 'styled-components';

export const SideBarStyled = styled.div`
  padding-left: 94px;
  height: 100vh;
`;

export const Summary = styled.div`
  margin-bottom: 40px;
`;

export const SummaryTitle = styled.p`
  margin-bottom: 30px;
  font-size: 14px;
  line-height: 17px;
  letter-spacing: 0.04em;
`;

export const SummarySubtitle = styled.p`
  width: 270px;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  letter-spacing: 0.04em;
  color: #9b9faa;
`;

export const SummaryList = styled.ul`
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  letter-spacing: 0.04em;
  width: 288px;
  color: #9b9faa;
`;

export const SummaryListItem = styled.li`
  display: flex;
  justify-content: space-between;

  :not(:last-child){
    margin-bottom: 10px;
  }
`;



