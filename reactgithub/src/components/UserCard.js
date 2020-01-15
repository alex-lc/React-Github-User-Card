import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;

    .user-info {
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        width: 70%;
        background: #4d4d4d;
        border-radius: 0.5rem;
        box-shadow: 0 1px 2px 0 #242424;
        padding: 2rem;

        .avatar {
            width: 35%;
            display: flex;
            justify-content: center;
    
            img {
                width: 80%;
            }
        }
    
        .info {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: flex-start;
            width: 60%;

            p {
                margin: 1rem 0;
                font-size: 1.3rem;
                color: #ccc;
                padding-bottom: 1rem;
                border-bottom: 1.5px dotted #333333;

                &:last-child {
                    border-bottom: none;
                }
            }

            a {
                color: #ccc;
                transition: all 500ms;
                text-decoration: none;

                &:hover {
                    transition: color 500ms;
                    color: #fafafa;
                }
            }
        }
    }

    .followers {
        width: 70%;
        background: #4d4d4d;
        border-radius: 0.5rem;
        box-shadow: 0 1px 2px 0 #242424;
        margin-top: 2rem;
        padding: 2rem;
        color: #ccc;
        font-size: 1.3rem;

        h3 {
            font-size: 2.2rem;
            font-weight: 300;
            margin: 1rem 0 2.5rem 5%;
        }

        .follower {
            display: flex;
            justify-content: space-evenly;
            align-items: center;
            width: 100%;
            margin: 2rem 0;

            .follower-avatar {
                width: 25%;
                display: flex;
                justify-content: center;
                align-items: center;

                img {
                    width: 80%;
                }
            }

            .follower-info {
                width: 60%;

                a {
                    color: #ccc;
                    transition: all 500ms;
                    text-decoration: none;

                    &:hover {
                        transition: color 500ms;
                        color: #fafafa;
                    }
                }

                p {
                    margin: 1rem 0;
                    font-size: 1.3rem;
                    color: #ccc;
                    padding-bottom: 1rem;
                    border-bottom: 1.5px dotted #333333;
    
                    &:first-child{
                        font-size: 2rem;
                        font-weight: 300;
                    }

                    &:last-child {
                        border-bottom: none;
                    }
                }
            }
        }
    }
`;

export default function UserCard(props) {

    const { user, followers } = props;

    return (
        <Card>
            <div className="user-info">
                <div className="avatar">
                    <img src={user.avatar_url} alt="User Avatar" />
                </div>
                <div className="info">
                    <p>Name: {user.name}</p>
                    <p>Username: <a href={user.html_url}>{user.login}</a></p>
                    <p>Company: {user.company}</p>
                    <p>Website: <a href={user.blog}>{user.blog}</a></p>
                    <p>Location: {user.location}</p>
                    <p>Followers: {user.followers}</p>
                    <p>Following: {user.following}</p>
                    <p>Bio: {user.bio}</p>
                </div>
            </div>

            <div className="followers">
                <h3>{user.name}'s Followers:</h3>
                {
                    followers.map((follower, index) => {
                        return (
                            <div className="follower" key={index}>
                                <div className="follower-avatar">
                                    <img src={follower.avatar_url} alt="User Avatar" />
                                </div>

                                <div className="follower-info">
                                    <p>{follower.login}</p>
                                    <p><a href={follower.html_url}>{follower.html_url}</a></p>
                                </div>
                            </div>
                        )
                    })
                }
                {/* <p>follower</p>
                <p>follower</p>
                <p>follower</p>
                <p>follower</p>
                <p>follower</p>
                <p>follower</p>
                <p>follower</p>
                <p>follower</p>
                <p>follower</p>
                <p>follower</p>
                <p>follower</p>
                <p>follower</p>
                <p>follower</p>
                <p>follower</p> */}
            </div>
        </Card>
    )
}

// data.login => username
// data.avatar_url => avatar img
// data.html_url => profile url
// data.name => name
// data.company => company
// data.blog => website
// data.location => location
// data.bio => bio
// data.followers => # of followers
// data.following => # following