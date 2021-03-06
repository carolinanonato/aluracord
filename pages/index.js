import { Box, Button, Text, TextField, Image } from '@skynexui/components';
import { useRouter } from 'next/router';
import React from 'react';
import appConfig from '../config.json'
import background from './img/tokyo.jpg'




function Title (props) {
    const Tag = props.tag || 'h1';
    return (
        <>
    <Tag>{props.children}</Tag>
    <style jsx> {`
    ${Tag} {
        color: ${appConfig.theme.colors.neutrals['000']};
        font-size: 40px;
        font-weight: 600;
        margin-bottom: 20px;

    }
    
    `}
    

    </style>
    </>
    )
}


// function HomePage() {
//     return (
//     <>
//         <GlobalStyle />
//         <Title tag="h2">Welcome back!</Title>
//         <h2>Discord - Carol</h2>
//         </>
//     )
//   }
  
//   export default HomePage


export default function PaginaInicial() {
  // const username = 'carolinanonato';
  const [username, setUsername] = React.useState('carolinanonato')
  const router = useRouter();

  return (
    <>
    
      <Box
        styleSheet={{
          display: 'flex', alignItems: 'center', justifyContent: 'center',        
          backgroundImage: `url(https://images.unsplash.com/photo-1534214526114-0ea4d47b04f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80)`,
          backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundBlendMode: 'multiply',
        }}
      >
        <Box
          styleSheet={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexDirection: {
              xs: 'column',
              sm: 'row',
            },
            width: '100%', maxWidth: '700px',
            borderRadius: '10px', padding: '32px', margin: '16px',
            boxShadow: '0 10px 10px 0 rgb(0 0 0 / 100%)',
            backgroundColor: appConfig.theme.colors.neutrals[600],
          }}
        >
          {/* Formulário */}
          <Box
            as="form"
            onSubmit={function (event) {
              event.preventDefault();
              router.push('/chat')
            }}
            styleSheet={{
              display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
              width: { xs: '100%', sm: '50%' }, textAlign: 'center', marginBottom: '32px',
            }}
          >
            <Title tag="h2">Welcome back!</Title>
            


            {/* <input 
            type="text"
            value={username}
            onChange={function (event) {
               const valor = event.target.value;
              setUsername(valor);
            }}
             /> */}
            <TextField
             type="text"
             value={username}
             onChange={function (event) {
                const valor = event.target.value;
               setUsername(valor);
             }}
              fullWidth
              textFieldColors={{
                neutral: {
                  textColor: appConfig.theme.colors.neutrals[200],
                  mainColor: appConfig.theme.colors.neutrals[900],
                  mainColorHighlight: appConfig.theme.colors.primary[500],
                  backgroundColor: appConfig.theme.colors.neutrals[800],
                },
              }}
            />
            <Button
              type='submit'
              label='Entrar'
              fullWidth
              buttonColors={{
                contrastColor: appConfig.theme.colors.neutrals["000"],
                mainColor: appConfig.theme.colors.primary[500],
                mainColorLight: appConfig.theme.colors.primary[400],
                mainColorStrong: appConfig.theme.colors.primary[600],
                
                
              }}

              styleSheet={{ 
                marginTop: '10px'
              }}
            />
          </Box>
          {/* Formulário */}


          {/* Photo Area */}
          <Box
            styleSheet={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              maxWidth: '200px',
              padding: '16px',
              backgroundColor: appConfig.theme.colors.neutrals[800],
              border: '1px solid',
              borderColor: appConfig.theme.colors.neutrals[999],
              borderRadius: '10px',
              flex: 1,
              minHeight: '240px',
            }}
          >
            <Image
              styleSheet={{
                borderRadius: '50%',
                marginBottom: '16px',
              }}
              src={`https://github.com/${username}.png`}
            />
            <Text
              variant="body4"
              styleSheet={{
                color: appConfig.theme.colors.neutrals[200],
                backgroundColor: appConfig.theme.colors.neutrals[800],
                padding: '3px 10px',
                borderRadius: '1000px'
              }}
            >
              {username}
            </Text>
          </Box>
          {/* Photo Area */}
        </Box>
      </Box>
    </>
  );
}