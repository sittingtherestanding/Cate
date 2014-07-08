var currentCard = 1 // Marks which of the two card sets are currently showing (for animation purposes)
var currentIndex = 0
var scrolled = false

var touchMove = function()
{
	scrolled = true
}

	var resetScroll = function()
	{
		scrolled = false
	}

var tapRight = function()
{
	if (appReady && !scrolled)
	{
		nextState()
	}

	resetScroll()
}

var tapLeft = function()
{
	if (appReady && !scrolled)
	{
		previousState()
	}

	resetScroll()
}

var random = function(min, max)
{
	return Math.round(Math.random() * (max - min) + min)
}

var loadCards = function(state)
{	
	loadIndex(currentIndex)
}

var loadState = function(state)
{
	var i = states.length
	while (i--)
	{
		if (states[i].name == state)
		{
			loadIndex(i)
			break
		}
	}
}

var loadIndex = function(index)
{
	if (currentCard == 1)
	{
		if (index > 0)
		{
			document.getElementById('row_name1').innerHTML = '<p>' + index + '. ' + states[index].name + '</p>'
		}
		else
		{
			document.getElementById('row_name1').innerHTML = '<p>' + states[index].name + '</p>'
		}
		
		document.getElementById('row_capital1').innerHTML = '<p>' + states[index].capital + '</p>'
		document.getElementById('row_summary1').innerHTML = '<p>' + states[index].summary + '</p>'
		document.getElementById('row_story1').innerHTML = '<p>' + states[index].story + '</p>'

		if (states[index].url)
		{
			document.getElementById('row_state1').innerHTML = '<center><img src = images/states/' + states[index].url + '/outline.png></center>'
			document.getElementById('row_flag1').innerHTML = '<img src = images/states/' + states[index].url + '/flag.png>'
		}
		else
		{
			document.getElementById('row_state1').innerHTML = '<center><img src = images/states/' + states[index].name + '/outline.png></center>'
			document.getElementById('row_flag1').innerHTML = '<img src = images/states/' + states[index].name + '/flag.png>'
		}
	}
	else
	{
		document.getElementById('row_name2').innerHTML = '<p>' + index + '. ' + states[index].name + '</p>'
		document.getElementById('row_capital2').innerHTML = '<p>' + states[index].capital + '</p>'
		document.getElementById('row_summary2').innerHTML = '<p>' + states[index].summary + '</p>'
		document.getElementById('row_story2').innerHTML = '<p>' + states[index].story + '</p>'
		
		if (states[index].url)
		{
			document.getElementById('row_state2').innerHTML = '<center><img src = images/states/' + states[index].url + '/outline.png></center>'
			document.getElementById('row_flag2').innerHTML = '<img src = images/states/' + states[index].url + '/flag.png>'
		}
		else
		{
			document.getElementById('row_state2').innerHTML = '<center><img src = images/states/' + states[index].name + '/outline.png></center>'
			document.getElementById('row_flag2').innerHTML = '<img src = images/states/' + states[index].name + '/flag.png>'
		}
	}
}

var previousState = function()
{
	if (currentIndex > 0 && animationReady)
	{
		animationStart()

		currentIndex--

		hideNavigation()

		if (currentCard == 1)
		{
			hideRightCard1()

			setTimeout(function()
			{
				showRightCard2()
			}, cardDelay)
		}
		else
		{
			hideRightCard2()
			
			setTimeout(function()
			{
				showRightCard1()
			}, cardDelay)
		}

		updateCardNumber()

		loadIndex(currentIndex)

		animationFinish()
	}

	hideNavigation()
}

var nextState = function()
{
	if (currentIndex < states.length - 1 && animationReady)
	{
		animationStart()

		currentIndex++

		hideNavigation()

		if (currentCard == 1)
		{
			hideLeftCard1()

			setTimeout(function()
			{
				showLeftCard2()
			}, cardDelay)
		}
		else
		{
			hideLeftCard2()
			
			setTimeout(function()
			{
				showLeftCard1()
			}, cardDelay)
		}

		updateCardNumber()

		loadIndex(currentIndex)

		animationFinish()
	}
}

	var updateCardNumber = function()
	{
		if (currentCard == 1)
		{
			currentCard = 2
		}
		else
		{
			currentCard = 1
		}
	}

var quizReady = false
var quizPauseTime = 1500
var currentQuizState = 0
var quizOptions = [0, 0, 0, 0]
var quizOption1 = 0
var quizOption2 = 0
var quizOption3 = 0
var quizOption4 = 0

