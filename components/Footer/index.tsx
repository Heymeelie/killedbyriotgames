import { FC } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react'; 

// Import Styled Components
import { FooterContainer, FlexWrap } from './Footer.atoms';
import { PressCoverage } from '../../components';
import Link from 'next/link';

const SocialLink: FC<{ url: string; imgSrc: string; altText: string }> = ({
    url,
    imgSrc,
    altText,
}) => {
    const style = {
        border: 'none',
    };

    return (
        <Link
            href={url}
            style={{
                border: 'none',
            }}
            target='_blank'
            rel='noopener noreferrer'
        >
            <img
                style={{
                    width: '24px',
                    height: '24px',
                }}
                width='24px'
                height='24px'
                src={imgSrc}
                alt={altText}
            />
        </Link>
    );
};

const CopyNotice = styled.div(() => css({
    fontSize: '0.75em',
    margin: '30px 0 20px 0',
    textAlign: 'center',
}));


const Title = styled.div(() => css({
    color: '#fafafa',
    fontSize: '2.5em',
    fontWeight: 'lighter',
}));

const FooterTitle = styled.div(() => css({
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
    paddingBottom: '20px',
}));

const SocialWrapper = styled.div(() => css({
    display: 'flex',
    justifyContent: 'center',
    padding: '15px 0',

    ['a']: {
        display: 'block',
        margin: '0 10px',
    },
}));

const Footer = () => (
    <>
        <FooterContainer>
            <FlexWrap>
                <FooterTitle>
                    <div style={{
                        marginRight: '10px',
                    }}>
                        <img height="60px" width="60px" src='tombstone-alt.svg' alt="Tombstone" />
                    </div>
                    <Title>Killed by Riot Games</Title>
                </FooterTitle>
                <div>
                    <p>
                        Killed by Riot Games is the Riot Games graveyard; a free and open source
                        list of discontinued Riot Games content, software.
                        We aim to be a source of factual information about the history
                        surrounding Riot Games&apos; dead projects.
          </p>
                    <p>
                        <a
                            href="https://github.com/Neekhaulas/killedbyriotgames/graphs/contributors"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Contributors
            </a>
            &nbsp;from around the world help compile, research, and maintain the
            information about dying and dead Riot Games products. You can join the
            discussion on&nbsp;
            <a href="https://github.com/Neekhaulas/killedbyriotgames">GitHub</a>. A project
            by&nbsp;
            <a
                            href="https://github.com/Neekhaulas/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Neekhaulas
            </a>
            .
          </p>
                </div>
                <CopyNotice>
                    <a href="https://github.com/Neekhaulas/killedbyriotgames/blob/main/LICENSE">
                        &copy; 2022 Neekhaulas.
          </a>
          &nbsp;-&nbsp;
          <a href="https://a.challenges.gg/share/XkHzk4yB" target="_blank" rel="noopener noreferrer">
                        Analytics
          </a>
                </CopyNotice>
                <SocialWrapper>
                    <SocialLink
                        url="https://github.com/Neekhaulas/killedbyriotgames"
                        altText="GitHub"
                        imgSrc='github.svg'
                    />
                </SocialWrapper>
            </FlexWrap>
        </FooterContainer>
    </>
);
export default Footer;
