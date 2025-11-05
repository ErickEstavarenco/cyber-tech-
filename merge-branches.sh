#!/bin/bash

# Script para mesclar Blog (isabella-branch) e Firebase (victor-branch) na merged-project

echo "🚀 Iniciando processo de merge..."
echo ""

# 1. Atualizar todas as branches remotas
echo "📥 Atualizando branches remotas..."
git fetch origin

# 2. Fazer checkout da merged-project
echo "🔄 Mudando para branch merged-project..."
git checkout merged-project

# 3. Atualizar merged-project com o remoto
echo "⬇️  Atualizando merged-project..."
git pull origin merged-project

# 4. Criar backup
echo "💾 Criando backup da branch atual..."
git branch backup-merged-project-$(date +%Y%m%d-%H%M%S)

# 5. Mesclar isabella-branch (Blog)
echo ""
echo "📝 Mesclando isabella-branch (Blog)..."
git merge origin/isabella-branch -m "Merge: Blog feature from isabella-branch"

# Verificar se houve conflitos
if [ $? -ne 0 ]; then
    echo "⚠️  Conflitos detectados ao mesclar isabella-branch!"
    echo "📋 Arquivos com conflito:"
    git status
    echo ""
    echo "⚠️  Resolva os conflitos manualmente e depois execute:"
    echo "   git add ."
    echo "   git commit -m 'Resolve conflicts: merge isabella-branch'"
    echo ""
    read -p "Pressione Enter após resolver os conflitos..."
fi

# 6. Mesclar victor-branch (Firebase)
echo ""
echo "🔥 Mesclando victor-branch (Firebase)..."
git merge origin/victor-branch -m "Merge: Firebase feature from victor-branch"

# Verificar se houve conflitos
if [ $? -ne 0 ]; then
    echo "⚠️  Conflitos detectados ao mesclar victor-branch!"
    echo "📋 Arquivos com conflito:"
    git status
    echo ""
    echo "⚠️  Resolva os conflitos manualmente e depois execute:"
    echo "   git add ."
    echo "   git commit -m 'Resolve conflicts: merge victor-branch'"
    echo ""
    read -p "Pressione Enter após resolver os conflitos..."
fi

# 7. Verificar status final
echo ""
echo "✅ Status final do repositório:"
git status

echo ""
echo "📊 Histórico de commits:"
git log --oneline --graph --all -10

echo ""
echo "✨ Merge concluído!"
echo ""
echo "📝 Próximos passos:"
echo "   1. Teste o projeto: npm install && npm run dev"
echo "   2. Se tudo estiver ok, faça push: git push origin merged-project"
echo ""

