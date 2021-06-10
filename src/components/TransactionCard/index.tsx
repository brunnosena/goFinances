import React from "react";
import { IconProps } from '../Form/TransactionTypeButton/styles';
import { categories } from "../../utils/categories";
import {
  Container,
  Title,
  Amount,
  Footer,
  Category,
  Icon,
  CategoryName,
  Date,
} from "./styles";

export interface TransactionCardProps {
	type: IconProps["type"];
	name: string;
	amount: string;
	category: string;
	date: string;
}

interface Props {
	data: TransactionCardProps;
}

export function TransactionCard({ data }: Props) {
  const [category] = categories.filter((item) => item.key === data.category);
  return (
    <Container>
      <Container>
        <Title>{data.name}</Title>

        <Amount type={data.type}>
          {data.type === "negative" ? "- " : "+ "}
          {data.amount}
        </Amount>

        <Footer>
          <Category>
            <Icon name={category!.icon} />
					  <CategoryName>{category!.name}</CategoryName>
          </Category>
          <Date>{data.date}</Date>
        </Footer>
      </Container>
    </Container>
  );
}