var loadQuiz = function()
{	
	currentState = random(0, states.length - 1) // Select the state that will coorespond to one of the quizOptions

	quizOptions = [currentState, random(0, states.length - 1), random(0, states.length - 1), random(0, states.length - 1)] // Load the main state as the first and random for the last three

	// Make sure the randoms don't match
	while (quizOptions[1] == currentState || quizOptions[1] == quizOptions[2] || quizOptions[1] == quizOptions[3])
	{
		quizOptions[1] = random(0, states.length - 1)
	}

	while (quizOptions[2] == currentState || quizOptions[2] == quizOptions[1] || quizOptions[2] == quizOptions[3])
	{
		quizOptions[2] = random(0, states.length - 1)
	}

	while (quizOptions[3] == currentState || quizOptions[3] == quizOptions[1] || quizOptions[3] == quizOptions[2])
	{
		quizOptions[3] = random(0, states.length - 1)
	}

	// After selecting the quizOptions, shuffle them
	quizOption1 = random(0, quizOptions.length - 1)
	quizOption2 = random(0, quizOptions.length - 1)
	quizOption3 = random(0, quizOptions.length - 1)
	quizOption4 = random(0, quizOptions.length - 1)

	// Make sure we don't double-display any quizOptions
	while (quizOption2 == quizOption3 || quizOption2 == quizOption4 || quizOption2 == quizOption1)
	{
		quizOption2 = random(0, quizOptions.length - 1)
	}

	while (quizOption3 == quizOption4 || quizOption3 == quizOption1 || quizOption3 == quizOption2)
	{
		quizOption3 = random(0, quizOptions.length - 1)
	}

	while (quizOption4 == quizOption1 || quizOption4 == quizOption2 || quizOption4 == quizOption3)
	{
		quizOption4 = random(0, quizOptions.length - 1)
	}

	document.getElementById('quiz_head_content').innerHTML = '<p>' + states[currentState].name + '</p>'

	document.getElementById('quiz_option_1_content').innerHTML = '<p>' + states[quizOptions[quizOption1]].capital + '</p>'
	document.getElementById('quiz_option_2_content').innerHTML = '<p>' + states[quizOptions[quizOption2]].capital + '</p>'
	document.getElementById('quiz_option_3_content').innerHTML = '<p>' + states[quizOptions[quizOption3]].capital + '</p>'
	document.getElementById('quiz_option_4_content').innerHTML = '<p>' + states[quizOptions[quizOption4]].capital + '</p>'

	quizReady = true
}

var quizOptionChoose1 = function()
{
	if (quizReady && !scrolled)
	{
		if (states[quizOptions[quizOption1]].name == states[currentState].name)
		{
			markCorrect(1)
			loadNewQuiz()
		}
		else
		{
			markIncorrect(1)
			loadNewQuiz()
		}
	}

	resetScroll()
}

var quizOptionChoose2 = function()
{
	if (quizReady && !scrolled)
	{
		if (states[quizOptions[quizOption2]].name == states[currentState].name)
		{
			markCorrect(2)
			loadNewQuiz()
		}
		else
		{
			markIncorrect(2)
			loadNewQuiz()
		}
	}

	resetScroll()
}

var quizOptionChoose3 = function()
{
	if (quizReady && !scrolled)
	{
		if (states[quizOptions[quizOption3]].name == states[currentState].name)
		{
			markCorrect(3)
			loadNewQuiz()
		}
		else
		{
			markIncorrect(3)
			loadNewQuiz()
		}
	}

	resetScroll()
}

var quizOptionChoose4 = function()
{
	if (quizReady && !scrolled)
	{
		if (states[quizOptions[quizOption4]].name == states[currentState].name)
		{
			markCorrect(4)
			loadNewQuiz()
		}
		else
		{
			markIncorrect(4)
			loadNewQuiz()
		}
	}

	resetScroll()
}

	var markCorrect = function(option)
	{
		if (option == 1)
		{
			var optionDiv = 'quiz_option_select_1'
		}
		else if (option == 2)
		{
			var optionDiv = 'quiz_option_select_2'
		}
		else if (option == 3)
		{
			var optionDiv = 'quiz_option_select_3'
		}
		else if (option == 4)
		{
			var optionDiv = 'quiz_option_select_4'
		}

		document.getElementById(optionDiv).innerHTML = '<img src = images/quiz/correct.png>'

		quizReady = false
	}

	var markIncorrect = function(option)
	{
		if (option == 1)
		{
			var optionDiv = 'quiz_option_select_1'
		}
		else if (option == 2)
		{
			var optionDiv = 'quiz_option_select_2'
		}
		else if (option == 3)
		{
			var optionDiv = 'quiz_option_select_3'
		}
		else if (option == 4)
		{
			var optionDiv = 'quiz_option_select_4'
		}

		document.getElementById(optionDiv).innerHTML = '<img src = images/quiz/incorrect.png>'

		if (states[quizOptions[quizOption1]].name == states[currentState].name)
		{
			markCorrect(1)
		}
		else if (states[quizOptions[quizOption2]].name == states[currentState].name)
		{
			markCorrect(2)
		}
		else if (states[quizOptions[quizOption3]].name == states[currentState].name)
		{
			markCorrect(3)
		}
		else if (states[quizOptions[quizOption4]].name == states[currentState].name)
		{
			markCorrect(4)
		}

		quizReady = false
	}

	var loadNewQuiz = function()
	{
		setTimeout(function()
		{
			changeQuiz()
		}, quizPauseTime)

		setTimeout(function()
		{
			changeQuiz()

			document.getElementById('quiz_option_select_1').innerHTML = '<img src = images/quiz/undecided.png>'
			document.getElementById('quiz_option_select_2').innerHTML = '<img src = images/quiz/undecided.png>'
			document.getElementById('quiz_option_select_3').innerHTML = '<img src = images/quiz/undecided.png>'
			document.getElementById('quiz_option_select_4').innerHTML = '<img src = images/quiz/undecided.png>'

			loadQuiz()
		}, quizPauseTime + 250)
	}