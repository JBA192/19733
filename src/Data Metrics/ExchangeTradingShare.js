import React from 'react'
import { Card, Grid, Header, List } from "semantic-ui-react";
import PowerBIComponent from '../PowerBiComponent'

function ExchangeTradingShare() {
    return (
        <>
            <Card fluid style={style.card}>
                <p style={style.font}>
                    <Header as={'h2'} content='The Application Layer' />
                    <Grid columns={2}>
                        <Grid.Column>
                            The Application Layer, positioned atop the blockchain structure, serves as the user-friendly gateway to blockchain technology. It is the user-facing interface of a blockchain system, delivering blockchain-based applications and services to end-users. It serves as the final product, offering specific functionalities such as wallets, lending platforms, staking services, and more.
                        </Grid.Column>
                        <Grid.Column>
                            It incorporates key components to enhance accessibility and practicality:
                            <List bulleted>
                                <List.Item>Decentralized Applications</List.Item>
                                <List.Item>Smart Contracts and Chaincode</List.Item>
                                <List.Item>User Interfaces and User Experience</List.Item>
                                <List.Item>Web3 Integration</List.Item>
                            </List>
                        </Grid.Column>
                    </Grid>
                </p>
            </Card>
            <Card fluid style={style.card}>
                <PowerBIComponent link='https://app.powerbi.com/view?r=eyJrIjoiNDg4ZDk5MDctZDcwOS00YWJjLTkyYzgtZjQ4NjdjMzVhMjU1IiwidCI6ImUzNmVlMzhmLTkxYjgtNGRjYS05YjEzLWNhYTUzNjBjOTcxNCIsImMiOjF9' />
            </Card>
            <Card fluid style={style.card}>
                <PowerBIComponent link="https://app.powerbi.com/view?r=eyJrIjoiYjdlNmQ4ZjEtNjcwNy00ODA4LTk3OGUtYjMyNTAwZWYyNDcxIiwidCI6ImUzNmVlMzhmLTkxYjgtNGRjYS05YjEzLWNhYTUzNjBjOTcxNCIsImMiOjF9" />

            </Card>
            <Card fluid style={style.card}>
                <PowerBIComponent link="https://app.powerbi.com/view?r=eyJrIjoiYWNlMmZlZjAtYWQwMi00ZjU3LWIyZWYtN2M1MzgwODVhNjE5IiwidCI6ImUzNmVlMzhmLTkxYjgtNGRjYS05YjEzLWNhYTUzNjBjOTcxNCIsImMiOjF9" />
            </Card>
            <Card fluid style={style.card}>
                <Grid columns={1}>
                    <Grid.Column>
                        <p style={style.font}>
                            Analyzing Binance and Solana coins, our data collection reveals that Binance plays a pivotal role in the majority of transactions for both coins. This high dependency underscores the significant influence of Binance's decisions on the operational trajectory and future dynamics of these respective coins.
                        </p>
                        <Header as={'h3'} content='Number of Developers' />
                        <p style={style.font}>
                            Among developers, Ethereum stands out as the most favored cryptocurrency, boasting 5,769 active developers in October 2023. However, this marks a 21% decrease from the previous year, where Ethereum reached its peak with 7,431 monthly active developers in November 2022. In contrast, Bitcoin maintains an average monthly developer count of 951 as of October 2023, reflecting a 16% decline from the peak of 1,213 developers in November 2022. Notably, Solana has experienced the most significant decline, plummeting by 57%. Currently, Solana has 946 monthly active developers as of October 2023.
                        </p>
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