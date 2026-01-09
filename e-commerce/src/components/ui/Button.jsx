import React from 'react';
import './Button.css';

export function Button({
    children,
    size = 'md',
    variant = 'primary',
    className = '',
    fullWidth = false,
    ...props
}) {
    const sizeClass = `btn--${size}`;
    const variantClass = `btn--${variant}`;
    const widthClass = fullWidth ? 'btn--w-full' : '';

    return (
        <button
            className={`btn ${sizeClass} ${variantClass} ${widthClass} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
}
