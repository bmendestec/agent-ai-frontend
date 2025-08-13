import './Card.css';

export default function Card({ title, children, onDoubleClick }) {
    return (
        <div className="card">
            <h3>{title}</h3>
            <div className="card-details" onDoubleClick={onDoubleClick}>
                {children}
            </div>
        </div>
    );
}