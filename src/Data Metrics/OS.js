import React from 'react'
import { Card, Grid, Header } from "semantic-ui-react";
import PowerBIComponent from '../PowerBiComponent'

function OS() {
    return (
        <div>

            <Card fluid style={style.card}>
                <Header as="h3">OS</Header>
                <p style={style.font}>
                    The majority of widely-used clients are compatible with Windows, Linux, and MacOS. Linux-amd64 is the preferred operating system for a significant portion of users on both the Ethereum (80.62%) and Binance Coin (66.17%) networks. Ethereum clients are developed using diverse programming languages, such as Geth (Go Ethereum) in Go, Parity in Rust, Nethermind in C#, and Besu in Java. As highlighted previously, Geth stands out as the most prevalent client in both the Ethereum and Binance Coin networks.
                </p>
            </Card>
            <Card fluid style={style.card}>
            <Header as="h3">Ethereum</Header>
                <PowerBIComponent link="https://app.powerbi.com/view?r=eyJrIjoiZTY1N2QwODktMzMyMy00MTExLTljY2ItNjA4YWYzNTMzZDA4IiwidCI6ImUzNmVlMzhmLTkxYjgtNGRjYS05YjEzLWNhYTUzNjBjOTcxNCIsImMiOjF9" />
            </Card>
            <Card fluid style={style.card}>
                <p style={style.font}>
                    In both the Ethereum and Bitcoin networks, a single dominant technology stack prevails, resulting in a monoculture that poses potential risks of centralization. While this issue is recognized, its mitigation proves challenging, as imposing any constraints to ensure a diverse range of technologies contradicts a fundamental principle of blockchain ecosystems, which is to operate without restrictions.
                </p>
            </Card>

            <Card fluid style={style.card}>
            <Header as="h3">Binance</Header>
                <PowerBIComponent link="https://app.powerbi.com/view?r=eyJrIjoiYmY2MTMyYzAtNjljZS00YjM1LWExZmQtZTIyOTk2YjEyZjgxIiwidCI6ImUzNmVlMzhmLTkxYjgtNGRjYS05YjEzLWNhYTUzNjBjOTcxNCIsImMiOjF9" />
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

export default OS