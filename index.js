module.exports = ({ types: t }) => {
  return {
    visitor: {
      MemberExpression(path, { opts: { objectAssign } }) {
        if (objectAssign && path.node.object.name === 'Object' && path.node.property.name === 'assign') {
          path.replaceWith(t.identifier(objectAssign))
        }
      }
    }
  }
}
