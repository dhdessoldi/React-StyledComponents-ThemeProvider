import React from "react";
import styled from "styled-components";

const ItemDiv = styled.div`
  display: flex;
  flex-direction: column;

  .text {
    font-weight: bold;
  }
`;

export default function Item ({ type, from, value }) {
  return (
    <ItemDiv>
      <span className="text">{type}</span>
      <span>{from}</span>
      <span>{value}</span>
    </ItemDiv>
  );
}
