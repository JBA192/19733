import React from 'react'
import { Card, Grid, Header } from "semantic-ui-react";
import PowerBIComponent from '../PowerBiComponent'

function Clients() {
    return (
        <div>
            <Card fluid style={style.card}>
                <Header as="h3">Clients</Header>

                <p style={style.font}>
                    Bitcoin mining primarily relies on the Bitcoin Core (Satoshi) client. In Ethereum and its associated coins, the Geth execution client is predominantly utilized, encompassing 77% of the participants in the Ethereum Network and 53% in Binance Coin. This indicates a higher level of centralization in Bitcoin, where, despite the existence of approximately 10 other client types, participants overwhelmingly favor the Bitcoin Core (Satoshi) client. This specific client closely adheres to the original Bitcoin applications developed by Satoshi Nakamoto.
                </p>
            </Card>
            <Card fluid style={style.card}>
                <Header as="h3">Ethereum</Header>
                <PowerBIComponent link="https://app.powerbi.com/view?r=eyJrIjoiN2ExMGQyMTktZTNiZi00NjE4LWI1NTktY2M5OGViNzAzOWY0IiwidCI6ImUzNmVlMzhmLTkxYjgtNGRjYS05YjEzLWNhYTUzNjBjOTcxNCIsImMiOjF9" />
            </Card>
            <Card fluid style={style.card}>
                <Header as="h3">Binance</Header>
                <PowerBIComponent link="https://app.powerbi.com/view?r=eyJrIjoiYzYyZGIwZjMtYTQzZS00OWY0LWFiMGUtYjZiNjFlZDUyMzQ1IiwidCI6ImUzNmVlMzhmLTkxYjgtNGRjYS05YjEzLWNhYTUzNjBjOTcxNCIsImMiOjF9" />

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

export default Clients