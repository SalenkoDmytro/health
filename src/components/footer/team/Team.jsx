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
import Alena from 'assets/images/team/Alena Abharian.jpeg';
import Andrew from 'assets/images/team/Andrew.jpeg';
import Dmitry from 'assets/images/team/DmitrySalenko.png';
import Maksym from 'assets/images/team/MaksymHolovachuk.jpeg';
import Mitya from 'assets/images/team/MityaKupriyanov.png';
import ShamraiV from 'assets/images/team/ShamraiV.jpeg';
import Max from 'assets/images/team/me1.jpg';

const Team = () => {
  return (
    <>
      <TeamWrapper>
        <h1>Team</h1>
        <TeamList>
          <TeamListItem>
            <TeamLinkStyled
              target="_blank"
              href="https://github.com/Alena-Abharian"
              rel="noreferrer nofollow noopener"
            >
              <Box style={{ position: 'relative', overflow: 'hidden' }}>
                <TeamPhotoStyled src={Alena} alt="Team-member photo" />
                <Overlay>
                  <OverlayText>
                    Alena Abharian, <br />
                    Team Lead
                  </OverlayText>
                </Overlay>
              </Box>
            </TeamLinkStyled>
          </TeamListItem>
          <TeamListItem>
            <TeamLinkStyled
              target="_blank"
              href="https://github.com/H-Maksym"
              rel="noreferrer nofollow noopener"
            >
              <Box style={{ position: 'relative', overflow: 'hidden' }}>
                <TeamPhotoStyled src={Maksym} alt="Team-member photo" />
                <Overlay>
                  <OverlayText>
                    Maksym Holovachuk, <br /> Scrum master
                  </OverlayText>
                </Overlay>
              </Box>
            </TeamLinkStyled>
          </TeamListItem>
          <TeamListItem>
            <TeamLinkStyled
              target="_blank"
              href="https://github.com/KryzhMax"
              rel="noreferrer nofollow noopener"
            >
              <Box style={{ position: 'relative', overflow: 'hidden' }}>
                <TeamPhotoStyled src={Max} alt="Team-member photo" />
                <Overlay>
                  <OverlayText>
                    Max Kryzhanovskyi, <br /> Developer
                  </OverlayText>
                </Overlay>
              </Box>
            </TeamLinkStyled>
          </TeamListItem>
          <TeamListItem>
            <TeamLinkStyled
              target="_blank"
              href="https://github.com/Mitya-Kupriianov"
              rel="noreferrer nofollow noopener"
            >
              <Box style={{ position: 'relative', overflow: 'hidden' }}>
                <TeamPhotoStyled src={Mitya} alt="Team-member photo" />
                <Overlay>
                  <OverlayText>
                    Mitya Kupriyanov, <br /> Developer
                  </OverlayText>
                </Overlay>
              </Box>
            </TeamLinkStyled>
          </TeamListItem>
          <TeamListItem>
            <TeamLinkStyled
              target="_blank"
              href="https://github.com/Hunt3RSH"
              rel="noreferrer nofollow noopener"
            >
              <Box style={{ position: 'relative', overflow: 'hidden' }}>
                <TeamPhotoStyled src={ShamraiV} alt="Team-member photo" />
                <Overlay>
                  <OverlayText>
                    Volodymyr Shamrai, <br /> Developer
                  </OverlayText>
                </Overlay>
              </Box>
            </TeamLinkStyled>
          </TeamListItem>
          <TeamListItem>
            <TeamLinkStyled
              target="_blank"
              href="https://google.com"
              rel="noreferrer nofollow noopener"
            >
              <Box style={{ position: 'relative', overflow: 'hidden' }}>
                <TeamPhotoStyled src={Andrew} alt="Team-member photo" />
                <Overlay>
                  <OverlayText>
                    Andrew, <br /> Developer
                  </OverlayText>
                </Overlay>
              </Box>
            </TeamLinkStyled>
          </TeamListItem>
          <TeamListItem>
            <TeamLinkStyled
              target="_blank"
              href="https://github.com/SalenkoDmytro"
              rel="noreferrer nofollow noopener"
            >
              <Box style={{ position: 'relative', overflow: 'hidden' }}>
                <TeamPhotoStyled src={Dmitry} alt="Team-member photo" />
                <Overlay>
                  <OverlayText>
                    Dmitry Salenko, <br /> Developer
                  </OverlayText>
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
