import TableauReport from "tableau-react";

function TableauComponent({link}) {
    return (
            <TableauReport
                url={link}
            />
    )
}


export default TableauComponent;