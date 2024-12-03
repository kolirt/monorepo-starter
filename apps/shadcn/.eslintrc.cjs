/* eslint-env node */
const config = require('@monorepo-starter/eslint')

module.exports = {
  ...config,
  extends: [...config.extends, 'plugin:boundaries/recommended'],
  plugins: ['boundaries'],
  settings: {
    'import/resolver': {
      typescript: {
        project: ['tsconfig.app.json', 'tsconfig.json', 'tsconfig.node.json', 'tsconfig.vitest.json']
      }
    },
    'boundaries/elements': [
      { type: '01-app', pattern: 'src/01-app', mode: 'file' },
      { type: '01-app', pattern: 'src/01-app', mode: 'folder' },

      { type: '02-pages', pattern: 'src/02-pages', mode: 'file' },
      { type: '02-pages', pattern: 'src/02-pages', mode: 'folder' },

      { type: '03-widgets', pattern: 'src/03-widgets', mode: 'file' },
      { type: '03-widgets', pattern: 'src/03-widgets', mode: 'folder' },

      { type: '04-features', pattern: 'src/04-features', mode: 'file' },
      { type: '04-features', pattern: 'src/04-features', mode: 'folder' },

      { type: '05-entities', pattern: 'src/05-entities', mode: 'file' },
      { type: '05-entities', pattern: 'src/05-entities', mode: 'folder' },

      { type: '06-shared', pattern: 'src/06-shared', mode: 'file' },
      { type: '06-shared', pattern: 'src/06-shared', mode: 'folder' }
    ],
    'boundaries/ignore': ['**/*.test.*']
  },
  rules: {
    ...config.rules,
    'no-restricted-imports': [
      'error',
      {
        patterns: [
          {
            message: 'Private imports are prohibited, use public imports instead',
            group: ['@/01-app/**', '../!**!/01-app']
          },
          {
            message: 'Private imports are prohibited, use public imports instead',
            group: ['@/02-pages/!**', '../!**!/02-pages']
          },
          {
            message: 'Private imports are prohibited, use public imports instead',
            group: ['@/03-widgets/!*!/!**', '../!**!/03-widgets']
          },
          {
            message: 'Private imports are prohibited, use public imports instead',
            group: ['@/04-features/!*!/!**', '../!**!/04-features']
          },
          {
            message: 'Private imports are prohibited, use public imports instead',
            group: ['@/05-entities/!*!/!**', '../!**!/05-entities']
          },
          {
            message: 'Private imports are prohibited, use public imports instead',
            group: ['@/06-shared/!**', '../!**/06-shared']
          }
        ]
      }
    ],
    'boundaries/element-types': [
      2,
      {
        default: 'disallow',
        message: 'Modules from "${file.type}" cannot import modules from "${dependency.type}"',
        rules: [
          {
            from: ['01-app', '02-pages', '03-widgets', '04-features', '05-entities', '06-shared'],
            allow: ['02-pages']
          },

          { from: '01-app', allow: ['01-app', '03-widgets', '04-features', '05-entities', '06-shared'] },
          { from: '02-pages', allow: ['03-widgets', '04-features', '05-entities', '06-shared'] },
          { from: '03-widgets', allow: ['03-widgets', '04-features', '05-entities', '06-shared'] },
          { from: '04-features', allow: ['04-features', '05-entities', '06-shared'] },
          { from: '05-entities', allow: ['05-entities', '06-shared'] },
          { from: '06-shared', allow: ['06-shared'] }
        ]
      }
    ]
  }
}
