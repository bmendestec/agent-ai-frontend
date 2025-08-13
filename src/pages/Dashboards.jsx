import Card from '../components/common/Card/Card';
import '../styles/Dashboards.css';

export default function Dashboards() {
    const mockCards = [
        { title: 'Card 1' },
        { title: 'Card 2' },
        { title: 'Card 3' },
        { title: 'Card 4' },
    ]

    return (
        <>
            <div className="title">
                <h1>Dashboards!</h1>
            </div>
            <h2>Main Dash</h2>
            <div className="main-dash-container">
                <div className="main-card">

                    {mockCards.map((card) => (
                        <Card title={card.title} />
                    ))}
                </div>
                <div className="main-card">

                    {mockCards.map((card) => (
                        <Card title={card.title} />
                    ))}
                </div>
                <div className="main-card">

                    {mockCards.map((card) => (
                        <Card title={card.title} />
                    ))}
                </div>
                <div className="main-card">

                    {mockCards.map((card) => (
                        <Card title={card.title} />
                    ))}
                </div>
                <div className="main-card">

                    {mockCards.map((card) => (
                        <Card title={card.title} />
                    ))}
                </div>
                <div className="main-card">

                    {mockCards.map((card) => (
                        <Card title={card.title} />
                    ))}
                </div>
            </div>
        </>
    )
}