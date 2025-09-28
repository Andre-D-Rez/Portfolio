#!/bin/bash

# Script para gerenciar versões do projeto
# Uso: ./scripts/release.sh [patch|minor|major]

set -e

# Cores para output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Função para mostrar uso
show_usage() {
    echo -e "${YELLOW}Uso: ./scripts/release.sh [patch|minor|major]${NC}"
    echo -e "${BLUE}  patch${NC} - Para correções de bugs (0.0.1)"
    echo -e "${BLUE}  minor${NC} - Para novas funcionalidades (0.1.0)"
    echo -e "${BLUE}  major${NC} - Para mudanças breaking (1.0.0)"
    exit 1
}

# Verificar se o argumento foi fornecido
if [ $# -eq 0 ]; then
    show_usage
fi

VERSION_TYPE=$1

# Verificar se o tipo de versão é válido
if [[ ! "$VERSION_TYPE" =~ ^(patch|minor|major)$ ]]; then
    echo -e "${RED}Erro: Tipo de versão inválido '$VERSION_TYPE'${NC}"
    show_usage
fi

echo -e "${BLUE}🚀 Iniciando processo de release...${NC}"

# Verificar se estamos na branch main
CURRENT_BRANCH=$(git rev-parse --abbrev-ref HEAD)
if [ "$CURRENT_BRANCH" != "main" ]; then
    echo -e "${RED}Erro: Você deve estar na branch main para criar uma release${NC}"
    exit 1
fi

# Verificar se não há mudanças não commitadas
if [[ -n $(git status --porcelain) ]]; then
    echo -e "${RED}Erro: Há mudanças não commitadas. Faça commit antes de continuar.${NC}"
    exit 1
fi

# Atualizar a branch main
echo -e "${YELLOW}📥 Atualizando branch main...${NC}"
git pull origin main

# Incrementar versão no package.json
echo -e "${YELLOW}📝 Incrementando versão ($VERSION_TYPE)...${NC}"
npm version $VERSION_TYPE --no-git-tag-version

# Obter nova versão
NEW_VERSION=$(node -p "require('./package.json').version")
echo -e "${GREEN}✅ Nova versão: v$NEW_VERSION${NC}"

# Fazer commit das mudanças
echo -e "${YELLOW}💾 Fazendo commit das mudanças...${NC}"
git add package.json
git commit -m "chore: bump version to v$NEW_VERSION"

# Criar tag
echo -e "${YELLOW}🏷️  Criando tag v$NEW_VERSION...${NC}"
git tag -a "v$NEW_VERSION" -m "Release v$NEW_VERSION"

# Push das mudanças e tag
echo -e "${YELLOW}🚀 Fazendo push das mudanças...${NC}"
git push origin main
git push origin "v$NEW_VERSION"

echo -e "${GREEN}🎉 Release v$NEW_VERSION criada com sucesso!${NC}"
echo -e "${BLUE}📋 Próximos passos:${NC}"
echo -e "   1. Vá para: https://github.com/Andre-D-Rez/Portfolio/releases"
echo -e "   2. Crie uma nova release para a tag v$NEW_VERSION"
echo -e "   3. Adicione as notas da release"