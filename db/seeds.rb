Brewery.destroy_all

br1 = Brewery.create({
  brewery_name: "Wayward Brewing Co",
  address: "1 Gehrig Ln, Annadale NSW 2038",
  image: "http://dnawpvd8dl079.cloudfront.net/image/WaywardBrewing.jpg",
  description: "Wayward's founder, Peter Philip, came to own Wayward through a decade-long love affair with home brewing and he still considers himself a homebrewer at heart. His wayward ethos comes from an insatiable wanderlust and love of travel, particularly beer pilgrimages through Europe an other places with rich brewing traditions. He loves the idea of beers that you can only find in one place, beer worth travelling for.",
  website: "http://www.waywardbrewing.com.au/"
  })

br2 = Brewery.create({
  brewery_name: "Batch Brewing Company",
  address: "44 Sydenham Rd, Marrickville NSW 2204",
  image: "http://www.sydneycraftbeers.com.au/wp-content/uploads/2014/06/SCBBatch01.jpg",
  description: "Come out to sample our range of hand crafted beers, enjoy a jar or two with your friends and take away a growler (1.89L) or bomber (640mL) of your favorite.",
  website: "http://www.batchbrewingco.com.au/"
  })

br3 = Brewery.create({
  brewery_name: "Willie The Boatman",
  address: "75 Mary St, St Peters NSW 2044",
  image: "http://www.fablecraft.com.au/wp-content/uploads/2014/02/fablecraft_willie_the_boatman_beer_76.jpg",
  description: "Having met on the school run many moons ago, Nick Newey and Pat McInerney bonded over a mutual love of fishing and boating, which eventually led the pair to tinkering in homebrewing together. After years of experimentation, and with neither satisfied in their 9-5, they decided to turn their passion into profession. And so, Willie the Boatman was born.",
  website: "http://www.willietheboatman.com/"
  })

br4 = Brewery.create({
  brewery_name: "Young Henrys",
  address: "76 Wilford St, Newtown NSW 2042",
  image: "http://www.honeyrogue.com/i/folio/brand-newtowner-1.jpg",
  description: "Meeting on opposite sides of the bar, Richard Adamson and Oscar McMahon got talking. It turned out they both shared a love of beer and a view that the Sydney beer scene was behind the times. It should, they thought, be more adventurous, innovative and fun. Since Richard knew how to brew and Oscar knew all the ins and outs of hospitality, they figured they could do more than just talk.",
  website: "http://www.younghenrys.com/"
  })


Tour.destroy_all

t1 = Tour.create({
  tour_name: "Innerwest",
  price: 140.50,
  num_capacity: 15
  })

t2 = Tour.create({
  tour_name: "Northshore",
  price: 130.50,
  num_capacity: 12
  })

t3 = Tour.create({
  tour_name: "Southsydney",
  price: 135.50,
  num_capacity: 18
  })

t4 = Tour.create({
  tour_name: "Cityfringe",
  price: 118.50,
  num_capacity: 15
  })


TourSession.destroy_all

s1 = TourSession.create({
  tour_date: Time.now + 10.days,
  tour_id: t1.id,
  number_booked: 0
  })

s2 = TourSession.create({
  tour_date: Time.now + 11.days,
  tour_id: t2.id,
  number_booked: 0
  })

s3 = TourSession.create({
  tour_date: Time.now + 12.days,
  tour_id: t3.id,
  number_booked: 0
  })

s4 = TourSession.create({
  tour_date: Time.now + 13.days,
  tour_id: t4.id,
  number_booked: 0
  })



Booking.destroy_all

b1 = Booking.create({
    name_last: "Silva",
    name_first: "Tim",
    date: Time.now,
    number_people: 5,
    session_id: s1.id
  })

b2 = Booking.create({
    name_last: "Ferguson",
    name_first: "James",
    date: Time.now,
    number_people: 3,
    session_id: s2.id
  })

b3 = Booking.create({
    name_last: "Borucka",
    name_first: "Ewelina",
    date: Time.now,
    number_people: 7,
    session_id: s3.id
  })

b4 = Booking.create({
    name_last: "Maia",
    name_first: "Mario",
    date: Time.now,
    number_people: 2,
    session_id: s4.id
  })
