import { Card, Grid, Header, List, Table } from "semantic-ui-react";

function About() {


    return (
        <>
            <Card fluid style={style.card}>
                <Header as={"h2"}>Introduction to Decentralization</Header>
                <Grid columns={2}>
                    <Grid.Column>
                        <p style={style.font}>
                            In blockchain, decentralization refers to the transfer of control and decision-making from a centralized entity (individual, organization, or group thereof) to a distributed network. Decentralized networks strive to reduce the level of trust that participants must place in one another, and deter their ability to exert authority or control over one another in ways that degrade the functionality of the network.
                        </p>
                        <p style={style.font}>
                            When building a technology solution, three primary network architectures are typically considered: centralized, distributed, and decentralized. While blockchain technologies often make use of decentralized networks, a blockchain application itself cannot be categorized simply as being decentralized or not. Rather, decentralization is a sliding scale and should be applied to all aspects of a blockchain application.                    </p>
                    </Grid.Column>
                    <Grid.Column>
                        <p style={style.font}>
                            By decentralizing the management of and access to resources in an application, greater and fairer service can be achieved. Decentralization typically has some tradeoffs such as lower transaction throughput, but ideally, the tradeoffs are worth the improved stability and service levels they produce.
                        </p>
                        <Header as={"h3"}>Benefits of decentralization</Header>

                        <p style={style.font}>
                            <List bulleted>
                                <List.Item>
                                    Provides a trustless environment
                                </List.Item>
                                <List.Item>
                                    Improves data reconciliation
                                </List.Item>
                                <List.Item>
                                    Reduces points of weakness
                                </List.Item>
                                <List.Item>
                                    Optimizes resource Distribution
                                </List.Item>
                            </List>
                        </p>
                    </Grid.Column>
                </Grid>

                <Table celled size="large">
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell />
                            <Table.HeaderCell content='Centralised' />
                            <Table.HeaderCell content='Distributed' />
                            <Table.HeaderCell content='Decentralised' />
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        <Table.Row>
                            <Table.Cell content='Network/hardware resources' />
                            <Table.Cell content='Maintained & controlled by single entity in a centralized location' />
                            <Table.Cell content='Spread across multiple data centers & geographies; owned by network provider' />
                            <Table.Cell content='Resources are owned & shared by network members; difficult to maintain since no one owns it' />
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell content='Solution components' />
                            <Table.Cell content='Maintained & controlled by central entity' />
                            <Table.Cell content='Maintained & controlled by solution provider' />
                            <Table.Cell content='Each member has exact same copy of distributed ledger' />
                        </Table.Row>

                        <Table.Row>
                            <Table.Cell content='Data' />
                            <Table.Cell content='Maintained & controlled by central entity' />
                            <Table.Cell content='Typically owned & managed by customer' />
                            <Table.Cell content='Only added through group consensus' />
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell content='Control' />
                            <Table.Cell content='Controlled by central entity' />
                            <Table.Cell content='Typically, a shared responsibility between network provider, solution provider & customer' />
                            <Table.Cell content='No one owns the data & everyone owns the data' />
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell content='Single Point of Failure' />
                            <Table.Cell content='Yes' />
                            <Table.Cell content='No' />
                            <Table.Cell content='No' />
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell content='Fault tolerance' />
                            <Table.Cell content='Low' />
                            <Table.Cell content='High' />
                            <Table.Cell content='Extremely high' />
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell content='Security' />
                            <Table.Cell content='Maintained & controlled by central entity' />
                            <Table.Cell content='Typically, a shared responsibility between network provider, solution provider & customer' />
                            <Table.Cell content='Increases as # of network members increase' />
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell content='Performance' />
                            <Table.Cell content='Maintained & controlled by central entity' />
                            <Table.Cell content='Increases as network/hardware resources scale up and out' />
                            <Table.Cell content='Decreases as # of network members increase' />
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell content='Example' />
                            <Table.Cell content='ERP system' />
                            <Table.Cell content='Cloud computing' />
                            <Table.Cell content='Blockchain' />
                        </Table.Row>
                    </Table.Body>
                </Table>
                <Header as={'h3'} content='Downsides of decentralization' />
                <Grid columns={2}>
                    <Grid.Column>
                        <p style={style.font}>
                            <List bulleted>
                                <List.Item>Cost</List.Item>
                                <List.Item>Lack of consensus</List.Item>
                                <List.Item>Lack of clarity</List.Item>
                                <List.Item>Lack of discipline</List.Item>
                                <List.Item>Cost</List.Item>
                            </List>
                            <Header as={'h3'} content=' Challenges/Why is it important?' />
                            <List bulleted>
                                <List.Item>Cost</List.Item>
                                <List.Item>Enhanced Resilience and Security</List.Item>
                                <List.Item>Mitigation of Conflicts of Interest</List.Item>
                                <List.Item>Protection Against Manipulation</List.Item>
                                <List.Item>Preservation of Ideals and Principles</List.Item>
                            </List>
                        </p>
                    </Grid.Column>
                    <Grid.Column>
                        <p style={style.font}>
                            <List bulleted>
                                <List.Item>Global Monetary Network</List.Item>
                                <List.Item>Inclusivity and Financial Equality</List.Item>
                                <List.Item>Response to Economic Inequality</List.Item>
                                <List.Item>Avoidance of Centralized Control</List.Item>
                                <List.Item>Adherence to Crypto Ideals</List.Item>
                                <List.Item>Market Perception and Credibility</List.Item>
                            </List>
                        </p>
                        <p style={style.font}>
                            In summation, the measurement of decentralization emerges as an indispensable yardstick for evaluating the security, integrity, and alignment with principles in diverse systems, particularly those operating within the cryptocurrency and decentralized technology landscapes. It furnishes both a quantitative and qualitative foundation for assessing a system's efficacy in realizing its intended objectives.
                        </p>
                    </Grid.Column>
                </Grid>
            </Card >
        </>
    );
}

const style = {
    font: {
        fontSize: "18px"
    },
    card: {
        padding: 25
    },
}

export default About;
