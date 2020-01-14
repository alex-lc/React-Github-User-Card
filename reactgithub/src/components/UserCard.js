import React from 'react';
import styled from 'styled-components';

const Card = styled.div`

`;

export default function UserCard(props) {

    const { user } = props;

    return (
        <Card>
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