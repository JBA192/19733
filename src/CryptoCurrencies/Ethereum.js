import React from 'react'
import { Card, Grid, Header, Statistic } from "semantic-ui-react";
import TableauComponent from '../TableauComponent';

function Ethereum() {
    return (
        <>
            <Grid columns={3}>
                <Grid.Column textAlign='center'>
                    <Card fluid style={style.card}>
                        <Statistic size='small'>
                            <Statistic.Value>886,207</Statistic.Value>
                        </Statistic>
                        <Header as="h4" style={style.header}>Validators</Header>
                    </Card>
                </Grid.Column>
                <Grid.Column textAlign='center'>
                    <Card fluid style={style.card}>
                        <Statistic size='small'>
                            <Statistic.Value>2</Statistic.Value>
                        </Statistic>
                        <Header as="h4" style={style.header}>Nakamoto Coefficient</Header>
                    </Card>
                </Grid.Column>
                <Grid.Column textAlign='center'>
                    <Card fluid style={style.card}>
                        <Statistic size='small'>
                            <Statistic.Value>5,769</Statistic.Value>
                        </Statistic>
                        <Header as="h4" style={style.header}>Contributors</Header>
                    </Card>
                </Grid.Column>
            </Grid>

            <Card fluid style={style.card}>
                <TableauComponent link={'https://public.tableau.com/shared/5FWCSG54W?:display_count=n&:origin=viz_share_link'} />
            </Card>
            <Card fluid style={style.card}>
                <Grid columns={2}>
                    <Grid.Column>
                        <Header as={'h3'} content='Number of Developers' />
                        <p style={style.font}>
                            Among developers, Ethereum stands out as the most favored cryptocurrency, boasting 5,769 active developers in October 2023. However, this marks a 21% decrease from the previous year, where Ethereum reached its peak with 7,431 monthly active developers in November 2022.
                        </p>
                        <Header as={'h3'} content='Clients' />
                        <p style={style.font}>
                            In Ethereum and its associated coins, the Geth execution client is predominantly utilized, encompassing 77% of the participants in the Ethereum Network.
                        </p>
                        <Header as={'h3'} content='Client Version' />
                        <p style={style.font}>
                            In the Ethereum network, over half of the users favor version go1.18.1.
                        </p>
                        <Header as={'h3'} content='Namakamoto Coefficient' />
                        <p style={style.font}>
                            Ethereum has a low Nakamoto coefficient, signaling a higher risk of centralization. These lower numbers imply a comparatively smaller number of entities required to collude to potentially compromise their respective networks, highlighting a greater vulnerability to centralized control or manipulation. It is also worth noting that this metric keeps changing over time.
                        </p>
                    </Grid.Column>
                    <Grid.Column>
                        <Header as={'h3'} content='Number of Unique Miners Over Time' />
                        <p style={style.font}>
                            Ethereum (ETC) launched with 477 miners but witnessed a subsequent decrease in miner participation. Presently, the number has dwindled to approximately 36, signifying a continuous decline. This downward trend serves as an indicator of a potential centralization trend in mining activities within the Ethereum network, reflecting challenges that may affect its decentralization over time.
                        </p>
                        <Header as={'h3'} content='Node Distribution' />
                        <p style={style.font}>
                            In Ethereum, the highest number of nodes in the North American region is 534 nodes in Canada, which is greater than 98.5% of the overall population of nodes in that region. In Europe, the highest number of nodes is in Germany with 2469 and that is greater than 63% of the total number. Algeria in Africa has 1 node and that is 100% of the number of nodes in that region. In Asia, China has 118 nodes which is 67% of the total number in the region. Also in Oceania, there are 240 Ethereum nodes, 100% of which are in Australia.
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

export default Ethereum