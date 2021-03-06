import { useContext } from 'react'
import { Stapp, StappApi } from 'stapp'
import { StappContext } from 'stapp-react/lib/shared/StappContext'
import { STAPP_REACT_HOOKS } from '../helpers/constants'

export const useApi = <T extends Stapp<any, any>>(): StappApi<T> => {
  const app = useContext(StappContext)

  /* istanbul ignore next */
  if (!app) {
    throw new Error(`${STAPP_REACT_HOOKS} error: Provider missing!`)
  }

  return app.api
}
