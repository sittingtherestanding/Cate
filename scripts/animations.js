var pointSpeed = 300
var pointTapTime = 300
var pointTapLife = 300

var cardDelay = 110

var animationDelay = 75
var animationSpeed = 275

var tutorialShown = false

var openCards = function()
{
	if (appReady)
	{
		$("#quiz_container").animate({top: '-125%'}, animationSpeed)
		$("#tutorial_container").animate({top: '-125%'}, animationSpeed)

		setTimeout(function()
		{
			$("#card_container").animate({top: '0px'}, animationSpeed)
		}, animationSpeed)

		loadCards(currentIndex)

		hideNavigation()

		if (!tutorialShown)
		{
			tutorialShown = true
			appReady = false

			loadCards(0)
			pointRight(700)
			pointLeft(2400)

			setTimeout(function()
			{
				appReady = true
			}, 3100)
		}
	}
}

var openQuiz = function()
{
	if (appReady)
	{
		$("#card_container").animate({top: '-125%'}, animationSpeed)
		$("#tutorial_container").animate({top: '-125%'}, animationSpeed)

		setTimeout(function()
		{
			$("#quiz_container").animate({top: '0px'}, animationSpeed)
		}, animationSpeed)

		loadQuiz()

		hideNavigation()
	}
}

var openTutorial = function()
{
	if (appReady)
	{
		$("#card_container").animate({top: '-125%'}, animationSpeed)
		$("#quiz_container").animate({top: '-125%'}, animationSpeed)

		setTimeout(function()
		{
			$("#tutorial_container").animate({top: '0px'}, animationSpeed)
		}, animationSpeed)

		hideNavigation()
	}
}

var showQuiz = function()
{
	$("#quiz_head").animate({left: '0px'}, animationSpeed)

	setTimeout(function()
	{
		$("#quiz_option_1").animate({left: '0px'}, animationSpeed)
	}, animationDelay)

	setTimeout(function()
	{
		$("#quiz_option_2").animate({left: '0px'}, animationSpeed)
	}, animationDelay * 2)

	setTimeout(function()
	{
		$("#quiz_option_3").animate({left: '0px'}, animationSpeed)
	}, animationDelay * 3)

	setTimeout(function()
	{
		$("#quiz_option_4").animate({left: '0px'}, animationSpeed)
	}, animationDelay * 4)
}

var changeQuiz = function()
{
	$("#quiz_head_content").fadeToggle(250)
	$("#quiz_option_1_content").fadeToggle(250)
	$("#quiz_option_2_content").fadeToggle(250)
	$("#quiz_option_3_content").fadeToggle(250)
	$("#quiz_option_4_content").fadeToggle(250)

	$("#quiz_option_select_1").fadeToggle(250)
	$("#quiz_option_select_2").fadeToggle(250)
	$("#quiz_option_select_3").fadeToggle(250)
	$("#quiz_option_select_4").fadeToggle(250)
}

var pointLeft = function(delay)
{
	setTimeout(function()
	{
		document.getElementById('hand').style.left = '130px'
		document.getElementById('hand').style.top = '-400px'
		$("#hand").animate({top: '0px'}, pointSpeed)
	}, delay)

	setTimeout(function()
	{
		document.getElementById('tap').style.left = '131px'
		document.getElementById('tap').style.top = '315px'
		document.getElementById('tap').style.display = 'block'
		previousState() 

		setTimeout(function()
		{
			document.getElementById('tap').style.display = 'none'
			$("#hand").animate({top: '-400px'}, pointSpeed)
		}, pointTapLife)
	}, delay + pointTapTime)
}

var pointRight = function(delay)
{
	setTimeout(function()
	{
		document.getElementById('hand').style.left = '90%'
		document.getElementById('hand').style.top = '-400px'
		$("#hand").animate({top: '0px'}, pointSpeed)
	}, delay)

	setTimeout(function()
	{
		document.getElementById('tap').style.left = '90%'
		document.getElementById('tap').style.top = '315px'
		document.getElementById('tap').style.display = 'block'
		nextState()

		setTimeout(function()
		{
			document.getElementById('tap').style.display = 'none'
			$("#hand").animate({top: '-400px'}, pointSpeed)
		}, pointTapLife)
	}, delay + pointTapTime)
}

