'use client';

import { useSearchParams, useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import JournalCard2 from '../components/Misc/JournalCard2';
import JournalCard3 from '../components/Misc/JournalCard3';
import Link from 'next/link';

export default function Journal() {
  const searchParams = useSearchParams();
  const selectedJournal = searchParams.get('journal');

  const journalPreview = [
    {
      id: 'the-evolution-of-technical-wear',
      date: '12/6/24',
      title: 'The Evolution of Technical Wear',
      image:
        'https://framerusercontent.com/images/k9X7BwFyjljCbl8q4mX6kp0nPI.jpg',
      image2:
        'https://framerusercontent.com/images/ZLcvh5C6IW0fvaPo6qY15yWLXw.png',
      description:
        'The landscape of technical apparel has shifted dramatically...',
      journalTitle: 'Engineering Better Materials',
      content: `The foundation of technical wear lies in material innovation. Each advance in textile engineering opens new possibilities in how we approach garment design. But true progress comes not just from the materials themselves, but from understanding how they can be shaped to enhance natural movement.
		
		Technical innovation should never compromise clean design. The two must evolve together.
		Traditional garment construction follows predictable paths. Our approach challenges these conventions, using innovative patterns and techniques to create pieces that move more naturally with the body. Each seam is placed with purpose, each panel cut to enhance performance.
		
		As urban environments evolve, so too must the way we approach technical apparel. The integration of new materials and construction methods continues to push boundaries, but the core principles remain: clean design, considered details, and uncompromising performance.
		
		The best technical pieces feel invisible to the wearer while making a clear design statement to the observer.
		
		A New Standard
		We believe technical wear should do more than just perform - it should elevate everyday experiences. Through careful material selection, innovative construction, and clean design, we're setting a new standard for what technical apparel can be.
		
		Our focus on reduction - stripping away the unnecessary while improving what remains - drives every decision. Each element must justify its existence, not just through function, but through its contribution to the whole. This is technical minimalism in its purest form.`,
    },
    {
      id: 'moving-through-cities',
      date: '12/6/24',
      title: 'Moving Through Cities',
      image:
        'https://framerusercontent.com/images/pRSF3ie9u29K42AIkVizUhtPFos.jpg',
      image2:
        'https://framerusercontent.com/images/pTJyyrw7BEhQV25yqDD4kjp8.png',
      description: 'We spend our lives moving through cities...',
      journalTitle: 'Moving Through Cities',
      content: `Watching people move through cities teaches us more than any lab test. The reach for a morning coffee, the quick dash to catch a train, the transition from street to office - these are the moments that matter. The way someone adjusts their jacket while rushing through a turnstile tells us more than hours of fabric testing. How a sleeve catches light while reaching for a door handle reveals more about fit than any measurement.

			The best garments adapt to your day without announcing their presence.
			Comfort isn't about stretchy fabrics or breathable membranes. It's about forgetting what you're wearing. We focus on creating pieces that feel natural - during your commute, at your desk, after hours. Building clothes for cities means understanding how environments change. The morning chill gives way to heated lobbies. Sunny streets turn to air-conditioned offices. Your clothing needs to handle these transitions without demanding attention.

			We've learned to pay attention to the quiet moments. The way someone unconsciously adjusts their cuff while working. How they roll their sleeves during the afternoon coffee run. These small gestures inform our patterns and proportions. It's easy to design for the spectacular - the marathon runner, the mountain climber. But designing for daily life? That requires a different kind of attention. Understanding how clothes work when you're thinking about everything except what you're wearing.

			Cities keep evolving, and so do the ways we move through them. New buildings create different wind patterns. Updated subway stations change how we rush for trains. Contemporary office designs affect how we work and move. Our focus stays simple: make clothes that work with you, not against you. Because in the end, the best garment is the one you forget you're wearing until someone asks where you got it.`,
    },
    {
      id: 'night-shift',
      date: '12/6/24',
      title: 'Night Shift',
      image:
        'https://framerusercontent.com/images/4YS2erneoVBUDXp66O2uwDvjjaE.jpg',
      image2:
        'https://framerusercontent.com/images/ilg3e6wVYWvSLsAM3ej6HHceP4.png',
      description: 'Cities never sleep. As day shifts to night...',
      journalTitle: 'After Hours',
      content: `The city's night rhythm differs from its day. Streets empty but don't quiet. Buildings sleep but stay alive. Between dusk and dawn, we move differently - more deliberate, more aware. Our garments need to respond accordingly.

Night changes how we see the city. It should change how the city sees us.
Night brings different challenges. Visibility becomes crucial but shouldn't compromise style. We integrate reflective elements that remain hidden during day, appearing only when caught by headlights or street lamps. Protection without peacocking.

The best technical pieces work invisibly. A jacket's water resistance noticed only when rain starts falling. Breathability appreciated during a midnight dash for the last train. Ventilation serving during that final walk home.

Early risers know - the city belongs to those who see both its faces. The transition between night and day demands versatility. No time to change, no room for compromise. One piece needs to work across hours, across conditions. This balance drives our design process. Creating garments that perform around the clock, adapting as naturally as the city itself. Because life doesn't stop when the sun sets.`,
    },
    {
      id: 'the-weight-of-purpose',
      date: '12/6/24',
      title: 'The Weight of Purpose',
      image:
        'https://framerusercontent.com/images/FG2LWwzL6LUQPimvaWtxuUHJg.jpg',
      image2:
        'https://framerusercontent.com/images/5SLyO4toPeVCEGhgsMGsYCEak3c.png',
      description: 'Materials tell stories. A worn leather handle speaks...',
      journalTitle: 'Time as Design',
      content: `Most brands chase permanence - materials that resist change, finishes that fight time. We see it differently. The best pieces don't just survive use, they evolve through it. Growing more personal, more characteristic with each wear.

Age shouldn't degrade quality. It should reveal it.
Watch how a new bag shifts from store-shelf stiff to personally supple. How premium cotton loses its rigid weave for something more natural. These changes aren't random - they're designed evolution, planned personality. We select materials that remember. That learn from how you carry them, wear them, use them. A technical fabric that maintains its performance while developing unique wear patterns. A leather that darkens where you grip it most.

This approach goes deeper than looks. It's about creating pieces that become more useful through use. That adapt to your patterns, your preferences, your way of moving through the world.`,
    },
    {
      id: 'structure-and-space',
      date: '12/6/24',
      title: 'Structure and Space',
      image:
        'https://framerusercontent.com/images/fTadnSZF2S2WhqbLWU3Ue4UCs.jpg',
      image2:
        'https://framerusercontent.com/images/fYFyHAalqfJywgM7qVSDQEOh2E.png',
      description: 'The spaces we inhabit shape not just how we move...',
      journalTitle: 'Living Architecture',
      content: `Great buildings do more than shelter - they guide movement, create moments, influence behavior. Watch how people naturally slow their pace in grand lobbies, or how their path curves in response to a thoughtfully placed column.
	
	Our relationship with clothing follows similar patterns. The weight of a cotton shirt settling on shoulders, the natural break of a trouser leg, the way a jacket adapts to your stance - these aren't just features, they're conversations between body and garment.
	
	Space becomes place through people. Clothes become expression through movement.
	Buildings speak through their materials. Glass suggests transparency and reflection. Concrete communicates permanence and strength. Wood brings organic warmth to rigid spaces. We select fabrics with the same consideration. A heavyweight cotton that starts structured but softens to your shape. Technical yarns that protect while maintaining breathability. Materials that age gracefully, developing character through use.
	
	Architecture balances public impression with private experience. The same facade that makes a bold statement from across the street must also feel welcoming as you approach. Great garments work the same way - confident at a distance, comfortable up close.
	
	The best spaces maintain a kind of tension - between old and new, light and shadow, movement and rest. They don't force you to choose between form and function because they've found ways to serve both. This is what we aim for in every piece we create. Not compromise between competing needs, but resolution through thoughtful design. Garments that feel as good as they look, that work as well as they wear.`,
    },
    {
      id: 'the-space-between',
      date: '12/6/24',
      title: 'The Space Between',
      image:
        'https://framerusercontent.com/images/u3Tqel96hLin18aiqK8hCiR7VDM.jpg',
      image2:
        'https://framerusercontent.com/images/XOag5GYUcxxqJIo7Jq4exIwyF4.png',
      description: 'In a world that celebrates loud statements...',
      journalTitle: 'Finding Quiet',
      content: `Watch how people behave in well-designed spaces. The natural hush that falls in a perfectly proportioned room. The instinctive adjustment of pace in response to ceiling height. These subtle influences shape our experience more than any bold gesture.

True confidence doesn't need volume. It exists in proportion, in materials, in purpose.
There's an old architectural saying: god lives in the details. The same holds true for garments. The precise angle of a pocket opening. The weight of a zipper pull. The way a sleeve breaks at the wrist. These small moments define the whole. Quality materials have their own voice. A heavy cotton that drapes just so. A technical shell that moves without sound. These aren't features to list on a tag - they're experiences that register subconsciously, building trust over time.

Like any good design, clothing should work at multiple ranges. Bold enough to be appreciated from across a room, refined enough to reveal new details up close. This balance is hard to achieve but impossible to ignore.

Over time, well-designed pieces become extensions of self. The way a jacket molds to your movements. How a favorite shirt softens at stress points. These aren't signs of wear but of harmony between garment and owner.`,
    },
  ];

  const journal = journalPreview.find((j) => j.id === selectedJournal);

  if (journal) {
    return (
      <div className="flex flex-col ">
        <div className="min-h-[70vh] flex p-2">
          <JournalCard2 journalCardInfo={journal} />
        </div>
        <div className="min-h-screen flex flex-col lg:flex-row">
          <div className="flex flex-col gap-8 p-2 flex-1 border-neutral-500">
            <Link href={'/journal'}>
              Home / Journal /{' '}
              <span className="text-neutral-500">{journal.title}</span>
            </Link>
            <span className="text-4xl font-bold">{journal.journalTitle}</span>
            <span className="md:text-2xl font-semibold tracking-widest leading-relaxed">
              {journal.content}
            </span>
          </div>
          <div
            className="flex-1"
            style={{
              backgroundImage: `url(${journal.image2})`,
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
            }}
          ></div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="min-h-[60vh] flex p-2">
        <JournalCard2 journalCardInfo={journalPreview[0]} />
      </div>
      <div className="min-h-screen grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-2 w-full p-2">
        {journalPreview.slice(1).map((journal) => (
          <JournalCard3
            key={journal.id}
            journalCardInfo={journal}
          />
        ))}
      </div>
    </div>
  );
}
