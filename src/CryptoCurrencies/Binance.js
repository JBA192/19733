import React from 'react'
import { Card, Grid, Header, Statistic } from "semantic-ui-react";
import TableauComponent from '../TableauComponent';

function Binance() {
    return (
        <>
            <Grid columns={3}>
                {/* <Grid.Column textAlign='center'>
                <Card fluid style={style.card}>
                    <Statistic horizontal style={style.statistics}>
                        <Statistic.Value >483.58</Statistic.Value>
                        <Statistic.Label>EH/s</Statistic.Label>
                    </Statistic>
                    <Header as="h4" style={style.header}> Hash Rate </Header>
                </Card>
            </Grid.Column> */}
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
    }
};

export default Binance