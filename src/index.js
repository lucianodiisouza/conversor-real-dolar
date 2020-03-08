import React from 'react';
import ReactDOM from 'react-dom';

import './Index.css';

const COTACAO = 4.6; //Dolar Quotation at 07.03.2020 - 21:26hrs
const convertaDolarEmReal = dolar =>
    dolar * COTACAO;
const convertaRealEmDolar = real =>
    real / COTACAO;

const InputDeValor = ({
    moeda,
    valor,
    onChange
}) => {
    return (
        <div>
            <input
                type="number"
                value={valor || ''}
                onChange={e => onChange(e.target.value)}
                className="input"
                placeholder={moeda}
            />
        </div>
    );
};

const App = props => {
    const [
        valorEmDolar,
        setValorEmDolar
    ] = React.useState();

    return (
        <form className="main">
            <InputDeValor
                moeda="R$"
                valor={convertaDolarEmReal(valorEmDolar)}
                onChange={v =>
                    setValorEmDolar(convertaRealEmDolar(v))
                }
            />
            <InputDeValor
                moeda="US$"
                valor={valorEmDolar}
                onChange={v => setValorEmDolar(v)}
            />
        </form>
    );
};

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
