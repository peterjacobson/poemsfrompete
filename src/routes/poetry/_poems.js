// Ordinarily, you'd generate this data from markdown files in your
// repo, or fetch them from a database of some kind. But in order to
// avoid unnecessary dependencies in the starter template, and in the
// service of obviousness, we're just going to leave it here.

// This file is called `_poems.js` rather than `poems.js`, because
// we don't want to create an `/blog/poems` route — the leading
// underscore tells Sapper not to do that.

const poems = [
	{
		title: 'Gathered by mountains',
		slug: 'gathered-by-mountains',
		html: `
      
        Rumi said
        <quote>Goodbyes are only for those who love with their eyes<br>Because for those who love with heart and soul<br>there is no such thing as separation.</quote>
        My messenger scrolling 
        remembers meetings, touchings
        reminds
        I am a cloud gathered by mountains
        formed and shaped and guided
        drawn by highs 
        blown by lows
        I am trailing thousands of threads
        thousands of translucent threads
        strands
        ropes
        reaching into homes,
        islands,
        storms
        touching valleys
        hearts
        I pass through tempests
        and under the sun
    `
	},
	{
		title: 'Black sea',
		slug: 'black-sea',
		html: `
      <iframe src="https://open.spotify.com/embed/track/3jGui0zkOnfTvfE6cvz1Q2" width="80" height="80" frameborder="0" allowtransparency="true" allow="encrypted-media" style="height:80px;width:80px;background-color:black;border-radius:500px;margin-top: -30px;"></iframe><audio controls><source rel="external" src="https://docs.google.com/uc?export=download&id=1J92CDxTaqSFbe1N-R_FDPJj7F4Yv5iui"></audio>
      Aldous harding
      You seduced me
      into the black southern sunset sea
      out on the point
      on the barnacled rocks
      surrounded by swirling waters 
      as the slow tide drops
      ocean rise
      hypnotise
      sadness and beauty
      you soften my eyes
      sighs of the ocean
      wash around me
      I slip into salty stillness
      so smooth and inky 
       
      Seaweed seaweed
      caress me down
      soft sea sing to me
      so
      Aldous,
      Here is your princess (bay)
      and there is your horizon
      A dark dusking straight
      reaches out
      to a disappearing island
    `
	},
  {
    title: 'Yes Bandits',
    slug: 'yes-bandits',
    html: `
        Yes Bandits
        dark and beautiful
        there were four
        and they came four times
         
        The first stole my friends
        and left me silence
        dewy grass under young feet
         
        The second stole my home
        and left me wandering
        dusty foreign streets
        a stranger
         
        The third stole my love
        and left me in a bare walled room
        alone with a mirror
         
        the fourth stole my plans
        and left me
        sleeping dreams      
    `
  },
  {
    title: 'Mixing of rivers',
    slug: 'mixing-of-rivers',
    html: 
    `<audio controls><source rel="external" src="https://docs.google.com/uc?export=download&id=1BEISbB8EhuF9f0qGrZttV2EtkdgSAbgP"></audio>
      Oh my fine and long haired friend
      Don’t ask why, or how it ends
      just hold on and open wide
      let all this moment
      drop inside
       
      And let it all
      Go out again
      Some to the trees
      Some down the drain
       
      Feel the love
      And feel the pain
      Feel the moon
      Waxing and then wane
       
      Feel the ocean
      Between your toes
      Quietly telling you
      All it knows
       
      Feel my hand
      Our fingers mingling
      Hear the made-up tune
      We’re whistling
       
      See the island
      Under it’s clouds
      Over the sea
      Under the stars
       
      See the sand
      Stretching and yearning
      Rippled by tides
      Eternally turning
       
      Feel the warmth
      Of our kindled fire burning
      Feel it touch your cold face
      Yeah it’s learning
       
      Learning to burn
      Learning to talk
      Learning to crackle
      Learning to walk
      Over the wet wood
      Still full of river
      Learning to lick
      And to taste and to tinder
      These once green and messy
      Now smooth driftwood timbers
      With their old ruru stories
      In their old wooden fingers
       
      Is it ready to roar?
      Let’s help it along!
      With a shout
      And a howl
      And a roar of our own!
       
      Or does it just need
      A little more coaxing?
       
      Stick here
       
      Twig there
       
      Crafting a shrine,
      Building a throne
      For the night
      For the fire
      For all the unknowns
      For the simple joy of weaving
      These beautiful old tree bones
       
      For the love of our rivers
      Of their cold midnight stones
      Singing through these mountains
      With their hushed and soulful tones
       
      For the love of the fungi
      Unseen underneath
      For the love of the seeds
      Pushing up their first leaf
       
      For the love of the firm ground
      Under my feet
      For the peaceful holding of
      My internal retreat
       
      For our mixing of breath
      For our mixing of words
      For our nuzzling of necks
      For our both feeling heard
       
      For our mixing of friends
      And our mixing of rivers
      For our joining of fires
      And now for the sliver
       
      Of morning light
       
      The rising and falling
       
      Waking and yawning
       
      You nuzzle me
      A morning kiss too
       
      I’d like to share
      Another day
      With you.`     
  },
	{
		title: 'Daybreak sea',
		slug: 'daybreak-sea',
		html: `
    <audio controls><source rel="external" src="https://docs.google.com/uc?export=download&id=1Na-HLMd-OeQR7J_8MW0qGyH9u_JmKqwb"></audio>
      Oh my beautiful
      Daybreak sea
      I’ve know you this morning
      and you’ve known me
       
      Now as I watch you
      from my warm dry clothes
      as the cloud swoops in
      and the cold wind blows
       
      I see your windswept face
      and I feel your cold embrace
      and my tongue still knows
      your lively salty taste
       
      of crabs and barnacles
      Whales and seaweed
      perhaps a hint of wastewater
      from our humming factories
       
      But I’ll take you as you are
      and you’ll always love me
      It’s ok, I know you love others too
      trillions of creatures approximately
       
      Darling you remind me
      of this strong body
      Thank you, my darling
      my beautiful daybreak sea.
      
    `
	},
];

poems.forEach(poem => {
	poem.html = poem.html.replace(/^\t{3}/gm, '');
});

export default poems;
