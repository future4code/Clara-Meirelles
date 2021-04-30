import React from 'react';
import CardGrande from './components/CardGrande/CardGrande';
import CardPequeno from './components/CardPequeno/CardPequeno';
import ImagemButton from './components/ImagemButton/ImagemButton';
import styled from 'styled-components'
import {createGlobalStyle} from 'styled-components'

const GlobalStyle = createGlobalStyle`
    *{
      padding: 0;
      margin: 0;
      box-sizing: border-box;
    }`

  const ContainerApp = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 30px;
  `

  const SectionPagina = styled.section`
    width: 40vw;
    margin: 10px 0;
  `

  const Titulos = styled.h2`
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
  `

function App() {

  return (
    <ContainerApp>
      <GlobalStyle/>
      <SectionPagina>
        <Titulos>Dados pessoais</Titulos>
        <CardGrande 
          imagem="https://scontent.ffln1-1.fna.fbcdn.net/v/t1.18169-9/11219615_882774275109981_272160226060099974_n.jpg?_nc_cat=101&ccb=1-3&_nc_sid=174925&_nc_ohc=2pS7JkQSyS4AX-BbgwE&_nc_ht=scontent.ffln1-1.fna&oh=0c0df8f76bec8b7beaf442d02d72ec88&oe=60AEE3CD" 
          nome="Clara Meirelles" 
          descricao="Estudante da Labenu, apaixonada por artes, cinema, teatro e café. Em um relacionamento sério com a programação"
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </SectionPagina>

      <SectionPagina>
      <CardPequeno 
          imagem="https://w7.pngwing.com/pngs/298/243/png-transparent-email-address-computer-icons-mail-miscellaneous-angle-triangle.png" 
          nome="E-mail:" 
          descricao="emailmuitoserio@aol.com" 
        />
      </SectionPagina>
      <SectionPagina>
      <CardPequeno 
          imagem="https://w7.pngwing.com/pngs/93/379/png-transparent-black-circle-illustration-computer-icons-information-adress-miscellaneous-area-symbol.png" 
          nome="Endereço:" 
          descricao="Rua dos Devs, nº0" 
        />
      </SectionPagina>


      <SectionPagina>
        <Titulos>Experiências profissionais</Titulos>
        <CardGrande 
          imagem="https://scontent.ffln1-1.fna.fbcdn.net/v/t1.6435-9/33158301_404432790024432_383358747797356544_n.jpg?_nc_cat=100&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=Ulw-hoHfK7sAX8BRnXs&_nc_ht=scontent.ffln1-1.fna&oh=e49f44eb6533cfee61f086093fd74b58&oe=60AE5370" 
          nome="Madalena Bar" 
          descricao="Bartender, embebedando desenvolvedores e demais profissionais e estudantes!" 
        />
        
        <CardGrande 
          imagem="https://scontent.ffln1-1.fna.fbcdn.net/v/t1.18169-9/12813994_171513033230893_1505349291123895846_n.jpg?_nc_cat=109&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=-6rya97KRDgAX9RfBii&_nc_ht=scontent.ffln1-1.fna&oh=7514a0c8a744aa9e52af4db13c4292d5&oe=60B0E189" 
          nome="BITS Pub" 
          descricao="Bartender, embebedando nerds." 
        />
      </SectionPagina>

      <SectionPagina>
        <Titulos>Minhas redes sociais</Titulos>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </SectionPagina>
    </ContainerApp>
  );
}

export default App;
