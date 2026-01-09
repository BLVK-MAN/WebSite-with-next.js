import Link from 'next/link';
import clsx from 'clsx';

export default function Button({
    children,
    href,
    variant = 'primary',
    className,
    ...props
}) {
    const baseStyles = "inline-flex items-center justify-center px-6 py-3 text-sm font-medium rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2";

    const variants = {
        primary: "bg-primary text-white hover:bg-slate-800 focus:ring-slate-900",
        secondary: "bg-transparent border border-border text-secondary hover:text-primary hover:border-primary focus:ring-slate-500",
        accent: "bg-accent text-white hover:bg-orange-700 focus:ring-orange-600"
    };

    const styles = clsx(baseStyles, variants[variant], className);

    if (href) {
        return (
            <Link href={href} className={styles} {...props}>
                {children}
            </Link>
        );
    }

    return (
        <button className={styles} {...props}>
            {children}
        </button>
    );
}
