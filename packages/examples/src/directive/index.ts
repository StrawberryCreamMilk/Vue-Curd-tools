import { install } from 'vxe-table'
import premission from './premission'


export default {
  install(app) {
    app.directive('premission', premission)
  }
}
