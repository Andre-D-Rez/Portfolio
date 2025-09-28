# Guia de Versionamento e Workflow Git

## 📋 Estratégia de Versionamento

Este projeto segue o padrão **Semantic Versioning** (SemVer):

- `MAJOR.MINOR.PATCH` (exemplo: 2.1.3)
- **MAJOR**: Mudanças incompatíveis na API
- **MINOR**: Nova funcionalidade compatível
- **PATCH**: Correção de bugs compatível

### 🏷️ Histórico de Versões

- **v1.0.0** - Migração para React com TypeScript
- **v0.2.0** - Versão com Bootstrap e melhorias
- **v0.1.0** - Primeira versão HTML/CSS simples

## 🌿 Workflow com Branches

### Branches Principais

- **`main`** - Branch de produção (sempre estável)
- **`develop`** - Branch de desenvolvimento (integração de features)

### Branches de Feature

Para cada nova funcionalidade, crie uma branch específica:

```bash
# Criar nova branch para feature
git checkout -b feature/nome-da-feature

# Trabalhar na feature...
git add .
git commit -m "feat: adiciona nova funcionalidade"

# Fazer push da branch
git push origin feature/nome-da-feature
```

### Branches de Hotfix

Para correções urgentes em produção:

```bash
# Criar branch de hotfix a partir da main
git checkout main
git checkout -b hotfix/correcao-urgente

# Fazer a correção...
git add .
git commit -m "fix: corrige problema crítico"

# Fazer push
git push origin hotfix/correcao-urgente
```

## 🔄 Processo de Pull Request

### 1. Preparação

```bash
# Atualizar branch local
git checkout main
git pull origin main

# Criar nova branch
git checkout -b feature/minha-funcionalidade
```

### 2. Desenvolvimento

```bash
# Fazer mudanças...
git add .
git commit -m "feat: adiciona minha funcionalidade"

# Push da branch
git push origin feature/minha-funcionalidade
```

### 3. Pull Request

1. Acesse o GitHub
2. Clique em "Compare & pull request"
3. Preencha o template de PR
4. Adicione reviewers (se aplicável)
5. Aguarde aprovação e merge

### 4. Após o Merge

```bash
# Voltar para main
git checkout main

# Atualizar main
git pull origin main

# Deletar branch local
git branch -d feature/minha-funcionalidade

# Deletar branch remota
git push origin --delete feature/minha-funcionalidade
```

## 🚀 Processo de Release

### Método 1: Scripts NPM (Recomendado)

```bash
# Para correções de bugs
npm run release:patch

# Para novas funcionalidades
npm run release:minor

# Para mudanças breaking
npm run release:major
```

### Método 2: Manual

```bash
# Incrementar versão
npm version patch  # ou minor, ou major

# Fazer push com tags
git push origin main --tags
```

### 3. Criar Release no GitHub

1. Vá para: `https://github.com/Andre-D-Rez/Portfolio/releases`
2. Clique em "Create a new release"
3. Selecione a tag criada
4. Adicione título e descrição das mudanças
5. Publique a release

## 📝 Padrões de Commit

Use o padrão **Conventional Commits**:

```bash
feat: adiciona nova funcionalidade
fix: corrige bug específico
docs: atualiza documentação
style: mudanças de estilo/formatação
refactor: refatoração de código
test: adiciona ou corrige testes
chore: mudanças de build, dependências, etc
```

### Exemplos:

```bash
git commit -m "feat: adiciona seção de projetos"
git commit -m "fix: corrige responsividade no mobile"
git commit -m "docs: atualiza README com instruções de deploy"
git commit -m "style: aplica formatação com Prettier"
git commit -m "refactor: reorganiza componentes"
git commit -m "chore: atualiza dependências do React"
```

## 🔧 Configuração do Git

### Configuração Inicial

```bash
# Configurar informações pessoais
git config --global user.name "André D. Rezende"
git config --global user.email "andre.rezende@email.com"

# Configurar editor padrão
git config --global core.editor "code --wait"

# Configurar push padrão
git config --global push.default current
```

### Aliases Úteis

```bash
# Adicionar aliases úteis
git config --global alias.co checkout
git config --global alias.br branch
git config --global alias.ci commit
git config --global alias.st status
git config --global alias.unstage 'reset HEAD --'
git config --global alias.last 'log -1 HEAD'
git config --global alias.visual '!gitk'
```

## 🔍 Comandos Úteis

### Verificar Status

```bash
# Status atual
git status

# Histórico de commits
git log --oneline

# Branches locais
git branch

# Branches remotas
git branch -r

# Todas as branches
git branch -a
```

### Limpeza

```bash
# Limpar branches já mergeadas
git branch --merged | grep -v "\*\|main\|develop" | xargs -n 1 git branch -d

# Limpar branches remotas que não existem mais
git remote prune origin
```

## 📊 Exemplo de Workflow Completo

```bash
# 1. Atualizar main
git checkout main
git pull origin main

# 2. Criar nova feature
git checkout -b feature/melhorar-performance

# 3. Desenvolver...
git add .
git commit -m "feat: otimiza carregamento de imagens"

# 4. Push da branch
git push origin feature/melhorar-performance

# 5. Criar PR no GitHub
# (via interface web)

# 6. Após aprovação e merge
git checkout main
git pull origin main

# 7. Criar nova release
npm run release:minor

# 8. Limpar
git branch -d feature/melhorar-performance
```

## 🎯 Dicas Importantes

1. **Sempre** trabalhe em branches separadas
2. **Nunca** faça commit direto na main
3. **Sempre** teste antes de fazer PR
4. **Sempre** incremente a versão após merge na main
5. **Sempre** use mensagens de commit descritivas
6. **Sempre** documente mudanças importantes

## 🆘 Problemas Comuns

### Conflito de Merge

```bash
# Resolver conflitos manualmente, depois:
git add .
git commit -m "resolve: conflitos de merge"
```

### Desfazer Último Commit

```bash
# Manter mudanças
git reset --soft HEAD~1

# Descartar mudanças
git reset --hard HEAD~1
```

### Alterar Mensagem do Último Commit

```bash
git commit --amend -m "nova mensagem"
```
