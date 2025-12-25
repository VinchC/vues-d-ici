/* eslint-disable @next/next/no-img-element */
import styled from "styled-components";

const SContainer = styled.div`
  align-items: center;
  display: flex;
`;

const SlideThree = () => (
  <SContainer>
    <img src="./images/station_serge_gainsbourg.jpg" className="overflow-hidden" alt="" />
  </SContainer>
);

export default SlideThree;
