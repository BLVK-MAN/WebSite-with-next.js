export default function ServiceCard({ title, description, icon }) {
    return (
        <div className="bg-surface p-8 rounded-2xl border border-transparent hover:border-border transition-all duration-300 hover:shadow-sm">
            <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center mb-6 text-primary">
                {icon}
            </div>
            <h3 className="text-xl font-bold text-primary mb-3">{title}</h3>
            <p className="text-secondary leading-relaxed">{description}</p>
        </div>
    );
}
