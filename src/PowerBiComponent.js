import { PowerBIEmbed } from 'powerbi-client-react';
import { models } from 'powerbi-client';
import "./App.css"

function PowerBIComponent({link}) {
    const reportClass = 'report-container';
    return (
       

<PowerBIEmbed
	embedConfig = {{
		type: 'dashboard',   // Supported types: report, dashboard, tile, visual, qna, paginated report and create
		// id: '<Report Id>',
		embedUrl: link,
		// accessToken: '<Access Token>',
		tokenType: models.TokenType.Embed, // Use models.TokenType.Aad for SaaS embed
		settings: {
			panes: {
				filters: {
					expanded: false,
					visible: false
				}
			},
			background: models.BackgroundType.Transparent,
		}
	}}

	eventHandlers = {
		new Map([
			['loaded', function () {console.log('Report loaded');}],
			['rendered', function () {console.log('Report rendered');}],
			['error', function (event) {console.log(event.detail);}],
			['visualClicked', () => console.log('visual clicked')],
			['pageChanged', (event) => console.log(event)],
		])
	}

	cssClassName = { reportClass }

	// getEmbeddedComponent = { (embeddedReport) => {
	// 	this.report = embeddedReport;
	// }}
/>
    );
}

export default PowerBIComponent;