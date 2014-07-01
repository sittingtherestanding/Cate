var appReady = false
document.body.scrollLeft = 125 // Hide the menu

var main = function()
{
	pointMenu(0)

	setTimeout(function()
	{
		appReady = true
	}, 1400)
}