/**
 * Created by wanghongxiang on 2018/2/3.
 */
let util = {}
util.title = (title) => {
  title = title ? title + ' - Home' : 'project'
  window.document.title = title
}
export default util
