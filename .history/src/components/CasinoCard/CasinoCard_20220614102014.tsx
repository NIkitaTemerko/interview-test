import React from 'react';
import styled from 'styled-components';

import brandImage from '../../assets/brandImage.svg';

type CasinoCardType = {
  className: string;
}

function CasinoCard({ className }: CasinoCardType) {
  return (
    <div className={className}>
      <img src={brandImage} alt="brandIMage" />
    </div>
  );
}

const StyledCasinoCard = styled(CasinoCard)`
  top 50%;
  right 50%;
  transform: translateY(-50%, -50%);
`;

export default StyledCasinoCard;
