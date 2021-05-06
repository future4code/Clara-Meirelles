import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {

  render() {
    return (
      <MainContainer>
        <Post
          nomeUsuario={'paulinha'}
          fotoUsuario={'https://picsum.photos/50/50'}
          fotoPost={'https://picsum.photos/200/150'}
        />

        <Post
          nomeUsuario={'shisha'}
          fotoUsuario={'https://scontent.ffln1-1.fna.fbcdn.net/v/t1.18169-9/10609577_747020095352067_6678213879027806823_n.jpg?_nc_cat=108&ccb=1-3&_nc_sid=ba80b0&_nc_ohc=WDjuE8E8AM0AX-SkDzC&_nc_ht=scontent.ffln1-1.fna&oh=218e054bbd6d313d44ae6b9cae6ec0eb&oe=60B58D35'}
          fotoPost={'https://picsum.photos/200/151'}
        />

        <Post
          nomeUsuario={'ziah'}
          fotoUsuario={'https://scontent.ffln1-1.fna.fbcdn.net/v/t31.18172-8/17807229_10208566203888011_6462387504138983502_o.jpg?_nc_cat=105&ccb=1-3&_nc_sid=a9b1d2&_nc_ohc=yc6ztRQrXzgAX_xbbpK&_nc_ht=scontent.ffln1-1.fna&oh=93ff549e4212d7d8b11199f50fe25068&oe=60B7DCC3'}
          fotoPost={'https://picsum.photos/200/152'}
        />
      </MainContainer>
    );
  }
}

export default App;
