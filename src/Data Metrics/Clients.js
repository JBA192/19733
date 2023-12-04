import React from 'react'
import { Card } from "semantic-ui-react";
import PowerBIComponent from '../PowerBiComponent'

function Clients() {
    return (
        <Card fluid style={style.card}>
            <PowerBIComponent link="https://app.powerbi.com/view?r=eyJrIjoiN2ExMGQyMTktZTNiZi00NjE4LWI1NTktY2M5OGViNzAzOWY0IiwidCI6ImUzNmVlMzhmLTkxYjgtNGRjYS05YjEzLWNhYTUzNjBjOTcxNCIsImMiOjF9" />
            <PowerBIComponent link="https://app.powerbi.com/view?r=eyJrIjoiYmY2MTMyYzAtNjljZS00YjM1LWExZmQtZTIyOTk2YjEyZjgxIiwidCI6ImUzNmVlMzhmLTkxYjgtNGRjYS05YjEzLWNhYTUzNjBjOTcxNCIsImMiOjF9" />
        </Card>

    )
}

const style = {
    card: {
        padding: 20
    }
};

export default Clients