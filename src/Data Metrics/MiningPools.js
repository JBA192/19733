import React from 'react'
import { Card } from "semantic-ui-react";
import PowerBIComponent from '../PowerBiComponent'

function MiningPools() {
    return (
        <Card fluid style={style.card}>
            <PowerBIComponent link="https://app.powerbi.com/view?r=eyJrIjoiODFjNWE0NzItMzY2OC00OWFmLWEyYjgtZGI4YTE2YzRlYzcwIiwidCI6ImUzNmVlMzhmLTkxYjgtNGRjYS05YjEzLWNhYTUzNjBjOTcxNCIsImMiOjF9" />
            <PowerBIComponent link="https://app.powerbi.com/view?r=eyJrIjoiMWY4ODgzNzYtZjM2OC00YmVlLWIwZGYtNTc3MDg4ZGJkZmVjIiwidCI6ImUzNmVlMzhmLTkxYjgtNGRjYS05YjEzLWNhYTUzNjBjOTcxNCIsImMiOjF9" />
        </Card>

    )
}

const style = {
    card: {
        padding: 20
    }
};

export default MiningPools