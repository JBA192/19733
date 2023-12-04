import React from 'react'
import { Card, Grid, Header } from "semantic-ui-react";
import PowerBIComponent from '../PowerBiComponent'

function ClientType() {
    return (
        <div>

            <Card fluid style={style.card}>
            <Header as="h3">Client Type/Version</Header>
                <p style={style.font}>
                Numerous client versions are available and supported across all networks, and users typically opt for the latest version for evident reasons. Approximately 53.37% of users in the Bitcoin network utilize version 25.0 of Bitcoin Core, comprising 40% on /satoshi:25.0.0/ and 13.37% on /satoshi:25.1.0/. In the Ethereum network, over half of the users favor version go1.18.1, while in the Binance Coin network, 19.1% opt for version go1.20.10.
                </p>
               
            </Card>
            <Card fluid style={style.card}>
            <Header as="h3">Bitcoin</Header>
                <PowerBIComponent link="https://app.powerbi.com/view?r=eyJrIjoiMjhjNzg2NzEtNDdiNS00NmMzLWI1N2YtMGE0ZWNlZTUzYjA4IiwidCI6ImUzNmVlMzhmLTkxYjgtNGRjYS05YjEzLWNhYTUzNjBjOTcxNCIsImMiOjF9" />
            </Card>
            <Card fluid style={style.card}>
            <Header as="h3">Ethereum</Header>
                <PowerBIComponent link="https://app.powerbi.com/view?r=eyJrIjoiZjViZjY0YzktNTVkYy00NWUwLWE3M2UtMjYwYzJjMDYwYjc3IiwidCI6ImUzNmVlMzhmLTkxYjgtNGRjYS05YjEzLWNhYTUzNjBjOTcxNCIsImMiOjF9" />
            </Card>
            <Card fluid style={style.card}>
            <Header as="h3">Binance</Header>
                <PowerBIComponent link="https://app.powerbi.com/view?r=eyJrIjoiNjBiMDJkMzktNTM1OS00YThhLTliOTgtOTA0ZGViZjUwZWUwIiwidCI6ImUzNmVlMzhmLTkxYjgtNGRjYS05YjEzLWNhYTUzNjBjOTcxNCIsImMiOjF9" />
            </Card>
        </div>
    )
}

const style = {
    card: {
        padding: 20
    },
    font: {
        fontSize: "18px"
    }
};

export default ClientType