export default {
  regexp: {
    //密码
    email: /^[A-Za-z0-9\u4e00-\u9fa5_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/,
    password: /^(?:(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])|(?=.*[A-Z])(?=.*[a-z])(?=.*[^A-Za-z0-9])|(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])|(?=.*[a-z])(?=.*[0-9])(?=.*[^A-Za-z0-9])).{6,12}$/,
    mobile: /^\d{6,11}$/,
    htmlKeywordLinked: new RegExp(keyword + '(?!([^<]*>)|([^<]*<\/a>))', 'gm') // 匹配文档中的keyword, 但不包含超链接里面的keyword
  }
}
