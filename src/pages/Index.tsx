import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Check, Leaf, Heart, MessageCircle, MapPin, Instagram } from "lucide-react";

const Index = () => {
  const whatsappLink = "https://api.whatsapp.com/send?phone=5521969208660&text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20o%20método%20LeveFEM!";
  const instagramLink = "https://www.instagram.com/thais_airesnutri/";

  const testimonials = Array.from({ length: 10 }, (_, i) => `/testimonials/testimonial-${i + 1}.jpeg`);

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
          <img src="/logo-full.png" alt="Logo Thaís Aires" className="h-16" />
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
            <h1 className="text-4xl md:text-6xl font-bold text-red-900 tracking-tight">Reconecte-se com seu corpo. Transforme sua saúde.</h1>
            <p className="mt-4 text-xl md:text-2xl text-stone-700">Descubra o LeveFEM: a jornada de emagrecimento que respeita seus ciclos, equilibra seus hormônios e devolve sua autoestima, com leveza e sem dietas restritivas.</p>
            <Button onClick={() => window.open(whatsappLink, '_blank')} className="mt-8 bg-red-900 hover:bg-red-800 text-white rounded-full px-6 py-4 text-base md:px-10 md:py-6 md:text-lg">
              Comece sua transformação agora!
            </Button>
          </div>
        </section>

        {/* O que é o LeveFEM? */}
        <section id="metodo" className="py-20 px-6 md:px-12">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-stone-800 mb-4">Mais que um método, uma nova relação com seu corpo.</h2>
              <p className="mb-6 text-lg">O LeveFEM foi criado para você, mulher, que busca mais do que apenas perder peso. É um convite para uma jornada de autoconhecimento e cuidado, onde você vai:</p>
              <ul className="space-y-3">
                <li className="flex items-start"><Check className="h-5 w-5 text-red-900 mr-3 mt-1 flex-shrink-0" /> Emagrecer de forma definitiva, fazendo as pazes com a comida e com você mesma.</li>
                <li className="flex items-start"><Check className="h-5 w-5 text-red-900 mr-3 mt-1 flex-shrink-0" /> Sentir o alívio de ter seus hormônios e intestino funcionando em harmonia, de forma 100% natural.</li>
                <li className="flex items-start"><Check className="h-5 w-5 text-red-900 mr-3 mt-1 flex-shrink-0" /> Dar adeus aos desconfortos da TPM, SOP, endometriose e menopausa com estratégias que realmente funcionam.</li>
                <li className="flex items-start"><Check className="h-5 w-5 text-red-900 mr-3 mt-1 flex-shrink-0" /> Redescobrir sua energia, amar o que vê no espelho e se sentir em casa no seu próprio corpo.</li>
              </ul>
            </div>
            <div className="flex justify-center">
              <img src="/thais-aires-closeup.jpeg" alt="Thais Aires" className="rounded-lg shadow-xl w-full max-w-sm" />
            </div>
          </div>
        </section>

        {/* About Thais Section */}
        <section id="sobre" className="py-20 px-6 md:px-12 bg-white">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center">
              <img src="/thais-aires-desk.jpeg" alt="Nutricionista Thaís Aires" className="rounded-lg shadow-xl w-full max-w-sm" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-stone-800 mb-4">Prazer, sou Thaís Aires. Sua nutricionista.</h2>
              <p className="text-lg mb-4 text-stone-600">
                Há 12 anos, dedico minha carreira a cuidar da saúde da mulher. Sou especialista em emagrecimento e modulação intestinal, mas minha verdadeira missão é ensinar uma nutrição sem terrorismo, que te reconecta com o seu corpo.
              </p>
              <p className="text-lg mb-6 text-stone-600">
                Eu te ajudo a recuperar a autoestima, emagrecer sem passar fome e fazer escolhas mais saudáveis com consciência e leveza. Atendo no Rio de Janeiro e online para o mundo todo, sempre com um olhar acolhedor.
              </p>
              <p className="text-md text-stone-500">
                Quando não estou no consultório, amo estar com minha família, viajar e dançar. Acredito que a vida, assim como a alimentação, deve ser cheia de alegria e equilíbrio.
              </p>
            </div>
          </div>
        </section>

        {/* Como funciona? */}
        <section id="jornada" className="py-20 px-6 md:px-12">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-stone-800 mb-12">Sua jornada de transformação, passo a passo</h2>
            <p className="text-center text-lg mb-12 max-w-3xl mx-auto">Meu acompanhamento é próximo e totalmente personalizado. Juntas, vamos construir um caminho leve e estratégico para você alcançar seus objetivos. Veja o que te espera:</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <FeatureCard icon={<Leaf className="h-8 w-8 text-red-900" />} title="Um plano alimentar só seu">Criado para sua rotina, seus gostos e sua fase da vida.</FeatureCard>
              <FeatureCard icon={<Heart className="h-8 w-8 text-red-900" />} title="Equilíbrio hormonal e intestinal">Com estratégias naturais e eficazes para você se sentir bem por dentro.</FeatureCard>
              <FeatureCard icon={<Leaf className="h-8 w-8 text-red-900" />} title="O poder da natureza a seu favor">Suplementação e fitoterapia inteligente, apenas se necessário.</FeatureCard>
              <FeatureCard icon={<Heart className="h-8 w-8 text-red-900" />} title="Cuidado para cada fase">Orientações específicas para fertilidade, gestação, ciclo hormonal e menopausa.</FeatureCard>
              <FeatureCard icon={<MessageCircle className="h-8 w-8 text-red-900" />} title="Apoio contínuo e acolhedor">Suporte real entre as consultas, sem terrorismo nutricional.</FeatureCard>
              <FeatureCard icon={<MapPin className="h-8 w-8 text-red-900" />} title="Flexibilidade para te atender">Atendimentos on-line ou presenciais no Rio de Janeiro.</FeatureCard>
            </div>
            <p className="text-center mt-12 text-lg font-semibold text-stone-700">Um programa de 3 consultas mensais focado em evolução real, com leveza e estratégia.</p>
          </div>
        </section>

        {/* É pra você se... */}
        <section className="py-20 px-6 md:px-12 bg-white">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-stone-800 mb-8">Você se identifica?</h2>
            <div className="space-y-6 text-left">
              <Card className="bg-white shadow-lg">
                <CardContent className="p-6">
                  <p className="text-lg text-stone-700">Você já se cansou do efeito sanfona e de dietas que prometem tudo, mas não entregam resultados duradouros.</p>
                </CardContent>
              </Card>
              <Card className="bg-white shadow-lg">
                <CardContent className="p-6">
                  <p className="text-lg text-stone-700">Você convive com inchaço, cansaço e ansiedade, sentindo que ninguém entende o que seu corpo está passando.</p>
                </CardContent>
              </Card>
              <Card className="bg-white shadow-lg">
                <CardContent className="p-6">
                  <p className="text-lg text-stone-700">Você deseja emagrecer e cuidar da sua saúde, mas sem a pressão e a culpa que vêm com o "terrorismo nutricional".</p>
                </CardContent>
              </Card>
            </div>
            <div className="mt-12">
              <Button onClick={() => window.open(whatsappLink, '_blank')} className="bg-red-900 hover:bg-red-800 text-white rounded-full px-6 py-4 text-base md:px-10 md:py-6 md:text-lg">
                Quero fazer as pazes com meu corpo
              </Button>
            </div>
          </div>
        </section>
        
        {/* Testimonials Section */}
        <section id="depoimentos" className="py-20 px-6 md:px-12">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-stone-800 mb-12">O que minhas pacientes dizem</h2>
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent>
                {testimonials.map((src, index) => (
                  <CarouselItem key={index} className="flex justify-center md:basis-1/2 lg:basis-1/3">
                    <div className="p-1">
                      <Card className="shadow-lg">
                        <CardContent className="flex items-center justify-center p-2 bg-stone-100 rounded-lg">
                          <img src={src} alt={`Depoimento ${index + 1}`} className="rounded-md max-h-[500px] object-contain" />
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden md:flex" />
              <CarouselNext className="hidden md:flex" />
            </Carousel>
            <div className="text-center mt-12">
              <Button onClick={() => window.open(whatsappLink, '_blank')} className="bg-red-900 hover:bg-red-800 text-white rounded-full px-6 py-4 text-base md:px-10 md:py-6 md:text-lg">
                Agende sua consulta e comece a mudança
              </Button>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="text-center py-20 px-6 bg-cover" style={{ backgroundImage: "url('/thais-aires-laptop.jpeg')", backgroundPosition: 'center' }}>
           <div className="bg-red-900/80 py-20">
            <h2 className="text-4xl font-bold text-white mb-4">Sua nova vida, mais leve e saudável, começa hoje.</h2>
            <p className="text-xl text-rose-100 mb-8 max-w-2xl mx-auto">Chega de esperar. Dê o primeiro passo para a mulher que você deseja ser. Estou aqui para te guiar.</p>
            <Button onClick={() => window.open(whatsappLink, '_blank')} className="bg-white text-red-900 hover:bg-rose-100 rounded-full px-6 py-4 text-base md:px-10 md:py-6 md:text-lg font-bold">
              Quero transformar minha saúde
            </Button>
           </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-stone-800 text-white">
        <div className="max-w-6xl mx-auto py-12 px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
            {/* Column 1: Logo and Copyright */}
            <div className="flex flex-col items-center md:items-start">
              <a href="#">
                <img src="/logo-full.png" alt="Logo Thaís Aires" className="h-20 mb-4" style={{ filter: 'brightness(0) invert(1)' }}/>
              </a>
              <p className="text-sm text-stone-400">&copy; {new Date().getFullYear()} Thaís Aires Nutricionista. <br/> Todos os direitos reservados.</p>
            </div>

            {/* Column 2: Navigation */}
            <div>
              <h3 className="font-semibold text-lg mb-4">Navegação</h3>
              <ul className="space-y-2">
                <li><a href="#metodo" className="hover:text-rose-200 transition-colors">O Método</a></li>
                <li><a href="#sobre" className="hover:text-rose-200 transition-colors">Sobre Mim</a></li>
                <li><a href="#jornada" className="hover:text-rose-200 transition-colors">Sua Jornada</a></li>
                <li><a href="#depoimentos" className="hover:text-rose-200 transition-colors">Depoimentos</a></li>
              </ul>
            </div>

            {/* Column 3: Social Media */}
            <div>
              <h3 className="font-semibold text-lg mb-4">Siga-me</h3>
              <div className="flex justify-center md:justify-start space-x-4">
                <a href={instagramLink} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <Instagram className="h-6 w-6 hover:text-rose-200 transition-colors" />
                </a>
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                  <MessageCircle className="h-6 w-6 hover:text-rose-200 transition-colors" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;