var pointSay = function(y, message)
{
	setTimeout(function()
	{
		document.getElementById('hand').style.left = '200px'
		document.getElementById('hand').style.top = '-400px'
		$("#hand").animate({top: y + 'px'}, pointSpeed)
	}, delay)

	setTimeout(function()
	{
		document.getElementById('speech_message').innerHTML = message
		document.getElementById('speech').style.left = '90%'
		document.getElementById('speech').style.top = '315px'
		document.getElementById('speech').style.display = 'block'
		nextState()

		setTimeout(function()
		{
			document.getElementById('speech').style.display = 'none'
			$("#hand").animate({top: '-400px'}, pointSpeed)
		}, pointTapLife)
	}, delay + pointTapTime)
}

var pointMenu = function(delay)
{
	setTimeout(function()
	{
		document.getElementById('hand').style.left = '55%'
		document.getElementById('hand').style.top = '-400px'
		$("#hand").animate({top: '0px'}, pointSpeed)
	}, delay)

	setTimeout(function()
	{
		document.getElementById('tap').style.left = '55%'
		document.getElementById('tap').style.top = '315px'
		document.getElementById('tap').style.display = 'block'

		$("#hand").animate({left: '65%'}, pointSpeed * 2)
		$("#tap").animate({left: '65%'}, pointSpeed * 2)
		$("html, body").animate({scrollLeft: 0}, pointSpeed * 2)

		setTimeout(function()
		{
			document.getElementById('tap').style.display = 'none'
			$("#hand").animate({top: '-400px'}, pointSpeed)
			hideNavigation()
		}, pointSpeed * 4)
	}, delay + pointSpeed)
}

var animationReady = true

var scrollSpeed = 150

var hideNavigation = function()
{
	$('body').animate({scrollLeft: 125}, scrollSpeed)
}

var animationStart = function()
{
	animationReady = false
}

var animationFinish = function()
{
	setTimeout(function()
	{
		animationReady = true
	}, animationDelay * 3 + animationSpeed + 250)
}

	var resetCard1 = function()
	{
		document.getElementById('row_name1').innerHTML = ''
		document.getElementById('row_capital1').innerHTML = ''
		document.getElementById('row_summary1').innerHTML = ''
		document.getElementById('row_story1').innerHTML = ''
		document.getElementById('row_state1').innerHTML = ''
		document.getElementById('row_flag1').innerHTML = ''

		hideCard1()
	}

	var resetCard2 = function()
	{
		document.getElementById('row_name2').innerHTML = ''
		document.getElementById('row_capital2').innerHTML = ''
		document.getElementById('row_summary2').innerHTML = ''
		document.getElementById('row_story2').innerHTML = ''
		document.getElementById('row_state2').innerHTML = ''
		document.getElementById('row_flag2').innerHTML = ''

		hideCard2()
	}

	var showCard1 = function()
	{
		document.getElementById('row_name1').style.display = 'table'
		document.getElementById('row_capital1').style.display = 'table'
		document.getElementById('row_summary1').style.display = 'table'
		document.getElementById('row_story1').style.display = 'table'
		document.getElementById('row_state1').style.display = 'table'
		document.getElementById('row_flag1').style.display = 'table'
	}

	var showCard2 = function()
	{
		document.getElementById('row_name2').style.display = 'table'
		document.getElementById('row_capital2').style.display = 'table'
		document.getElementById('row_summary2').style.display = 'table'
		document.getElementById('row_story2').style.display = 'table'
		document.getElementById('row_state2').style.display = 'table'
		document.getElementById('row_flag2').style.display = 'table'
	}

	var hideCard1 = function()
	{
		document.getElementById('row_name1').style.display = 'none'
		document.getElementById('row_capital1').style.display = 'none'
		document.getElementById('row_summary1').style.display = 'none'
		document.getElementById('row_story1').style.display = 'none'
		document.getElementById('row_state1').style.display = 'none'
		document.getElementById('row_flag1').style.display = 'none'
	}

	var hideCard2 = function()
	{
		document.getElementById('row_name2').style.display = 'none'
		document.getElementById('row_capital2').style.display = 'none'
		document.getElementById('row_summary2').style.display = 'none'
		document.getElementById('row_story2').style.display = 'none'
		document.getElementById('row_state2').style.display = 'none'
		document.getElementById('row_flag2').style.display = 'none'
	}

