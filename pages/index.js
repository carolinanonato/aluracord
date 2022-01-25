import appConfig from '../config.json'


function GlobalStyle() {
    return (
      <style global jsx>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          list-style: none;
        }
        body {
          font-family: 'Open Sans', sans-serif;
        }
        /* App fit Height */ 
        html, body, #__next {
          min-height: 100vh;
          display: flex;
          flex: 1;
        }
        #__next {
          flex: 1;
        }
        #__next > * {
          flex: 1;
        }
        /* ./App fit Height */ 
      `}</style>
    );
  }
  


function Title (props) {
    const Tag = props.tag;
    return (
        <>
    <Tag>{props.children}</Tag>
    <style jsx> {`
    ${Tag} {
        color: ${appConfig.theme.colors.neutrals['800']};
        font-size: 50px;
        font-weight: 600;

    }
    
    `}
    

    </style>
    </>
    )
}


function HomePage() {
    return (
    <>
        <GlobalStyle />
        <Title tag="h2">Welcome back!</Title>
        <h2>Discord - Carol</h2>
        </>
    )
  }
  
  export default HomePage