import React from 'react'
import { Card, Grid, Header } from "semantic-ui-react";
import PowerBIComponent from '../PowerBiComponent'

function Clients() {
    return (
        <Card fluid style={style.card}>
            <Grid columns={2}>
                <Grid.Column>
                    <Header as ="h3">Clients</Header>
                </Grid.Column>
                </Grid>
                <br />
            <PowerBIComponent link="https://app.powerbi.com/view?r=eyJrIjoiN2ExMGQyMTktZTNiZi00NjE4LWI1NTktY2M5OGViNzAzOWY0IiwidCI6ImUzNmVlMzhmLTkxYjgtNGRjYS05YjEzLWNhYTUzNjBjOTcxNCIsImMiOjF9" />
            Binance
            <PowerBIComponent link="https://app.powerbi.com/view?r=eyJrIjoiYzYyZGIwZjMtYTQzZS00OWY0LWFiMGUtYjZiNjFlZDUyMzQ1IiwidCI6ImUzNmVlMzhmLTkxYjgtNGRjYS05YjEzLWNhYTUzNjBjOTcxNCIsImMiOjF9" />
        </Card>

    )
}

const style = {
    card: {
        padding: 20
    }
};

export default Clients