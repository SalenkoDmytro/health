import React from 'react';
import { TeamLinkStyled } from './TeamStyled.styled';
import {
  TeamList,
  TeamListItem,
  TeamWrapper,
  TeamPhotoStyled,
  Overlay,
  OverlayText,
} from './TeamStyled.styled';
import Box from 'components/common/box/Box';
import hunger from '../../../assets/images/notFound/hunger-404.webp';

const Team = () => {
  return (
    <>
      <TeamWrapper>
        <h1>Team</h1>
        <TeamList>
          <TeamListItem>
            Alena
            <TeamLinkStyled target="_blank" href="https://google.com">
              <Box style={{ position: 'relative', overflow: 'hidden' }}>
                <TeamPhotoStyled src={hunger} alt="Team-member photo" />
                <Overlay>
                  <OverlayText>Team Lead</OverlayText>
                </Overlay>
              </Box>
            </TeamLinkStyled>
          </TeamListItem>
          <TeamListItem>
            Maksym
            <TeamLinkStyled target="_blank" href="https://google.com">
              <Box style={{ position: 'relative', overflow: 'hidden' }}>
                <TeamPhotoStyled src={hunger} alt="Team-member photo" />
                <Overlay>
                  <OverlayText>Scrum master</OverlayText>
                </Overlay>
              </Box>
            </TeamLinkStyled>
          </TeamListItem>
          <TeamListItem>
            Max
            <TeamLinkStyled target="_blank" href="https://google.com">
              <Box style={{ position: 'relative', overflow: 'hidden' }}>
                <TeamPhotoStyled src={hunger} alt="Team-member photo" />
                <Overlay>
                  <OverlayText>Developer</OverlayText>
                </Overlay>
              </Box>
            </TeamLinkStyled>
          </TeamListItem>
          <TeamListItem>
            Mitya
            <TeamLinkStyled target="_blank" href="https://google.com">
              <Box style={{ position: 'relative', overflow: 'hidden' }}>
                <TeamPhotoStyled src={hunger} alt="Team-member photo" />
                <Overlay>
                  <OverlayText>Developer</OverlayText>
                </Overlay>
              </Box>
            </TeamLinkStyled>
          </TeamListItem>
          <TeamListItem>
            Shamrai
            <TeamLinkStyled target="_blank" href="https://google.com">
              <Box style={{ position: 'relative', overflow: 'hidden' }}>
                <TeamPhotoStyled src={hunger} alt="Team-member photo" />
                <Overlay>
                  <OverlayText>Developer</OverlayText>
                </Overlay>
              </Box>
            </TeamLinkStyled>
          </TeamListItem>
          <TeamListItem>
            Andrew
            <TeamLinkStyled target="_blank" href="https://google.com">
              <Box style={{ position: 'relative', overflow: 'hidden' }}>
                <TeamPhotoStyled src={hunger} alt="Team-member photo" />
                <Overlay>
                  <OverlayText>Developer</OverlayText>
                </Overlay>
              </Box>
            </TeamLinkStyled>
          </TeamListItem>
          <TeamListItem>
            Dima
            <TeamLinkStyled target="_blank" href="https://google.com">
              <Box style={{ position: 'relative', overflow: 'hidden' }}>
                <TeamPhotoStyled src={hunger} alt="Team-member photo" />
                <Overlay>
                  <OverlayText>Developer</OverlayText>
                </Overlay>
              </Box>
            </TeamLinkStyled>
          </TeamListItem>
        </TeamList>
      </TeamWrapper>
    </>
  );
};

export default Team;
