// src/screens/Resume/index.tsx

import React, { useState, useCallback, useEffect } from "react";
import { 
  View, 
  TouchableOpacity, 
  Text as RNText, 
  ActivityIndicator,
  StatusBar
} from "react-native";
import { VictoryPie } from "victory-native";
import { useTheme } from "styled-components/native";
import { useFocusEffect } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";

import {
  Container,
  Header,
  Title,
  MonthNavigation,
  MonthText,
  IconButton,
  PieContainer,
  CategoryListContainer,
  CategoryList,
  CategoryCard,
  CategoryHeader,
  ColorDot,
  CategoryName,
  CategoryDetails,
  CategoryPercent,
  CategoryAmount
} from "./styles";

import { getTransactions } from "../../services/api";

type Transaction = {
  tipo: "entrada" | "saida";
  categoria: string;
  preco: number;
  data: string;
};

type ResumeItem = {
  categoria: string;
  total: number;
  cor: string;
  percent: string;
};

// Paleta de cores vibrantes e diversas
const COLOR_PALETTE = [
  '#4E79A7', '#F28E2C', '#E15759', '#76B7B2', '#59A14F',
  '#EDC949', '#AF7AA1', '#FF9DA7', '#9C755F', '#BAB0AB',
  '#17BECF', '#D62728', '#AA0DFE', '#3283FE', '#85660D',
  '#1A9850', '#66BD63', '#A6D96A', '#D9EF8B', '#FEE08B',
];

