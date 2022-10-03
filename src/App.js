import React, { useEffect } from 'react'
import alanBtn from '@alan-ai/alan-sdk-web'

const alanKey =
  'e9aa8d57d641bcca2d97eb57884f4f782e956eca572e1d8b807a3e2338fdd0dc/stage'

const App = () => {
  useEffect(() => {
    alanBtn({
      key: alanKey,
      onCommand: ({ command }) => {
        if (command === 'testCommand') {
          alert('This code was executed')
        }
      },
    })
  }, [])
  return <div>hello AI</div>
}

export default App
