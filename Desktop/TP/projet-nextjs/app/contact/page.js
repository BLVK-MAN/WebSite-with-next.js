import Button from '../../components/ui/Button';

export const metadata = {
    title: "Contact | NextVibe Studio",
    description: "Contactez-nous pour démarrer votre projet digital.",
};

export default function Contact() {
    return (
        <div className="bg-white py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-16">
                    {/* Contact Info */}
                    <div>
                        <h1 className="text-4xl font-bold text-primary mb-6">Parlons de votre projet</h1>
                        <p className="text-xl text-secondary mb-12">
                            Vous avez une idée ? Un projet ? Ou simplement envie de dire bonjour ?
                            Remplissez le formulaire ou contactez-nous directement.
                        </p>

                        <div className="space-y-8">
                            <div className="flex items-start">
                                <div className="flex-shrink-0">
                                    <svg className="w-6 h-6 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <div className="ml-4">
                                    <h3 className="text-lg font-medium text-primary">Email</h3>
                                    <a href="mailto:hello@nextvibe.studio" className="text-secondary hover:text-orange-600 transition-colors">
                                        hello@nextvibe.studio
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="flex-shrink-0">
                                    <svg className="w-6 h-6 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                </div>
                                <div className="ml-4">
                                    <h3 className="text-lg font-medium text-primary">Bureau</h3>
                                    <p className="text-secondary">
                                        123 Avenue de l'Innovation<br />
                                        75001 Paris, France
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="flex-shrink-0">
                                    <svg className="w-6 h-6 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                </div>
                                <div className="ml-4">
                                    <h3 className="text-lg font-medium text-primary">Téléphone</h3>
                                    <p className="text-secondary">+33 1 23 45 67 89</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Form */}
                    <div className="bg-surface p-8 md:p-10 rounded-2xl">
                        <form className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-primary mb-2">Nom</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-shadow"
                                        placeholder="Votre nom"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-primary mb-2">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-shadow"
                                        placeholder="vous@exemple.com"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="subject" className="block text-sm font-medium text-primary mb-2">Sujet</label>
                                <select
                                    id="subject"
                                    name="subject"
                                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-shadow bg-white"
                                >
                                    <option>Je souhaite créer un site vitrine</option>
                                    <option>J'ai besoin d'une refonte graphique</option>
                                    <option>Je cherche une solution e-commerce</option>
                                    <option>Autre demande</option>
                                </select>
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-primary mb-2">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={4}
                                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-shadow"
                                    placeholder="Dites-nous en plus sur votre projet..."
                                ></textarea>
                            </div>

                            <Button type="submit" variant="primary" className="w-full justify-center">
                                Envoyer le message
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
