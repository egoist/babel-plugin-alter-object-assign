import { transform } from 'babel-core'
import plugin from '..'

test('main', () => {
  const { code } = transform(`Object.assign({})`, {
    babelrc: false,
    plugins: [
      [plugin, { objectAssign: 'assign' }]
    ]
  })
  expect(code).toMatchSnapshot()
})
