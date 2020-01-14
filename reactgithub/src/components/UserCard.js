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
        justify-content: center;
        align-items: center;
        width: 100%;

        .avatar {
            width: 20%;
    
            img {
                width: 100%;
            }
        }
    
        .info {
            width: 75%;
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
                {
                    followers.map((follower) => {
                        return <p>{follower.login}</p>
                    })
                }
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