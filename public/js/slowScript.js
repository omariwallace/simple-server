(function slowScript() {
  const iterations = 10000
  console.log('starting slow script')
  console.log('iteration count: ', iterations)
  for (var i = 0; i < iterations; i++) {
    var j
  }
  console.log('ending slow script')

  document.write('<h1>test</h1>')
}())