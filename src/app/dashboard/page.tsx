"use client"

import { useState } from "react"
import Link from "next/link"
import { Zap, Home, Calendar, TrendingUp, User, LogOut, Play, Clock, Target, CheckCircle2, Apple, MessageCircle, Video, ChefHat, Utensils } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState("home")

  // Dados simulados - será integrado com Supabase
  const userData = {
    nome: "Atleta",
    esporte: "Futebol",
    nivel: "Intermediário",
    objetivo: "Melhorar Resistência"
  }

  const treinoHoje = {
    titulo: "Treino de Resistência Cardiovascular",
    duracao: "45 min",
    tipo: "Físico",
    exercicios: [
      { nome: "Aquecimento dinâmico", duracao: "10 min", concluido: false, videoUrl: "https://www.youtube.com/embed/example1" },
      { nome: "Corrida intervalada", duracao: "20 min", concluido: false, videoUrl: "https://www.youtube.com/embed/example2" },
      { nome: "Exercícios de agilidade", duracao: "10 min", concluido: false, videoUrl: "https://www.youtube.com/embed/example3" },
      { nome: "Alongamento", duracao: "5 min", concluido: false, videoUrl: "https://www.youtube.com/embed/example4" }
    ]
  }

  const planoAlimentar = {
    preTreino: {
      horario: "2h antes do treino",
      refeicao: "Café da manhã energético",
      alimentos: [
        "2 fatias de pão integral",
        "2 ovos mexidos",
        "1 banana",
        "200ml de suco de laranja natural"
      ],
      calorias: 450,
      proteinas: 20,
      carboidratos: 65,
      gorduras: 12
    },
    duranteTreino: {
      horario: "Durante o treino",
      refeicao: "Hidratação e energia",
      alimentos: [
        "500ml de água",
        "1 gel de carboidrato (opcional para treinos >60min)"
      ],
      calorias: 100,
      proteinas: 0,
      carboidratos: 25,
      gorduras: 0
    },
    posTreino: {
      horario: "Até 30min após o treino",
      refeicao: "Recuperação muscular",
      alimentos: [
        "1 shake de whey protein",
        "1 banana",
        "200ml de leite desnatado",
        "1 colher de pasta de amendoim"
      ],
      calorias: 380,
      proteinas: 35,
      carboidratos: 40,
      gorduras: 8
    }
  }

  const progressoSemanal = {
    treinosConcluidos: 3,
    treinosTotais: 5,
    percentual: 60
  }

  const [exercicioSelecionado, setExercicioSelecionado] = useState<number | null>(null)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <nav className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-[#00C26E] rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-[#000000]">ProFitPlay</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-gray-600 hidden sm:block">Olá, {userData.nome}!</span>
              <Button variant="ghost" size="icon" className="text-gray-600 hover:text-[#00C26E]">
                <LogOut className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-12 gap-6">
          {/* Sidebar */}
          <aside className="lg:col-span-3">
            <Card className="border-gray-200">
              <CardContent className="p-4">
                <nav className="space-y-2">
                  <button
                    onClick={() => setActiveTab("home")}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                      activeTab === "home"
                        ? "bg-[#00C26E] text-white"
                        : "text-gray-600 hover:bg-gray-100"
                    }`}
                  >
                    <Home className="w-5 h-5" />
                    <span className="font-medium">Início</span>
                  </button>
                  <button
                    onClick={() => setActiveTab("treinos")}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                      activeTab === "treinos"
                        ? "bg-[#00C26E] text-white"
                        : "text-gray-600 hover:bg-gray-100"
                    }`}
                  >
                    <Calendar className="w-5 h-5" />
                    <span className="font-medium">Meus Treinos</span>
                  </button>
                  <button
                    onClick={() => setActiveTab("nutricao")}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                      activeTab === "nutricao"
                        ? "bg-[#00C26E] text-white"
                        : "text-gray-600 hover:bg-gray-100"
                    }`}
                  >
                    <Apple className="w-5 h-5" />
                    <span className="font-medium">Nutrição</span>
                  </button>
                  <button
                    onClick={() => setActiveTab("suporte")}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                      activeTab === "suporte"
                        ? "bg-[#00C26E] text-white"
                        : "text-gray-600 hover:bg-gray-100"
                    }`}
                  >
                    <MessageCircle className="w-5 h-5" />
                    <span className="font-medium">Suporte</span>
                  </button>
                  <button
                    onClick={() => setActiveTab("progresso")}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                      activeTab === "progresso"
                        ? "bg-[#00C26E] text-white"
                        : "text-gray-600 hover:bg-gray-100"
                    }`}
                  >
                    <TrendingUp className="w-5 h-5" />
                    <span className="font-medium">Progresso</span>
                  </button>
                  <button
                    onClick={() => setActiveTab("perfil")}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                      activeTab === "perfil"
                        ? "bg-[#00C26E] text-white"
                        : "text-gray-600 hover:bg-gray-100"
                    }`}
                  >
                    <User className="w-5 h-5" />
                    <span className="font-medium">Perfil</span>
                  </button>
                </nav>
              </CardContent>
            </Card>
          </aside>

          {/* Main Content */}
          <main className="lg:col-span-9 space-y-6">
            {/* Welcome Card */}
            <Card className="border-gray-200 bg-gradient-to-r from-[#00C26E] to-[#00a85d]">
              <CardContent className="p-6">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                  <div>
                    <h2 className="text-2xl font-bold text-white mb-2">
                      Bem-vindo de volta, {userData.nome}!
                    </h2>
                    <p className="text-white/90">
                      {userData.esporte} • {userData.nivel} • {userData.objetivo}
                    </p>
                  </div>
                  <Button className="bg-white text-[#00C26E] hover:bg-gray-100">
                    Gerar Novo Treino
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Progresso Semanal */}
            <Card className="border-gray-200">
              <CardHeader>
                <CardTitle className="text-[#000000]">Progresso Semanal</CardTitle>
                <CardDescription>
                  Você completou {progressoSemanal.treinosConcluidos} de {progressoSemanal.treinosTotais} treinos esta semana
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Progresso</span>
                    <span className="font-medium text-[#00C26E]">{progressoSemanal.percentual}%</span>
                  </div>
                  <Progress value={progressoSemanal.percentual} className="h-3" />
                </div>
              </CardContent>
            </Card>

            {/* Treino do Dia */}
            <Card className="border-gray-200">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-[#000000] text-2xl">{treinoHoje.titulo}</CardTitle>
                    <CardDescription className="flex items-center gap-4 mt-2">
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {treinoHoje.duracao}
                      </span>
                      <span className="flex items-center gap-1">
                        <Target className="w-4 h-4" />
                        {treinoHoje.tipo}
                      </span>
                    </CardDescription>
                  </div>
                  <Button className="bg-[#00C26E] hover:bg-[#00a85d] text-white">
                    <Play className="w-4 h-4 mr-2" />
                    Iniciar
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {treinoHoje.exercicios.map((exercicio, index) => (
                    <div key={index} className="space-y-3">
                      <div
                        className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer"
                        onClick={() => setExercicioSelecionado(exercicioSelecionado === index ? null : index)}
                      >
                        <div className="flex items-center gap-3">
                          <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                            exercicio.concluido
                              ? "bg-[#00C26E] border-[#00C26E]"
                              : "border-gray-300"
                          }`}>
                            {exercicio.concluido && (
                              <CheckCircle2 className="w-4 h-4 text-white" />
                            )}
                          </div>
                          <div>
                            <p className="font-medium text-[#000000]">{exercicio.nome}</p>
                            <p className="text-sm text-gray-600">{exercicio.duracao}</p>
                          </div>
                        </div>
                        <Button variant="ghost" size="sm" className="text-[#00C26E]">
                          <Video className="w-4 h-4 mr-2" />
                          Ver vídeo
                        </Button>
                      </div>
                      
                      {/* Video Player */}
                      {exercicioSelecionado === index && (
                        <div className="pl-9 pr-4">
                          <div className="bg-black rounded-lg overflow-hidden aspect-video">
                            <iframe
                              width="100%"
                              height="100%"
                              src={exercicio.videoUrl}
                              title={exercicio.nome}
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                              allowFullScreen
                              className="w-full h-full"
                            />
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Plano Alimentar do Dia */}
            <Card className="border-gray-200">
              <CardHeader>
                <CardTitle className="text-[#000000] flex items-center gap-2">
                  <ChefHat className="w-6 h-6 text-[#00C26E]" />
                  Plano Alimentar de Hoje
                </CardTitle>
                <CardDescription>
                  Nutrição personalizada para otimizar seu treino
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="pre" className="w-full">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="pre">Pré-Treino</TabsTrigger>
                    <TabsTrigger value="durante">Durante</TabsTrigger>
                    <TabsTrigger value="pos">Pós-Treino</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="pre" className="space-y-4 mt-4">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="font-semibold text-[#000000]">{planoAlimentar.preTreino.refeicao}</h4>
                        <span className="text-sm text-gray-600">{planoAlimentar.preTreino.horario}</span>
                      </div>
                      <ul className="space-y-2 mb-4">
                        {planoAlimentar.preTreino.alimentos.map((alimento, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-gray-700">
                            <Utensils className="w-4 h-4 text-[#00C26E]" />
                            {alimento}
                          </li>
                        ))}
                      </ul>
                      <div className="grid grid-cols-4 gap-2 pt-3 border-t border-gray-200">
                        <div className="text-center">
                          <p className="text-xs text-gray-600">Calorias</p>
                          <p className="font-semibold text-[#000000]">{planoAlimentar.preTreino.calorias}</p>
                        </div>
                        <div className="text-center">
                          <p className="text-xs text-gray-600">Proteínas</p>
                          <p className="font-semibold text-[#000000]">{planoAlimentar.preTreino.proteinas}g</p>
                        </div>
                        <div className="text-center">
                          <p className="text-xs text-gray-600">Carbos</p>
                          <p className="font-semibold text-[#000000]">{planoAlimentar.preTreino.carboidratos}g</p>
                        </div>
                        <div className="text-center">
                          <p className="text-xs text-gray-600">Gorduras</p>
                          <p className="font-semibold text-[#000000]">{planoAlimentar.preTreino.gorduras}g</p>
                        </div>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="durante" className="space-y-4 mt-4">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="font-semibold text-[#000000]">{planoAlimentar.duranteTreino.refeicao}</h4>
                        <span className="text-sm text-gray-600">{planoAlimentar.duranteTreino.horario}</span>
                      </div>
                      <ul className="space-y-2 mb-4">
                        {planoAlimentar.duranteTreino.alimentos.map((alimento, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-gray-700">
                            <Utensils className="w-4 h-4 text-[#00C26E]" />
                            {alimento}
                          </li>
                        ))}
                      </ul>
                      <div className="grid grid-cols-4 gap-2 pt-3 border-t border-gray-200">
                        <div className="text-center">
                          <p className="text-xs text-gray-600">Calorias</p>
                          <p className="font-semibold text-[#000000]">{planoAlimentar.duranteTreino.calorias}</p>
                        </div>
                        <div className="text-center">
                          <p className="text-xs text-gray-600">Proteínas</p>
                          <p className="font-semibold text-[#000000]">{planoAlimentar.duranteTreino.proteinas}g</p>
                        </div>
                        <div className="text-center">
                          <p className="text-xs text-gray-600">Carbos</p>
                          <p className="font-semibold text-[#000000]">{planoAlimentar.duranteTreino.carboidratos}g</p>
                        </div>
                        <div className="text-center">
                          <p className="text-xs text-gray-600">Gorduras</p>
                          <p className="font-semibold text-[#000000]">{planoAlimentar.duranteTreino.gorduras}g</p>
                        </div>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="pos" className="space-y-4 mt-4">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="font-semibold text-[#000000]">{planoAlimentar.posTreino.refeicao}</h4>
                        <span className="text-sm text-gray-600">{planoAlimentar.posTreino.horario}</span>
                      </div>
                      <ul className="space-y-2 mb-4">
                        {planoAlimentar.posTreino.alimentos.map((alimento, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-gray-700">
                            <Utensils className="w-4 h-4 text-[#00C26E]" />
                            {alimento}
                          </li>
                        ))}
                      </ul>
                      <div className="grid grid-cols-4 gap-2 pt-3 border-t border-gray-200">
                        <div className="text-center">
                          <p className="text-xs text-gray-600">Calorias</p>
                          <p className="font-semibold text-[#000000]">{planoAlimentar.posTreino.calorias}</p>
                        </div>
                        <div className="text-center">
                          <p className="text-xs text-gray-600">Proteínas</p>
                          <p className="font-semibold text-[#000000]">{planoAlimentar.posTreino.proteinas}g</p>
                        </div>
                        <div className="text-center">
                          <p className="text-xs text-gray-600">Carbos</p>
                          <p className="font-semibold text-[#000000]">{planoAlimentar.posTreino.carboidratos}g</p>
                        </div>
                        <div className="text-center">
                          <p className="text-xs text-gray-600">Gorduras</p>
                          <p className="font-semibold text-[#000000]">{planoAlimentar.posTreino.gorduras}g</p>
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>

            {/* Suporte Humano */}
            <Card className="border-gray-200">
              <CardHeader>
                <CardTitle className="text-[#000000] flex items-center gap-2">
                  <MessageCircle className="w-6 h-6 text-[#00C26E]" />
                  Suporte Especializado
                </CardTitle>
                <CardDescription>
                  Fale com nossos especialistas em educação física e nutrição
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="bg-gradient-to-r from-[#00C26E]/10 to-[#00a85d]/10 p-4 rounded-lg border border-[#00C26E]/20">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-[#00C26E] rounded-full flex items-center justify-center flex-shrink-0">
                        <User className="w-5 h-5 text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-[#000000] mb-1">Seu Personal Trainer</h4>
                        <p className="text-sm text-gray-600 mb-3">
                          Especialista em {userData.esporte} disponível para ajustar seus treinos e tirar dúvidas
                        </p>
                        <Button className="bg-[#00C26E] hover:bg-[#00a85d] text-white">
                          <MessageCircle className="w-4 h-4 mr-2" />
                          Iniciar conversa
                        </Button>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-orange-500/10 to-orange-600/10 p-4 rounded-lg border border-orange-500/20">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <Apple className="w-5 h-5 text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-[#000000] mb-1">Nutricionista Esportivo</h4>
                        <p className="text-sm text-gray-600 mb-3">
                          Especialista em nutrição esportiva para otimizar seus resultados
                        </p>
                        <Button className="bg-orange-500 hover:bg-orange-600 text-white">
                          <MessageCircle className="w-4 h-4 mr-2" />
                          Falar com nutricionista
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </main>
        </div>
      </div>
    </div>
  )
}
