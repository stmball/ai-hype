#let blue = rgb("#1e274d")
#let page-margin = (top: 0.8cm, bottom: 0.6cm, x: 1.2cm)

#let title-slide(
  title: none,
  logo: none,
  body,
) = {
  set page(
    fill: blue,
    margin: page-margin,
    width: 16cm,
    height: 9cm,
  )
  set text(font: "Poppins", fill: white)
  if logo != none {
    place(top + left, logo)
  }
  align(horizon)[
    #text(weight: "bold", size: 3em)[#title]
    #body
  ]
}

#let content-slide(
  title: none,
  body,
) = {
  set page(
    fill: white,
    margin: page-margin,
    width: 16cm,
    height: 9cm,
  )
  set text(font: "Poppins", fill: blue, size: 14pt)
  if title != none {
    text(weight: "bold", size: 1.4em, fill: blue)[#title]
    v(-0.4cm)
    line(length: 100%, stroke: 2pt + blue)
  }
  align(horizon)[
    #body
  ]
  place(bottom + right, text(size: 6pt, fill: blue)[#context counter(page).display()])
}

#let content-slide-two-col(
  body-left,
  body-right,
  title: none,
) = {
  content-slide(title: title)[
    #columns(2, gutter: 1cm)[
      #body-left
      #colbreak()
      #body-right
    ]
  ]
}
