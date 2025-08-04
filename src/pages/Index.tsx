import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Leaf, Heart, MessageCircle, MapPin } from "lucide-react";

const Index = () => {
  const whatsappLink = "https://api.whatsapp.com/send?phone=5500000000000&text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20o%20método%20LeveFEM!";

  const FeatureCard = ({ icon, title, children }: { icon: React.ReactNode, title: string, children: React.ReactNode }) => (
    <div className="flex items-start space-x-4">
      <div className="flex-shrink-0">{icon}</div>
      <div>
        <h3 className="text-lg font-semibold text-stone-800">{title}</h3>
        <p className="text-stone-600">{children}</p>
      </div>
    </div>
  );

  return (
    <div className="bg-rose-50 text-stone-700 font-serif">
      {/* Header */}
      <header className="py-4 px-6 md:px-12 flex justify-between items-center sticky top-0 bg-rose-50/80 backdrop-blur-sm z-10 shadow-sm">
        <a href="#">
          <img src="/logo-full.jpeg" alt="Logo Thaís Aires" className="h-16" />
        </a>
        <Button onClick={() => window.open(whatsappLink, '_blank')} className="bg-red-900 hover:bg-red-800 text-white rounded-full px-6">
          Agendar Consulta
        </Button>
      </header>

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <section className="text-center py-20 px-6 bg-cover bg-center" style={{ backgroundImage: "linear-gradient(rgba(255, 250, 250, 0.8), rgba(255, 250, 250, 1)), url('/thais-aires-standing.jpeg')" }}>
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-red-900 tracking-tight">Método LeveFEM</h1>
            <p className="mt-4 text-xl md:text-2xl text-stone-700">O método nutricional que cuida do seu corpo, seus hormônios e sua autoestima.</p>
            <Button onClick={() => window.open(whatsappLink, '_blank')} size="lg" className="mt-8 bg-red-900 hover:bg-red-800 text-white rounded-full px-10 py-6 text-lg">
              Quero emagrecer com leveza!
            </Button>
          </div>
        </section>

        {/* O que é o LeveFEM? */}
        <section className="py-20 px-6 md:px-12">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-stone-800 mb-4">O que é o LeveFEM?</h2>
              <p className="mb-6 text-lg">O LeveFEM é o meu método exclusivo de acompanhamento nutricional voltado para mulheres que querem:</p>
              <ul className="space-y-3">
                <li className="flex items-center"><Check className="h-5 w-5 text-red-900 mr-3" /> Emagrecer com leveza, sem culpa e sem sofrimento</li>
                <li className="flex items-center"><Check className="h-5 w-5 text-red-900 mr-3" /> Regular os hormônios e o intestino naturalmente</li>
                <li className="flex items-center"><Check className="h-5 w-5 text-red-900 mr-3" /> Melhorar sintomas como TPM, SOP, endometriose e menopausa</li>
                <li className="flex items-center"><Check className="h-5 w-5 text-red-900 mr-3" /> Resgatar autoestima, vitalidade e se reconectar com o corpo</li>
              </ul>
            </div>
            <div className="flex justify-center">
              <img src="/thais-aires-closeup.jpeg" alt="Thais Aires" className="rounded-lg shadow-xl w-full max-w-sm" />
            </div>
          </div>
        </section>

        {/* Como funciona? */}
        <section className="py-20 px-6 md:px-12 bg-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-stone-800 mb-12">Como funciona?</h2>
            <p className="text-center text-lg mb-12">Durante o acompanhamento, você vai receber:</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <FeatureCard icon={<Leaf className="h-8 w-8 text-red-900" />} title="Plano alimentar personalizado">Para sua fase e rotina</FeatureCard>
              <FeatureCard icon={<Heart className="h-8 w-8 text-red-900" />} title="Estratégias naturais">Para regular hormônios e intestino</FeatureCard>
              <FeatureCard icon={<Leaf className="h-8 w-8 text-red-900" />} title="Suplementação e fitoterapia">Se necessário para seus objetivos</FeatureCard>
              <FeatureCard icon={<Heart className="h-8 w-8 text-red-900" />} title="Orientações específicas">Para sua fase da vida (fertilidade, gestação, menopausa)</FeatureCard>
              <FeatureCard icon={<MessageCircle className="h-8 w-8 text-red-900" />} title="Suporte entre consultas">Com acolhimento, sem terrorismo nutricional</FeatureCard>
              <FeatureCard icon={<MapPin className="h-8 w-8 text-red-900" />} title="Atendimentos">On-line ou presenciais no RJ</FeatureCard>
            </div>
            <p className="text-center mt-12 text-lg font-semibold text-stone-700">Programa com 3 consultas mensais, focado em evolução real, com leveza e estratégia.</p>
          </div>
        </section>

        {/* É pra você se... */}
        <section className="py-20 px-6 md:px-12">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-stone-800 mb-8">É pra você se...</h2>
            <div className="space-y-6">
              <Card className="bg-white shadow-lg">
                <CardContent className="p-6">
                  <p className="text-lg">Já tentou várias dietas, mas nenhuma funcionou de verdade.</p>
                </CardContent>
              </Card>
              <Card className="bg-white shadow-lg">
                <CardContent className="p-6">
                  <p className="text-lg">Vive se sentindo inchada, ansiosa ou com sintomas que ninguém leva a sério.</p>
                </CardContent>
              </Card>
              <Card className="bg-white shadow-lg">
                <CardContent className="p-6">
                  <p className="text-lg">Quer emagrecer e se cuidar sem se sentir errada, frustrada ou pressionada.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        
        {/* Testimonials Section */}
        <section className="py-20 px-6 md:px-12 bg-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-stone-800 mb-12">O que minhas pacientes dizem</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Placeholder for testimonials */}
              <Card className="text-center"><CardContent className="p-6">Depoimento em breve...</CardContent></Card>
              <Card className="text-center"><CardContent className="p-6">Depoimento em breve...</CardContent></Card>
              <Card className="text-center"><CardContent className="p-6">Depoimento em breve...</CardContent></Card>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="text-center py-20 px-6 bg-cover" style={{ backgroundImage: "url('/thais-aires-laptop.jpeg')", backgroundPosition: 'center' }}>
           <div className="bg-red-900/80 py-20">
            <h2 className="text-4xl font-bold text-white mb-4">Pronta para começar sua jornada?</h2>
            <p className="text-xl text-rose-100 mb-8 max-w-2xl mx-auto">Vamos juntas resgatar sua saúde, autoestima e bem-estar com leveza e estratégia.</p>
            <Button onClick={() => window.open(whatsappLink, '_blank')} size="lg" className="bg-white text-red-900 hover:bg-rose-100 rounded-full px-10 py-6 text-lg font-bold">
              Agende sua avaliação
            </Button>
           </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-stone-800 text-white py-8 px-6 md:px-12 text-center">
        <img src="/logo-full.jpeg" alt="Logo Thaís Aires" className="h-20 mx-auto mb-4" style={{ filter: 'brightness(0) invert(1)' }}/>
        <p>&copy; {new Date().getFullYear()} Thaís Aires Nutricionista. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
};

export default Index;