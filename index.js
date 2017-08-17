import React from 'react'
import { View } from 'react-native'
import styled from 'styled-components/native'

const BASIC_LENGTH = 40

export const Cell = styled.View`
  justify-content: center;
  height: ${({ colSpan = 1 }) => colSpan * BASIC_LENGTH};
  width: ${({ rowSpan = 1 }) => rowSpan * BASIC_LENGTH};
  border-left-width: ${({ isFarLeft }) => (isFarLeft ? 1 : 0)};
  border-bottom-width: ${({ isFarBottom }) => (isFarBottom ? 1 : 0)};
  border-right-width: 1;
  border-top-width: 1;
`

// colsNum rowsNum
export const Row = styled.View`
  align-items: flex-start;
  flex-direction: row;
  justify-content: flex-start;
`

export const SecondLevelCell = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: ${({ colSpan = 1 }) => colSpan * BASIC_LENGTH};
  width: ${({ rowSpan = 1 }) => rowSpan * BASIC_LENGTH};
  border-right-width: ${({ isFarRight }) => (isFarRight ? 0 : 1)};
  border-bottom-width: ${({ isFarBottom }) => (isFarBottom ? 0 : 1)};
`
