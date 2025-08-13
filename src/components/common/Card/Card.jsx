import './Card.css';

export default function Card({ title, children }) {
    return (
        <div className="card">
            <h3>{title}</h3>
            <div className="card-details">
                {children}
            </div>
        </div>
    );
}