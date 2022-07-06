import styled from 'styled-components'

export const SectionTopMoviles = styled.section`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 100%;
	margin-top: 26em;

	h1 {
		margin-bottom: 1em;
	}

	@media (min-width: 481px) and (max-width: 767px) {
		/* 
  ##Device = Low Resolution Tablets, Mobiles (Landscape)
  ##Screen = B/w 481px to 767px
    */
		margin-top: 28em;
	}

	@media (min-width: 768px) and (max-width: 1024px) {
		margin-top: 30em;
		margin-bottom: 2em;

		h1 {
			margin-bottom: 2em;
		}
	}

	@media (min-width: 1025px) and (max-width: 1280px) {
		margin-top: 34em;
		margin-bottom: 2em;

		h1 {
			margin-bottom: 2em;
		}
	}

	@media (min-width: 1281px) {
		margin-top: 54em;
		margin-bottom: 2em;
	}
`
