import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Modal, TouchableWithoutFeedback, Keyboard, Alert } from "react-native";
import { yupResolver } from "@hookform/resolvers/yup";
import uuid from "react-native-uuid";
import * as Yup from "yup";

import { Button } from "../../components/Form/Button";
import { CategorySelectButton } from "../../components/Form/CategorySelectButton";
import { InputForm } from "../../components/Form/InputForm";
import { TransactionTypeButton } from "../../components/Form/TransactionTypeButton";
import { IconProps } from "../../components/Form/TransactionTypeButton/styles";
import { CategorySelect } from "../CategorySelect";
import { DataListProps } from '../Dashboard/index';
import {
  Container,
  Header,
  Title,
  Form,
  Fields,
  TransactionsTypes,
} from "./styles";

interface FormData extends DataListProps {}

const schema = Yup.object().shape({
	name: Yup.string().required("Nome é obrigatório!"),
	amount: Yup.number()
		.typeError("Informe um valor numérico!")
		.positive("O valor não pode ser negativo!")
		.required("Insira um valor!"),
});

export function Register() {
  const [transactionType, setTransactionType] = useState<IconProps["type"] | "">("");
  const [categoryModalOpen, setCategoryModalOpen] = useState(false);
  const [category, setCategory] = useState({
    key: "category",
    name: "Categoria",
  });
	const {
		control,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm({ resolver: yupResolver(schema) });

  function handleTransactionTypeSelect(type: IconProps["type"]) {
    setTransactionType(type);
  }

  function handleCloseSelectCategoryModal() {
    setCategoryModalOpen(false);
  }

  function handleOpenSelectCategoryModal() {
    setCategoryModalOpen(true);
  }

	async function handleRegister(form: FormData) {
		if (!transactionType) return Alert.alert("Selecione o tipo da transação!");
		if (category.key === "category")
			return Alert.alert("Selecione a categoria!");

		const newTransaction: DataListProps = {
			id: String(uuid.v4()),
			name: form.name,
			amount: form.amount,
			type: transactionType,
			category: category.key,
			date: String(new Date()),
		};
	}

  return (
		<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <Container>
      <Header>
        <Title>Cadastro</Title>
      </Header>
      <Form>
        <Fields>
          <InputForm
            name="name"
            control={control}
            placeholder="Nome"
            autoCapitalize="sentences"
            autoCorrect={false}
            error={errors.name && errors.name.message}
          />
          <InputForm
            name="amount"
            control={control}
            placeholder="Preço"
            keyboardType="numeric"
            error={errors.amount && errors.amount.message}
          />

          <TransactionsTypes>
            <TransactionTypeButton
              type="positive"
              title="Income"
              onPress={() => handleTransactionTypeSelect("positive")}
              isActive={transactionType === "positive"}
            />
            <TransactionTypeButton
              type="negative"
              title="Outcome"
              onPress={() => handleTransactionTypeSelect("negative")}
              isActive={transactionType === "negative"}
            />
          </TransactionsTypes>

          <CategorySelectButton
            title={category.name}
            onPress={handleOpenSelectCategoryModal}
          />
        </Fields>
        <Button title="Enviar" onPress={handleSubmit(handleRegister)} />
      </Form>
      <Modal visible={categoryModalOpen}>
        <CategorySelect
          category={category}
          setCategory={setCategory}
          closeSelectCategoryModal={handleCloseSelectCategoryModal}
        />
      </Modal>
    </Container>
		</TouchableWithoutFeedback>
  );
}
