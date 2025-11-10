import React, { useState } from "react";
import "./Desafio.css";

export default function Desafio2() {
  const total = 7;

  // Respostas corretas (em cada questão)
  const corretas = [
    ["+"],
    ["-"],
    ["*"],
    ["/"],
    ["%"],
    ["**"],
    ["and"]
  ];

  const [pontuacao, setPontuacao] = useState(0);
  const [respondidas, setRespondidas] = useState(Array(total).fill(false));
  const [feedbacks, setFeedbacks] = useState(Array(total).fill(""));
  const [valores, setValores] = useState(Array.from({ length: total }, () => [""]));

  const atualizarPlacar = () => `Pontuação: ${pontuacao} / ${total}`;

  const handleChange = (num, index, valor) => {
    if (respondidas[num]) return;
    const novosValores = [...valores];
    novosValores[num][index] = valor;
    setValores(novosValores);
  };

  const verificar = (num) => {
    if (respondidas[num]) return;
    const valoresQuestao = valores[num];
    if (valoresQuestao.includes("")) return;

    const isCorreta = valoresQuestao.every(
      (v, i) => v === corretas[num][i]
    );

    const novosFeedbacks = [...feedbacks];
    const novasRespondidas = [...respondidas];

    if (isCorreta) {
      novosFeedbacks[num] = "Correto!";
      setPontuacao((prev) => prev + 1);
    } else {
      novosFeedbacks[num] = "Resposta incorreta. (sem nova tentativa)";
    }

    novasRespondidas[num] = true;
    setFeedbacks(novosFeedbacks);
    setRespondidas(novasRespondidas);
  };

  const verificarFim = respondidas.every((r) => r);
  const porcentagem = Math.round((pontuacao / total) * 100);

  let msg = "Precisa praticar mais...";
  if (porcentagem >= 85) msg = "Excelente!";
  else if (porcentagem >= 60) msg = "Bom trabalho!";

  // Lista de desafios
  const desafios = [
    {
      titulo: "Soma de valores",
      codigo: `a = 10
b = 5
resultado = a ___ b
print(resultado)  # Esperado: 15`
    },
    {
      titulo: "Subtração simples",
      codigo: `x = 20
y = 8
resultado = x ___ y
print(resultado)  # Esperado: 12`
    },
    {
      titulo: "Multiplicação de números",
      codigo: `num1 = 4
num2 = 3
resultado = num1 ___ num2
print(resultado)  # Esperado: 12`
    },
    {
      titulo: "Divisão",
      codigo: `valor = 10
divisor = 2
resultado = valor ___ divisor
print(resultado)  # Esperado: 5.0`
    },
    {
      titulo: "Resto da divisão",
      codigo: `a = 9
b = 4
resultado = a ___ b
print(resultado)  # Esperado: 1`
    },
    {
      titulo: "Potência (exponenciação)",
      codigo: `base = 2
expoente = 4
resultado = base ___ expoente
print(resultado)  # Esperado: 16`
    },
    {
      titulo: "Operador lógico AND",
      codigo: `idade = 20
carteira = True
if idade >= 18 ___ carteira:
    print("Pode dirigir")`
    }
  ];

  // Opções disponíveis
  const opcoes = ["+", "-", "*", "/", "%", "**", "and", "or", "not"];

  return (
    <div className="pagina-desafios">
      <div className="scoreboard">{atualizarPlacar()}</div>

      <h1>Desafios de Operações em Python</h1>
      <p className="subtitle">
        Escolha o operador correto para completar o código! (Apenas uma tentativa)
      </p>

      {desafios.map((d, i) => (
        <div key={i} className="challenge-container">
          <h2>{`Desafio ${i + 1} — ${d.titulo}`}</h2>
          
          {/* O resultado final aparece dentro do espaço "___" */}
          <pre>
            {d.codigo.replace(
              "___",
              verificarFim
                ? `→ ${msg} Sua nota final é ${pontuacao}/${total} (${porcentagem}%) ←`
                : "___"
            )}
          </pre>

          <select
            value={valores[i][0]}
            onChange={(e) => handleChange(i, 0, e.target.value)}
            disabled={respondidas[i]}
          >
            <option value="">___</option>
            {opcoes.map((op) => (
              <option key={op} value={op}>{op}</option>
            ))}
          </select>

          <div
            className={`feedback ${
              feedbacks[i].includes("Correto") ? "correct" : "incorrect"
            }`}
          >
            {feedbacks[i]}
          </div>

          {!respondidas[i] && (
            <button className="btn-verificar" onClick={() => verificar(i)}>
              Verificar
            </button>
          )}
        </div>
      ))}

      {/*Removido o bloco final fixo — agora o resultado aparece dentro do código */}
    </div>
  );
}
