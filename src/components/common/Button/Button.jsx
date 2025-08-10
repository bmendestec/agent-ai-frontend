import './button.css';

export function Button({ 
    children, 
    onClick, 
    className = '', 
    variant = 'default',
    isActive = false,
    ...props 
}) {
    const baseClass = 'button';
    const variantClass = `button--${variant}`;
    const activeClass = isActive ? 'button--active' : '';
    const combinedClasses = `${baseClass} ${variantClass} ${activeClass} ${className}`.trim();

    return (
        <button
            onClick={onClick}
            className={combinedClasses}
            {...props}
        >
            {children}
        </button>
    );
}
