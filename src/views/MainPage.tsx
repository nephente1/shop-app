import React from "react";
import { AsidePanel } from "../components/AsidePanel/AsidePanel";
import { MainPanel } from "../components/MainPanel/MainPanel";
import styled from 'styled-components';


export const ContentContainer = styled('div')`
	display: flex;
`;

const MainPage = () => {

	return(
		<>
			<ContentContainer>
				<AsidePanel />
				<MainPanel />
			</ContentContainer>
		</>
	)
}

export default MainPage;