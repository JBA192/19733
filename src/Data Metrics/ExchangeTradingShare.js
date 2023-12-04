import React from 'react'
import { Card, Grid, Header } from "semantic-ui-react";
import PowerBIComponent from '../PowerBiComponent'

function ExchangeTradingShare() {
    return (
        <>
            <Card fluid style={style.card}>
                <PowerBIComponent link='https://app.powerbi.com/view?r=eyJrIjoiNDg4ZDk5MDctZDcwOS00YWJjLTkyYzgtZjQ4NjdjMzVhMjU1IiwidCI6ImUzNmVlMzhmLTkxYjgtNGRjYS05YjEzLWNhYTUzNjBjOTcxNCIsImMiOjF9' />
                <PowerBIComponent link="https://app.powerbi.com/view?r=eyJrIjoiYjdlNmQ4ZjEtNjcwNy00ODA4LTk3OGUtYjMyNTAwZWYyNDcxIiwidCI6ImUzNmVlMzhmLTkxYjgtNGRjYS05YjEzLWNhYTUzNjBjOTcxNCIsImMiOjF9" />
                <PowerBIComponent link="https://app.powerbi.com/view?r=eyJrIjoiYWNlMmZlZjAtYWQwMi00ZjU3LWIyZWYtN2M1MzgwODVhNjE5IiwidCI6ImUzNmVlMzhmLTkxYjgtNGRjYS05YjEzLWNhYTUzNjBjOTcxNCIsImMiOjF9" />
            </Card>
            <Card fluid style={style.card}>
                <Header as={'h3'} content='Number of Developers' />
                <Grid columns={2}>
                    <Grid.Column>
                        <p style={style.font}>
                            Among developers, Ethereum stands out as the most favored cryptocurrency, boasting 5,769 active developers in October 2023. However, this marks a 21% decrease from the previous year, where Ethereum reached its peak with 7,431 monthly active developers in November 2022. In contrast, Bitcoin maintains an average monthly developer count of 951 as of October 2023, reflecting a 16% decline from the peak of 1,213 developers in November 2022. Notably, Solana has experienced the most significant decline, plummeting by 57%. Currently, Solana has 946 monthly active developers as of October 2023.
                        </p>
                    </Grid.Column>
                    <Grid.Column>

                    </Grid.Column>
                </Grid>
            </Card>
        </>
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

export default ExchangeTradingShare