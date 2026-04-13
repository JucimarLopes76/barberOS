# BarberOS — Agent Rules
## Leia este arquivo integralmente antes de cada tarefa.

## PROJETO
Nome: BarberOS — SaaS de gestão de barbearias, multi-tenant.
Stack: Next.js 14 (App Router), TypeScript, Tailwind CSS, Shadcn/ui, Zustand, TanStack Query.
Backend: Supabase (PostgreSQL + Auth JWT + Storage + Realtime + Edge Functions).
Automação: n8n + Evolution API (WhatsApp) + Claude API / Gemini (IA conversacional).
Deploy: Vercel (frontend) + Supabase Cloud + Railway (n8n + Evolution API).
PWA: next-pwa com service worker, offline-first com IndexedDB.

## DESIGN SYSTEM (não negociável)
- Background: #0A0A0A (preto puro — nunca use gray ou #111 como bg raiz)
- Cards: #161616 com border-top: 2px solid #C9A84C
- Borders: #252525
- Accent ÚNICO: #C9A84C (gold) — NUNCA use azul, roxo ou verde como accent
- Texto principal: #F5F0E8 (warm white)
- Texto secundário: #9A9180
- Font Display/Headings: Playfair Display (700/900)
- Font Body/UI: DM Sans (300/400/500/600)
- Font Mono/Labels/Números: JetBrains Mono (400/600)
- Border-radius: 2px em tudo (EXCETO: cards de membership = 12px)
- TODOS os números, valores financeiros e timestamps: JetBrains Mono

## ESTRUTURA DE PASTAS (siga exatamente)
app/(auth)/login/            → BS-01
app/(auth)/register/         → BS-02
app/(dashboard)/             → layout com sidebar (BS-03)
app/(dashboard)/agenda/      → BS-04
app/(dashboard)/clientes/    → BS-07
app/(dashboard)/clientes/[id]/ → BS-08
app/(dashboard)/financeiro/  → BS-09
app/(dashboard)/estoque/     → BS-10
app/(dashboard)/assinaturas/ → BS-11
app/(dashboard)/fidelidade/  → BS-13
app/(dashboard)/equipe/      → BS-14
app/(dashboard)/configuracoes/ → BS-15
app/booking/[slug]/          → BS-06 (público, sem auth)
app/cliente/                 → BS-12 (PWA cliente final)
api/appointments/            → CRUD agendamentos
api/clients/                 → CRUD clientes
api/financial/               → transações + DRE
api/inventory/               → estoque
api/ai/chat/                 → IA conversacional (streaming)
api/webhooks/n8n/            → recebe eventos n8n
api/webhooks/evolution/      → recebe mensagens WhatsApp

## MULTI-TENANCY (crítico)
- TODAS as tabelas têm coluna barbershop_id (uuid, NOT NULL)
- RLS habilitado em TODAS as tabelas
- JWT claims devem conter barbershop_id e role
- Nunca escreva queries sem filtro por barbershop_id
- Roles: owner | barber | client

## REGRAS DE CÓDIGO
- TypeScript strict mode sempre ativado
- Nunca use 'any' — use tipos específicos ou unknown
- Sempre trate erros com try/catch e retorne tipos de erro consistentes
- Comentários em português no código de negócio
- Comentários em inglês no código técnico/infra
- Imports organizados: externos → internos → relativos
- Componentes: PascalCase. Hooks: camelCase com prefixo 'use'. Utils: camelCase.
- Variáveis de ambiente: sempre validar com zod no startup

## O QUE NÃO FAZER (nunca)
- NÃO rodar testes automáticos — testo manualmente
- NÃO usar 'any' no TypeScript
- NÃO hardcodar valores de negócio — use constantes em /lib/constants.ts
- NÃO fazer commit sem confirmar comigo primeiro
- NÃO usar localStorage/sessionStorage — use Zustand + TanStack Query
- NÃO criar arquivos de configuração sem mostrar o conteúdo primeiro
- NÃO instalar dependências sem listar e justificar cada uma
- NÃO usar cores fora do design system definido acima

## FLUXO DE TRABALHO
1. Ao receber uma tarefa: crie o Implementation Plan primeiro
2. Mostre o plano e aguarde minha aprovação
3. Execute um arquivo/componente por vez — não faça tudo junto
4. Após cada arquivo criado: descreva o que foi feito em 2 linhas
5. Se encontrar um bug: descreva o problema antes de corrigir
6. Ao terminar uma fase: liste o que foi feito e o que falta

## DEPENDÊNCIAS AUTORIZADAS
next, react, typescript, tailwindcss, @supabase/supabase-js,
@supabase/ssr, zustand, @tanstack/react-query, shadcn/ui,
next-pwa, ai (Vercel AI SDK), zod, date-fns, lucide-react,
recharts, react-hook-form, @hookform/resolvers, stripe

## NUNCA instalar sem pedir autorização:
Qualquer outra dependência não listada acima.
