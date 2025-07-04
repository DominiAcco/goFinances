import React, { useEffect, useState } from 'react';
import {
  Container,
  Header,
  UserInfo,
  Photo,
  User,
  UserGreeting,
  UserName,
  UserWrapper,
  Icon,
  HighlightCards,
  Transactions,
  Text,
  TransationList
} from "./styles";

import { HighlightCard } from '../../components/HighlightCard';
import { Transaction } from '../../components/Transaction';
import { getTransactions } from '../../services/api';

interface TransactionData {
  id: number;
  titulo: string;
  preco: number;
  categoria: string;
  data: string;            // ISO string
  tipo: 'entrada' | 'saida';
}

export function Dashboard() {
  const [transactions, setTransactions] = useState<TransactionData[]>([]);
  const [totals, setTotals] = useState({
    entradas: 0,
    saidas: 0,
    total: 0,
    ultimaEntrada: '--',
    ultimaSaida: '--',
    periodo: '--'
  });

  useEffect(() => {
    async function load() {
      try {
        const data = await getTransactions();

        // Ordena por data decrescente (mais recente primeiro)
        const ordenadas = [...data].sort((a, b) =>
          new Date(b.data).getTime() - new Date(a.data).getTime()
        );

        setTransactions(ordenadas);

        // Filtra entradas e saídas
        const entradas = ordenadas.filter(t => t.tipo === 'entrada');
        const saidas   = ordenadas.filter(t => t.tipo === 'saida');

        // Soma valores
        const soma = (arr: TransactionData[]) =>
          arr.reduce((acc, t) => acc + Number(t.preco), 0);

        const totalEntradas = soma(entradas);
        const totalSaidas   = soma(saidas);
        const total         = totalEntradas - totalSaidas;

        // Formatador "DD de Mês"
        const formatarDiaMes = (dataStr: string) => {
          const d   = new Date(dataStr);
          const dia = String(d.getDate()).padStart(2, '0');
          const mes = d.toLocaleString('pt-BR', { month: 'long' });
          return `${dia} de ${mes}`;
        };

        // Última entrada e saída: primeiro elemento de cada array
        const ultimaEntrada = entradas[0]
          ? formatarDiaMes(entradas[0].data)
          : '--';
        const ultimaSaida = saidas[0]
          ? formatarDiaMes(saidas[0].data)
          : '--';

        // Período geral: de mais antiga a mais recente
        const maisRecente = ordenadas[0]?.data;
        const maisAntiga  = ordenadas[ordenadas.length - 1]?.data;
        const periodo = (maisAntiga && maisRecente)
          ? `De ${formatarDiaMes(maisAntiga)} a ${formatarDiaMes(maisRecente)}`
          : '--';

        setTotals({
          entradas: totalEntradas,
          saidas: totalSaidas,
          total,
          ultimaEntrada,
          ultimaSaida,
          periodo
        });
      } catch (err) {
        console.error('Erro ao carregar transações:', err);
      }
    }

    load();
  }, []);

  const formatarMoeda = (valor: number) =>
    valor.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    });

  return (
    <Container>
      <Header>
        <UserWrapper>
          <UserInfo>
            <Photo source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBANCPL-jtI4TIy52JaivBpQadyJQm1tyiBA&s' }} />
            <User>
              <UserGreeting>Olá</UserGreeting>
              <UserName>Aluno</UserName>
            </User>
          </UserInfo>
          <Icon name="power" />
        </UserWrapper>
      </Header>

      <HighlightCards>
        <HighlightCard
          type="up"
          title="Entradas"
          amount={formatarMoeda(totals.entradas)}
          lastTransaction={
            totals.ultimaEntrada !== '--'
              ? `Última entrada dia ${totals.ultimaEntrada}`
              : 'Nenhuma entrada registrada'
          }
        />

        <HighlightCard
          type="down"
          title="Saídas"
          amount={`- ${formatarMoeda(totals.saidas)}`}
          lastTransaction={
            totals.ultimaSaida !== '--'
              ? `Última saída dia ${totals.ultimaSaida}`
              : 'Nenhuma saída registrada'
          }
        />

        <HighlightCard
          type="total"
          title="Total"
          amount={formatarMoeda(totals.total)}
          lastTransaction={
            totals.periodo !== '--'
              ? totals.periodo
              : 'Não há transações registradas'
          }
        />
      </HighlightCards>

      <Transactions>
        <Text>Listagem</Text>
        <TransationList
          data={transactions.map(t => ({
            id: t.id,
            title: t.titulo,
            amount: formatarMoeda(t.preco),
            type: t.tipo === 'entrada' ? 'positive' : 'negative',
            typeExpense: t.categoria,
            dataTransaction: new Date(t.data).toLocaleDateString('pt-BR'),
            icon: t.tipo === 'entrada' ? 'arrow-up-circle' : 'arrow-down-circle'
          }))}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => <Transaction data={item} />}
        />
      </Transactions>
    </Container>
  );
}
