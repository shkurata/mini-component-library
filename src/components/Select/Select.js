import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import Icon from "../Icon";
import { getDisplayedValue } from "./Select.helpers";

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper>
      <SelectWrapper value={value} onChange={onChange}>
        {children}
      </SelectWrapper>
      <PresentationalBit>
        {displayedValue}
        <IconWrapper style={{ "--size": 24 + "px" }}>
          <Icon id="chevron-down" size={24} strokeWidth={2} />
        </IconWrapper>
      </PresentationalBit>
    </Wrapper>
  );
};

const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 10px;
  margin: auto;
  width: var(--size);
  height: var(--size);
  pointer-events: none;
`;

const SelectWrapper = styled.select`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
`;

const Wrapper = styled.div`
  position: relative;
  width: max-content;
`;

const PresentationalBit = styled.div`
  background-color: ${COLORS.transparentGray15};
  padding: 12px 16px;
  padding-right: 52px;
  border-radius: 8px;
  color: ${COLORS.gray700};

  ${SelectWrapper}:focus + & {
    outline: 1px dotted #212121
    outline: 5px auto -webkit-focus-ring-color;
  }

  ${SelectWrapper}:hover + & {
    color: ${COLORS.black};
  }
`;

export default Select;
