import React, { useState } from "react";
import styles from "./Privacidade.module.css";

export default function Privacidade() {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className={styles.privContainer}>
      <h1 className={styles.privTitle}>Política de Privacidade</h1>

      {/* Compact summary (shown por padrão) */}
      <div className={styles.privCard}>
        <p>
          No <strong>CyberTech</strong> sua privacidade é importante. Coletamos
          apenas dados necessários (nome, e-mail, autenticação via Firebase,
          progresso na plataforma) para fornecer e melhorar nossos serviços. Seus
          dados não são vendidos e podem ser excluídos a qualquer momento mediante solicitação.
        </p>

        <div className={styles.actions}>
          <button
            className={styles.toggleBtn}
            onClick={() => setExpanded(true)}
            aria-expanded={expanded}
          >
            Ler política completa
          </button>
        </div>
      </div>

      {/* Full policy (expandable) */}
      {expanded && (
        <div className={styles.privFull}>
          <button
            className={styles.collapseBtn}
            onClick={() => setExpanded(false)}
            aria-label="Ler menos"
          >
            ← Voltar à versão resumida
          </button>

          <section className={styles.section}>
            <h2>1. Introdução</h2>
            <p>
              Esta Política de Privacidade descreve como o <strong>CyberTech</strong> coleta,
              utiliza, armazena e protege dados pessoais, em conformidade com a Lei Geral de Proteção de Dados (LGPD — Lei nº 13.709/2018).
            </p>
          </section>

          <section className={styles.section}>
            <h2>2. Quais dados coletamos</h2>
            <ul>
              <li><strong>Dados fornecidos:</strong> nome, e-mail, dados de perfil, conteúdo submetido.</li>
              <li><strong>Dados de autenticação:</strong> credenciais e tokens gerenciados pelo Firebase Auth.</li>
              <li><strong>Dados técnicos:</strong> IP, dispositivo, navegador, dados de uso e cookies essenciais.</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2>3. Como utilizamos seus dados</h2>
            <ul>
              <li>Gerir sua conta e autenticação.</li>
              <li>Salvar progresso e preferências.</li>
              <li>Melhorar e personalizar a experiência do usuário.</li>
              <li>Garantir segurança e prevenir fraudes.</li>
              <li>Enviar comunicados importantes sobre sua conta.</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2>4. Base legal</h2>
            <p>
              Tratamos dados com base em: execução de contrato, legítimo interesse,
              consentimento (quando aplicável) e cumprimento de obrigação legal.
            </p>
          </section>

          <section className={styles.section}>
            <h2>5. Compartilhamento de dados</h2>
            <p>
              Não vendemos dados. Utilizamos serviços externos apenas para operação:
              <strong>Firebase (Google)</strong> para autenticação e armazenamento e
              provedores de hospedagem. Esses parceiros seguem padrões de segurança.
            </p>
          </section>

          <section className={styles.section}>
            <h2>6. Armazenamento e retenção</h2>
            <p>
              Dados são armazenados no Firebase enquanto sua conta estiver ativa ou
              quando necessário por obrigações legais. Você pode solicitar exclusão a qualquer momento.
            </p>
          </section>

          <section className={styles.section}>
            <h2>7. Segurança</h2>
            <p>
              Implementamos TLS/HTTPS, controle de acesso e práticas recomendadas para proteger dados.
              Apesar disso, nenhum sistema é 100% infalível.
            </p>
          </section>

          <section className={styles.section}>
            <h2>8. Cookies</h2>
            <p>
              Usamos cookies essenciais para operação (manter sessão, preferências). A desativação pode impactar funcionalidades.
            </p>
          </section>

          <section className={styles.section}>
            <h2>9. Seus direitos (LGPD)</h2>
            <ul>
              <li>Solicitar acesso aos dados;</li>
              <li>Corrigir informações;</li>
              <li>Portabilidade;</li>
              <li>Exclusão;</li>
              <li>Revogação de consentimento.</li>
            </ul>
            <p>Solicitações podem ser feitas pelo e-mail de contato abaixo.</p>
          </section>

          <section className={styles.section}>
            <h2>10. Exclusão de dados</h2>
            <p>
              Para excluir sua conta, entre em contato conosco. Após solicitação, removeremos os dados, salvo os retidos por obrigação legal.
            </p>
          </section>

          <section className={styles.section}>
            <h2>11. Atualizações</h2>
            <p>Podemos atualizar esta política; notificaremos usuários quando houver mudanças relevantes.</p>
          </section>

          <section className={styles.section}>
            <h2>12. Contato</h2>
            <p>
              Para dúvidas ou solicitações de dados:
              <br />
              <strong>suporte@cybertech.com</strong>
            </p>
          </section>
        </div>
      )}

      {/* Compact footer always visible */}
      <p className={styles.privFooter}>
        <small>Última atualização: 28 de novembro de 2025</small>
      </p>
    </div>
  );
}
