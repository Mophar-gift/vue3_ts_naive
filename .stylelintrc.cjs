module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-prettier',
    'stylelint-config-standard-scss',
    'stylelint-config-recommended-vue/scss', // style中scss样式格式化
    'stylelint-config-recess-order', // css属性书写顺序
    'stylelint-config-html/vue' // template样式优化
  ],
  overrides: [
    {
      files: ['**/*.(html|vue)'],
      customSyntax: 'postcss-html'
    },
    {
      files: ['**/*.(scss|css|vue|html)'],
      customSyntax: 'postcss-scss'
    }
  ],
  rules: {
    'value-keyword-case': null, // style里使用 v-bind 不报错
    'no-descending-specificity': null, // 允许低优先级的选择器出现在高优先级的选择器之后
    'selector-class-pattern': null, // 样式类名不校验
    'no-empty-source': null, // 允许空 source
    'no-invalid-position-at-import-rule': null, // 允许 @import
    'at-rule-no-unknown': null, // 允许未知的 at-rule
    'declaration-block-no-redundant-longhand-properties': null, // 允许简写属性
    'property-no-unknown': null, // 允许未知属性
    'property-no-vendor-prefix': null, // 关闭 属性前缀 --webkit-mask
    'value-no-vendor-prefix': null, // 关闭 属性值前缀 --webkit-box
    'block-opening-brace-space-before': 'always', // \大括号之前必须有一个空格
    'function-url-quotes': 'always', // url 必须带引号
    'selector-pseudo-class-no-unknown': [
      // 不允许未知的伪类选择器
      true,
      {
        ignorePseudoClasses: ['global', 'deep'] // 忽略属性
      }
    ]
  }
}
