#import "template/uol_modern.typ": *

#title-slide(
  title: "AI - Seeing Through the Hype",
  logo: image("template/logo.svg", height: 2em),
)[

  Dr Samuel Ball

  8th June 2026
]

#content-slide(
  title: "What is this about?",
)[
  Everyone's talking about AI, and there are a lot of companies selling AI products to local trusts.

  But how can we ask the right questions to see through the hype and know what's _really_ happening?
]

#content-slide(title: "The Website")[
  #align(center)[
    #text(weight: "bold", size: 28pt)[http://stmball.uk/ai-hype]
  ]
]

#content-slide(title: "Ask Yourself... (10 mins)")[
  - Does this look like a trustworthy company?
  - What are some of the important details for you about the company?
  - How do you feel about some of the metrics?
]

#content-slide(title: "The Data Scientist")[
  #align(center)[
    #text(weight: "bold", size: 28pt)[
      Username: data_scientist
      Password: retina123
    ]
  ]
]

#content-slide(title: "The Data Scientist - Discussion")[
  - Why would claiming a high accuracy on  a "clean" dataset be misleading?
  - Data Augmentation is commonly used for training - but why might the number of _real_ images be an issue?
  - Why is contamination of the testing set dangerous?
  - Do we trust the evaluation of the product now?
]

#content-slide(title: "The Data Engineer")[
  #align(center)[
    #text(weight: "bold", size: 28pt)[
      Username: data_engineer
      Password: pipeline123
    ]
  ]
]

#content-slide(title: "The Data Engineer - Discussion")[
  - Why is moving this kind of data via unencrypted means dangerous?
  - Why is leaving data on public servers an issue?
  - Why is model versioning important?
  - Do we trust the data security now?
]

#content-slide(title: "The Ethics Expert")[
  #align(center)[
    #text(weight: "bold", size: 24pt)[
      Username: legal_and_ethics
      Password: fairview123
    ]
  ]
]


#content-slide(title: "The Ethics Expert - Discussion")[
  - What is the issue with bias in the training set from an ethics perspective?
  - What is the problem with legal responsibility?
  - What about the sale of data for training processes?
  - Does the departure of researchers affect your view of the company?
]

#title-slide(
  title: "Thanks for Taking Part!",
  logo: image("template/logo.svg", height: 2em),
)[

  samuel.ball\@liverpool.ac.uk

]
