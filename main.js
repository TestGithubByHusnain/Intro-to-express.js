const express = require('express')
const app = express()
const port = 3000
app.use(express.static('public'))
// app.use is used to use middleware functionns

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/about', (req, res) => {
    res.send('Hello About!')
  })
  app.get('/contact', (req, res) => {
    res.send('Hello Contacts!')
  })
  app.get('/blog', (req, res) => {
    res.send('Hello Blog!')
  })

//   app.get('/blog/inro-to-js', (req, res) => {
//     res.send('HEllo intro-to-js')
//   })

app.get('blog/:slug', (req,res)=>{
    // for URL: http://localhost:3000/blog/intro-to-padosi ?mmode=dark&region=in 
    // req.params output things that is just before ? in url
    console.log(req.params) //will output { slug: 'intro to padosi'}
    // req.query will output things thatg is just after ?
    console.log(req.query) //will output { node: 'dark', region: 'in'}
    res.send(`hello${req.params.slug}}`)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})