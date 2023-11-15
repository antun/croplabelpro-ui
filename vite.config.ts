import react from '@vitejs/plugin-react'
import vike from 'vike/plugin'

export default ({command})  => {
  if (command === 'serve') {
    return {
      plugins: [react(), vike({prerender: true})]
    }
  } else {
    // Build
    return {
      plugins: [react(), vike({prerender: true})],
      base: '/~antun/genlab-hackathon',
      build: {
        outDir: 'dist',
        sourcemap: true,
      },
      ssr: {
        noExternal: [
          /*
          '@reduxjs/toolkit',
          '@mui/material',
          '@mui/system',
          '@mui/lab',
          '@mui/base',
          '@mui/styled-engine',
          '@mui/material/styles',
          */
        ]
      }
    }
  }
}

