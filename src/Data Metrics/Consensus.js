import { Card, Grid, Header, List, Table } from "semantic-ui-react";
import TableauComponent from "../TableauComponent"
import PowerBIComponent from '../PowerBiComponent'

function Consensus() {
    return (
        <div>

            <Card fluid style={style.card}>
                {/* Intro */}
                <Header as="h2" content="Consensus layer" />
                <p style={style.font}>
                    Consensus mechanisms are essential for blockchain networks, ensuring the integrity and security of the ledger. Proof of Work (PoW) and Proof of Stake (PoS) are two prominent consensus mechanisms, with PoW requiring miners to solve complex puzzles and PoS relying on validators to stake their holdings.
                </p>
                <br />
                {/* Nakamoto coefficient */}

                <Grid columns={2}>
                    <Grid.Column>
                        <Header as="h3" content="Nakamoto coefficient" />
                        <p style={style.font}>
                            The Nakamoto coefficient is a measure of how decentralized a blockchain network is. It represents the minimum number of nodes or validators that would need to collude to disrupt the network's consensus mechanism.
                        </p>
                        <p style={style.font}>
                            This minimum number of nodes is required to represent at least 33.4% of voting power in the majority of proof-of-stake networks and 51% of hash power in proof-of-work networks.
                        </p>
                    </Grid.Column>
                    <Grid.Column>
                        <p style={style.font}>
                            A lower Nakamoto Coefficient suggests a higher concentration of power, potentially indicating a greater risk of centralization. Conversely, a higher coefficient signifies a more decentralized network with a more evenly distributed hash rate/staking among multiple entities or pools.
                        </p>
                        <Table celled size="large">
                            <Table.Header>
                                <Table.Row>
                                    <Table.HeaderCell />
                                    <Table.HeaderCell content='Bitcoin' />
                                    <Table.HeaderCell content='Ethereum' />
                                    <Table.HeaderCell content='Binance' />
                                    <Table.HeaderCell content='Solana' />
                                </Table.Row>
                            </Table.Header>
                            <Table.Body>
                                <Table.Row>
                                    <Table.Cell content='Nakamoto Coefficient' />
                                    <Table.Cell content='8,700' />
                                    <Table.Cell content='2' />
                                    <Table.Cell content='8' />
                                    <Table.Cell content='23' />
                                </Table.Row>
                            </Table.Body>
                        </Table>
                    </Grid.Column>
                </Grid>
                <br />
                <p style={style.font}>
                    Bitcoin's high Nakamoto coefficient indicates exceptional decentralization, while lower coefficients for Binance and Ethereum suggest a higher risk of centralization. Solana's moderate coefficient implies a reasonably decentralized structure.
                </p>

            </Card>

            {/* Miners */}
            <Card fluid style={style.card}>
                <Header as="h3" content="Number of unique miners" />
                <p style={style.font}>
                    The number of unique miners over time is a measure of how the number of miners contributing to the network's consensus protocol has grown over time. A higher number of unique miners indicates a more decentralized network, as it means that more people are participating in the mining process.
                </p>
            </Card>
            <Card fluid style={style.card}>
                <TableauComponent link="https://public.tableau.com/shared/93S672HHJ?:display_count=n&:origin=viz_share_link" />
            </Card>
            <Card fluid style={style.card}>
                <Table celled size="large">
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell />
                            <Table.HeaderCell content='Ethereum' />
                            <Table.HeaderCell content='Binance' />
                            <Table.HeaderCell content='Solana' />
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        <Table.Row>
                            <Table.Cell content='Validators' />
                            <Table.Cell content='886,207' />
                            <Table.Cell content='40' />
                            <Table.Cell content='1,983' />
                        </Table.Row>
                    </Table.Body>
                </Table>
                <List bulleted>
                    <List.Item style={style.font} content="Bitcoin's miner count initially increased but has since stabilized around 23 due to rising mining costs." />
                    <List.Item style={style.font} content="Ethereum Classic's miner count has steadily decreased since its launch, with around 36 miners remaining today." />
                    <List.Item style={style.font} content="The declining miner counts in both Bitcoin and Ethereum(ETC) could indicate a trend towards centralization." />
                </List>
            </Card>
            {/* Mining pools */}
            <Card fluid style={style.card}>
                <Header as="h3" content="Mining pools concentration" />
                <Grid columns={2}>
                    <Grid.Column>
                        <p style={style.font}>
                            The concentration of mining pools measures the extent to which a small number of mining pools control the network. It directly correlates with the level of control a limited number of entities hold over the network's consensus mechanism and overall operation.
                        </p>
                    </Grid.Column>
                    <Grid.Column>
                        <p style={style.font}>
                            Highly concentrated mining pools allow a few entities or pools to amass a significant portion of the network's hash power. This concentration creates a scenario where these pools exert substantial influence over transaction validation and block creation.
                        </p>
                    </Grid.Column>
                </Grid>
            </Card>
            <Card fluid style={style.card}>
                <PowerBIComponent link="https://app.powerbi.com/view?r=eyJrIjoiODFjNWE0NzItMzY2OC00OWFmLWEyYjgtZGI4YTE2YzRlYzcwIiwidCI6ImUzNmVlMzhmLTkxYjgtNGRjYS05YjEzLWNhYTUzNjBjOTcxNCIsImMiOjF9" />
            </Card>
            <Card fluid style={style.card}>
                <PowerBIComponent link="https://app.powerbi.com/view?r=eyJrIjoiMWY4ODgzNzYtZjM2OC00YmVlLWIwZGYtNTc3MDg4ZGJkZmVjIiwidCI6ImUzNmVlMzhmLTkxYjgtNGRjYS05YjEzLWNhYTUzNjBjOTcxNCIsImMiOjF9" />
            </Card>
            <Card fluid style={style.card}>
                <List bulleted>
                    <List.Item style={style.font} content="A significant concentration of mining power in the hands of a few major mining pools poses a threat to the decentralization of Bitcoin and Ethereum networks." />
                    <List.Item style={style.font} content="In Bitcoin, three mining pools control over 65% of the network's hash power, while in Ethereum, three pools command over 68%." />
                    <List.Item style={style.font} content="This concentration of mining power increases the risk of collusion, manipulation, and centralization, undermining the core principles of decentralization." />
                    {/* <List.Item style={style.font} content="This behavior is also observed in proof-of-stake blockchains where few staking pools have majority of the shares." /> */}
                </List>

            </Card>
        </div>

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

export default Consensus;