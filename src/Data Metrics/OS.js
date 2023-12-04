import React from 'react'
import { Card, Grid, Header } from "semantic-ui-react";
import PowerBIComponent from '../PowerBiComponent'

function OS() {
    return (
        <Card fluid style={style.card}>
            <Grid columns={2}>
                <Grid.Column>
                    <Header as="h3">OS</Header>
                </Grid.Column>
            </Grid>
            <br />
            Ethereum
            <PowerBIComponent link="https://app.powerbi.com/view?r=eyJrIjoiZTY1N2QwODktMzMyMy00MTExLTljY2ItNjA4YWYzNTMzZDA4IiwidCI6ImUzNmVlMzhmLTkxYjgtNGRjYS05YjEzLWNhYTUzNjBjOTcxNCIsImMiOjF9" />
            Binance
            <PowerBIComponent link="https://app.powerbi.com/view?r=eyJrIjoiYmY2MTMyYzAtNjljZS00YjM1LWExZmQtZTIyOTk2YjEyZjgxIiwidCI6ImUzNmVlMzhmLTkxYjgtNGRjYS05YjEzLWNhYTUzNjBjOTcxNCIsImMiOjF9" />
        </Card>

    )
}

const style = {
    card: {
        padding: 20
    }
};

export default OS