var hideLeftCard1 = function()
{
	$("#row_name1").animate({left: '-110%'}, animationSpeed)

	setTimeout(function()
	{
		$("#row_capital1").animate({left: '-110%'}, animationSpeed)
	}, animationDelay)

	setTimeout(function()
	{
		$("#row_summary1").animate({left: '-110%'}, animationSpeed)
	}, animationDelay * 2)

	setTimeout(function()
	{
		$("#row_story1").animate({left: '-110%'}, animationSpeed)
	}, animationDelay * 3)

	setTimeout(function()
	{
		$("#row_state1").animate({left: '-110%'}, animationSpeed)
	}, animationDelay * 4)

	setTimeout(function()
	{
		$("#row_flag1").animate({left: '-110%'}, animationSpeed, 'swing', resetCard1)
	}, animationDelay * 5)
}

var showLeftCard1 = function()
{
	document.getElementById('row_name1').style.left = '110%'
	document.getElementById('row_capital1').style.left = '110%'
	document.getElementById('row_summary1').style.left = '110%'
	document.getElementById('row_story1').style.left = '110%'
	document.getElementById('row_state1').style.left = '110%'
	document.getElementById('row_flag1').style.left = '110%'

	showCard1()

	$("#row_name1").animate({left: '0px'}, animationSpeed)

	setTimeout(function()
	{
		$("#row_capital1").animate({left: '0px'}, animationSpeed)
	}, animationDelay)

	setTimeout(function()
	{
		$("#row_summary1").animate({left: '0px'}, animationSpeed)
	}, animationDelay * 2)

	setTimeout(function()
	{
		$("#row_story1").animate({left: '0px'}, animationSpeed)
	}, animationDelay * 3)

	setTimeout(function()
	{
		$("#row_state1").animate({left: '0px'}, animationSpeed)
	}, animationDelay * 4)

	setTimeout(function()
	{
		$("#row_flag1").animate({left: '0px'}, animationSpeed)
	}, animationDelay * 5)
}

var hideLeftCard2 = function()
{
	$("#row_name2").animate({left: '-110%'}, animationSpeed)

	setTimeout(function()
	{
		$("#row_capital2").animate({left: '-110%'}, animationSpeed)
	}, animationDelay)

	setTimeout(function()
	{
		$("#row_summary2").animate({left: '-110%'}, animationSpeed)
	}, animationDelay * 2)

	setTimeout(function()
	{
		$("#row_story2").animate({left: '-110%'}, animationSpeed)
	}, animationDelay * 3)

	setTimeout(function()
	{
		$("#row_state2").animate({left: '-110%'}, animationSpeed)
	}, animationDelay * 4)

	setTimeout(function()
	{
		$("#row_flag2").animate({left: '-110%'}, animationSpeed, 'swing', resetCard2)
	}, animationDelay * 5)
}

var showLeftCard2 = function()
{
	document.getElementById('row_name2').style.left = '110%'
	document.getElementById('row_capital2').style.left = '110%'
	document.getElementById('row_summary2').style.left = '110%'
	document.getElementById('row_story2').style.left = '110%'
	document.getElementById('row_state2').style.left = '110%'
	document.getElementById('row_flag2').style.left = '110%'

	showCard2()

	$("#row_name2").animate({left: '0px'}, animationSpeed)

	setTimeout(function()
	{
		$("#row_capital2").animate({left: '0px'}, animationSpeed)
	}, animationDelay)

	setTimeout(function()
	{
		$("#row_summary2").animate({left: '0px'}, animationSpeed)
	}, animationDelay * 2)

	setTimeout(function()
	{
		$("#row_story2").animate({left: '0px'}, animationSpeed)
	}, animationDelay * 3)

	setTimeout(function()
	{
		$("#row_state2").animate({left: '0px'}, animationSpeed)
	}, animationDelay * 4)

	setTimeout(function()
	{
		$("#row_flag2").animate({left: '0px'}, animationSpeed)
	}, animationDelay * 5)
}

