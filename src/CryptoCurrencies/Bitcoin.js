import React from 'react'
import { Card, Grid, Header, Statistic } from "semantic-ui-react";
import TableauComponent from '../TableauComponent';

function Bitcoin() {
    return (
        <>
            <Grid columns={3}>
                <Grid.Column textAlign='center'>
                    <Card fluid style={style.card}>
                        <Statistic horizontal style={style.statistics}>
                            <Statistic.Value >483.58</Statistic.Value>
                            <Statistic.Label>EH/s</Statistic.Label>
                        </Statistic>
                        <Header as="h4" style={style.header}> Hash Rate </Header>
                    </Card>
                </Grid.Column>
                <Grid.Column textAlign='center'>
                    <Card fluid style={style.card}>
                        <Statistic size='small'>
                            <Statistic.Value>8,700</Statistic.Value>
                        </Statistic>
                        <Header as="h4" style={style.header}>Nakamoto Coefficient</Header>
                    </Card>
                </Grid.Column>
                <Grid.Column textAlign='center'>
                    <Card fluid style={style.card}>
                        <Statistic size='small'>
                            <Statistic.Value>951</Statistic.Value>
                        </Statistic>
                        <Header as="h4" style={style.header}>Contributors</Header>
                    </Card>
                </Grid.Column>
            </Grid>
            <Card fluid style={style.card}>
                <TableauComponent link={'https://public.tableau.com/shared/GMMCRF5DP?:display_count=n&:origin=viz_share_link'} />
            </Card>
            <Card fluid style={style.card}>
                <Grid columns={2}>
                    <Grid.Column>
                        <Header as={'h3'} content='Number of Developers' />
                        <p style={style.font}>
                            Bitcoin maintains an average monthly developer count of 951 as of October 2023, reflecting a 16% decline from the peak of 1,213 developers in November 2022.
                        </p>
                        <Header as={'h3'} content='Clients' />
                        <p style={style.font}>
                            Bitcoin mining primarily relies on the Bitcoin Core (Satoshi) client. This indicates a higher level of centralization in Bitcoin, where, despite the existence of approximately 10 other client types, participants overwhelmingly favor the Bitcoin Core (Satoshi) client. This specific client closely adheres to the original Bitcoin applications developed by Satoshi Nakamoto.
                        </p>
                        <Header as={'h3'} content='Client Version' />
                        <p style={style.font}>
                            Approximately 53.37% of users in the Bitcoin network utilize version 25.0 of Bitcoin Core, comprising 40% on /satoshi:25.0.0/ and 13.37% on /satoshi:25.1.0/.
                        </p>
                        <Header as={'h3'} content='Nakamoto Coefficient' />
                        <p style={style.font}>
                            Bitcoin has an incredibly high Nakamoto coefficient of 8,700, showcasing its exceptional decentralization. This number signifies that a vast number of entities would need to collaborate to compromise the network, underscoring its robustness and resistance to centralization.
                        </p>
                    </Grid.Column>
                    <Grid.Column>
                        <Header as={'h3'} content='Hash Rate' />
                        <p style={style.font}>
                            In Bitcoin's case, boasting a hash rate of 483.58 EH/s, this signifies a substantial computational capacity, reinforcing its robust security against attacks and highlighting the extensive participation of miners in maintaining the network's integrity.
                        </p>
                        <Header as={'h3'} content='Number of Unique Miners Over Time' />
                        <p style={style.font}>
                            Bitcoin's history, the number of miners initially grew steadily, yet in 2014, it surged exponentially, peaking at an all-time high of 3,598 unique miners. However, this figure sharply declined, stabilizing around 23 today. This decline can be traced back to the escalating initial and ongoing expenses associated with operating a mining pool, impacting the participation and sustainability of individual miners.
                        </p>
                        <Header as={'h3'} content='Node Geography' />
                        <p style={style.font}>
                            For Bitcoin, the highest number of nodes in the Europe region is 615 located in the United Kingdom. This accounts for over 21% of the total number of nodes in Europe. Likewise, 16 nodes in South Africa account for over 61% of the nodes in Africa. The US has 1261 nodes, which is over 98% of the total nodes in North America. In Asia, Japan has the largest number of nodes 549, 33% of the number of nodes. All nodes in the Oceania region are located in New Zealand. Likewise, all nodes in South America are located in Paraguay.
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

export default Bitcoin