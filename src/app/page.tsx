"use client"

import Link from "next/link"
import { ArrowRight, Target, TrendingUp, Users, Zap, Dumbbell, Apple, MessageCircle, Video } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-100 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-[#00C26E] rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-[#000000] font-inter">ProFitPlay</span>
            </div>
            <div className="flex items-center gap-4">
              <Link href="/login">
                <Button variant="ghost" className="text-[#000000] hover:text-[#00C26E]">
                  Entrar
                </Button>
              </Link>
              <Link href="/cadastro">
                <Button className="bg-[#00C26E] hover:bg-[#00a85d] text-white">
                  Começar Agora
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-[#000000] mb-6 leading-tight">
              Treinos e Nutrição para{" "}
              <span className="text-[#00C26E]">Todos os Esportes</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Planos de treino personalizados, acompanhamento nutricional completo e suporte humano especializado para você alcançar seus objetivos em qualquer esporte.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/cadastro">
                <Button size="lg" className="bg-[#00C26E] hover:bg-[#00a85d] text-white text-lg px-8 py-6">
                  Criar Conta Grátis
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link href="/login">
                <Button size="lg" variant="outline" className="border-[#000000] text-[#000000] hover:bg-gray-50 text-lg px-8 py-6">
                  Já tenho conta
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#000000] mb-4">
              Tudo que você precisa para evoluir
            </h2>
            <p className="text-xl text-gray-600">
              Plataforma completa para atletas de todos os esportes
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Feature 1 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-[#00C26E] rounded-xl flex items-center justify-center mb-6">
                <Dumbbell className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#000000] mb-4">
                Treinos Personalizados
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Planos de treino adaptados ao seu esporte, nível e objetivos específicos com vídeos demonstrativos de cada exercício.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-[#00C26E] rounded-xl flex items-center justify-center mb-6">
                <Apple className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#000000] mb-4">
                Plano Alimentar
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Nutrição personalizada para cada fase do treino: pré-treino, durante e pós-treino, adaptada aos seus objetivos.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-[#00C26E] rounded-xl flex items-center justify-center mb-6">
                <MessageCircle className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#000000] mb-4">
                Suporte Humano
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Acompanhamento de especialistas em educação física e nutrição para tirar dúvidas e ajustar seu plano.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-[#00C26E] rounded-xl flex items-center justify-center mb-6">
                <TrendingUp className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#000000] mb-4">
                Acompanhe Progresso
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Dashboard completo com métricas de desempenho, evolução física e adesão ao plano alimentar.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sports Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#000000] mb-4">
              Para todos os esportes
            </h2>
            <p className="text-xl text-gray-600">
              Treinos especializados para cada modalidade
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              "Futebol", "Basquete", "Vôlei", "Natação", "Corrida", "Ciclismo",
              "Tênis", "Musculação", "CrossFit", "Artes Marciais", "Yoga", "Pilates"
            ].map((sport, index) => (
              <div
                key={index}
                className="bg-gray-50 p-6 rounded-xl text-center hover:bg-[#00C26E] hover:text-white transition-all cursor-pointer group"
              >
                <p className="font-medium text-[#000000] group-hover:text-white">{sport}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#000000]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Pronto para transformar seu desempenho?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Junte-se a milhares de atletas que já estão evoluindo com treinos personalizados e nutrição adequada
          </p>
          <Link href="/cadastro">
            <Button size="lg" className="bg-[#00C26E] hover:bg-[#00a85d] text-white text-lg px-8 py-6">
              Começar Gratuitamente
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-[#00C26E] rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-[#000000]">ProFitPlay</span>
            </div>
            <p className="text-gray-600">
              © 2024 ProFitPlay. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
