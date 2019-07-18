import styled, { keyframes } from 'styled-components';

export const bounce = keyframes`
	0%, 100%, 20%, 50%, 80% {
		-webkit-transform: translateY(0);
		-ms-transform:     translateY(0);
		transform:         translateY(0)
	}
	40% {
		-webkit-transform: translateY(-15px);
		-ms-transform:     translateY(-15px);
		transform:         translateY(-15px)
	}
	60% {
		-webkit-transform: translateY(-5px);
		-ms-transform:     translateY(-5px);
		transform:         translateY(-5px)
	}
`