import React from 'react'
import { Card, Button, Row, Col } from 'react-bootstrap'

const AboutArtistScreen = () => {
  return (
    <>
      <Card style={{ width: '90%' }}>
        <Card.Img variant='top' src='/images/artist.gif' alt='Artist pic' />
        <Card.Body>
          <Card.Title>About Donna Hurd</Card.Title>
          <Card.Text>
            <p className='aboutText'>
              Donna Hurd has spent a lifetime giving the gift of beauty to those
              around her through the gifts of her artistic talents. As any
              artist will tell you, the point of an artistic work is more about
              sharing a feeling than just an image. As you will quickly find,
              Donna’s paintings evoke immediate feelings of warmth or balance or
              intricacy or friendliness or grandeur or joy or peace. Each one
              has a different feel. That’s the really fun thing about looking at
              one of her paintings. Taking a moment to experience your feelings
              as you take it in.
            </p>
            <p>
              Donna was born a while ago as Donna Summers in Haxton, a small
              farming town on the lonely plains of eastern Colorado. Raised with
              her little brother, Kent, and little sister, Vanita, by her
              parents Max, and Lucille, a childhood of many places and
              experiences was preparing her to see life through the eyes of an
              artist.
            </p>
            <p>
              She married Thomas J. Hurd as a teenager and early on had a son
              and a daughter, “little” Tom and Sherry. The family grew up in
              Arvada, Colorado and then moved to Evergreen, Colorado in the mid
              1960’s. Living in the ponderosas at 8,500 feet provided a
              naturally scenic backdrop to life that you will see reflected in
              many of her paintings. Apparently raising teenage children in the
              solitude of a somewhat isolated environment either inspired (or
              drove) her to invest significant amounts of time and energy in
              expressing herself through her art.
            </p>
            <p>
              A significat increase in the quality and number of her paintings
              is seen in this “mountain home” period. Her skills and styles grew
              rapidly in this time and influenced much of what she painted
              throughout the rest of her life. It was also during this time that
              she learned through formal training from the accomplished artist,
              Parma Tyson, who also lived and created in the mountains west of
              Denver.
            </p>
            <p>
              This diverse background fueled an amazingly diverse repertoire of
              styles and subjects that you will see represented in the works on
              this site. She was inspired to paint mountains and deserts and
              people and flowers and landscapes and a plethora of still life
              subjects. If something struck her or inspired her, she showed no
              fear of expressing it on canvas or wood or paper. She started
              painting with oils and quickly moved to the flexibility of
              acrylics. You will also see forays into watercolors and pastel
              chalks.
            </p>
            <p>
              It is fascinated to see the depth of styles that each subject
              evoked. Some paintings were ultra-realistic and detailed for
              example see: “Flowers in Blue Pot” or “Flowers on Bamboo.” Others
              bordered on impressionistic, see: “Midnight Solitude” and “Black
              Canyon”. Note how different similar subjects feel between a highly
              realistic “Navajo Shepherdess” and a much more impressionistic
              “Navajo Shepherd.” Some were painted to be very serious: “African
              Beauty” and some were obviously to be just fun: “Ashley and Abby”
              and “Dan Quail Family.” Some were inspired by literally looking
              out her back door: “Backyard Winter Wonderland.”
            </p>
            <p>
              One of Donna’s telling characteristics is her humility. Seeing
              these works shows and obvious love of painting and the soul of an
              artist. But if you know Donna, you know that she never allowed
              herself to see how really great she is. She sold some of her
              paintings but refused to market her works. She could have easily
              sold many more or painted with the aim and objective of painting
              what would sell. She could have undoubtedly won awards by getting
              on an art show circuit. But the enduring beauty and attraction of
              her work is in the unshakable truth that what you see was not
              inspired by a desire to validate herself through how much someone
              was willing to pay for a painting or to build her ego by looking
              for accolades (which she assiduously avoided) but because it was
              beautiful and she wanted to explore that beauty by painting it.{' '}
            </p>
            <p>
              Perhaps the purity of that devotion to beauty will inspire you as
              you enjoy the full scope of her work.
            </p>
          </Card.Text>
          <a href='/'>
            <Button className='btn-sm' variant='primary'>
              Go to the Gallery!
            </Button>
          </a>
        </Card.Body>
      </Card>
    </>
  )
}

export default AboutArtistScreen
