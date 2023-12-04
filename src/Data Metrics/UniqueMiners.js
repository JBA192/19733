import { Card } from "semantic-ui-react";
import TableauComponent from "../TableauComponent"

function UniqueMiners() {
    return (
        <Card fluid style={style.card}>
            <TableauComponent link="https://public.tableau.com/shared/7RHN2SWS7?:display_count=n&:origin=viz_share_link" />
        </Card>
    )
}

const style = {
    card: {
        padding: 20
    }
};

export default UniqueMiners;