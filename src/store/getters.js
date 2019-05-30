const getters = {
  sidebar: state => state.app.sidebar, // boolean， 用来判断左侧收放
  device: state => state.app.device, // string, 设备信息(用来区分mobile和pc)
  token: state => state.user.token,
  avatar: state => state.user.avatar, // url, 各种地址（e.g.:gif图url）
  name: state => state.user.name, // string, 用户name
  roles: state => state.user.roles, // arr, 用户角色("roles": ["admin"],)
  permission_routers: state => state.permission.routers,
  addRouters: state => state.permission.addRouters
}
export default getters
