const products = [
  {
    name: 'Deer Me ',
    image: '/images/p1.jpg ',
    medium: 'Acrylic on Canvas ',
    height: 23.5,
    width: 18,
    year: 2005,
    artist_comments: 'I was inspired by deer in our back yard in the mountains ',
    numReviews: 0,
    location: 'Donna H ',
    status: 'Available ',
    framed: 'Yes ',
  },
  {
    name: 'Desert Sunset ',
    image: '/images/p2.jpg ',
    medium: 'Acrylic on Canvas ',
    height: 16,
    width: 20,
    year: 2000,
    artist_comments: ' ',
    numReviews: 0,
    location: 'Donna H ',
    status: 'Available ',
    framed: 'Yes ',
  },
  {
    name: 'Desert Poppies ',
    image: '/images/p3.jpg ',
    medium: 'Acrylic on Canvas ',
    height: 16,
    width: 20,
    year: 2000,
    artist_comments: ' ',
    numReviews: 0,
    location: 'Donna H ',
    status: 'Available ',
    framed: 'No ',
  },
  {
    name: 'Columbine Waterall ',
    image: '/images/p4.jpg ',
    medium: 'Acrylic on Canvas ',
    height: 20,
    width: 16,
    year: 2000,
    artist_comments: ' ',
    numReviews: 0,
    location: 'Donna H ',
    status: 'Available ',
    framed: 'No ',
  },
  {
    name: 'Red Geranium in Pot  ',
    image: '/images/p5.jpg ',
    medium: 'Acrylic on Canvas ',
    height: 16,
    width: 12,
    year: 2000,
    artist_comments: ' ',
    numReviews: 0,
    location: 'Donna H ',
    status: 'Available ',
    framed: 'No ',
  },
  {
    name: 'Dan Quail Family ',
    image: '/images/p6.jpg ',
    medium: 'Acrylic on Canvas ',
    height: 18,
    width: 24,
    year: 2000,
    artist_comments: ' ',
    numReviews: 0,
    location: 'Donna H ',
    status: 'Available ',
    framed: 'No ',
  },
  {
    name: 'Fall Tree Over River ',
    image: '/images/p7.jpg ',
    medium: 'Acrylic on Canvas ',
    height: 18,
    width: 24,
    year: 2000,
    artist_comments: ' ',
    numReviews: 0,
    location: 'Donna H ',
    status: 'Available ',
    framed: 'No ',
  },
  {
    name: 'Sunset Windmill ',
    image: '/images/p8.jpg ',
    medium: 'Acrylic on Canvas ',
    height: 20,
    width: 16,
    year: 2000,
    artist_comments: ' ',
    numReviews: 0,
    location: 'Donna H ',
    status: 'Available ',
    framed: 'No ',
  },
  {
    name: 'Winter Country Church ',
    image: '/images/p10.jpg ',
    medium: 'Acrylic on Canvas ',
    height: 12,
    width: 16,
    year: 2000,
    artist_comments: ' ',
    numReviews: 0,
    location: 'Donna H ',
    status: 'Available ',
    framed: 'No ',
  },
  {
    name: 'Juan Valdez ',
    image: '/images/p11.jpg ',
    medium: 'Acrylic on Canvas ',
    height: 20,
    width: 16,
    year: 2000,
    artist_comments: ' ',
    numReviews: 0,
    location: 'Donna H ',
    status: 'Available ',
    framed: 'No ',
  },
  {
    name: 'Big Sur ',
    image: '/images/p12.jpg ',
    medium: 'Acrylic on Canvas ',
    height: 18,
    width: 24,
    year: 2000,
    artist_comments: ' ',
    numReviews: 0,
    location: 'Donna H ',
    status: 'Available ',
    framed: 'Yes ',
  },
  {
    name: 'Twisted Cedar ',
    image: '/images/p13.jpg ',
    medium: 'Acrylic on Canvas ',
    height: 30,
    width: 24,
    year: 2000,
    artist_comments: ' ',
    numReviews: 0,
    location: 'Donna H ',
    status: 'Available ',
    framed: 'No ',
  },
  {
    name: 'Fiery Chimney Rock ',
    image: '/images/p14.jpg ',
    medium: 'Acrylic on Canvas ',
    height: 20,
    width: 16,
    year: 2000,
    artist_comments: ' ',
    numReviews: 0,
    location: 'Donna H ',
    status: 'Available ',
    framed: 'No ',
  },
  {
    name: 'Yellow Zinnias ',
    image: '/images/p15.jpg ',
    medium: 'Acrylic on Canvas ',
    height: 16,
    width: 20,
    year: 2001,
    artist_comments: ' ',
    numReviews: 0,
    location: 'Donna H ',
    status: 'Available ',
    framed: 'No ',
  },
  {
    name: 'Winter Barn and Silo ',
    image: '/images/p16.jpg ',
    medium: 'Acrylic on Canvas ',
    height: 12,
    width: 16,
    year: 2001,
    artist_comments: ' ',
    numReviews: 0,
    location: 'Donna H ',
    status: 'Available ',
    framed: 'No ',
  },
  {
    name: 'Fall Trees on River ',
    image: '/images/p17.jpg ',
    medium: 'Acrylic on Canvas ',
    height: 16,
    width: 12,
    year: 2001,
    artist_comments: ' ',
    numReviews: 0,
    location: 'Donna H ',
    status: 'Available ',
    framed: 'No ',
  },
  {
    name: 'Snowy Sled Scene ',
    image: '/images/p18.jpg ',
    medium: 'Acrylic on Canvas ',
    height: 12,
    width: 16,
    year: 2001,
    artist_comments: ' ',
    numReviews: 0,
    location: 'Donna H ',
    status: 'Available ',
    framed: 'No ',
  },
  {
    name: 'Heidi ',
    image: '/images/p19.jpg ',
    medium: 'Acrylic on Canvas ',
    height: 10,
    width: 8,
    year: 2001,
    artist_comments: ' ',
    numReviews: 0,
    location: 'Donna H ',
    status: 'Available ',
    framed: 'No ',
  },
  {
    name: 'Cactus Flowers ',
    image: '/images/p20.jpg ',
    medium: 'Acrylic on Canvas ',
    height: 24,
    width: 36,
    year: 2001,
    artist_comments: ' ',
    numReviews: 0,
    location: 'Donna H ',
    status: 'Available ',
    framed: 'Large Frame ',
  },
  {
    name: 'Old Man Smoking ',
    image: '/images/p21.jpg ',
    medium: 'Acrylic on Canvas ',
    height: 20,
    width: 16,
    year: 2001,
    artist_comments: ' ',
    numReviews: 0,
    location: 'Donna H ',
    status: 'Available ',
    framed: 'No ',
  },
  {
    name: 'Desert Ocotillio ',
    image: '/images/p22.jpg ',
    medium: 'Acrylic on Canvas ',
    height: 24,
    width: 36,
    year: 2001,
    artist_comments: ' ',
    numReviews: 0,
    location: 'Donna H ',
    status: 'Available ',
    framed: 'No ',
  },
  {
    name: 'Flowers on Bamboo ',
    image: '/images/p23.jpg ',
    medium: 'Acrylic on Canvas ',
    height: 20,
    width: 24,
    year: 2001,
    artist_comments: ' ',
    numReviews: 0,
    location: 'Donna H ',
    status: 'Available ',
    framed: 'No ',
  },
  {
    name: 'Old Pump Old Corner ',
    image: '/images/p24.jpg ',
    medium: 'Acrylic on Canvas ',
    height: 16,
    width: 12,
    year: 2001,
    artist_comments: ' ',
    numReviews: 0,
    location: 'Donna H ',
    status: 'Available ',
    framed: 'No ',
  },
  {
    name: 'Stage Coach ',
    image: '/images/p25.jpg ',
    medium: 'Acrylic on Canvas ',
    height: 24,
    width: 36,
    year: 2001,
    artist_comments: ' ',
    numReviews: 0,
    location: 'Donna H ',
    status: 'Available ',
    framed: 'No ',
  },
  {
    name: 'Columbine on Aspen ',
    image: '/images/p26.jpg ',
    medium: 'Acrylic on Canvas ',
    height: 16,
    width: 12,
    year: 2001,
    artist_comments: ' ',
    numReviews: 0,
    location: 'Donna H ',
    status: 'Available ',
    framed: 'No ',
  },
  {
    name: 'Peaches ',
    image: '/images/p27.jpg ',
    medium: 'Watercolor ',
    height: 12,
    width: 16,
    year: 2001,
    artist_comments: ' ',
    numReviews: 0,
    location: 'Donna H ',
    status: 'Available ',
    framed: 'No ',
  },
  {
    name: 'Monument Valley ',
    image: '/images/p28.jpg ',
    medium: 'Acrylic on Canvas ',
    height: 20,
    width: 26,
    year: 2001,
    artist_comments: ' ',
    numReviews: 0,
    location: 'Donna H ',
    status: 'Available ',
    framed: 'No ',
  },
  {
    name: 'Pine Park Estates ',
    image: '/images/p29.jpg ',
    medium: 'Acrylic on Canvas ',
    height: 12,
    width: 16,
    year: 2001,
    artist_comments: ' ',
    numReviews: 0,
    location: 'Donna H ',
    status: 'Available ',
    framed: 'No ',
  },
  {
    name: 'Daisies on Rocks ',
    image: '/images/p30.jpg ',
    medium: 'Acrylic on Canvas ',
    height: 12,
    width: 16,
    year: 2001,
    artist_comments: ' ',
    numReviews: 0,
    location: 'Donna H ',
    status: 'Available ',
    framed: 'No ',
  },
  {
    name: 'Native Warrior ',
    image: '/images/p31.jpg ',
    medium: 'Acrylic on Canvas ',
    height: 12,
    width: 8,
    year: 2002,
    artist_comments: ' ',
    numReviews: 0,
    location: 'Donna H ',
    status: 'Available ',
    framed: 'No ',
  },
  {
    name: 'Mountain Fisherman ',
    image: '/images/p32.jpg ',
    medium: 'Acrylic on Canvas ',
    height: 20,
    width: 24,
    year: 2002,
    artist_comments: ' ',
    numReviews: 0,
    location: 'Donna H ',
    status: 'Available ',
    framed: 'No ',
  },
  {
    name: 'Herding Fish ',
    image: '/images/p33.jpg ',
    medium: 'Acrylic on Canvas ',
    height: 20,
    width: 24,
    year: 2002,
    artist_comments: ' ',
    numReviews: 0,
    location: 'Donna H ',
    status: 'Available ',
    framed: 'No ',
  },
  {
    name: 'White Cactus Flower ',
    image: '/images/p34.jpg ',
    medium: 'Acrylic on Canvas ',
    height: 20,
    width: 24,
    year: 2002,
    artist_comments: ' ',
    numReviews: 0,
    location: 'Donna H ',
    status: 'Available ',
    framed: 'No ',
  },
  {
    name: 'Navajo Shepherdess ',
    image: '/images/p35.jpg ',
    medium: 'Acrylic on Canvas ',
    height: 20,
    width: 24,
    year: 2002,
    artist_comments: ' ',
    numReviews: 0,
    location: 'Donna H ',
    status: 'Available ',
    framed: 'No ',
  },
  {
    name: 'Navajo Overlook ',
    image: '/images/p36.jpg ',
    medium: 'Acrylic on Canvas ',
    height: 20,
    width: 24,
    year: 2002,
    artist_comments: ' ',
    numReviews: 0,
    location: 'Donna H ',
    status: 'Available ',
    framed: 'No ',
  },
  {
    name: 'Cortez Rampart ',
    image: '/images/p37.jpg ',
    medium: 'Acrylic on Canvas ',
    height: 20,
    width: 24,
    year: 2002,
    artist_comments: ' ',
    numReviews: 0,
    location: 'Donna H ',
    status: 'Available ',
    framed: 'No ',
  },
  {
    name: 'Lavender Twins ',
    image: '/images/p38.jpg ',
    medium: 'Acrylic on Canvas ',
    height: 22,
    width: 16,
    year: 2002,
    artist_comments: ' ',
    numReviews: 0,
    location: 'Donna H ',
    status: 'Available ',
    framed: 'No ',
  },
  {
    name: 'Midnight Solitude ',
    image: '/images/p39.jpg ',
    medium: 'Acrylic on Canvas ',
    height: 12,
    width: 10,
    year: 2002,
    artist_comments: ' ',
    numReviews: 0,
    location: 'Donna H ',
    status: 'Available ',
    framed: 'No ',
  },
  {
    name: 'Dan Quail Family II ',
    image: '/images/p40.jpg ',
    medium: 'Watercolor ',
    height: 10,
    width: 12,
    year: 2002,
    artist_comments: ' ',
    numReviews: 0,
    location: 'Donna H ',
    status: 'Available ',
    framed: 'No ',
  },
  {
    name: 'Monument Valley Pillars ',
    image: '/images/p41.jpg ',
    medium: 'Watercolor ',
    height: 16,
    width: 20,
    year: 2002,
    artist_comments: ' ',
    numReviews: 0,
    location: 'Donna H ',
    status: 'Available ',
    framed: 'No ',
  },
  {
    name: 'Black Canyon ',
    image: '/images/p42.jpg ',
    medium: 'Watercolor ',
    height: 20.5,
    width: 12,
    year: 2002,
    artist_comments: ' ',
    numReviews: 0,
    location: 'Donna H ',
    status: 'Available ',
    framed: 'No ',
  },
  {
    name: 'Peaceful Road ',
    image: '/images/p43.jpg ',
    medium: 'Watercolor ',
    height: 16,
    width: 20,
    year: 2002,
    artist_comments: ' ',
    numReviews: 0,
    location: 'Donna H ',
    status: 'Available ',
    framed: 'No ',
  },
  {
    name: 'Picturesque Mineshaft ',
    image: '/images/p44.jpg ',
    medium: 'Watercolor ',
    height: 12,
    width: 10,
    year: 2002,
    artist_comments: ' ',
    numReviews: 0,
    location: 'Donna H ',
    status: 'Available ',
    framed: 'No ',
  },
  {
    name: 'Mountain Cabins ',
    image: '/images/p45.jpg ',
    medium: 'Watercolor ',
    height: 16,
    width: 20,
    year: 2003,
    artist_comments: ' ',
    numReviews: 0,
    location: 'Donna H ',
    status: 'Available ',
    framed: 'No ',
  },
  {
    name: 'Aspen Trunk Detail ',
    image: '/images/p46.jpg ',
    medium: 'Acrylic on Canvas ',
    height: 30,
    width: 12,
    year: 2003,
    artist_comments: ' ',
    numReviews: 0,
    location: 'Donna H ',
    status: 'Available ',
    framed: 'No ',
  },
  {
    name: 'Mary Sunshine ',
    image: '/images/p47.jpg ',
    medium: 'Acrylic on Canvas ',
    height: 35,
    width: 16,
    year: 2003,
    artist_comments: ' ',
    numReviews: 0,
    location: 'Donna H ',
    status: 'Available ',
    framed: 'No ',
  },
  {
    name: 'Golden Corral ',
    image: '/images/p48.jpg ',
    medium: 'Acrylic on Canvas ',
    height: 18,
    width: 24,
    year: 2003,
    artist_comments: ' ',
    numReviews: 0,
    location: 'Donna H ',
    status: 'Available ',
    framed: 'No ',
  },
  {
    name: 'Sedona Cedar ',
    image: '/images/p49.jpg ',
    medium: 'Acrylic on Canvas ',
    height: 36,
    width: 48,
    year: 2003,
    artist_comments: ' ',
    numReviews: 0,
    location: 'Donna H ',
    status: 'Available ',
    framed: 'Painted edges ',
  },
  {
    name: 'Snowy River Spruce ',
    image: '/images/p50.jpg ',
    medium: 'Acrylic on Canvas ',
    height: 23,
    width: 17,
    year: 2003,
    artist_comments: ' ',
    numReviews: 0,
    location: 'Donna H ',
    status: 'Available ',
    framed: 'Yes ',
  },
  {
    name: 'Backyard Winter ',
    image: '/images/p51.jpg ',
    medium: 'Acrylic on Canvas ',
    height: 21,
    width: 19,
    year: 2003,
    artist_comments: ' ',
    numReviews: 0,
    location: 'Donna H ',
    status: 'Available ',
    framed: 'Yes ',
  },
  {
    name: 'Ponderosa Mountain ',
    image: '/images/p52.jpg ',
    medium: 'Acrylic on Canvas ',
    height: 20.5,
    width: 15.5,
    year: 2003,
    artist_comments: ' ',
    numReviews: 0,
    location: 'Donna H ',
    status: 'Available ',
    framed: 'Yes ',
  },
  {
    name: 'Four pictures of Flowers ',
    image: '/images/p53.jpg ',
    medium: 'Acrylic on Canvas ',
    height: 22,
    width: 24,
    year: 2003,
    artist_comments: ' ',
    numReviews: 0,
    location: 'Donna H ',
    status: 'Available ',
    framed: 'Painted edges ',
  },
  {
    name: 'Navajo Shepherd ',
    image: '/images/p54.jpg ',
    medium: 'Acrylic on Canvas ',
    height: 16,
    width: 20,
    year: 2003,
    artist_comments: ' ',
    numReviews: 0,
    location: 'Donna H ',
    status: 'Available ',
    framed: ' ',
  },
  {
    name: 'Fall Creek ',
    image: '/images/p55.jpg ',
    medium: 'Acrylic on Canvas ',
    height: 16,
    width: 20,
    year: 2003,
    artist_comments: ' ',
    numReviews: 0,
    location: 'Donna H ',
    status: 'Available ',
    framed: ' ',
  },
  {
    name: 'Pink Leaf Explosion ',
    image: '/images/p56.jpg ',
    medium: 'Acrylic on Canvas ',
    height: 18,
    width: 24,
    year: 2003,
    artist_comments: ' ',
    numReviews: 0,
    location: 'Donna H ',
    status: 'Available ',
    framed: ' ',
  },
  {
    name: 'Glowing Cactus ',
    image: '/images/p57.jpg ',
    medium: 'Acrylic on Canvas ',
    height: 16,
    width: 20,
    year: 2003,
    artist_comments: ' ',
    numReviews: 0,
    location: 'Donna H ',
    status: 'Available ',
    framed: ' ',
  },
]
export default products