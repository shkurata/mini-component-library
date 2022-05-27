/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";

const SIZES = {
  small: {
    height: 8,
    padding: 0,
    radius: 4,
  },
  medium: {
    height: 12,
    padding: 0,
    radius: 4,
  },
  large: {
    height: 24,
    padding: 4,
    radius: 8,
  },
};

const ProgressBar = ({ value, size }) => {
  const styles = SIZES[size];

  if (!styles) {
    throw new Error(`Invalid size: ${size}`);
  }

  return (
    <Wrapper
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin="0"
      aria-valuemax="100"
      style={{
        "--padding": styles.padding + "px",
        "--radius": styles.radius + "px",
      }}
      size={size}
    >
      <VisuallyHidden>{value}%</VisuallyHidden>
      <FillerWrapper>
        <Filler
          style={{
            "--width": value + "%",
            "--height": styles.height + "px",
          }}
        ></Filler>
      </FillerWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: ${COLORS.transparentGray15};
  border-radius: var(--radius) 0 0 var(--radius);
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  padding: var(--padding);
`;

const FillerWrapper = styled.div`
  border-radius: 4px;
  overflow: hidden;
`;

const Filler = styled.div`
  background-color: ${COLORS.primary};
  border-radius: 4px 0 0 4px;
  height: var(--height);
  width: var(--width);
`;

export default ProgressBar;