export function Resume() {
  const theme = useTheme();
  const today = new Date();
  const [month, setMonth] = useState(today.getMonth() + 1);
  const [year, setYear] = useState(today.getFullYear());
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [selectedTipo, setSelectedTipo] = useState<"entrada" | "saida">("entrada");
  const [resumeData, setResumeData] = useState<ResumeItem[]>([]);
  const [totalSum, setTotalSum] = useState(0);
  const [loading, setLoading] = useState(true);

  // Carregar transações
  useFocusEffect(
    useCallback(() => {
      let isActive = true;

      async function loadAll() {
        try {
          setLoading(true);
          const all = await getTransactions();
          if (isActive) setTransactions(all);
        } catch (err) {
          console.error("Erro ao carregar transações:", err);
        } finally {
          if (isActive) setLoading(false);
        }
      }
      loadAll();

      return () => { isActive = false; };
    }, [])
  );

  // Processar transações
  useEffect(() => {
    function processTransactions() {
      if (transactions.length === 0) {
        setResumeData([]);
        setTotalSum(0);
        return;
      }

      const filtered = transactions.filter(t => {
        if (!t.data) return false;
        
        try {
          const dt = new Date(t.data);
          return (
            t.tipo === selectedTipo &&
            dt.getMonth() + 1 === month &&
            dt.getFullYear() === year
          );
        } catch (e) {
          console.error("Erro ao processar data:", t.data, e);
          return false;
        }
      });

      // Agrupar por categoria
      const categoryMap: Record<string, number> = {};
      filtered.forEach(t => {
        const cat = t.categoria.trim().toUpperCase();
        categoryMap[cat] = (categoryMap[cat] || 0) + Number(t.preco);
      });

      // Calcular total geral
      const sum = Object.values(categoryMap).reduce((acc, val) => acc + val, 0);
      setTotalSum(sum);

      const result = Object.entries(categoryMap).map(([categoria, total], idx) => ({
        categoria,
        total,
        cor: COLOR_PALETTE[idx % COLOR_PALETTE.length],
        percent: sum > 0 ? ((total / sum) * 100).toFixed(0) : "0"
      }));

      setResumeData(result);
    }

    processTransactions();
  }, [transactions, month, year, selectedTipo]);

  // Preparar dados do gráfico
  const chartData = resumeData.map(d => ({
    x: d.categoria,
    y: d.total,
    label: `${d.percent}%`
  }));
  
  const chartColors = resumeData.map(d => d.cor);

  // Navegação entre meses
  const isCurrent = month === today.getMonth() + 1 && year === today.getFullYear();
  
  function prevMonth() {
    if (month === 1) { 
      setMonth(12); 
      setYear(y => y - 1); 
    } else {
      setMonth(m => m - 1);
    }
  }
  
  function nextMonth() {
    if (isCurrent) return;
    if (month === 12) { 
      setMonth(1); 
      setYear(y => y + 1); 
    } else {
      setMonth(m => m + 1);
    }
  }

  if (loading) {
    return (
      <Container>
        <ActivityIndicator size="large" color={theme.colors.primary} />
      </Container>
    );
  }

  return (
    <Container>
      {/* StatusBar com cor azul */}
      <StatusBar 
        backgroundColor={theme.colors.primary} 
        barStyle="light-content" 
      />
      
      {/* Cabeçalho com cor azul original */}
      <Header>
        <Title>Resumo</Title>
      </Header>

      {/* Alternar entre Entradas/Saídas */}
      <View style={{ flexDirection: 'row', justifyContent: 'center', marginVertical: 12 }}>
        {(["entrada", "saida"] as const).map(tipo => (
          <TouchableOpacity
            key={tipo}
            onPress={() => setSelectedTipo(tipo)}
            style={{
              paddingVertical: 6,
              paddingHorizontal: 16,
              backgroundColor: selectedTipo === tipo
                ? theme.colors.primary
                : theme.colors.shape,
              borderRadius: 20,
              marginHorizontal: 8,
            }}
          >
            <RNText style={{
              color: selectedTipo === tipo
                ? theme.colors.shape
                : theme.colors.text,
              fontWeight: 'bold'
            }}>
              {tipo === 'entrada' ? 'Entradas' : 'Saídas'}
            </RNText>
          </TouchableOpacity>
        ))}
      </View>

      <MonthNavigation>
        <IconButton onPress={prevMonth}>
          <Feather name="chevron-left" size={24} color={theme.colors.text} />
        </IconButton>
        <MonthText>{`${month}/${year}`}</MonthText>
        <IconButton onPress={nextMonth} disabled={isCurrent}>
          <Feather
            name="chevron-right"
            size={24}
            color={isCurrent ? theme.colors.text_light : theme.colors.text}
          />
        </IconButton>
      </MonthNavigation>

      <PieContainer>
        {resumeData.length > 0 && totalSum > 0 ? (
          <VictoryPie
            data={chartData}
            colorScale={chartColors}
            innerRadius={0}
            padAngle={2}
            labels={({ datum }) => datum.label}
            style={{
              data: {
                stroke: theme.colors.background,
                strokeWidth: 2,
                strokeOpacity: 0.9,
                fillOpacity: 0.9
              },
              labels: {
                fill: '#FFFFFF',
                fontSize: 14,
                fontWeight: 'bold',
              },
            }}
            labelRadius={100}
            animate={{ duration: 500 }}
            width={300}
            height={300}
          />
        ) : (
          <View style={{ 
            width: 300, 
            height: 300, 
            justifyContent: 'center', 
            alignItems: 'center' 
          }}>
            <RNText style={{ 
              color: theme.colors.text,
              fontSize: 16,
              fontWeight: 'bold'
            }}>
              Nenhum dado disponível
            </RNText>
          </View>
        )}
      </PieContainer>

      <CategoryListContainer>
        <CategoryList>
          {resumeData.map(item => (
            <CategoryCard key={item.categoria}>
              <CategoryHeader>
                <ColorDot color={item.cor} />
                <CategoryName>{item.categoria}</CategoryName>
              </CategoryHeader>
              
              <CategoryDetails>
                <CategoryPercent>
                  {item.percent}%
                </CategoryPercent>
                
                <CategoryAmount>
                  R$ {Number(item.total).toFixed(2)}
                </CategoryAmount>
              </CategoryDetails>
            </CategoryCard>
          ))}
        </CategoryList>
      </CategoryListContainer>
    </Container>
  );
}