var states = [
	{
		name: 'State Name',
		url: 'Tutorial',
		capital: 'State Capital',
		summary: 'Mnemonic Summary',
		story: 'Full Mnemonic'
	},
	{
		name: 'Alabama',
		capital: 'Montgomery',
		summary: 'All Bananas - Mount Gum',
		story: '<i>All bananas</i> traveling to a <i>mountain</i> of <i>gum</i>'
	},
	{
		name: 'Alaska',
		capital: 'Juneau',
		summary: 'Eskimos - June',
		story: '<i>Eskimo\'s</i> igloos melting the warm <i>June</i> weather'
	},
	{
		name: 'Arizona',
		capital: 'Phoenix',
		summary: 'Air Zone - Phoenix',
		story: 'A <i>phoenix</i> outside the <i>ozone</i> needs <i>air</i>'
	},
	{
		name: 'Arkansas',
		capital: 'Little Rock',
		summary: 'Ark Sauce - Little Rocks',
		story: 'Noah\'s <i>ark</i> floating on spaghetti <i>sauce</i> while it rains <i>little rocks</i>'
	},
	{
		name: 'California',
		capital: 'Sacramento',
		summary: 'Beach - Sacred Mint',
		story: 'A group of <i>sacred mints</i> (mints dressed in priest clothes) playing on the <i>beach</i>'
	},
	{
		name: 'Colorado',
		capital: 'Denver',
		summary: 'Collar - Den',
		story: 'A lion in his <i>den</i> wearing a lot of <i>collared</i> shirts'
	},
	{
		name: 'Connecticut',
		capital: 'Hartford',
		summary: 'Connect - Heart Four',
		story: 'Playing <i>connect four</i> with <i>hearts</i>'
	},
	{
		name: 'Delaware',
		capital: 'Dover',
		summary: 'Dare - Dove',
		story: 'A <i>daredevil dove</i> rides his motorcycle over a crazy jump'
	},
	{
		name: 'Florida',
		capital: 'Tallahassee',
		summary: 'Floor - Tail Sea',
		story: 'Millions of animal <i>tails</i> growing out of your <i>floor</i>, you pluck them out and throw them into the <i>sea</i>'
	},
	{
		name: 'Georgia',
		capital: 'Atlanta',
		summary: 'George Washington - Ant Land',
		story: '<i>George Washington</i> leading an army against a <i>land</i> of giant <i>ants</i>'
	},
	{
		name: 'Hawaii',
		capital: 'Honolulu',
		summary: 'How! - Honey Lala',
		story: 'Indian chief says <i>"How!"</i> as his tribe gargles <i>honey</i> while singing <i>"La-La"</i>'
	},
	{
		name: 'Idaho',
		capital: 'Boise',
		summary: 'Don\'t Know - Boys',
		story: '<i>Boys</i> around the world shrugging their shoulders because they <i>don\'t know</i> anything'
	},
	{
		name: 'Illinois',
		capital: 'Springfield',
		summary: 'Ill Annoy - Spring Field',
		story: 'An <i>ill</i> (sick) <i>spring</i> makes <i>annoying</i> sounds so a nearby <i>field</i> buries it to stop the noise'
	},
	{
		name: 'Indiana',
		capital: 'Indianapolis',
		summary: 'Indian - Indian Pole',
		story: 'An <i>Indian</i> hanging a flag onto another <i>Indian</i>, like a <i>pole</i>'
	},
	{
		name: 'Iowa',
		capital: 'Des Moines',
		summary: 'Eye Owl - Dime Coins',
		story: 'The <i>eyes</i> of a million <i>owls</i> have been replaced with <i>dime coins</i>'
	},
	{
		name: 'Kansas',
		capital: 'Topeka',
		summary: 'Cans - Top Peck',
		story: 'Millions of <i>cans</i> spinning like <i>tops</i> and being <i>pecked</i> on by giant birds'
	},
	{
		name: 'Kentucky',
		capital: 'Frankfort',
		summary: 'Super Man (Mr. Kent) - Frank Fort',
		story: '<i>Super Man</i> using <i>Frank</i> hot dogs to build a giant <i>fort</i>'
	},
	{
		name: 'Louisiana',
		capital: 'Baton Rouge',
		summary: 'Lois Lane - Bat Rug',
		story: '<i>Lois</i> flying with <i>bat</i> wings carrying a giant <i>rug</i>'
	},
	{
		name: 'Maine',
		capital: 'Augusta',
		summary: 'A Lion\'s Mane - A Gust of Wind',
		story: 'A <i>lion\'s mane</i> is blown away by <i>a gust a wind</i> and the lion is embarrassed'
	},
	{
		name: 'Maryland',
		capital: 'Annapolis',
		summary: 'Marry - An Apple',
		story: 'A strange land where everyone goes when they want to <i>marry an apple</i>'
	},
	{
		name: 'Massachusetts',
		capital: 'Boston',
		summary: 'Moss Achu! - Boss Ton',
		story: '<i>Moss</i> sneezes, <i>"Achu!"</i> on a <i>boss</i> (a man in suit) who throws a one <i>ton</i> weight at the moss'
	},
	{
		name: 'Michigan',
		capital: 'Lansing',
		summary: 'Mission - Lance',
		story: 'A secret agent is given a <i>mission</i> to capture a magical, golden <i>lance</i>'
	},
	{
		name: 'Minnesota',
		capital: 'Saint Paul',
		summary: 'Mine Soda - Sink Pool',
		story: 'Miners <i>mine</i> for <i>soda</i> (pop), and have <i>sinks</i> in their swimming <i>pool</i> full of soda'
	},
	{
		name: 'Mississippi',
		capital: 'Jackson',
		summary: 'Miss Pea - Jacks',
		story: 'An elderly lady made of <i>peas, Ms.</i> Pea, is a black <i>jack</i> dealer at a casino'
	},
	{
		name: 'Missouri',
		capital: 'Jefferson City',
		summary: 'Miserable - Jefferson Kitty',
		story: 'A <i>miserable</i> Thomas <i>Jefferson</i> signs the Declaration while wearing a <i>kitty</i> hat'
	},
	{
		name: 'Montana',
		capital: 'Helena',
		summary: 'Mountain - Hail',
		story: 'It <i>hails</i> so much that a colossal <i>mountain</i> of ice pebbles is formed'
	},
	{
		name: 'Nebraska',
		capital: 'Lincoln',
		summary: 'Knee Brace - Lincoln',
		story: 'The giant statue of Abraham <i>Lincoln</i> goes jogging, hurts his <i>knee,</i> and has to wear a <i>brace</i>'
	},
	{
		name: 'Nevada',
		capital: 'Carson City',
		summary: 'Never Day - Car Sun Kitty',
		story: 'A land of constant darkness (<i>never day</i>) sends <i>kitty cars</i> to the <i>sun</i> to collect light'
	},
	{
		name: 'New Hampshire',
		url: 'NewHampshire',
		capital: 'Concord',
		summary: 'New Hamper - Cone Cord',
		story: 'A shiny <i>new hamper</i> is filled with traffic <i>cones</i> that light up when attached to a power <i>cord</i>'
	},
	{
		name: 'New Jersey',
		url: 'NewJersey',
		capital: 'Trenton',
		summary: 'New Jersey - Train Ton',
		story: 'A shiny <i>new jersey</i> stops a <i>train</i> that is filled with 1 <i>ton</i> weights, using its magical powers'
	},
	{
		name: 'New Mexico',
		url: 'NewMexico',
		capital: 'Santa Fe',
		summary: 'New Sombrero - Santa Claus Fee',
		story: 'A shiny <i>new sombrero</i> being worn by <i>Santa Claus</i> who is charged a <i>fee</i> for speeding'
	},
	{
		name: 'New York',
		url: 'NewYork',
		capital: 'Albany',
		summary: 'New Pork - All Ponies',
		story: 'A shiny <i>new pork</i> (pig) rules over <i>all ponies</i>'
	},
	{
		name: 'North Carolina',
		url: 'NorthCarolina',
		capital: 'Raleigh',
		summary: 'North Pole Carolers - Rally',
		story: 'In the <i>north pole,</i> the elf <i>carolers</i> are tired of singing and hold a giant <i>rally</i> in protest'
	},
	{
		name: 'North Dakota',
		url: 'NorthDakota',
		capital: 'Bismarck',
		summary: 'North Pole Coat - Business Marker',
		story: 'In the <i>north pole</i> your <i>coat</i> is taken by a <i>business marker</i> (a marker in a suit)'
	},
	{
		name: 'Ohio',
		capital: 'Columbus',
		summary: 'Uh Oh... - Columbus',
		story: 'As <i>Columbus</i> is sailing he finds the edge of the planet, he says, <i>"Uh oh"</i>'
	},
	{
		name: 'Oklahoma',
		capital: 'Oklahoma City',
		summary: 'Oak Home - Oak Home Kitty',
		story: 'An <i>oak<i> tree grows through your <i>home</i> with another, <i>kitty-filled</i> tree growing out of it'
	},
	{
		name: 'Oregon',
		capital: 'Salem',
		summary: 'Organ - Sailin\'',
		story: 'A massive <i>organ</i> piano is the captain of a <i>sailin\'</i> boat'
	},
	{
		name: 'Pennsylvania',
		capital: 'Harrisburg',
		summary: 'Pen Silver Van - Hairy Bug',
		story: 'An army of <i>pens</i> is attacking a <i>silver van,</i> lead by a giant, <i>hairy bug</i>'
	},
	{
		name: 'Rhode Island',
		url: 'RhodeIsland',
		capital: 'Providence',
		summary: 'Road Island - Professor Cents',
		story: 'A long <i>road</i> on an <i>island</i> is filled with <i>pennies</i> dressed as <i>professors</i>'
	},
	{
		name: 'South Carolina',
		url: 'SouthCarolina',
		capital: 'Columbia',
		summary: 'Sound Carolers - Column',
		story: 'The powerful <i>sound</i> from a group of <i>carolers</i> shatters a <i>column</i> and brings down a building'
	},
	{
		name: 'South Dakota',
		url: 'SouthDakota',
		capital: 'Pierre',
		summary: 'Sound Coat - Pie Ear',
		story: '<i>Sounds</i> emit from the speakers on your <i>coat</i> and turn into <i>pies</i> that fly into your <i>ears</i>'
	},
	{
		name: 'Tennessee',
		capital: 'Nashville',
		summary: 'Tennis - Match Village',
		story: 'A single <i>tennis match</i> is being played by an entire <i>village</i>'
	},
	{
		name: 'Texas',
		capital: 'Austin',
		summary: 'Texts - Auto Tin',
		story: '<i>Texts</i> on your phone are delivered by tiny <i>automobiles</i> made of <i>tin</i> cans'
	},
	{
		name: 'Utah',
		capital: 'Salt Lake',
		summary: 'You Tall - Salt Lake',
		story: '<i>You</i> are extremely <i>tall</i> and made of <i>salt</i> so you go swimming in a <i>lake</i> and dissolve'
	},
	{
		name: 'Vermont',
		capital: 'Montpelier',
		summary: 'Fur Man - Mountain Propeller',
		story: 'A <i>furry man</i> builds a <i>mountain</i> with a huge <i>propeller</i> on it so it can fly'
	},
	{
		name: 'Virginia',
		capital: 'Richmond',
		summary: 'Fur Genie - Rich Mound',
		story: 'A <i>furry genie</i> ask for your wish, you wish for <i>riches,</i> you get a <i>mound</i> of gold and jewels'
	},
	{
		name: 'Washington',
		capital: 'Olympia',
		summary: 'George Washington - Olympus',
		story: '<i>George Washington</i> visits the Greek gods on Mount <i>Olympus</i>'
	},
	{
		name: 'West Virginia',
		url: 'WestVirginia',
		capital: 'Charleston',
		summary: 'Rest Fur Genie - Charcoal Stone',
		story: 'A <i>resting furry genie</i> sleeps on filthy <i>charcoal</i> with a blanket of <i>stones</i>'
	},
	{
		name: 'Wisconsin',
		capital: 'Madison',
		summary: 'Wise Cones - Mad Sun',
		story: 'A very old, <i>wise</i> ice cream <i>cone</i> is very <i>angry</i> with the <i>sun,</i> for melting him'
	},
	{
		name: 'Wyoming',
		capital: 'Cheyenne',
		summary: 'Rome Sing - Shine',
		story: 'The ancient people of <i>Rome</i> all <i>singing</i> a song so well that they <i>shine</i>'
	}
]