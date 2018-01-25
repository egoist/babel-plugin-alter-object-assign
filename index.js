module.exports = ({ types: t }) => {
  const parseIdentifier = id => id
    .split('.')
    .map(name => t.identifier(name))
    .reduce((object, property) => t.memberExpression(object, property))

  return {
    visitor: {
      MemberExpression(path, { opts: { objectAssign } }) {
        if (objectAssign && path.node.object.name === 'Object' && path.node.property.name === 'assign') {
          path.replaceWith(parseIdentifier(objectAssign))
        }
      }
    }
  }
}
