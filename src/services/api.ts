// src/services/api.ts

const API_BASE_URL = "http://192.168.0.109:3000/api/v1";

/**
 * Busca todas as transações.
 */
export async function getTransactions() {
  try {
    const response = await fetch(`${API_BASE_URL}/transacao`);
    if (!response.ok) {
      throw new Error(`Erro ao buscar transações: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Erro na API (getTransactions):", error);
    throw error;
  }
}

/**
 * Cadastra uma nova transação.
 */
export async function postTransaction(transaction: {
  title: string;
  amount: number;
  category: string;
  type: "income" | "outcome";
  date: string;
}) {
  try {
    const payload = {
      titulo: transaction.title,
      preco: transaction.amount,
      categoria: transaction.category,
      tipo: transaction.type === "income" ? "entrada" : "saida",
      data: transaction.date,
    };

    const response = await fetch(`${API_BASE_URL}/transacao`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      throw new Error(`Erro ao salvar transação: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Erro na API (postTransaction):", error);
    throw error;
  }
}


