"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Zap, Mail, Lock, User, Eye, EyeOff, Calendar, Target, Dumbbell } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function CadastroPage() {
  const router = useRouter()
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    senha: "",
    idade: "",
    esporte: "",
    nivel: "",
    objetivo: ""
  })
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    
    // Simulação de cadastro - será integrado com Supabase
    setTimeout(() => {
      router.push("/dashboard")
    }, 1000)
  }

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Navbar */}
      <nav className="border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-[#00C26E] rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-[#000000]">ProFitPlay</span>
            </Link>
            <Link href="/login">
              <Button variant="ghost" className="text-[#000000] hover:text-[#00C26E]">
                Já tenho conta
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Cadastro Form */}
      <div className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-[#000000] mb-2">
              Crie sua conta
            </h1>
            <p className="text-gray-600">
              Comece sua jornada esportiva hoje
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Nome */}
              <div className="space-y-2">
                <Label htmlFor="nome" className="text-[#000000] font-medium">
                  Nome completo
                </Label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <Input
                    id="nome"
                    type="text"
                    placeholder="Seu nome"
                    value={formData.nome}
                    onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                    className="pl-10 h-12 border-gray-300 focus:border-[#00C26E] focus:ring-[#00C26E]"
                    required
                  />
                </div>
              </div>

              {/* Email */}
              <div className="space-y-2">
                <Label htmlFor="email" className="text-[#000000] font-medium">
                  Email
                </Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="seu@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="pl-10 h-12 border-gray-300 focus:border-[#00C26E] focus:ring-[#00C26E]"
                    required
                  />
                </div>
              </div>

              {/* Senha */}
              <div className="space-y-2">
                <Label htmlFor="senha" className="text-[#000000] font-medium">
                  Senha
                </Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <Input
                    id="senha"
                    type={showPassword ? "text" : "password"}
                    placeholder="Mínimo 6 caracteres"
                    value={formData.senha}
                    onChange={(e) => setFormData({ ...formData, senha: e.target.value })}
                    className="pl-10 pr-10 h-12 border-gray-300 focus:border-[#00C26E] focus:ring-[#00C26E]"
                    required
                    minLength={6}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    {showPassword ? (
                      <EyeOff className="w-5 h-5" />
                    ) : (
                      <Eye className="w-5 h-5" />
                    )}
                  </button>
                </div>
              </div>

              {/* Idade */}
              <div className="space-y-2">
                <Label htmlFor="idade" className="text-[#000000] font-medium">
                  Idade
                </Label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <Input
                    id="idade"
                    type="number"
                    placeholder="Ex: 25"
                    value={formData.idade}
                    onChange={(e) => setFormData({ ...formData, idade: e.target.value })}
                    className="pl-10 h-12 border-gray-300 focus:border-[#00C26E] focus:ring-[#00C26E]"
                    required
                    min="10"
                    max="100"
                  />
                </div>
              </div>

              {/* Esporte */}
              <div className="space-y-2">
                <Label htmlFor="esporte" className="text-[#000000] font-medium">
                  Esporte principal
                </Label>
                <div className="relative">
                  <Dumbbell className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 z-10" />
                  <Select
                    value={formData.esporte}
                    onValueChange={(value) => setFormData({ ...formData, esporte: value })}
                    required
                  >
                    <SelectTrigger className="h-12 border-gray-300 focus:border-[#00C26E] focus:ring-[#00C26E] pl-10">
                      <SelectValue placeholder="Selecione seu esporte" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="futebol">Futebol</SelectItem>
                      <SelectItem value="basquete">Basquete</SelectItem>
                      <SelectItem value="volei">Vôlei</SelectItem>
                      <SelectItem value="natacao">Natação</SelectItem>
                      <SelectItem value="corrida">Corrida</SelectItem>
                      <SelectItem value="ciclismo">Ciclismo</SelectItem>
                      <SelectItem value="tenis">Tênis</SelectItem>
                      <SelectItem value="musculacao">Musculação</SelectItem>
                      <SelectItem value="crossfit">CrossFit</SelectItem>
                      <SelectItem value="artes-marciais">Artes Marciais</SelectItem>
                      <SelectItem value="yoga">Yoga</SelectItem>
                      <SelectItem value="pilates">Pilates</SelectItem>
                      <SelectItem value="outro">Outro</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Nível */}
              <div className="space-y-2">
                <Label htmlFor="nivel" className="text-[#000000] font-medium">
                  Nível atual
                </Label>
                <Select
                  value={formData.nivel}
                  onValueChange={(value) => setFormData({ ...formData, nivel: value })}
                  required
                >
                  <SelectTrigger className="h-12 border-gray-300 focus:border-[#00C26E] focus:ring-[#00C26E]">
                    <SelectValue placeholder="Selecione seu nível" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="iniciante">Iniciante</SelectItem>
                    <SelectItem value="intermediario">Intermediário</SelectItem>
                    <SelectItem value="avancado">Avançado</SelectItem>
                    <SelectItem value="profissional">Profissional</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Objetivo */}
              <div className="space-y-2">
                <Label htmlFor="objetivo" className="text-[#000000] font-medium">
                  Objetivo principal
                </Label>
                <div className="relative">
                  <Target className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 z-10" />
                  <Select
                    value={formData.objetivo}
                    onValueChange={(value) => setFormData({ ...formData, objetivo: value })}
                    required
                  >
                    <SelectTrigger className="h-12 border-gray-300 focus:border-[#00C26E] focus:ring-[#00C26E] pl-10">
                      <SelectValue placeholder="Selecione seu objetivo" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="resistencia">Melhorar Resistência</SelectItem>
                      <SelectItem value="velocidade">Aumentar Velocidade</SelectItem>
                      <SelectItem value="tecnica">Aprimorar Técnica</SelectItem>
                      <SelectItem value="forca">Ganhar Força</SelectItem>
                      <SelectItem value="agilidade">Desenvolver Agilidade</SelectItem>
                      <SelectItem value="perda-peso">Perda de Peso</SelectItem>
                      <SelectItem value="ganho-massa">Ganho de Massa Muscular</SelectItem>
                      <SelectItem value="flexibilidade">Aumentar Flexibilidade</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={loading}
                className="w-full h-12 bg-[#00C26E] hover:bg-[#00a85d] text-white text-lg font-medium mt-6"
              >
                {loading ? "Criando conta..." : "Criar conta grátis"}
              </Button>
            </form>

            {/* Divider */}
            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-white text-gray-500">ou</span>
              </div>
            </div>

            {/* Login Link */}
            <div className="text-center">
              <p className="text-gray-600">
                Já tem uma conta?{" "}
                <Link
                  href="/login"
                  className="text-[#00C26E] hover:underline font-medium"
                >
                  Faça login
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
