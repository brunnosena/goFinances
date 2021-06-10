import React from "react";
import { HighlightCard } from "../../components/HighlightCard";
import { TransactionCard, TransactionCardProps } from "../../components/TransactionCard";
import {
  Container,
  Header,
  UserWrapper,
  UserInfo,
  Photo,
  User,
  UserGreeting,
  UserName,
  Icon,
  List,
  Transactions,
  Title,
  TransactionList,
  LogoutButton,
} from "./styles";

export interface DataListProps extends TransactionCardProps {
	id: string;
}

export function Dashboard() {
  const data: DataListProps[] = [
    {
      id: String(new Date().getTime()),
      type: "positive",
      name: "Dessenvolvimento de site",
      amount: "R$ 12.000,00",
      category: "salary",
      date: "13/04/2020",
    },
    {
      id: String(new Date().getTime()+1),
      type: "negative",
      name: "Hamburgueria Pizzy",
      amount: "R$ 59,00",
      category: "food",
      date: "13/12/2020",
    },
    {
      id: String(new Date().getTime()+2),
      type: "negative",
      name: "Aluguel do apartamento",
      amount: "R$ 17,00",
      category: "leisure",
      date: "13/01/2020",
    }
  ];

  return (
    <Container>
      <Header>
        <UserWrapper>
          <UserInfo>
            <Photo
              source={{
                uri: "https://avatars.githubusercontent.com/u/15018891?v=4",
              }}
            />
            <User>
              <UserGreeting>Olá, </UserGreeting>
              <UserName>Brunno</UserName>
            </User>
          </UserInfo>
          <LogoutButton onPress={() => {}}>
								<Icon name="power" />
							</LogoutButton>
        </UserWrapper>
      </Header>

      <List>
        <HighlightCard
          type="up"
          title="Entradas"
          amount="R$ 17.400,00"
          lastTransaction="Última alteração em 13 de janeiro"
        />
        <HighlightCard
          type="down"
          title="Saídas"
          amount="R$ 1.259,00"
          lastTransaction="Última alteração em 13 de junho"
        />
        <HighlightCard
          type="total"
          title="Total"
          amount="R$ 16.141,00"
          lastTransaction="01 à 16 de abril"
        />
      </List>

      <Transactions>
        <Title>Listagem</Title>

        <TransactionList
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <TransactionCard data={item} />}
        />
      </Transactions>
    </Container>
  );
}
