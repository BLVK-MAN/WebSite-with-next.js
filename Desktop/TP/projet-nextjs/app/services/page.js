import ServiceCard from '../../components/ui/ServiceCard';
import Button from '../../components/ui/Button';

export const metadata = {
    title: "Nos Services | NextVibe Studio",
    description: "Découvrez nos solutions digitales : Design UI/UX, Développement Web, SEO et Consulting.",
};

export default function Services() {
    const services = [
        {
            title: "Design UI/UX",
            description: "Nous créons des interfaces centrées sur l'utilisateur qui allient esthétique et fonctionnalité. Notre approche commence par la compréhension approfondie de vos utilisateurs pour délivrer des designs qui convertissent.",
            icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
            )
        },
        {
            title: "Développement Web",
            description: "Des sites web rapides, sécurisés et performants développés avec les technologies les plus modernes comme Next.js et React. Nous assurons un code propre et maintenable.",
            icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
            )
        },
        {
            title: "SEO & Performance",
            description: "Optimisation technique pour garantir une visibilité maximale sur les moteurs de recherche. Nous travaillons sur la vitesse de chargement et l'accessibilité.",
            icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
            )
        },
        {
            title: "Solutions E-commerce",
            description: "Des boutiques en ligne performantes qui simplifient l'achat pour vos clients et la gestion pour vous. Intégration de paiements sécurisés.",
            icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
            )
        },
        {
            title: "Maintenance & Support",
            description: "Nous ne vous laissons pas tomber après le lancement. Nos forfaits de maintenance garantissent que votre site reste à jour et sécurisé.",
            icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
            )
        },
        {
            title: "Identité Visuelle",
            description: "Création de logos et chartes graphiques pour donner une personnalité unique et mémorable à votre marque.",
            icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
            )
        }
    ];

    return (
        <div className="bg-surface min-h-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">Nos Services</h1>
                    <p className="text-xl text-secondary">
                        Une gamme complète de services digitaux pour accompagner votre croissance.
                        De la conception à la réalisation, nous sommes à vos côtés.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <ServiceCard key={index} {...service} />
                    ))}
                </div>

                <div className="mt-20 text-center">
                    <h2 className="text-2xl font-bold text-primary mb-6">Un projet spécifique en tête ?</h2>
                    <Button href="/contact" variant="primary">
                        Parlons-en
                    </Button>
                </div>
            </div>
        </div>
    );
}
