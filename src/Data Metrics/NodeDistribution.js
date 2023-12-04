import { Card, Grid, Header, List, Table } from "semantic-ui-react";
import TableauComponent from "../TableauComponent"

function NodeDistribution() {
    return (
        <>
            <Card fluid style={style.card}>
                <Grid columns={2}>
                    <Grid.Column>
                        <p style={style.font}>
                            The network layer outlines the actions and interactions of participants within the blockchain network. It is responsible for the discovery and communication of nodes on the network. A decentralized network guarantees the absence of a singular point of failure; even in the event of certain nodes being offline or compromised, the overall integrity of the entire network remains intact.
                        </p>
                        <p style={style.font}>
                            <Header as={'h3'} content='Geographic Distribution' />
                            Geographic distribution is another critical dimension of decentralization. Several reasons underscore the significance of such distribution:
                        </p>
                    </Grid.Column>
                    <Grid.Column>
                        <p style={style.font}>
                            <List bulleted>
                                <List.Item>
                                    Fault Prevention: If node locations are centralized to a particular region and that region experiences a disruption, this could lead to a network outage. However with a  wide distribution, the network remains resilient even if a region experiences issues.
                                </List.Item>
                                <List.Item>
                                    Latency Reduction and User Experience: The geographical distance between nodes could also cause some latency experienced by users.
                                </List.Item>
                                <List.Item>
                                    Government Autonomy Resistance: Blockchain networks are designed to operate without a central authority, an architecture with nodes spread in different locations makes it hard for specific governments to exert authority over the network using regulatory constraints.
                                </List.Item>
                                <List.Item>
                                    Increased Network Security: A globally distributed network increases the security against network attacks like distributed denial-of-service (DDoS) which usually target specific geographical locations.
                                </List.Item>
                            </List>
                        </p>
                    </Grid.Column>
                </Grid>

                <TableauComponent link="https://public.tableau.com/views/Nodes_distribution/Sheet1?:language=en-US&publish=yes&:display_count=n&:origin=viz_share_link" />

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
                            <Table.Cell content='North America' />
                            <Table.Cell content='1284' />
                            <Table.Cell content='542' />
                            <Table.Cell content='5000' />
                            <Table.Cell content='1968' />
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell content='South America' />
                            <Table.Cell content='1' />
                            <Table.Cell content='123' />
                            <Table.Cell content='-' />
                            <Table.Cell content='5' />
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell content='Europe' />
                            <Table.Cell content='2906' />
                            <Table.Cell content='3918' />
                            <Table.Cell content='-' />
                            <Table.Cell content='-' />
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell content='Africa' />
                            <Table.Cell content='26' />
                            <Table.Cell content='1' />
                            <Table.Cell content='-' />
                            <Table.Cell content='-' />
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell content='Asia' />
                            <Table.Cell content='1651' />
                            <Table.Cell content='176' />
                            <Table.Cell content='-' />
                            <Table.Cell content='18' />
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell content='Oceania' />
                            <Table.Cell content='363' />
                            <Table.Cell content='240' />
                            <Table.Cell content='-' />
                            <Table.Cell content='-' />
                        </Table.Row>
                    </Table.Body>
                </Table>
                <Grid columns={2}>
                    <Grid.Column>
                        <p style={style.font}>
                            The data in the table above does not count for nodes behind the Tor network as their locations are not visible.
                        </p>
                        <p style={style.font}>
                            For Bitcoin, the highest number of nodes in the Europe region is 615 located in the United Kingdom. This accounts for over 21% of the total number of nodes in Europe. Likewise, 16 nodes in South Africa account for over 61% of the nodes in Africa. The US has 1261 nodes, which is over 98% of the total nodes in North America. In Asia, Japan has the largest number of nodes 549, 33% of the number of nodes. All nodes in the Oceania region are located in New Zealand. Likewise, all nodes in South America are located in Paraguay.
                        </p>
                        <p style={style.font}>

                            For Solana, the United States has 100% of the total nodes in the North American region, the same can be said for Vietnam in Asia. In South America, Uruguay has 80% of the total number of nodes.

                        </p>
                    </Grid.Column>
                    <Grid.Column>
                        <p style={style.font}>
                            In Ethereum, the highest number of nodes in the North American region is 534 nodes in Canada, which is greater than 98.5% of the overall population of nodes in that region. In Europe, the highest number of nodes is in Germany with 2469 and that is greater than 63% of the total number. Algeria in Africa has 1 node and that is 100% of the number of nodes in that region. In Asia, China has 118 nodes which is 67% of the total number in the region. Also in Oceania, there are 240 Ethereum nodes, 100% of which are in Australia.

                        </p>
                        <p style={style.font}>
                            In Binance, the United States has the entirety of the nodes in the world.
                        </p>
                        <p style={style.font}>
                            In summary, Bitcoin is more decentralized when it comes to the geographical distribution of nodes. Unlike Binance which has its active nodes in the US only.

                        </p>
                    </Grid.Column>
                </Grid>
            </Card>
            <Card fluid style={style.card}>
                <Header as={'h3'} content='Hash Rate' />
                <Grid columns={2}>
                    <Grid.Column>
                        <p style={style.font}>
                            Hash rate refers to the capacity to execute hash computations within a specific time frame. In the realm of trading, hash rate serves as a metric for evaluating the decentralization of a cryptocurrency network in the face of potential attackers. A higher hash rate indicates a greater computational expense required to mount an attack on the system.
                        </p>
                    </Grid.Column>
                    <Grid.Column>
                        <p style={style.font}>
                            Generally, a higher hash rate is attained when more miners participate in the network, as increased competition for rewards ensues, while a lower hash rate results from fewer miners in the network. For example, Bitcoin has a hash rate of 483.58 EH/s, where 1 EH/s is 1,000,000,000,000,000,000 (1 quintillion) hashes per second.
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

export default NodeDistribution;