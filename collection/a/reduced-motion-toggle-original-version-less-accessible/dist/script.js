const toggle = document.querySelector('[data-toggle]')
const buttonText = document.querySelector('[data-btn-text]')
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')

const setReducedMotionStyles = () => {
	buttonText.innerText = 'Turn on motion'
	document.body.classList.remove('allow-motion')
	document.body.style.setProperty('--playState', 'paused')
}

const setMotionStyles = () => {
	buttonText.innerText = 'Turn off motion'
	document.body.classList.add('allow-motion')
	document.body.style.setProperty('--playState', 'running')
}

const getMotionPreference = () => {
	const localStoragePreference = localStorage.getItem('prefersReducedMotion')
	
	// First check localStorage, to see if the user has previously stated a preference
	if (localStoragePreference) {
		return localStoragePreference
	} else {
		// Otherwise, check the user's system preferences
		return prefersReducedMotion.matches ? 'reduce' : 'no-preference'
	}
}

const setInitialStyles = () => {
	// Otherwise, check the user's system preferences
	if (getMotionPreference() == 'reduce') {
		setReducedMotionStyles()
	} else {
		setMotionStyles()
	}
	
	// The button is hidden initially, as it won't work without JS. We need to make it visible
	toggle.hidden = false
}

setInitialStyles()

toggle.addEventListener('click', () => {
	if (getMotionPreference() == 'reduce') {
		// If currently set to reduced motion, toggle motion on
		localStorage.setItem('prefersReducedMotion', 'no-preference')
		setMotionStyles()
	} else {
		// Otherwise, toggle motion off
		localStorage.setItem('prefersReducedMotion', 'reduce')
		setReducedMotionStyles()
	}
})