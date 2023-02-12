import Head from 'next/head'
import { Inter } from '@next/font/google'

import { useState } from 'react'
import { Main, OpenButton, Texts, TextsContainer } from '@/styles/Home.style'
import { BoardingPass } from '@/components/BoardingPass'
import { ButtonBack } from '@/components/ButtonBack'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [open, setOpen] = useState(false)

  const handleOpen = (value: boolean) => () => {
    setOpen(value)
  }

  return (
    <div className={`${inter.className} page`}>
      <Head>
        <title>Boarding Pass Challenge 06 #BoraCoda</title>
        <meta
          name="description"
          content="Boarding Pass Challenge 06 #BoraCoda"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main>
        {/* <CalculatorProvider> */}
        {open ? (
          <>
            <ButtonBack onClose={handleOpen} />
            <BoardingPass />
          </>
        ) : null}
        {!open && (
          <TextsContainer>
            <Texts>
              <h1>
                <strong>Challenge #06</strong> - Boarding Pass
              </h1>
            </Texts>
            <OpenButton onClick={handleOpen(true)}>
              Open Boarding Pass
            </OpenButton>
            <footer>
              <p>
                &copy; 2023{' '}
                <a href="https://github.com/tuliooov"> Tuliooov #BoraCodar</a>
                <br></br>
                Challenge 06 - Run until you fly!
              </p>
            </footer>
          </TextsContainer>
        )}
        {/* </CalculatorProvider> */}
      </Main>
    </div>
  )
}
