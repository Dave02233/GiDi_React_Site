import './Cards.css'; 

export const Cards = () => {
    return (
        <div className="cards-container">
            <div className="card card-1">
                <h3>Automazione</h3>
                <p>Programmazione PLC, HMI, Scada, Motion e Revamping</p>
                <a href="#automazione"><button>Scopri di più</button></a>
            </div>
            <div className="card card-2">
                <h3>Informatica</h3>
                <p>Soluzioni informatiche su misura, Industria 4.0 e Raccolta Dati</p>
                <a href="#informatica"><button>Scopri di più</button></a>
            </div>
            <div className="card card-3">
                <h3>Robotica</h3>
                <p>Cobot e Robot personalizzati per ogni contesto industriale</p>
                <a href="#robotica"><button>Scopri di più</button></a>
            </div>
        </div>
    )
}