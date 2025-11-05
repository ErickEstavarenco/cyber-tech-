# Comandos Git Bash para Mesclar Branches

## 📋 Passo a Passo para Mesclar Blog e Firebase

### 1. Verificar e Atualizar Branches Locais

```bash
# Atualizar todas as branches remotas
git fetch origin

# Ver todas as branches (locais e remotas)
git branch -a

# Verificar qual branch você está
git branch
```

### 2. Identificar a Branch do Firebase

```bash
# Verificar branches remotas que podem conter Firebase
git branch -r

# Verificar commits em branches específicas (substitua NOME_BRANCH)
git log origin/victor-branch --oneline --grep="firebase" -i
git log origin/isabella-branch --oneline --grep="firebase" -i
git log origin/merged-project --oneline --grep="firebase" -i

# Ou verificar arquivos relacionados ao Firebase
git ls-tree -r origin/victor-branch --name-only | grep -i firebase
git ls-tree -r origin/isabella-branch --name-only | grep -i firebase
git ls-tree -r origin/merged-project --name-only | grep -i firebase
```

### 3. Garantir que está na Branch Main

```bash
# Mudar para a branch main
git checkout main

# Atualizar a branch main com o remoto
git pull origin main
```

### 4. Mesclar a Branch do Blog (pagina-blog)

```bash
# Atualizar a branch pagina-blog
git fetch origin pagina-blog

# Mesclar pagina-blog na main
git merge origin/pagina-blog -m "Merge branch 'pagina-blog' into main"

# Se houver conflitos, resolva-os e depois:
# git add .
# git commit -m "Resolve conflicts: pagina-blog"
```

### 5. Mesclar a Branch do Firebase

**Opção A: Se Firebase está em victor-branch**
```bash
git fetch origin victor-branch
git merge origin/victor-branch -m "Merge branch 'victor-branch' (Firebase) into main"
```

**Opção B: Se Firebase está em isabella-branch**
```bash
git fetch origin isabella-branch
git merge origin/isabella-branch -m "Merge branch 'isabella-branch' (Firebase) into main"
```

**Opção C: Se Firebase está em merged-project**
```bash
git fetch origin merged-project
git merge origin/merged-project -m "Merge branch 'merged-project' (Firebase) into main"
```

### 6. Resolver Conflitos (se houver)

```bash
# Ver arquivos com conflito
git status

# Para cada arquivo com conflito, edite e resolva manualmente
# Depois marque como resolvido:
git add <arquivo-resolvido>

# Após resolver todos os conflitos:
git commit -m "Resolve conflicts: merge blog and firebase"
```

### 7. Testar Localmente

```bash
# Instalar dependências (se necessário)
npm install

# Rodar o projeto para testar
npm run dev
```

### 8. Enviar para o GitHub

```bash
# Enviar as mudanças para o repositório remoto
git push origin main

# Se houver divergências e precisar forçar (CUIDADO - use apenas se necessário)
# git push origin main --force-with-lease
```

## 🔄 Alternativa: Mesclar Tudo de Uma Vez

Se quiser mesclar todas as branches de uma vez:

```bash
# 1. Garantir que está na main atualizada
git checkout main
git pull origin main

# 2. Mesclar todas as branches relevantes
git merge origin/pagina-blog -m "Merge: Blog feature"
git merge origin/victor-branch -m "Merge: Firebase feature"  # Ajuste conforme necessário

# 3. Resolver conflitos se houver
# 4. Testar
# 5. Push
git push origin main
```

## 🛠️ Comandos Úteis em Caso de Problemas

```bash
# Desfazer merge que ainda não foi commitado
git merge --abort

# Ver histórico de merges
git log --oneline --graph --all

# Ver diferenças entre branches
git diff main origin/pagina-branch
git diff main origin/victor-branch

# Criar backup antes de mesclar
git branch backup-main-before-merge
```

## 📝 Notas Importantes

1. **Sempre faça backup**: `git branch backup-main-before-merge`
2. **Teste localmente** antes de fazer push
3. **Resolva conflitos com cuidado** - revise todas as mudanças
4. **Use mensagens descritivas** nos commits de merge
5. **Comunique** com sua equipe antes de fazer merge na main

