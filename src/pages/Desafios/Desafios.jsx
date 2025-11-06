import React, { useState } from "react";
import "./Desafios.css";

export default function Desafios() {
  const total = 7;
  const corretas = Array(total).fill(["if", "elif", "else"]);
  const [pontuacao, setPontuacao] = useState(0);
  const [respondidas, setRespondidas] = useState(Array(total).fill(false));
  const [feedbacks, setFeedbacks] = useState(Array(total).fill(""));
  const [valores, setValores] = useState(
    Array.from({ length: total }, () => ["", "", ""])
  );

  const atualizarPlacar = () =>
    `Pontuação: ${pontuacao} / ${total}`;

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
      novosFeedbacks[num] = "✅ Correto!";
      setPontuacao((prev) => prev + 1);
    } else {
      novosFeedbacks[num] = "❌ Resposta incorreta. (sem nova tentativa)";
    }

    novasRespondidas[num] = true;
    setFeedbacks(novosFeedbacks);
    setRespondidas(novasRespondidas);
  };

  const verificarFim = respondidas.every((r) => r);
  const porcentagem = Math.round((pontuacao / total) * 100);
  let msg = "😐 Precisa praticar mais...";
  if (porcentagem >= 85) msg = "🏆 Excelente!";
  else if (porcentagem >= 60) msg = "👍 Bom trabalho!";

  const desafios = [
    { titulo: "Nível de fome", codigo: `fome = "muita"

print(f"Seu nível de fome é: {fome}")
print("-" * 30)
`, vars: ["muita", "média", "leve"] },
    { titulo: "Clima do dia", codigo: `clima = "chuvoso"

print("Previsão do tempo:")` },
    { titulo: "Nota do aluno", codigo: `nota = 8

print("Resultado do aluno:")` },
    { titulo: "Verificação de idade", codigo: `idade = 17` },
    { titulo: "Login do usuário", codigo: `usuario = "admin"
senha = "1234"` },
    { titulo: "Controle de temperatura", codigo: `temperatura = 32` },
    { titulo: "Verificação de número", codigo: `numero = -3` },
  ];

  return (
    <div className="pagina-desafios">
      <div className="scoreboard">{atualizarPlacar()}</div>

      <h1>Desafios com IF, ELIF e ELSE 🧠</h1>
      <p className="subtitle">
        Escolha as palavras corretas para completar o código! (Apenas uma tentativa)
      </p>

      {desafios.map((d, i) => (
        <div key={i} className="challenge-container">
          <h2>{`Desafio ${i + 1} — ${d.titulo}`}</h2>
          <pre>
            {d.codigo}
            {["a", "b", "c"].map((letra, idx) => (
              <div key={letra}>
                <select
                  value={valores[i][idx]}
                  onChange={(e) => handleChange(i, idx, e.target.value)}
                  disabled={respondidas[i]}
                >
                  <option value="">___</option>
                  <option value="if">if</option>
                  <option value="elif">elif</option>
                  <option value="else">else</option>
                </select>{" "}
                {idx === 0 && `condição_1:`}
                {idx === 1 && `condição_2:`}
                {idx === 2 && `:`}
              </div>
            ))}
          </pre>
          <div
            className={`feedback ${
              feedbacks[i].includes("Correto") ? "correct" : "incorrect"
            }`}
          >
            {feedbacks[i]}
          </div>
          {!respondidas[i] && (
            <button
              className="btn-verificar"
              onClick={() => verificar(i)}
            >
              Verificar
            </button>
          )}
        </div>
      ))}

      {verificarFim && (
        <div className="final-score">
          {msg} Sua nota final é {pontuacao}/{total} ({porcentagem}%).
        </div>
      )}
    </div>
  );
}
