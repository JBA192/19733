import { Card } from "semantic-ui-react";
import TableauReport from "tableau-react";

function NodeDistribution({link}) {
    return (
            <TableauReport
                url={link}
            />
    )
}


export default NodeDistribution;