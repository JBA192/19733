import React from 'react'
import { Card, Grid, Header, Statistic } from "semantic-ui-react";
import TableauComponent from '../TableauComponent';

function Binance() {
    return (
        <>
            <Grid columns={3}>
                <Grid.Column textAlign='center'>
                    <Card fluid style={style.card}>
                        <Statistic size='small'>
                            <Statistic.Value>40</Statistic.Value>
                        </Statistic>
                        <Header as="h4" style={style.header}>Validators</Header>
                    </Card>
                </Grid.Column>
                <Grid.Column textAlign='center'>
                    <Card fluid style={style.card}>
                        <Statistic size='small'>
                            <Statistic.Value>8</Statistic.Value>
                        </Statistic>
                        <Header as="h4" style={style.header}>Nakamoto Coefficient</Header>
                    </Card>
                </Grid.Column>
                <Grid.Column textAlign='center'>
                    <Card fluid style={style.card}>
                        <Statistic size='small'>
                            <Statistic.Value>600</Statistic.Value>
                        </Statistic>
                        <Header as="h4" style={style.header}>Contributors</Header>
                    </Card>
                </Grid.Column>
            </Grid>
            <Card fluid style={style.card}>
                <TableauComponent link={'https://public.tableau.com/shared/TQTQ95BZW?:display_count=n&:origin=viz_share_link'} />
            </Card>
            <Card fluid style={style.card}>
                <Grid columns={2}>
                    <Grid.Column>
                        <Header as={'h3'} content='Clients' />
                        <p style={style.font}>
                            In Binance and its associated coins, the Geth execution client is predominantly utilized, encompassing 53% in Binance Coin.
                        </p>
                        <Header as={'h3'} content='Client Version' />
                        <p style={style.font}>
                            In the Binance Coin network, 19.1% opt for version go1.20.10.
                        </p>
                        <Header as={'h3'} content='Node Distribution' />
                        <p style={style.font}>
                            In Binance, the United States has the entirety of the nodes in the world.</p>
                    </Grid.Column>
                    <Grid.Column>
                        <Header as={'h3'} content='Namakamoto Coefficient' />
                        <p style={style.font}>
                            Binance has a low Nakamoto coefficient, signaling a higher risk of centralization. These lower numbers imply a comparatively smaller number of entities required to collude to potentially compromise their respective networks, highlighting a greater vulnerability to centralized control or manipulation. It is also worth noting that this metric keeps changing over time.
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
    statistics: {
        justifyContent: 'center'
    },
    header: {
        marginTop: 0
    },
    font: {
        fontSize: "18px"
    }
};

export default Binance