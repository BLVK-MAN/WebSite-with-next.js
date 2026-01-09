export const metadata = {
    title: "À propos | NextVibe Studio",
    description: "Découvrez l'équipe derrière NextVibe Studio et notre vision du web.",
};

export default function About() {
    return (
        <div className="bg-white">
            {/* Intro Section */}
            <section className="py-20 md:py-28">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6">
                                Nous créons le web de demain.
                            </h1>
                            <div className="w-20 h-1 bg-orange-500 rounded mb-8"></div>
                            <p className="text-lg text-secondary leading-relaxed mb-6">
                                Chez NextVibe Studio, nous croyons que la technologie doit être invisible pour laisser place à l'expérience. Notre mission est de simplifier le complexe et de rendre le beau fonctionnel.
                            </p>
                            <p className="text-lg text-secondary leading-relaxed">
                                Fondée par une équipe de passionnés, notre agence s'engage à fournir des solutions digitales haut de gamme, sans compromis sur la qualité ou la performance.
                            </p>
                        </div>
                        <div className="relative">
                            <div className="aspect-[4/3] rounded-2xl bg-slate-100 overflow-hidden relative">
                                {/* Placeholder for About Image containing a decorative pattern */}
                                <div className="absolute inset-0 bg-gradient-to-br from-slate-200 to-slate-100 flex items-center justify-center">
                                    <span className="text-slate-400 font-bold text-2xl">NextVibe Team</span>
                                </div>
                            </div>
                            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-orange-100 rounded-full z-[-1]"></div>
                            <div className="absolute -top-6 -right-6 w-32 h-32 bg-slate-50 rounded-full z-[-1]"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Philosophy/Values Section */}
            <section className="py-24 bg-surface">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-primary mb-4">Notre Philosophie</h2>
                    </div>
                    <div className="grid md:grid-cols-3 gap-12">
                        <div className="text-center">
                            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm text-2xl font-bold text-orange-600 border border-slate-100">
                                1
                            </div>
                            <h3 className="text-xl font-bold text-primary mb-3">Simplicité</h3>
                            <p className="text-secondary">Nous éliminons le superflu pour nous concentrer sur l'essentiel. Less is more.</p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm text-2xl font-bold text-orange-600 border border-slate-100">
                                2
                            </div>
                            <h3 className="text-xl font-bold text-primary mb-3">Performance</h3>
                            <p className="text-secondary">La vitesse n'est pas une option. Nous optimisons chaque ligne de code.</p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm text-2xl font-bold text-orange-600 border border-slate-100">
                                3
                            </div>
                            <h3 className="text-xl font-bold text-primary mb-3">Innovation</h3>
                            <p className="text-secondary">Nous restons à la pointe des dernières technologies pour vous offrir le meilleur.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
