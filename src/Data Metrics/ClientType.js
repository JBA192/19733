import React from 'react'
import { Card } from "semantic-ui-react";
import PowerBIComponent from '../PowerBiComponent'

function ClientType() {
    return (
        <Card fluid style={style.card}>
            {/* <PowerBIComponent link="https://app.powerbi.com/reportEmbed?reportId=f3c5f67f-d729-4f6e-912b-b50a84a8b200&autoAuth=true&ctid=e36ee38f-91b8-4dca-9b13-caa5360c9714" /> */}
            Ethereum
            <PowerBIComponent link="https://app.powerbi.com/view?r=eyJrIjoiZjViZjY0YzktNTVkYy00NWUwLWE3M2UtMjYwYzJjMDYwYjc3IiwidCI6ImUzNmVlMzhmLTkxYjgtNGRjYS05YjEzLWNhYTUzNjBjOTcxNCIsImMiOjF9" />
            Binance
            <PowerBIComponent link="https://app.powerbi.com/view?r=eyJrIjoiNjBiMDJkMzktNTM1OS00YThhLTliOTgtOTA0ZGViZjUwZWUwIiwidCI6ImUzNmVlMzhmLTkxYjgtNGRjYS05YjEzLWNhYTUzNjBjOTcxNCIsImMiOjF9" />
        </Card>

    )
}

const style = {
    card: {
        padding: 20
    }
};

export default ClientType