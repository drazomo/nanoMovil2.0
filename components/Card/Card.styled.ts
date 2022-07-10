import styled from 'styled-components'

export const CardContainerGrid = styled.div`
	display: grid;
	grid-template-columns: repeat(4, 275px);
	grid-template-rows: repeat(2, auto);
	grid-column-gap: 2em;
	grid-row-gap: 6em;

	//320px - 480px device width
	@media (min-width: 320px) and (max-width: 480px) {
		display: flex;
		flex-direction: column;
		grid-row-gap: 1em;
	}

	/* 
  ##Device = Low Resolution Tablets, Mobiles (Landscape)
  ##Screen = B/w 481px to 767px
*/

	@media (min-width: 481px) and (max-width: 767px) {
		> div {
			margin-bottom: 2em;
		}
	}

	/* 
  ##Device = Tablets, Ipads (portrait)
  ##Screen = B/w 768px to 1024px
*/

	@media (min-width: 768px) and (max-width: 1024px) {
		height: 100%;
		display: grid;
		grid-template-columns: repeat(2, 350px);
		grid-template-rows: repeat(1, auto);
		grid-column-gap: 1.5em;
		grid-row-gap: 1.5em;
	}
`

export const CardItem = styled.div`
	display: flex;
	flex-direction: column;
	cursor: pointer;
	width: 275px;
	height: auto;

	background: rgba(255, 255, 255, 0.4);
	box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
	backdrop-filter: blur(5px);
	-webkit-backdrop-filter: blur(5px);
	border-radius: 10px;
	border: 1px solid rgba(255, 255, 255, 0.18);

	:hover {
		background: rgba(255, 255, 255, 0.9);
	}

	.cardButtonDiv {
		display: flex;
		justify-content: flex-end;
		width: 100%;
		padding: 0.5em;
	}

	button {
		text-transform: uppercase;
		width: 50%;
		padding: 0.5em;
	}

	@media (min-width: 320px) and (max-width: 480px) {
		width: 285px;
		height: auto;
	}

	@media (min-width: 481px) and (max-width: 767px) {
		/* 
  ##Device = Low Resolution Tablets, Mobiles (Landscape)
  ##Screen = B/w 481px to 767px
    */
		width: 400px;
	}

	@media (min-width: 768px) and (max-width: 1024px) {
		width: 350px;
		height: auto;
	}
`
export const CardImgContainer = styled.div`
	border-radius: 100px;
`
export const CardContent = styled.div`
	display: flex;
	flex-direction: column;
	padding: 1em;
	flex-grow: 1;
`

export const CardTitle = styled.span`
	display: inline-flex;
	justify-content: space-between;
	margin-bottom: 0.8em;
`
