import React from 'react'
import { Button } from 'react-bootstrap'

const AboutSiteScreen = () => {
  return (
    <>
      <header id='page-header-site'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-6 m-auto text-center'>
              <h1 style={{ color: 'white' }}>About this Site</h1>
              <p style={{ color: 'black' }}></p>
            </div>
          </div>
        </div>
      </header>

      {/* <!-- ABOUT SECTION --> */}

      <section id='about' className='py-3'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-11'>
              <h1>This Site</h1>
              <p>
                ...was designed and implemented by Donna’s son, Tom, aka “Little
                Tom” to honor her and the wonderful art she has created over the
                years.
              </p>
              <p>
                There are a few items of information that may be useful in
                navigating the site.
              </p>
            </div>
            {/* <div className='col-md-4'>
              <img
                src='/images/artist4.jpg'
                alt='the artist'
                className='img-fluid rounded-circle d-none d-md-block about-img'
              />
            </div> */}
          </div>
          <div className='row'>
            <div className='col-md-11'>
              <p>
                You don’t have to be signed in to see the pictures, but you do
                have to be signed in to make comments about the pictures. If you
                haven’t registered yet, go to the Sign in tab and under the
                “Sign In” button is a line that says “New Patron? Register” and
                click on the word “Register” to go to the register screen. Once
                you register you will automatically be signed in the first time
                .
              </p>

              <div className='row'>
                <div className='col-md-4'>
                  <img
                    src='/images/sortoptions.jpg'
                    alt='sort options'
                    className='img-fluid '
                  />
                </div>

                <div className='col-md-8' style={{ marginTop: '1rem' }}>
                  <p>
                    There are more than 70 pictures in the gallery, so there are
                    a number of ways that you can sort or filter the gallery to
                    see specific pictures. Click on the “Gallery Sort” item and
                    you will see all the options:
                  </p>
                  <p>
                    The first three items sort the whole gallery. "Sort by
                    Medium" shows what was used to paint the picture:
                    watercolor, pastels or acrylic. Since there were fewer
                    watercolor paintings, this sort starts with watercolors and
                    then to pastels and then to acrylics.
                  </p>
                  <p>
                    Use the “Show only…” options to see only scenery, only
                    southwestern themes, only still life or only people. Select
                    “Show Everything” to reset the gallery to show everything.
                  </p>

                  <p>
                    Although mom says she doesn’t want to sell any of the
                    paintings right now, there is an option to “Show Paintings
                    for Sale”. So you will see a blank screen if you click on
                    this option. If she does decide to sell some in the future
                    this filter will show them.
                  </p>
                  <p>
                    If you want to go back to the top of any gallery you are in,
                    click on the “Donna Hurd Fine Art Studio” Banner on the top
                    left and it will take you back to the beginning. paintings.
                  </p>
                </div>
              </div>

              <div
                className='row'
                style={Object.assign(
                  { marginTop: '3rem' },
                  { backgroundColor: 'rgba(240,240,240,1)' }
                )}
              >
                <div className='col-md-8' style={{ marginTop: '1rem' }}>
                  <p>
                    There is also a search bar on the menu. This searches the
                    titles of all the paintings. You can enter any part of a
                    title and click the search button and it will pull up any
                    pictures with those letters in the title. For example typing
                    ‘moun’ will bring up all pictures with “Mountain’ in the
                    title. (Case is not significant). You can clear the search
                    box and press search again to get all of the pictures.{' '}
                  </p>
                </div>
                <div className='col-md-4'>
                  <img
                    src='/images/searchbar.jpg'
                    alt='sort options'
                    className='img-fluid mt-3'
                  />
                </div>
              </div>
              <div className='row' style={{ marginTop: '2rem' }}>
                <div className='col-md-6'>
                  <img
                    src='/images/DetailPage.jpg'
                    alt='sort options'
                    className='img-fluid mt-3'
                  />
                </div>
                <div className='col-md-5' style={{ marginTop: '2rem' }}>
                  <p>
                    You can click on any picture showing on the current gallery
                    and get detailed information about it.{' '}
                  </p>

                  <p>
                    The detail page has four items you can click on. If mom has
                    made any comments on a picture “Donna’s Comments” will show.
                    If she hasn’t made any comments about the picture that item
                    won’t show. I’m going to visit with her from time to time
                    and see if I can get some comments from her about when,
                    where, why and what prompted her to paint the pictures. So
                    hopefully you will see more comments popping up from time to
                    time.{' '}
                  </p>
                </div>
              </div>

              <div
                className='row'
                style={Object.assign(
                  { marginTop: '3rem' },
                  { backgroundColor: 'rgba(240,240,240,1)' }
                )}
              >
                <div className='col-md-7' style={{ marginTop: '1rem' }}>
                  <p>
                    “Family and Friends Comments” will take you to a screen like
                    a blog where you can see the comments that others have made
                    and you can add your own comment about that picture. You
                    need to be signed in to make a comment. It would be
                    wonderful if you could comment on as many pictures as you
                    can!
                  </p>
                  <p>
                    “Painting Information” shows a few more details about the
                    painting. The last item in this screen is the status. A lot
                    of these fine pictures have been in closets and may be
                    available for give away if you would like to display them.
                    If, so, that will show here. Please note that I (“Little
                    Tom”) will handle all the details with my mom and dad, so
                    please contact me at tomkent321@yahoo.com and let me know if
                    you are interested and I will work with my mom and dad to
                    get it sent or delivered.{' '}
                  </p>
                </div>
                <div className='col-md-5'>
                  <img
                    src='/images/CommentsPage.jpg'
                    alt='sort options'
                    className='img-fluid mt-3'
                  />
                </div>
              </div>

              <p style={{ marginTop: '2rem' }}>
                When you are finished looking at the detail page there are two
                ways to get back to the current gallery. If you just click on
                the picture, you will be taken back to the same picture on the
                main screen. If you click on the “Donna Hurd Fine Art Studio”
                banner it will take you back to the top of the current gallery.{' '}
              </p>

              <div
                className='row'
                style={Object.assign(
                  { marginTop: '3rem' },
                  { backgroundColor: 'rgba(240,240,240,1)' }
                )}
              >
                <div className='col-md-2'>
                  <img
                    style={{ borderRadius: '60%' }}
                    src='/images/TomKphoto.jpg'
                    alt='the artist'
                    className='img-fluid  '
                  />
                </div>
                <div className='col-md-10' style={{ marginTop: '1.5rem' }}>
                  <p>
                    Building this site has been a labor of love. I hope that
                    friends and family can enjoy mom’s pictures and interact and
                    appreciate her with lots of comments. If you have specific
                    questions about the site, please contact me at
                    tomkent321@yahoo.com.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{ marginTop: '4rem' }}>
          <a href='/'>
            <Button className='btn-sm' variant='primary'>
              Go to the Gallery!
            </Button>
          </a>
        </div>
      </section>
    </>
  )
}
export default AboutSiteScreen
