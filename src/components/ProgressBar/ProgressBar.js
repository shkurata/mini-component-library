/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";

const SIZES = {
  small: {
    "--height": "8px",
  },
  medium: {
    "--height": "12px",
  },
  large: {
    "--height": "24px",
  },
};

const ProgressBar = ({ value, size }) => {
  const styles = SIZES[size];
  return (
    <Wrapper style={styles} size={size}>
      <Filler value={value}></Filler>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: ${COLORS.transparentGray15};
  border-radius: 8px;
  box-shadow: inset 0px 2px 4px rgba(128, 128, 128, 0.35);
  height: var(--height);
  padding: ${({ size }) => size === "large" && "4px"};
  width: 100%;
`;

const Filler = styled.div`
  background-color: ${COLORS.primary};
  border-radius: ${({ value }) => (value === 100 ? "4px" : "4px 0 0 4px")};
  height: 100%;
  width: ${({ value }) => value}%;
`;

export default ProgressBar;
