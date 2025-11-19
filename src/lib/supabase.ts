import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Tipos para o banco de dados
export type Usuario = {
  id: string
  nome: string
  email: string
  idade: number
  esporte: string
  nivel: 'iniciante' | 'intermediario' | 'avancado' | 'profissional'
  objetivo: string
  created_at: string
}

export type Treino = {
  id: string
  usuario_id: string
  titulo: string
  tipo: string
  nivel: string
  descricao: string
  duracao: number
  exercicios: Exercicio[]
  created_at: string
}

export type Exercicio = {
  nome: string
  duracao: string
  concluido: boolean
  videoUrl?: string
}

export type Progresso = {
  id: string
  usuario_id: string
  treino_id: string
  data: string
  concluido: boolean
  metricas: any
  created_at: string
}

export type PlanoAlimentar = {
  id: string
  usuario_id: string
  data: string
  pre_treino: RefeicaoNutricional
  durante_treino: RefeicaoNutricional
  pos_treino: RefeicaoNutricional
  created_at: string
}

export type RefeicaoNutricional = {
  horario: string
  refeicao: string
  alimentos: string[]
  calorias: number
  proteinas: number
  carboidratos: number
  gorduras: number
}

export type MensagemSuporte = {
  id: string
  usuario_id: string
  especialista_tipo: 'personal_trainer' | 'nutricionista'
  mensagem: string
  remetente: 'usuario' | 'especialista'
  created_at: string
}
