import Button from '../components/ui/Button';
import ServiceCard from '../components/ui/ServiceCard';

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-32 lg:pt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-orange-100 text-orange-600 font-medium text-sm mb-8">
              Agence Digitale Créative
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-primary mb-8 leading-tight">
              Transformez votre présence en ligne.
            </h1>
            <p className="text-xl text-secondary mb-10 leading-relaxed max-w-2xl">
              Nous concevons des expériences web uniques qui captivent votre audience et propulsent votre entreprise vers de nouveaux sommets.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/contact" variant="primary">
                Démarrer un projet
              </Button>
              <Button href="/services" variant="secondary">
                Découvrir nos services
              </Button>
            </div>
          </div>
        </div>

        {/* Abstract Background Shapes */}
        <div className="absolute top-0 right-0 -z-10 opacity-30 translate-x-1/3 -translate-y-1/4">
          <div className="w-[800px] h-[800px] rounded-full bg-gradient-to-br from-orange-400 to-transparent blur-3xl"></div>
        </div>
      </section>

      {/* Services Preview Section */}
      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-primary mb-4">Nos expertises</h2>
            <p className="text-secondary text-lg">
              Des solutions sur mesure pour répondre à tous vos besoins digitaux.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <ServiceCard
              title="Design UI/UX"
              description="Création d'interfaces intuitives et esthétiques centrées sur l'utilisateur."
              icon={
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
              }
            />
            <ServiceCard
              title="Développement Web"
              description="Sites performants et modernes utilisant les dernières technologies comme Next.js."
              icon={
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              }
            />
            <ServiceCard
              title="Stratégie Digitale"
              description="Accompagnement complet pour optimiser votre visibilité en ligne."
              icon={
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              }
            />
          </div>

          <div className="mt-12 text-center">
            <Button href="/services" variant="secondary">
              Voir tous nos services
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-primary rounded-3xl p-12 md:p-20 text-center relative overflow-hidden">

            {/* Background decorative elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20 pointer-events-none">
              <div className="absolute top-0 left-0 w-64 h-64 bg-orange-500 rounded-full mix-blend-multiply blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
              <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply blur-3xl transform translate-x-1/2 translate-y-1/2"></div>
            </div>

            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Prêt à lancer votre projet ?</h2>
              <p className="text-slate-300 text-lg mb-10 max-w-2xl mx-auto">
                Discutons de vos objectifs et voyons comment nous pouvons vous aider à les atteindre.
              </p>
              <Button href="/contact" variant="accent" className="bg-white text-primary hover:bg-slate-100 hover:text-primary">
                Contactez-nous
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
