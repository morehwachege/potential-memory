
const { Deepgram } = require('@deepgram/sdk')
const deepgramApiKey = 'cdb248936f67417eb85e2372c6a26d8637b2561b'

function main() {
  return new Promise((resolve, reject) => {
    ;(async () => {
      try {
        const deepgram = new Deepgram(deepgramApiKey)

        const transcription = await newDeepgram.transcription.preRecorded(
          {
            url: 'https://static.deepgram.com/examples/Bueller-Life-moves-pretty-fast.wav',
          },
          {
            punctuate: true,
          }
        )
        console.dir(transcription, { depth: null })
        resolve()
      } catch (err) {
        console.log(`Err: ${err}`)
        reject(err)
      }
    })()
  })
}

main()