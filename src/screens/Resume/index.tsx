import React, { useCallback, useState } from "react";
import { useTheme } from "styled-components";
import { RFValue } from "react-native-responsive-fontsize";
import {
  Container,
  Header,
  Title,
  Content,
  ChartContainer,
  MonthSelect,
  PreviousButton,
  MonthName,
  NextButton,
  Icon,
} from "./styles";
import { LoadingContainer } from "../Dashboard/styles";

export function Resume() {
  return (
    <Container>
      <Header>
        <Title>Resumo por categoria</Title>
      </Header>
    </Container>
  );
}
