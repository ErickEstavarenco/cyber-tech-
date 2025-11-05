# 🔀 Comandos para Mesclar Blog e Firebase na merged-project

## 📋 Situação Atual
- **Firebase**: está em `victor-branch`
- **Blog**: está em `isabella-branch`
- **Merge final**: será feito na `merged-project`

---

## ⚠️ IMPORTANTE: Você tem mudanças locais não commitadas!

Antes de fazer o merge, você precisa decidir:

### Opção 1: Commitar suas mudanças locais (Recomendado)
```bash
# Adicionar todas as mudanças
git add .

# Fazer commit
git commit -m "Melhorias: design login, componentes, hooks, etc"

# Depois seguir com os comandos de merge abaixo
```

### Opção 2: Salvar temporariamente (Stash)
```bash
# Salvar mudanças temporariamente
git stash save "Mudanças locais antes do merge"

# Depois seguir com os comandos de merge abaixo

# Para recuperar depois:
# git stash pop
```

---

## 🚀 Comandos do Git Bash para o Merge

### 1. Preparação
```bash
# Atualizar todas as branches remotas
git fetch origin

# Mudar para a branch merged-project
git checkout merged-project

# Atualizar merged-project com o remoto
git pull origin merged-project
```

### 2. Criar Backup (Segurança)
```bash
# Criar backup da merged-project antes do merge
git branch backup-merged-project-$(date +%Y%m%d)
```

### 3. Mesclar isabella-branch (Blog)
```bash
# Mesclar a branch do Blog
git merge origin/isabella-branch -m "Merge: Blog feature from isabella-branch"
```

### 4. Mesclar victor-branch (Firebase)
```bash
# Mesclar a branch do Firebase
git merge origin/victor-branch -m "Merge: Firebase feature from victor-branch"
```

### 5. Resolver Conflitos (se houver)
```bash
# Ver quais arquivos têm conflito
git status

# Para cada arquivo com conflito:
# 1. Abra o arquivo no editor
# 2. Procure por marcadores de conflito: <<<<<<< ======= >>>>>>>
# 3. Escolha qual código manter ou combine ambos
# 4. Remova os marcadores de conflito
# 5. Salve o arquivo

# Depois marque como resolvido:
git add <arquivo-resolvido>

# Ou adicionar todos os arquivos resolvidos:
git add .

# Finalizar o merge:
git commit -m "Resolve conflicts: merge blog and firebase"
```

### 6. Testar Localmente
```bash
# Instalar dependências (se necessário)
npm install

# Rodar o projeto
npm run dev

# Verificar se tudo está funcionando:
# - Blog funciona?
# - Firebase está configurado?
# - Não há erros no console?
```

### 7. Enviar para o GitHub
```bash
# Enviar merged-project atualizada
git push origin merged-project
```

---

## 📝 Comandos Completos (Tudo de Uma Vez)

```bash
# 1. Preparação
git fetch origin
git checkout merged-project
git pull origin merged-project

# 2. Backup
git branch backup-merged-project-$(date +%Y%m%d)

# 3. Merge Blog
git merge origin/isabella-branch -m "Merge: Blog feature from isabella-branch"

# 4. Se houver conflitos, resolva e depois:
# git add .
# git commit -m "Resolve conflicts: isabella-branch"

# 5. Merge Firebase
git merge origin/victor-branch -m "Merge: Firebase feature from victor-branch"

# 6. Se houver conflitos, resolva e depois:
# git add .
# git commit -m "Resolve conflicts: victor-branch"

# 7. Testar
npm install
npm run dev

# 8. Push
git push origin merged-project
```

---

## 🛠️ Comandos Úteis em Caso de Problemas

### Ver diferenças entre branches
```bash
# Ver o que será mesclado do Blog
git diff merged-project origin/isabella-branch

# Ver o que será mesclado do Firebase
git diff merged-project origin/victor-branch
```

### Desfazer merge (se algo der errado)
```bash
# Se o merge ainda não foi commitado:
git merge --abort

# Se já foi commitado, voltar para antes do merge:
git reset --hard HEAD~1  # CUIDADO: remove o último commit
```

### Ver histórico visual
```bash
# Ver gráfico de branches e merges
git log --oneline --graph --all -20
```

### Verificar se Firebase está configurado
```bash
# Ver arquivos do Firebase na branch
git ls-tree -r origin/victor-branch --name-only | grep -i firebase
```

### Verificar se Blog está completo
```bash
# Ver arquivos do Blog na branch
git ls-tree -r origin/isabella-branch --name-only | grep -i blog
```

---

## ✅ Checklist Final

- [ ] Mudanças locais foram commitadas ou salvas (stash)
- [ ] Merged-project está atualizada
- [ ] Backup criado
- [ ] isabella-branch mesclada (Blog)
- [ ] victor-branch mesclada (Firebase)
- [ ] Conflitos resolvidos (se houver)
- [ ] Projeto testado localmente
- [ ] Push feito para merged-project

---

## 📞 Próximos Passos Após o Merge

1. **Testar todas as funcionalidades**
   - Login/Cadastro com Firebase
   - Blog funcionando
   - Navegação entre páginas

2. **Verificar dependências**
   - Firebase SDK instalado?
   - Todas as dependências no package.json?

3. **Merge para main (se tudo estiver ok)**
   ```bash
   git checkout main
   git pull origin main
   git merge merged-project -m "Merge: Blog and Firebase features"
   git push origin main
   ```

