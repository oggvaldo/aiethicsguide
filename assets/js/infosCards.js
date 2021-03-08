const infosCards = [
  {
    number: "0",
    type: "Analyze",
    title: "Stakeholder Analysis",
    motivation:
      " In order to understand the big picture, it is important to first understand who the system can affect and how. Try to also think past the obvious, direct stakeholders such as your end-users.",
    whatToDo: [
      "Identify stakeholders.",
      "Who does the system affect and how? Stakeholders are not simply users, developers and customers.",
      "How are the various stakeholders linked together?",
      "Can these different stakeholders influence the development of the system? How?",
      "Remember that a user is ofthen an organization and the end-user is an individual. Similarly, AI systems can treat people as objects for data colection.",
    ],
    praticalExample:
      "Autonomous cars don't just affect their passengers. Anyone mearby is affected; some even change the way they drive. If at one point half of the traffic consists of selt-driving cars, what are the societal impacts of such systems? E.g., how are the people who can't afford one affected? Regulations arising from such systems are also affect everyone."
  },
  {
    number: "1",
    type: "Transparency",
    title: "Types of Transparency",
    motivation:
      "When considering transparency, it is important to understand who you are being transparent toward, and what you are being transparent about.",
    whatToDo: [
      "Consider the following...",
      "Are you trying to understand something? (Internal transparency)",
      "Are you trying to explain something? (External transparency)",
      "Are you trying to understand or explain how the system works? (Transparency of algorithms and data)",
      "Are you trying to understand or explain why the system was made to be the way it is now? (Transparency of system development)",
      "External stakeholders to consider, among other: (end-)users, safety certification agencies, accident investigators, lawyers or expert witnesses, and society at large for disruptive technologies.",
    ],
    praticalExample: "",
  },
  {
    number: "2",
    type: "Transparency",
    title: "Explainability",
    motivation:
      "If we cannot understand the reasons behind the actions of the AI, it is difficult to trust it.",
    whatToDo: [
      "Ask yourself:",
      "Is explainability a goal for your system? How do you plan to ensure it?",
      "How well can each decision of the system be understood? By both developers and (end-)users?",
      "Did you try to use the simplest and most interpretable model possible for the context?",
      "Did you made trade-offs between explainability and accuracy? What kind of? Why?",
      "How familiar are you with your training or testing data? Can you change it when needed?",
      "If you utilize third party components in the system, how well do you understand them?",
    ],
    praticalExample:
      'When interacting with a robot, users could ideally ask the robot "why did you do that?" and receive and understandable response. This would make it much easier for them to trust a system.',
  },
  {
    number: "3",
    type: "Transparency",
    title: "Communication",
    motivation:
      "In practice, communication is a big part of being transparent with your stakeholders. Being transparent in communication can generate trust.",
    whatToDo: [
      "Ask yourself:",
      "What is the goal of the system? Why is this particular system deployed in this specific area?",
      "What do you communicate about the system to its users and end-users? Is it enough for them to understand how the system works?",
      "If relevant to your system, do you somehow tell your (end-)users that they are interacting with an AI system and not with another human being?",
      "Do you collect user feedback? How is it used to change/improve the system?",
      "Are communication and transparency towards other audences, such as the general public, relevant?",
    ],
    praticalExample:
      "Clearly stating what data you collect and why can make you seem much more trustworthy. Compare this to a cellphone application that just states it needs to access your camera and storage.",
  },
  {
    number: "4",
    type: "Transparency",
    title: "Documenting Trade-offs",
    motivation:
      "One important part of transparent system development is the documentation of trade-offs. Whenever you make a decision, you choose one option over other alternatives. However, documenting why and what the alternatives were important.",
    whatToDo: [
      "Ask yourself:",
      "Are relevant interests and values implicated by the system and potential trade-offs between them identified and documented?",
      "Who decides on such trade-offs (e.g. between two competing solutions) and how? Did you ensure that the trade-off decision and the reasons behind it were documented?",
    ],
    praticalExample:
      "Documenting trade-offs can improve your customer relationship, allowing you to better explain why certain decisions were amde over others. Moreover, it can reduce the responsability placed on the individual developer(s) from an ethical point of view.",
  },
  {
    number: "5",
    type: "Transparency",
    title: "Traceability",
    motivation:
      "Traceability supports explainability. It helps us understand why the AI acts the way it does.",
    whatToDo: [
      "Document different types of documentation (code, project etc.) are typically key in producing transparency.",
      "How have you documented the development of the system, both in terms of code and decision-making? How was the model built or the AI trained?",
      "How have you documented the testing and validation process? Interms of data and scenarios used etc.",
      "How do you document the actions of the system? What about alternate actions(e.g. if the user was different but the situation otherwise the same)?",
    ],
    praticalExample:
      "Whe the system starts making mistakes, by aiming for traceability, it will be easier to find out the cause. Consequently, it will also be faster anf possibly easier to find out the cause. Consequently, it will also be faster and possibly easier to start fixing the underlying issue.",
  },
  {
    number: "6",
    type: "Transparency",
    title: "System Reliability",
    motivation:
      "Transparency makes ethical development possible in the first place. To make it ethical, we must understand how the system works and why it makes certain decisions.",
    whatToDo: [
      "Ask yourself:",
      "How do you test if the system fulfills its goals?",
      "ave you tested the system comprehensively, inclusding unlikely scenarios? Have the tests been documented?",
      "When the system fails in a certain scenario, will you be able to tell why? Can you replicate the failure?",
      "How do you assure the (end-)user of the system's reliability?",
    ],
    praticalExample:
      "An autonomous coffee machine successfully brews coffee 8 times out 10. While this is a decent success rate, we are left wondering what happened the 2 times it failed to do so, and why. Erros are inevitable, but we must understand the causes behind them and be able to replicate them to fix them.",
  },
  {
    number: "7",
    type: "Data",
    title: "Privacy and Data",
    motivation:
      " Privacy is a rising trend in the wake of various recent data missue reveals. People are now increasingly conscious about handing out personal data. Similarly, regulations such as GDPR now affect data collection.",
    whatToDo: [
      "Ask yourself:",
      "What data are used by the system?",
      "Does the system use or collect personal data? Why? How is the personal data used?",
      "Do you clearly inform your (end-)users about any personal data collection? E.g., asj for consent, provide an opportunity to revoke it etc.",
      "Have you taken measures to enhance (end-user) privacy, such as encryption or anonymization?",
      "Who makes the decisions regarding data use and collection? Do you have organizational policies for it?",
    ],
    praticalExample:
      "Rather than collection and selling data, appealling yo privacy can also be profitable. Regulations are making it increasingly difficult to collect lots of personal data for profit. Privacy can be an alternate selling point in today's climate.",
  },
  {
    number: "8",
    type: "Data",
    title: "Data Quality",
    motivation:
      "As AI are trained using data, the data used directly affects how the system operates. Both the nature and the quality and integrity of the data used has to align with goals of the system.",
    whatToDo: [
      "Ask yourself:",
      "What are good or poor quality data in the context of your system?",
      "How do you evaluate the quality and integrity of your own data? Are there alternative ways?",
      "If you utilize data from external sources, how do you control their quality?",
      "Did you align yout system with relevant standards (for example ISO, IEEE) or widely adopted protocols for daily data management and governance?",
      "How can you tell if your data sets have been hacked or otherwise compromised?",
    ],
    praticalExample:
      "In 2017, Amazon scrapped its recruitment AI because of bad data. They used past recruitment data to teach the AI. As they had mostly hired men, the AI began to consider women undesirable based on the data.",
  },
  {
    number: "9",
    type: "Data",
    title: "Access to Data",
    motivation:
      "Aside from carefully planning what data you colect and how it is also important to plan how it can or will be used and by whom.",
    whatToDo: [
      "Ask yourself:",
      "Who can access the users'data, and under what circumstances?",
      "How do you ensure that the people who access the data: 1) have a valid reason to do so. and 2) adhere to the regulations and policies related to data?",
      "Do you keep logs of who accesses the data and when? Do the logs also tell why?",
      "Do you use existing data governance frameworks or protocols? Does your organization have its own?",
      "Who handles the data collection, storage and use?",
    ],
    praticalExample:
      "Third parties you give access to the data can misuse it. A prominent example of this is the case of Cambridge Analytica and Facebook, in which data from FAcebook was used questionably. However, such incidents can also paint your organization in a bad way.",
  },
  {
    number: "10",
    type: "Agency & Oversight",
    title: "Human Agency",
    motivation:
      "People interacting with the system or using it shoud be able to undersand it sufficiently. Users should be able to make informed decisions based on its suggestions, or to challenge its suggestions. AI systems should let humans make independent choices.",
    whatToDo: [
      "Does the system interact with decisions by human actors, i.e. end users (e.g. recommending users actions or decisions, or presenting options)?",
      "Does the system communicate to its (end) users that a decision, content or outcome is the result of an algorithmic decision? Into how much detail does it go?",
      "In the system`s use context, what tasks are done by the system and what tasks are done by humans?",
      "Have you taken measures to prevent overconfidence or overreliance on the system?",
    ],
    praticalExample:
      "A medical system recommends diagnoses. How does the system communicate to doctors why it made a recommendation? How should the doctors know when to challenge the system? Does the system somehow change how patients and doctors interact?",
  },
  {
    number: "11",
    type: "Agency & Oversight",
    title: "Human Oversight",
    motivation:
      "AI systems shoud support human decision-making. They shoud not undermine human autonomy by making decisions for us, meaning they shoud be subject to human oversight.",
    whatToDo: [
      "Ask yourself:",
      "Who can control the system and how? In what situations?",
      "What would be the appropriate level of huan control for this particular system an its use cases?",
      "Related to the Safety and Security cards: how do you detect and respond if something goes wrong? Does the system then stop entirely, partially, or would control be delegated to a human? Why?",
    ],
    praticalExample:
      "Assuming control is especially related to cyber-physical systems such as drones or other vehicles. For purely digital systems, the focus should be on supporting human decision-making instead of directing it.",
  },
  {
    number: "12",
    type: "Safety & Security",
    title: "System Security",
    motivation:
      "While cybersecurity is important in any system, AI systems present new challenges. Cyber-physical systems can even cause fatalities in the hands of malicious actors.",
    whatToDo: [
      "Ask yourself:",
      "Did you assess potential forms of attacks to which the system could be vulnerable? Did you consider ones that are unique or more relevant to AI systems?",
      "Did you consider different types of vulnerabilities, such as data pollution and physical infrastructure?",
      "Have you verified how your systems behaves in unexpected situations and environments?",
      "Does your organization have cybersecurity personnel? Are they involved in this system?",
    ],
    praticalExample:
      "The autonomous nature of AI systems makes new vectos of attack possible. A white line drawn across a road can confuse a self-driving vehicle. What happened to Microsoft's Tay Twitter bot is another example of a new type of attack.",
  },
  {
    number: "13",
    type: "Safety & Security",
    title: "System Safety",
    motivation:
      "AI systems exert notable influence on the physical world whether they are cyber-physical or not. Various risks and their consequences should be considered, thinking ahead to the operational life of the system.",
    whatToDo: [
      "Ask yourself:",
      "What kind of risks does the system involve? What kind of damage could it cause?",
      "How do you measure and assess risks and safety?",
      "In what conditions do the fallback plans trigger? Are they automatic or do they require human input?",
      "Is there a plan to mitigate or manage technological errors, accidnts, or malicious misuse? What if the systems provides wrong results, becomes unavailable, or provides societally unacceptable results?",
      "What liability and consumer protection laws apply to your system? Have you taken them into account?",
    ],
    praticalExample:
      "AI systems can aid automating various organizational tasks, making it possible to reduce personnel. However, if a customer organization becomes reliant on your AI system to handle a portion of its operations, what happens if that AI stops functioning for even a few days? What could you do to alleviate the impact?",
  },
  {
    number: "14",
    type: "Fairness",
    title: "Accessbility",
    motivation:
      "Technology can be discriminatin in various ways. Given the enormous impact AI systems can have, ensuring equal access to their positive impacts is ethically important.",
    whatToDo: [
      "Ask yourself:",
      " Does the system consider a wide range of individual preferences and abilities? If not, why?",
      "Is the system usable by those with special needs or disabilities, those at risk of exclusion, or those using assistive technologies?",
      "Were people representing various groups somehow involved in the development of the system?",
      "How is the potential user audience taken into account?",
      "Is the team involved in building the sustem representative of your largel user audience? Is it representative of the general population?",
      "Did you assess whether there could be (groups of) people?",
    ],
    praticalExample:
      "AI tends to benefit those who are already technologically capable, resulting in increased inequality. E.g. most of the images used in machine learning have been labeled by young white men.",
  },
  {
    number: "15",
    type: "Fairness",
    title: "Stakeholder Participation",
    motivation:
      "As AI systems have notable impacts, they stakeholders are also numerous. Though the system affects these various holders in various ways, they are often not involved in the development. Yet, e.g. when using a decision-making system, its users have to trust the system while also being critical of it.",
    whatToDo: [
      "Turn to your stakeholder analysis (card #0):",
      "Which stakeholders are stakeholders in system development?",
      "How are the different stakeholders of the system involved in the development of the system? If they aren't, why?",
      "How do you inform your external and internal stakeholders of the system's development?",
    ],
    praticalExample:
      "Often the people an AI system is used on are individuals who are simply objects for the system. For example, a medical system is developed for hospitals, used by doctors, but ultimately used on patients. Why not talk to the patients too?",
  },
  {
    number: "16",
    type: "Wellbeing",
    title: "Environmental Impacts",
    motivation:
      "Past the general wellbeing implications, ecological consciousness is a current trend. Being ecological can be a selling point for your organization.",
    whatToDo: [
      "Ask yourself:",
      "Did you assess the environmental impact of the system's development, deployment, and use? E.g., the type of energy used by the data centers.",
      "Did you consider the environmental impact when selecting specific technical solutions?",
      "Did you ensure measures to reduce the environmental impact of your system's life cycle?",
    ],
    praticalExample:
      "If you are hosting on a third party cloud, try to ascertain the systainability of the service provider's services. If you are using hardware, are you processing the data in each physical device of your own or are you processing it in the cloud?",
  },
  {
    number: "17",
    type: "Wellbeing",
    title: "Societal Effects",
    motivation:
      "The impacts a system has go beyond its userbase. A system may well affect negatively even those who do net use it nor wish to use it.",
    whatToDo: [
      "Ask yourself:",
      "Did you assess the brader societal impact of the AI system's use beyond the individual (end-)users? Consider stakeholders who might be indirectly affected by the system. ",
      "How will the systems affect society when in use?",
      "What kind of systemic effects could the system have?",
    ],
    praticalExample:
      "Surveillance technology utilizing facial recognition AI has long=reaching impacts. People may wish to avoid areas that utilize such surveillance, negatively affecting businesses in said area. People may become stressed  at the mere thought of such surveillance. Some may even emigrate as a result.",
  },
  {
    number: "18",
    type: "Accountability",
    title: "Auditability",
    motivation:
      "Regulations affecting AI and data may necessitate audits of systems in the future. Similarly, if the system causes damage, an audit might be requested. It is good to have mechanisms in place beforehand.",
    whatToDo: [
      "Ask yourself:",
      "Is the system auditable?",
      "Can an audit be conducted independently?",
      "Is the system available for inspection?",
      "What mechanisms facilitate the system's auditability? How is traceability and logging of the systems's processess and outcomes ensured?",
    ],
    praticalExample:
      "In heavily regulated fields such as medicine, audits are typically required before a system can be utilized in the first place. ",
  },
  {
    number: "19",
    type: "Accountability",
    title: "Ability to Redress",
    motivation:
      "Making sure people know they can be compensated in some way in the event something goes wrong with the system is important in generating trust. Such scenarios should be planned in advance to what extent possible.",
    whatToDo: [
      "Ask yourself:",
      "What is your (developer organization) responsability if the system causes damage or otherwise has a negative impact?",
      "In the event of negative impact, can the ones affected seek responsability?",
      "How do you inform users and other third parties about opportunities for redress?",
    ],
    praticalExample:
      "AI systems can inconvenience users in unforeseen, unpredictable ways. Depending on the situation, the company may or may not be legally responsible for the inconvenience. Noetheless, by offering a digital platform for seeking refress, your company can seem more trustworthy while also offering additional value to your users.",
  },
  {
    number: "20",
    type: "Accountability",
    title: "Minimizing Negative Impacts",
    motivation:
      "Minimizing negative impacts of the system is financially important for any developer organization. Incidents are often costly.",
    whatToDo: [
      "First, consider:",
      "Is your stakeholder analysis is up-to-date {Card #0}",
      "Have you discussed risks? {Card #13}",
      "Have you discussed auditability? {Card #18}",
      "Have you discussed redress issues? {Card #19}",
      "Are the people involved with the development of the system also involved with the development of the system also involved with it during its operational life? If not, they may not feel as accountable.",
      "Are you aware of laws related to the system?",
      "Can users of the system somehow report volnerabilities, risks and other issues in the system?",
      "  With whom have you discused accountability and other ethical?",
    ],
    praticalExample: "",
  },
  
];
