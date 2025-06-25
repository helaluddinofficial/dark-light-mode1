function createToggler(theme) {

	function toggler() {
		theme = theme === 'light' ? 'light' : 'dark'
		document.body.className=theme
	}
	return toggler;

}
const theme1=createToggler('light')
const theme2=createToggler('dark')
document.getElementById('light').onclick=theme1
document.getElementById('dark').onclick=theme2
