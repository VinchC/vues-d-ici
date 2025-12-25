/* eslint-disable @next/next/no-img-element */
import styled from "styled-components";

const SContainer = styled.div`
  align-items: center;
  display: flex;
`;

const SlideOne = () => (
  <SContainer>
    <img src="./images/distribution_jeunes_ambitieux.jpg" className="w-full" alt="" />
  </SContainer>
);

export default SlideOne;
