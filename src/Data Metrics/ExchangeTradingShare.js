import React from 'react'
import { Card } from "semantic-ui-react";
import PowerBIComponent from '../PowerBiComponent'

function ExchangeTradingShare() {
    return (
        <Card fluid style={style.card}>
            <PowerBIComponent link='https://app.powerbi.com/view?r=eyJrIjoiNDg4ZDk5MDctZDcwOS00YWJjLTkyYzgtZjQ4NjdjMzVhMjU1IiwidCI6ImUzNmVlMzhmLTkxYjgtNGRjYS05YjEzLWNhYTUzNjBjOTcxNCIsImMiOjF9'/>
        </Card>
    )
}

const style = {
    card: {
        padding: 20
    }
};

export default ExchangeTradingShare