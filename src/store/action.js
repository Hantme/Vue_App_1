// 通过mutation间接更新对象
import {
  RECEIVE_ADDRESS,
  RECEIVE_CATEGORYS,
  RECEIVE_SHOPS
} from './mutation-types'

import {
  reqAddress,
  reqFoodCategorys,
  reqShops
} from '../api'

export default {
  async getAddress ({commit, state}) {
    // Send ajax request
    const geohash = state.latitude + ',' + state.longitude
    const result = await reqAddress(geohash)
    if (result.code === 0) {
      const address = result.data
      commit(RECEIVE_ADDRESS, {address})
    }
    // Commit a mutation
  },
  async getCategorys ({commit}) {
    // Send ajax reques
    const result = await reqFoodCategorys()
    if (result.code === 0) {
      const categorys = result.data
      commit(RECEIVE_CATEGORYS, {categorys})
    }
    // Commit a mutation
  },
  async getShops ({commit, state}) {
    // Send ajax request
    const {longtitude, latitude} = state
    const result = await reqShops(longtitude, latitude)
    if (result.code === 0) {
      const shops = result.data
      commit(RECEIVE_SHOPS, {shops})
    }
    // Commit a mutation
  }
}
