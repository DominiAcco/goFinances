import React, { useState } from "react";
import {
  Container,
  Header,
  Title,
  Form,
  TransactionTypeContainer,
  TransactionButton,
  Icon,
  ButtonText,
  SendButton,
  SendButtonText
} from "./styles";

import { Input } from "../../components/Forms/Input";
import { postTransaction } from "../../services/api";
import { Alert } from "react-native";

export function Register() {
  const [transactionType, setTransactionType] = useState<"income" | "outcome" | null>(null);
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");

  async function handleSend() {
    if (!title || !amount || !category || !transactionType) {
      Alert.alert("Preencha todos os campos!");
      return;
    }

    const transaction = {
      title,
      amount: parseFloat(amount),
      category,
      type: transactionType,
      date: new Date().toISOString()
    };

    try {
      await postTransaction(transaction);
      Alert.alert("Transação salva com sucesso!");
      setTitle("");
      setAmount("");
      setCategory("");
      setTransactionType(null);
    } catch (error) {
      Alert.alert("Erro ao salvar transação.");
    }
  }

  return (
    <Container>
      <Header>
        <Title>Cadastro</Title>
      </Header>

      <Form>
        <Input placeholder="Nome" value={title} onChangeText={setTitle} />
        <Input placeholder="Preço" value={amount} onChangeText={setAmount} keyboardType="numeric" />

        <TransactionTypeContainer>
          <TransactionButton
            isActive={transactionType === "income"}
            activeColor="success"
            onPress={() => setTransactionType("income")}
          >
            <Icon name="arrowup" isActive={transactionType === "income"} activeColor="success" />
            <ButtonText>Income</ButtonText>
          </TransactionButton>

          <TransactionButton
            isActive={transactionType === "outcome"}
            activeColor="attention"
            onPress={() => setTransactionType("outcome")}
          >
            <Icon name="arrowdown" isActive={transactionType === "outcome"} activeColor="attention" />
            <ButtonText>Outcome</ButtonText>
          </TransactionButton>
        </TransactionTypeContainer>

        <Input placeholder="Categoria" value={category} onChangeText={setCategory} />
      </Form>

      <SendButton onPress={handleSend}>
        <SendButtonText>Enviar</SendButtonText>
      </SendButton>
    </Container>
  );
}
