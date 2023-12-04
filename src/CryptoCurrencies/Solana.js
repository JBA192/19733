import React from 'react'
import { Card, Grid, Header, Statistic } from "semantic-ui-react";
import TableauComponent from '../TableauComponent';

function Solana() {
    return (
        <>
            <Grid columns={3}>
                <Grid.Column textAlign='center'>
                    <Card fluid style={style.card}>
                        <Statistic size='small'>
                            <Statistic.Value>1,983</Statistic.Value>
                        </Statistic>
                        <Header as="h4" style={style.header}>Validators</Header>
                    </Card>
                </Grid.Column>
                <Grid.Column textAlign='center'>
                    <Card fluid style={style.card}>
                        <Statistic size='small'>
                            <Statistic.Value>23</Statistic.Value>
                        </Statistic>
                        <Header as="h4" style={style.header}>Nakamoto Coefficient</Header>
                    </Card>
                </Grid.Column>
                <Grid.Column textAlign='center'>
                    <Card fluid style={style.card}>
                        <Statistic size='small'>
                            <Statistic.Value>946</Statistic.Value>
                        </Statistic>
                        <Header as="h4" style={style.header}>Contributors</Header>
                    </Card>
                </Grid.Column>
            </Grid>
            <Card fluid style={style.card}>
                <TableauComponent link={'https://public.tableau.com/shared/JKGK5CSKB?:display_count=n&:origin=viz_share_link'} />
            </Card>
            <Card fluid style={style.card}>
                <Grid columns={2}>
                    <Grid.Column>
                        <Header as={'h3'} content='Number of Developers' />
                        <p style={style.font}>
                            Solana has experienced the most significant decline, plummeting by 57%. Currently, Solana has 946 monthly active developers as of October 2023.
                        </p>
                        <Header as={'h3'} content='Namakamoto Coefficient' />
                        <p style={style.font}>
                            Solana, with a Nakamoto coefficient in the moderate range, showcases a reasonably decentralized structure.
                        </p>
                    </Grid.Column>
                    <Grid.Column>
                        <Header as={'h3'} content='Node Distribution' />
                        <p style={style.font}>
                            For Solana, the United States has 100% of the total nodes in the North American region, the same can be said for Vietnam in Asia. In South America, Uruguay has 80% of the total number of nodes.
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

export default Solana