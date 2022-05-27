import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";

import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const STYLES = {
  small: {
    fontSize: 14,
    iconSize: 16,
    borderThickness: 1,
    height: 24,
  },
  large: {
    fontSize: 18,
    iconSize: 24,
    borderThickness: 2,
    height: 36,
  },
};

const IconInput = ({ label, icon, width = 250, size, ...delegated }) => {
  const styles = STYLES[size || "small"];

  return (
    <InputWrapper>
      <VisuallyHidden>{label}</VisuallyHidden>
      <IconWrapper style={{ "--size": styles.iconSize + "px" }}>
        <Icon id={icon} size={styles.iconSize} strokeWidth={2} />
      </IconWrapper>
      <Input
        {...delegated}
        style={{
          "--width": width + "px",
          "--height": styles.height + "px",
          "--border-thickness": styles.borderThickness + "px",
          "--font-size": styles.fontSize + "px",
        }}
      />
    </InputWrapper>
  );
};

const InputWrapper = styled.label`
  position: relative;
  color: ${COLORS.gray700};
  display: block;

  &:hover {
    color: ${COLORS.black};
  }
`;

const Input = styled.input`
  width: var(--width);
  height: var(--height);
  border: none;
  font-size: var(--font-size);
  border-bottom: var(--border-thickness) solid ${COLORS.black};
  outline-offset: 2px;
  padding-left: var(--height);
  color: inherit;
  font-weight: 700;

  &::placeholder {
    color: ${COLORS.gray500};
    font-weight: 400;
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto 0;
  height: var(--size);
`;

export default IconInput;
