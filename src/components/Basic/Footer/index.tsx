import {Box} from "@/styles";
import {FooterStyles as Styled} from './styles'
import {Link} from "react-router-dom";
import Icon from "@/icons/Icon";
import {Gap} from '@/components'

export const Footer = () => {
    return (
        <Styled.Wrap>
            <Box d='column' style={{marginRight: 20}}>
                <Link to={'/'}>
                    <Icon name='logo'/>
                </Link>
                <Styled.P style={{marginTop: 10}}>IMart, Your meta universe exhibition hall on IC. </Styled.P>
                <Styled.Media>
                    <Styled.MediaItem>
                        <a target="_blank" href="https://discord.gg/7kvD9WWkAj">
                            <Icon name='discord'/>
                        </a>
                    </Styled.MediaItem>
                    <Styled.MediaItem>
                        <a target='_blank' href="https://twitter.com/imart_io">
                            <Icon name='twitter'/>
                        </a>
                    </Styled.MediaItem>
                    <Styled.MediaItem>
                        <a target='_blank' href="https://github.com/mix-labs">
                            <Icon name='githup'/>
                        </a>
                    </Styled.MediaItem>
                </Styled.Media>
                <Styled.P>@2022 All Rights Reserved.</Styled.P>
            </Box>
            <Box>
                <Box d='column'>
                    <Styled.NoteList>
                        <Styled.NoteItem>
                            MARKETPLACE
                        </Styled.NoteItem>
                        <Styled.NoteItem>
                            <a href="/profile">
                                Sells
                            </a>
                        </Styled.NoteItem>
                        <Styled.NoteItem>
                            <a href="/explore">
                                Explore
                            </a>
                        </Styled.NoteItem>
                        <Styled.NoteItem>
                            <a href="/create">
                                Create
                            </a>
                        </Styled.NoteItem>
                        <Styled.NoteItem>
                            <a href="/profile">
                                Profile
                            </a>
                        </Styled.NoteItem>
                    </Styled.NoteList>
                </Box>
                <Box d='column'>
                    <Styled.NoteList>
                        <Styled.NoteItem>
                            DEVELOPERS
                        </Styled.NoteItem>
                        <Styled.NoteItem>
                            <a target='_blank' href="https://github.com/mix-labs">
                                GitHub
                            </a>
                        </Styled.NoteItem>
                        <Styled.NoteItem>
                            GitBooks
                        </Styled.NoteItem>
                    </Styled.NoteList>
                </Box>
                <Box d='column'>
                    <Styled.NoteList>
                        <Styled.NoteItem>
                            COMMUNITY
                        </Styled.NoteItem>
                        <Styled.NoteItem>
                            <a target='_blank' href="https://discord.gg/7kvD9WWkAj">
                                Discord
                            </a>
                        </Styled.NoteItem>
                        <Styled.NoteItem>
                            <a target='_blank' href="https://twitter.com/imart_io">
                                Twitter
                            </a>
                        </Styled.NoteItem>
                        <Styled.NoteItem>
                            Blog
                        </Styled.NoteItem>
                    </Styled.NoteList>
                </Box>
            </Box>
        </Styled.Wrap>
    )
}