var hideRightCard1 = function()
{
	$("#row_name1").animate({left: '110%'}, animationSpeed)

	setTimeout(function()
	{
		$("#row_capital1").animate({left: '110%'}, animationSpeed)
	}, animationDelay)

	setTimeout(function()
	{
		$("#row_summary1").animate({left: '110%'}, animationSpeed)
	}, animationDelay * 2)

	setTimeout(function()
	{
		$("#row_story1").animate({left: '110%'}, animationSpeed)
	}, animationDelay * 3)

	setTimeout(function()
	{
		$("#row_state1").animate({left: '110%'}, animationSpeed)
	}, animationDelay * 4)

	setTimeout(function()
	{
		$("#row_flag1").animate({left: '110%'}, animationSpeed, 'swing', resetCard1)
	}, animationDelay * 5)
}

var showRightCard1 = function()
{
	document.getElementById('row_name1').style.left = '-110%'
	document.getElementById('row_capital1').style.left = '-110%'
	document.getElementById('row_summary1').style.left = '-110%'
	document.getElementById('row_story1').style.left = '-110%'
	document.getElementById('row_state1').style.left = '-110%'
	document.getElementById('row_flag1').style.left = '-110%'

	showCard1()

	$("#row_name1").animate({left: '0px'}, animationSpeed)

	setTimeout(function()
	{
		$("#row_capital1").animate({left: '0px'}, animationSpeed)
	}, animationDelay)

	setTimeout(function()
	{
		$("#row_summary1").animate({left: '0px'}, animationSpeed)
	}, animationDelay * 2)

	setTimeout(function()
	{
		$("#row_story1").animate({left: '0px'}, animationSpeed)
	}, animationDelay * 3)

	setTimeout(function()
	{
		$("#row_state1").animate({left: '0px'}, animationSpeed)
	}, animationDelay * 4)

	setTimeout(function()
	{
		$("#row_flag1").animate({left: '0px'}, animationSpeed)
	}, animationDelay * 5)
}

var hideRightCard2 = function()
{
	$("#row_name2").animate({left: '110%'}, animationSpeed)

	setTimeout(function()
	{
		$("#row_capital2").animate({left: '110%'}, animationSpeed)
	}, animationDelay)

	setTimeout(function()
	{
		$("#row_summary2").animate({left: '110%'}, animationSpeed)
	}, animationDelay * 2)

	setTimeout(function()
	{
		$("#row_story2").animate({left: '110%'}, animationSpeed)
	}, animationDelay * 3)

	setTimeout(function()
	{
		$("#row_state2").animate({left: '110%'}, animationSpeed)
	}, animationDelay * 4)

	setTimeout(function()
	{
		$("#row_flag2").animate({left: '110%'}, animationSpeed, 'swing', resetCard2)
	}, animationDelay * 5)
}

var showRightCard2 = function()
{
	document.getElementById('row_name2').style.left = '-110%'
	document.getElementById('row_capital2').style.left = '-110%'
	document.getElementById('row_summary2').style.left = '-110%'
	document.getElementById('row_story2').style.left = '-110%'
	document.getElementById('row_state2').style.left = '-110%'
	document.getElementById('row_flag2').style.left = '-110%'

	showCard2()

	$("#row_name2").animate({left: '0px'}, animationSpeed)

	setTimeout(function()
	{
		$("#row_capital2").animate({left: '0px'}, animationSpeed)
	}, animationDelay)

	setTimeout(function()
	{
		$("#row_summary2").animate({left: '0px'}, animationSpeed)
	}, animationDelay * 2)

	setTimeout(function()
	{
		$("#row_story2").animate({left: '0px'}, animationSpeed)
	}, animationDelay * 3)

	setTimeout(function()
	{
		$("#row_state2").animate({left: '0px'}, animationSpeed)
	}, animationDelay * 4)

	setTimeout(function()
	{
		$("#row_flag2").animate({left: '0px'}, animationSpeed)
	}, animationDelay * 5)
}