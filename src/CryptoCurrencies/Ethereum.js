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

export default Ethereum