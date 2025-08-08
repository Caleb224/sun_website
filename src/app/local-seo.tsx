export default function LocalSEOStructuredData() {
	const localBusinessSchema = {
		"@context": "https://schema.org",
		"@type": "ProfessionalService",
		"name": "Soul Strength Network",
		"description": "A curated network connecting Christian therapists with Christian clients for faith-based mental health support and counseling services.",
		"serviceType": [
			"Christian Therapy Network",
			"Faith-based Counseling Services",
			"Mental Health Referral Network", 
			"Church Counseling Support",
			"Christian Mental Health Services"
		],
		"areaServed": {
			"@type": "Country",
			"name": "Canada"
		},
		"hasOfferingCatalog": {
			"@type": "OfferingCatalog",
			"name": "Christian Mental Health Services",
			"itemListElement": [
				{
					"@type": "Offer",
					"itemOffered": {
						"@type": "Service",
						"name": "Christian Therapy Referrals",
						"description": "Connect with licensed Christian therapists who share your faith values"
					}
				},
				{
					"@type": "Offer", 
					"itemOffered": {
						"@type": "Service",
						"name": "Faith-Based Counseling",
						"description": "Biblical counseling and therapy services rooted in Christian principles"
					}
				},
				{
					"@type": "Offer",
					"itemOffered": {
						"@type": "Service", 
						"name": "Church Counseling Support",
						"description": "Partner with churches to provide mental health resources to congregations"
					}
				}
			]
		},
		"audience": [
			{
				"@type": "Audience",
				"name": "Christian Individuals",
				"description": "Christians seeking faith-based mental health support"
			},
			{
				"@type": "Audience", 
				"name": "Christian Therapists",
				"description": "Licensed therapists looking to connect with Christian clients"
			},
			{
				"@type": "Audience",
				"name": "Churches and Christian Organizations",
				"description": "Religious organizations seeking counseling resources for their communities"
			}
		],
		"potentialAction": [
			{
				"@type": "ContactAction",
				"name": "Contact Soul Strength Network",
				"url": "https://soulstrengthnetwork.ca/contact"
			},
			{
				"@type": "JoinAction",
				"name": "Join the Network", 
				"url": "https://soulstrengthnetwork.ca/join"
			}
		]
	};

	return (
		<script
			type="application/ld+json"
			dangerouslySetInnerHTML={{
				__html: JSON.stringify(localBusinessSchema)
			}}
		/>
	);
}