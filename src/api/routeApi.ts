import axios from "axios"
import { GetLinePositionActionType } from "../actions/mapActions"

export const routeApi = {
  async getRoute({ payload }: GetLinePositionActionType) {
    return await axios.get(`http://router.project-osrm.org/route/v1/driving/${payload.from};${payload.to}?steps=false&geometries=geojson&overview=full`)
      .then(data => data.data)
  }
}

