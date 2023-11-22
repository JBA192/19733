import { Card } from "semantic-ui-react";
import TableauReport from "tableau-react";

function NodeDistribution() {
    return (
        <Card fluid style={style.card}>
            <TableauReport
                url="https://public.tableau.com/views/Nodes_distribution/Sheet1?:language=en-US&publish=yes&:display_count=n&:origin=viz_share_link"
            />
        </Card>
    )
}

const style = {
    card: {
        padding: 20
    }
};

export default NodeDistribution;